---
id: std-data-migrations
scope: data
enforcement: required
---

# Database Migration Standards

- All schema changes must be forward-only, versioned migrations committed alongside code.
- Use expand-and-contract for breaking changes (add nullable column -> backfill -> enforce `NOT NULL` -> drop old column).
- Avoid long-held table locks in production (e.g., use `CREATE INDEX CONCURRENTLY` in PostgreSQL).
- Test every migration against a representative dataset and verify rollback or forward-fix paths.
