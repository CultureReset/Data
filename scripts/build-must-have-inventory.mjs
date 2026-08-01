#!/usr/bin/env node
import fs from 'node:fs';

const URL = process.env.SUPABASE_URL || 'https://mkepugvdlktfsossumox.supabase.co';
const KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;
if (!KEY) throw new Error('Set SUPABASE_SERVICE_KEY or SUPABASE_ANON_KEY');

const headers = { apikey: KEY, Authorization: `Bearer ${KEY}` };
const PAGE = 1000;

async function fetchAll() {
  const rows = [];
  const select = [
    'id','slug','name','is_active','featured','show_in_listings','entity_type','entity_subtype','industry_code',
    'description','phone','email','website_url','menu_url','reservation_url','order_url','booking_url','directions_url',
    'social_instagram','social_facebook','social_tiktok','address_line_1','address_line_2','city','state','zip',
    'latitude','longitude','rating','review_count','price_range','hero_image_url','logo_url','google_place_id',
    'google_maps_uri','business_status','primary_type','parent_entity_slug','is_parent','depth','source_url','updated_at'
  ].join(',');
  for (let from = 0; ; from += PAGE) {
    const to = from + PAGE - 1;
    const endpoint = `${URL}/rest/v1/entity?select=${encodeURIComponent(select)}&order=slug.asc`;
    const response = await fetch(endpoint, { headers: { ...headers, Range: `${from}-${to}`, Prefer: 'count=exact' } });
    if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
    const batch = await response.json();
    rows.push(...batch);
    if (batch.length < PAGE) break;
  }
  return rows;
}

const coreCities = new Set(['orange beach','gulf shores','fort morgan','bon secour','perdido key','perdido beach','perdido']);
const nearbyCities = new Set(['foley','elberta','lillian','summerdale','robertsdale','magnolia springs']);
const regionalDestinationCities = new Set(['pensacola beach','gulf breeze','pensacola','fairhope','dauphin island','daphne','spanish fort','mobile']);
const tourismIndustries = new Set([
  'food_beverage','cafe_dessert','bar_nightlife','charter_fishing','tour_operator','cruise_tour','rental','watersport',
  'outdoor_recreation','attraction','marina','hotel','condo','vacation_rental','event_venue','entertainment_venue',
  'golf','retail','transportation','artist','performing_arts','photography','parking','civic','fitness_sports'
]);
const highIntentIndustries = new Set([
  'food_beverage','cafe_dessert','bar_nightlife','charter_fishing','tour_operator','cruise_tour','rental','watersport',
  'outdoor_recreation','attraction','marina','hotel','condo','vacation_rental','event_venue','entertainment_venue','golf'
]);

function clean(v) { return v == null ? '' : String(v).trim(); }
function cityKey(row) { return clean(row.city).toLowerCase(); }
function geography(row) {
  const city = cityKey(row);
  if (coreCities.has(city)) return 'Core Coast';
  if (nearbyCities.has(city)) return 'Nearby Baldwin';
  if (regionalDestinationCities.has(city)) return 'Regional Destination';
  return 'Expansion';
}
function priority(row) {
  const geo = geography(row);
  const industry = clean(row.industry_code);
  if (geo === 'Core Coast' && tourismIndustries.has(industry)) return 'P0 - Core Must Have';
  if (geo === 'Core Coast') return 'P1 - Core Complete Coverage';
  if (geo === 'Nearby Baldwin' && tourismIndustries.has(industry)) return 'P1 - Nearby Must Have';
  if (geo === 'Nearby Baldwin') return 'P2 - Nearby Complete Coverage';
  if (geo === 'Regional Destination' && tourismIndustries.has(industry)) return 'P2 - Regional Tourism';
  if (geo === 'Regional Destination') return 'P3 - Regional Supporting';
  if (highIntentIndustries.has(industry) && Number(row.review_count || 0) >= 25) return 'P3 - Expansion High Intent';
  return 'P4 - Expansion Backfill';
}
function score(row) {
  let s = 0;
  const geo = geography(row);
  const industry = clean(row.industry_code);
  s += geo === 'Core Coast' ? 50 : geo === 'Nearby Baldwin' ? 35 : geo === 'Regional Destination' ? 20 : 0;
  s += highIntentIndustries.has(industry) ? 25 : tourismIndustries.has(industry) ? 15 : 5;
  if (row.featured) s += 10;
  if (row.is_parent) s += 8;
  if (clean(row.booking_url) || clean(row.reservation_url) || clean(row.order_url)) s += 8;
  if (clean(row.menu_url)) s += 5;
  const reviews = Number(row.review_count || 0);
  s += Math.min(20, Math.floor(Math.log10(reviews + 1) * 7));
  const rating = Number(row.rating || 0);
  if (rating >= 4.5) s += 5; else if (rating >= 4) s += 3;
  return s;
}
function reason(row) {
  const parts = [geography(row), clean(row.industry_code) || clean(row.entity_type) || 'uncategorized'];
  if (Number(row.review_count || 0) >= 100) parts.push('high review volume');
  if (clean(row.booking_url) || clean(row.reservation_url) || clean(row.order_url)) parts.push('conversion link available');
  if (row.is_parent) parts.push('parent/hub business');
  return parts.join('; ');
}
function esc(v) { return `"${clean(v).replaceAll('"','""')}"`; }

const rows = (await fetchAll()).filter(r => r.is_active !== false && r.show_in_listings !== false);
const websiteRows = rows.filter(r => clean(r.website_url));
const localMissingWebsite = rows.filter(r => !clean(r.website_url) && geography(r) !== 'Expansion');

const columns = [
  'priority','priority_score','geography_tier','name','slug','city','state','industry_code','entity_type','entity_subtype',
  'website_url','menu_url','booking_url','reservation_url','order_url','phone','email','address','rating','review_count',
  'featured','is_parent','parent_entity_slug','google_maps_uri','google_place_id','hero_image_url','social_facebook',
  'social_instagram','social_tiktok','business_status','must_have_reason','updated_at'
];
function outputRow(r) {
  return {
    priority: priority(r), priority_score: score(r), geography_tier: geography(r), name: r.name, slug: r.slug,
    city: r.city, state: r.state, industry_code: r.industry_code, entity_type: r.entity_type, entity_subtype: r.entity_subtype,
    website_url: r.website_url, menu_url: r.menu_url, booking_url: r.booking_url, reservation_url: r.reservation_url,
    order_url: r.order_url, phone: r.phone, email: r.email,
    address: [r.address_line_1,r.address_line_2,r.city,r.state,r.zip].filter(Boolean).join(', '),
    rating: r.rating, review_count: r.review_count, featured: r.featured, is_parent: r.is_parent,
    parent_entity_slug: r.parent_entity_slug, google_maps_uri: r.google_maps_uri, google_place_id: r.google_place_id,
    hero_image_url: r.hero_image_url, social_facebook: r.social_facebook, social_instagram: r.social_instagram,
    social_tiktok: r.social_tiktok, business_status: r.business_status, must_have_reason: reason(r), updated_at: r.updated_at
  };
}
const sorted = websiteRows.map(outputRow).sort((a,b) => b.priority_score-a.priority_score || clean(a.city).localeCompare(clean(b.city)) || clean(a.name).localeCompare(clean(b.name)));
const missing = localMissingWebsite.map(outputRow).sort((a,b) => b.priority_score-a.priority_score || clean(a.city).localeCompare(clean(b.city)) || clean(a.name).localeCompare(clean(b.name)));

function writeCsv(path, data) {
  fs.writeFileSync(path, columns.map(esc).join(',') + '\n' + data.map(r => columns.map(c => esc(r[c])).join(',')).join('\n'));
}
writeCsv('MUST-HAVE-BUSINESS-SCRAPE-LIST.csv', sorted);
writeCsv('MISSING-WEBSITE-RESEARCH-LIST.csv', missing);
fs.writeFileSync('MUST-HAVE-BUSINESS-SCRAPE-LIST.json', JSON.stringify(sorted, null, 2));

const countBy = (data, key) => Object.entries(data.reduce((m,r) => (m[clean(r[key]) || '(blank)']=(m[clean(r[key]) || '(blank)']||0)+1,m),{})).sort((a,b)=>b[1]-a[1]);
const lines = [
  '# Gulf Coast Radar Must-Have Business Scrape Inventory','',
  `Generated: ${new Date().toISOString()}`,'',
  `- Active listing records reviewed: **${rows.length.toLocaleString()}**`,
  `- Businesses with websites in master scrape list: **${sorted.length.toLocaleString()}**`,
  `- Local/regional businesses missing websites: **${missing.length.toLocaleString()}**`,'',
  '## Priority counts','', '| Priority | Businesses |','|---|---:|',
  ...countBy(sorted,'priority').map(([k,v])=>`| ${k} | ${v.toLocaleString()} |`),'',
  '## Geography counts','', '| Geography | Businesses |','|---|---:|',
  ...countBy(sorted,'geography_tier').map(([k,v])=>`| ${k} | ${v.toLocaleString()} |`),'',
  '## Industry counts','', '| Industry | Businesses |','|---|---:|',
  ...countBy(sorted,'industry_code').map(([k,v])=>`| ${k} | ${v.toLocaleString()} |`),'',
  '## Coverage rule','',
  '- P0: tourism-facing businesses in Orange Beach, Gulf Shores, Fort Morgan, Bon Secour, Perdido Key/Beach.',
  '- P1: complete core-market coverage plus tourism-facing businesses in Foley, Elberta, Lillian, Summerdale, Robertsdale, and Magnolia Springs.',
  '- P2: regional tourism coverage for Pensacola/Pensacola Beach, Gulf Breeze, Fairhope, Dauphin Island, Daphne, Spanish Fort, and Mobile.',
  '- P3/P4: expansion businesses retained so the master list includes every current website-bearing listing.'
];
fs.writeFileSync('MUST-HAVE-BUSINESS-SCRAPE-SUMMARY.md', lines.join('\n'));
console.log(JSON.stringify({reviewed:rows.length,websiteBusinesses:sorted.length,missingWebsiteLocal:missing.length},null,2));
