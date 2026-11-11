# GCR / CyberCheck — Full Database Export

Read-only export of the GCR database (Supabase project `cyber check`), one file per business slug.

**Nothing here writes to the database.** The dump makes GET requests only.

## How to run it

Actions tab → **Full Database Dump** → **Run workflow**.

It takes about two minutes and commits the results back to this repo.

## What you get

```
data-by-slug/<slug>.txt      ONE FILE PER BUSINESS — every table attached to that
                             slug, every column, every value, every JSON blob in
                             full. Nothing truncated.
INDEX-all-businesses.csv     all 4,067 businesses + which tables each one uses
table-stats.csv              per table: total rows, slug-attached rows, distinct slugs
FAILED-tables.txt            anything the key couldn't read (so gaps are visible)
```

Open `data-by-slug/tacky-jacks-orange-beach.txt` and you see literally everything
the database holds for that business, table by table.

## Credentials

The workflow looks for a repo secret named `SUPABASE_SERVICE_KEY`
(Settings → Secrets and variables → Actions → New repository secret).

Set that secret before running. The workflow's fallback for a missing secret should be removed.
