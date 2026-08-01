#!/usr/bin/env node
// Read-only CyberCheck database export, split across four folders.
const fs = require('fs');
const path = require('path');

const URL_ = process.env.SUPABASE_URL || 'https://mkepugvdlktfsossumox.supabase.co';
const KEY = process.env.SUPABASE_SERVICE_KEY;
const PAGE = 1000;
const BATCH_COUNT = 4;
const BATCH_ROOT = 'data-by-slug-batches';

if (!KEY) {
  console.error('ERROR: SUPABASE_SERVICE_KEY is not set.');
  process.exit(1);
}

const H = { apikey: KEY, Authorization: 'Bearer ' + KEY };

async function getJSON(url) {
  const response = await fetch(url, { headers: H });
  if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
  return response.json();
}

async function fetchAll(table) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    const response = await fetch(URL_ + '/rest/v1/' + encodeURIComponent(table) + '?select=*', {
      headers: { ...H, Range: from + '-' + (from + PAGE - 1) },
    });
    if (!response.ok) throw new Error(response.status + ' ' + (await response.text()).slice(0, 200));
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error('Unexpected response for ' + table);
    rows.push(...batch);
    if (batch.length < PAGE) break;
  }
  return rows;
}

function safeName(value) {
  return String(value).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 180);
}

function csv(value) {
  return '"' + String(value ?? '').replace(/"/g, '""') + '"';
}

(async () => {
  fs.rmSync(BATCH_ROOT, { recursive: true, force: true });
  fs.mkdirSync(BATCH_ROOT, { recursive: true });

  const spec = await getJSON(URL_ + '/rest/v1/');
  const definitions = spec.definitions || (spec.components && spec.components.schemas) || {};
  const allTables = Object.keys(definitions);

  const slugColumn = {};
  for (const table of allTables) {
    const properties = Object.keys((definitions[table] && definitions[table].properties) || {});
    if (properties.includes('entity_slug')) slugColumn[table] = 'entity_slug';
    else if (table === 'entity' && properties.includes('slug')) slugColumn[table] = 'slug';
  }

  const tables = Object.keys(slugColumn).sort();
  const bySlug = new Map();
  const tableStats = [];
  const failed = [];

  for (const table of tables) {
    process.stdout.write(table + ' ... ');
    try {
      const rows = await fetchAll(table);
      const column = slugColumn[table];
      const distinctSlugs = new Set();
      let attached = 0;
      for (const row of rows) {
        const slug = row[column];
        if (!slug) continue;
        attached += 1;
        distinctSlugs.add(slug);
        if (!bySlug.has(slug)) bySlug.set(slug, {});
        const tableMap = bySlug.get(slug);
        (tableMap[table] ||= []).push(row);
      }
      tableStats.push({ table, rows: rows.length, attached, slugs: distinctSlugs.size });
      console.log(rows.length + ' rows');
    } catch (error) {
      failed.push(table + '\t' + String(error.message).slice(0, 300));
      console.log('FAILED');
    }
  }

  const entries = [...bySlug.entries()].sort(([a], [b]) => a.localeCompare(b));
  const batchSize = Math.ceil(entries.length / BATCH_COUNT);
  const indexRows = [];
  const batchManifest = [];
  const BAR = '='.repeat(100);
  const HASH = '#'.repeat(100);

  for (let batchIndex = 0; batchIndex < BATCH_COUNT; batchIndex += 1) {
    const start = batchIndex * batchSize;
    const end = Math.min(start + batchSize, entries.length);
    const folderName = `batch-${String(batchIndex + 1).padStart(2, '0')}`;
    const folder = path.join(BATCH_ROOT, folderName);
    fs.mkdirSync(folder, { recursive: true });

    for (let globalIndex = start; globalIndex < end; globalIndex += 1) {
      const [slug, tableMap] = entries[globalIndex];
      const names = Object.keys(tableMap).sort();
      const entity = (tableMap.entity && tableMap.entity[0]) || {};
      const totalRows = names.reduce((sum, name) => sum + tableMap[name].length, 0);
      const output = [
        BAR,
        'SLUG: ' + slug,
        entity.name ? 'NAME: ' + entity.name : null,
        entity.industry_code ? 'INDUSTRY: ' + entity.industry_code : null,
        entity.entity_subtype ? 'SUBTYPE: ' + entity.entity_subtype : null,
        entity.parent_entity_slug ? 'PARENT: ' + entity.parent_entity_slug : null,
        'BATCH: ' + (batchIndex + 1) + ' of ' + BATCH_COUNT,
        'TABLES WITH DATA: ' + names.length,
        'TOTAL ROWS: ' + totalRows,
        BAR,
        '',
        'TABLE INDEX:',
        ...names.map(name => '  ' + name + '  (' + tableMap[name].length + ' rows)'),
      ].filter(value => value !== null);

      for (const name of names) {
        const rows = tableMap[name];
        output.push('', HASH, '# TABLE: ' + name + '   -   ' + rows.length + ' row(s)', HASH);
        rows.forEach((row, rowIndex) => {
          output.push('', '--- ' + name + ' [row ' + (rowIndex + 1) + ' of ' + rows.length + '] ---');
          for (const key of Object.keys(row)) {
            const value = row[key];
            if (value === null || value === undefined || value === '') continue;
            output.push(key + ': ' + (typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)));
          }
        });
      }

      fs.writeFileSync(path.join(folder, safeName(slug) + '.txt'), output.join('\n'));
      indexRows.push({
        slug,
        name: entity.name || '',
        industry: entity.industry_code || '',
        subtype: entity.entity_subtype || '',
        parent: entity.parent_entity_slug || '',
        batch: batchIndex + 1,
        folder: folderName,
        tables: names.length,
        rows: totalRows,
        table_list: names.join(' '),
      });
    }

    batchManifest.push({
      batch: batchIndex + 1,
      folder: folderName,
      first_slug: entries[start] ? entries[start][0] : '',
      last_slug: entries[end - 1] ? entries[end - 1][0] : '',
      slug_count: Math.max(0, end - start),
    });
  }

  fs.writeFileSync('INDEX-all-businesses.csv',
    'slug,name,industry,subtype,parent,batch,folder,table_count,row_count,tables\n' +
    indexRows.map(row => [row.slug,row.name,row.industry,row.subtype,row.parent,row.batch,row.folder,row.tables,row.rows,row.table_list].map(csv).join(',')).join('\n'));

  fs.writeFileSync('BATCH-MANIFEST.csv',
    'batch,folder,first_slug,last_slug,slug_count\n' +
    batchManifest.map(row => [row.batch,row.folder,row.first_slug,row.last_slug,row.slug_count].map(csv).join(',')).join('\n'));

  fs.writeFileSync('table-stats.csv',
    'table,total_rows,slug_attached_rows,distinct_slugs\n' +
    tableStats.sort((a,b) => b.rows-a.rows).map(row => [row.table,row.rows,row.attached,row.slugs].join(',')).join('\n'));

  fs.writeFileSync('FAILED-tables.txt', failed.length ? 'Tables that could not be read:\n\n' + failed.join('\n') : '');

  console.log('\nDONE');
  console.log('businesses written: ' + entries.length);
  console.log('batch size: ' + batchSize);
  console.log('folders: ' + BATCH_COUNT);
  console.log('tables scanned: ' + tables.length);
  console.log('tables failed: ' + failed.length);
})();
