#!/usr/bin/env node
// ============================================================================
// GCR / CyberCheck - FULL DATABASE EXPORT, ONE FILE PER SLUG
// ============================================================================
// For every business slug, writes a file containing EVERY table attached to it,
// EVERY column, EVERY value, and EVERY JSON blob expanded in full.
//
// READ-ONLY. GET requests only. Nothing is written to the database.
//
// Credentials: SUPABASE_URL + SUPABASE_SERVICE_KEY env vars.
// Node 18+ (built-in fetch). No dependencies.
// ============================================================================

const fs = require('fs');
const path = require('path');

const URL_ = process.env.SUPABASE_URL || 'https://mkepugvdlktfsossumox.supabase.co';
const KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

if (!KEY) {
  console.error('ERROR: SUPABASE_SERVICE_KEY is not set.');
  process.exit(1);
}

const SLUGDIR = 'data-by-slug';
fs.mkdirSync(SLUGDIR, { recursive: true });

const H = { apikey: KEY, Authorization: 'Bearer ' + KEY };

async function getJSON(url) {
  const r = await fetch(url, { headers: H });
  if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
  return r.json();
}

async function fetchAll(table) {
  const rows = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const r = await fetch(URL_ + '/rest/v1/' + encodeURIComponent(table) + '?select=*', {
      headers: Object.assign({}, H, { Range: from + '-' + (from + PAGE - 1) }),
    });
    if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 150));
    const batch = await r.json();
    if (!Array.isArray(batch)) throw new Error('unexpected response');
    rows.push.apply(rows, batch);
    if (batch.length < PAGE) break;
  }
  return rows;
}

(async () => {
  console.log('Discovering tables...');
  const spec = await getJSON(URL_ + '/rest/v1/');
  const defs = spec.definitions || (spec.components && spec.components.schemas) || {};
  const allTables = Object.keys(defs);
  console.log('  ' + allTables.length + ' tables exposed');

  const slugCol = {};
  for (const t of allTables) {
    const props = Object.keys((defs[t] && defs[t].properties) || {});
    if (props.indexOf('entity_slug') !== -1) slugCol[t] = 'entity_slug';
    else if (t === 'entity' && props.indexOf('slug') !== -1) slugCol[t] = 'slug';
  }
  const tables = Object.keys(slugCol).sort();
  console.log('  ' + tables.length + ' tables carry a slug\n');

  const bySlug = new Map();
  const tableStats = [];
  const failed = [];

  for (const t of tables) {
    process.stdout.write('  ' + t + ' ... ');
    let rows;
    try {
      rows = await fetchAll(t);
    } catch (e) {
      console.log('FAILED (' + String(e.message).slice(0, 70) + ')');
      failed.push(t + '\t' + String(e.message).slice(0, 200));
      continue;
    }
    const col = slugCol[t];
    let attached = 0;
    const seen = new Set();
    for (const row of rows) {
      const s = row[col];
      if (!s) continue;
      attached++; seen.add(s);
      if (!bySlug.has(s)) bySlug.set(s, {});
      const b = bySlug.get(s);
      if (!b[t]) b[t] = [];
      b[t].push(row);
    }
    tableStats.push({ table: t, rows: rows.length, attached: attached, slugs: seen.size });
    console.log(rows.length + ' rows (' + attached + ' slug-attached)');
  }

  console.log('\nWriting ' + bySlug.size + ' business files...');
  const BAR = new Array(101).join('=');
  const HASH = new Array(101).join('#');
  const index = [];

  const entries = Array.from(bySlug.entries()).sort(function (a, b) { return a[0] < b[0] ? -1 : 1; });

  for (const pair of entries) {
    const slug = pair[0], tblMap = pair[1];
    const names = Object.keys(tblMap).sort();
    const ent = (tblMap['entity'] && tblMap['entity'][0]) || {};
    let totalRows = 0;
    for (const n of names) totalRows += tblMap[n].length;

    const out = [];
    out.push(BAR);
    out.push('SLUG: ' + slug);
    if (ent.name) out.push('NAME: ' + ent.name);
    if (ent.industry_code) out.push('INDUSTRY: ' + ent.industry_code);
    if (ent.entity_subtype) out.push('SUBTYPE: ' + ent.entity_subtype);
    if (ent.parent_entity_slug) out.push('PARENT: ' + ent.parent_entity_slug);
    if (ent.address) out.push('ADDRESS: ' + ent.address);
    out.push('TABLES WITH DATA: ' + names.length);
    out.push('TOTAL ROWS: ' + totalRows);
    out.push(BAR);
    out.push('');
    out.push('TABLE INDEX:');
    for (const n of names) out.push('  ' + n + '  (' + tblMap[n].length + ' rows)');
    out.push('');

    for (const n of names) {
      const rows = tblMap[n];
      out.push('');
      out.push(HASH);
      out.push('# TABLE: ' + n + '   -   ' + rows.length + ' row(s)');
      out.push(HASH);
      for (let i = 0; i < rows.length; i++) {
        out.push('');
        out.push('--- ' + n + ' [row ' + (i + 1) + ' of ' + rows.length + '] ---');
        const row = rows[i];
        for (const k of Object.keys(row)) {
          const v = row[k];
          if (v === null || v === undefined || v === '') continue;
          const val = (typeof v === 'object') ? JSON.stringify(v, null, 2) : String(v);
          out.push(k + ': ' + val);
        }
      }
    }

    const safe = String(slug).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 180);
    fs.writeFileSync(path.join(SLUGDIR, safe + '.txt'), out.join('\n'));
    index.push({
      slug: slug, name: ent.name || '', industry: ent.industry_code || '',
      subtype: ent.entity_subtype || '', parent: ent.parent_entity_slug || '',
      tables: names.length, rows: totalRows, table_list: names.join(' '),
    });
  }

  const esc = function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; };

  fs.writeFileSync('INDEX-all-businesses.csv',
    'slug,name,industry,subtype,parent,table_count,row_count,tables\n' +
    index.sort(function (a, b) { return b.rows - a.rows; }).map(function (r) {
      return [r.slug, r.name, r.industry, r.subtype, r.parent, r.tables, r.rows, r.table_list].map(esc).join(',');
    }).join('\n'));

  fs.writeFileSync('table-stats.csv',
    'table,total_rows,slug_attached_rows,distinct_slugs\n' +
    tableStats.sort(function (a, b) { return b.rows - a.rows; }).map(function (t) {
      return t.table + ',' + t.rows + ',' + t.attached + ',' + t.slugs;
    }).join('\n'));

  fs.writeFileSync('FAILED-tables.txt', failed.length
    ? 'Tables that could not be read:\n\n' + failed.join('\n')
    : '');

  console.log('\nDONE');
  console.log('  businesses written : ' + bySlug.size);
  console.log('  tables scanned     : ' + tables.length);
  console.log('  tables failed      : ' + failed.length);
  console.log('  total rows pulled  : ' + tableStats.reduce(function (a, t) { return a + t.rows; }, 0));
})();
