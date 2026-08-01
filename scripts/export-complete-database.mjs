import fs from 'node:fs/promises';
import path from 'node:path';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const OUT = path.resolve('complete-export');
const PAGE_SIZE = 1000;

if (!SUPABASE_URL || !SERVICE_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY are required. Store the service key only in GitHub Actions secrets.');
}

const headers = {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
  Accept: 'application/json',
};

const safeName = (value) => String(value).replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 180);
const csvCell = (value) => {
  const text = value == null ? '' : String(value);
  return `"${text.replaceAll('"', '""')}"`;
};

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fetchJson(url, extraHeaders = {}) {
  const response = await fetch(url, { headers: { ...headers, ...extraHeaders } });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body.slice(0, 1000)}`);
  }
  return response.json();
}

async function fetchAllRows(table) {
  const rows = [];
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const encoded = encodeURIComponent(table);
    const url = `${SUPABASE_URL}/rest/v1/${encoded}?select=*&limit=${PAGE_SIZE}&offset=${offset}`;
    const page = await fetchJson(url);
    rows.push(...page);
    if (page.length < PAGE_SIZE) break;
  }
  return rows;
}

function discoverTables(openapi) {
  const schemas = openapi?.components?.schemas ?? openapi?.definitions ?? {};
  return Object.entries(schemas)
    .filter(([, schema]) => schema && schema.type === 'object' && schema.properties)
    .map(([name]) => name)
    .filter((name) => !name.startsWith('_'))
    .sort();
}

function recordSlug(record, entityIdToSlug) {
  const direct = record.entity_slug ?? record.business_slug ?? record.owner_slug ?? record.slug;
  if (typeof direct === 'string' && direct.trim()) return direct.trim();
  const entityId = record.entity_id ?? record.business_entity_id ?? record.owner_entity_id;
  if (entityId != null && entityIdToSlug.has(String(entityId))) return entityIdToSlug.get(String(entityId));
  return null;
}

await fs.rm(OUT, { recursive: true, force: true });
await ensureDir(path.join(OUT, 'tables'));
await ensureDir(path.join(OUT, 'data-by-slug'));
await ensureDir(path.join(OUT, 'schema'));

console.log('Fetching PostgREST OpenAPI schema...');
const openapi = await fetchJson(`${SUPABASE_URL}/rest/v1/`, { Accept: 'application/openapi+json' });
await fs.writeFile(path.join(OUT, 'schema', 'postgrest-openapi.json'), JSON.stringify(openapi, null, 2));

const tables = discoverTables(openapi);
console.log(`Discovered ${tables.length} exposed tables.`);

const allData = new Map();
const failures = [];
const tableStats = [];

for (const [index, table] of tables.entries()) {
  try {
    console.log(`[${index + 1}/${tables.length}] Exporting ${table}`);
    const rows = await fetchAllRows(table);
    allData.set(table, rows);
    await fs.writeFile(path.join(OUT, 'tables', `${safeName(table)}.json`), JSON.stringify(rows, null, 2));
    tableStats.push({ table, rows: rows.length });
  } catch (error) {
    failures.push(`${table}\t${error.message}`);
    tableStats.push({ table, rows: '', error: error.message });
  }
}

const entityRows = allData.get('entity') ?? [];
const entityIdToSlug = new Map();
const knownSlugs = new Set();
for (const entity of entityRows) {
  if (entity.slug) {
    knownSlugs.add(String(entity.slug));
    if (entity.id != null) entityIdToSlug.set(String(entity.id), String(entity.slug));
  }
}

const bySlug = new Map();
for (const slug of knownSlugs) bySlug.set(slug, {});
const unassigned = {};

for (const [table, rows] of allData.entries()) {
  for (const row of rows) {
    const slug = recordSlug(row, entityIdToSlug);
    if (slug) {
      if (!bySlug.has(slug)) bySlug.set(slug, {});
      const bucket = bySlug.get(slug);
      (bucket[table] ??= []).push(row);
    } else {
      (unassigned[table] ??= []).push(row);
    }
  }
}

const indexRows = [];
for (const [slug, data] of [...bySlug.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  const entity = (data.entity ?? []).find((row) => row.slug === slug) ?? null;
  const tableNames = Object.keys(data).sort();
  const totalRows = Object.values(data).reduce((sum, rows) => sum + rows.length, 0);
  const payload = {
    slug,
    entity,
    table_count: tableNames.length,
    total_attached_rows: totalRows,
    tables: data,
  };
  await fs.writeFile(path.join(OUT, 'data-by-slug', `${safeName(slug)}.json`), JSON.stringify(payload, null, 2));
  indexRows.push({
    slug,
    entity_id: entity?.id ?? '',
    name: entity?.name ?? '',
    industry: entity?.industry ?? entity?.category ?? '',
    entity_type: entity?.entity_type ?? '',
    parent_slug: entity?.parent_entity_slug ?? entity?.parent_slug ?? '',
    table_count: tableNames.length,
    total_rows: totalRows,
    tables: tableNames.join('|'),
  });
}

await fs.writeFile(path.join(OUT, 'UNASSIGNED-ROWS.json'), JSON.stringify(unassigned, null, 2));
await fs.writeFile(path.join(OUT, 'FAILED-tables.txt'), failures.length ? failures.join('\n') + '\n' : 'NONE\n');

const statCsv = ['table,total_rows,error', ...tableStats.map((row) => [row.table, row.rows, row.error ?? ''].map(csvCell).join(','))].join('\n');
await fs.writeFile(path.join(OUT, 'table-stats.csv'), statCsv + '\n');

const indexHeaders = ['slug','entity_id','name','industry','entity_type','parent_slug','table_count','total_rows','tables'];
const indexCsv = [indexHeaders.join(','), ...indexRows.map((row) => indexHeaders.map((key) => csvCell(row[key])).join(','))].join('\n');
await fs.writeFile(path.join(OUT, 'INDEX-all-businesses.csv'), indexCsv + '\n');

const manifest = {
  exported_at: new Date().toISOString(),
  supabase_url: SUPABASE_URL,
  discovered_table_count: tables.length,
  successful_table_count: allData.size,
  failed_table_count: failures.length,
  total_rows: tableStats.reduce((sum, row) => sum + (Number(row.rows) || 0), 0),
  entity_count: entityRows.length,
  slug_count: bySlug.size,
  unassigned_table_count: Object.keys(unassigned).length,
};
await fs.writeFile(path.join(OUT, 'MANIFEST.json'), JSON.stringify(manifest, null, 2));
await fs.writeFile(path.join(OUT, 'README.md'), `# Complete CyberCheck Database Export\n\nGenerated: ${manifest.exported_at}\n\n- Tables discovered: ${manifest.discovered_table_count}\n- Tables exported: ${manifest.successful_table_count}\n- Failed tables: ${manifest.failed_table_count}\n- Total rows: ${manifest.total_rows}\n- Entities: ${manifest.entity_count}\n- Slug packages: ${manifest.slug_count}\n\nFolders:\n- tables/: every row, every column, grouped by table\n- data-by-slug/: every record that could be attached to each slug\n- schema/: PostgREST OpenAPI schema\n\nOther files:\n- INDEX-all-businesses.csv\n- table-stats.csv\n- UNASSIGNED-ROWS.json\n- FAILED-tables.txt\n- MANIFEST.json\n`);

console.log(JSON.stringify(manifest, null, 2));
