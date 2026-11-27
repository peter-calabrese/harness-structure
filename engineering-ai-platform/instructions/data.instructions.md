---
applyTo: "{**/*.sql,**/migrations/**,**/db/**}"
---

# Data, SQL & Migration Instructions

## Database Design
- Use `snake_case` for all table and column names with plural table names (`users`, `order_items`).
- Every table must have a primary key and `created_at` / `updated_at` UTC timestamps.
- Enforce referential integrity with foreign keys and explicit `ON DELETE` / `ON UPDATE` behavior.
- Model money using integer minor units (`amount_cents`) or `NUMERIC(p, s)`, never floating-point types.

## SQL
- Always use parameterized queries or prepared statements; never string-interpolate values.
- Avoid `SELECT *` in application queries; enumerate required columns explicitly.
- Verify query plans (`EXPLAIN ANALYZE`) for queries on high-volume tables and use explicit `JOIN` syntax with table-aliased columns.

## Migrations & Governance
- Write forward-only, versioned migrations committed alongside code using expand-and-contract for breaking changes (add nullable column -> backfill -> enforce `NOT NULL` -> drop old column).
- Avoid long-held table locks in production (e.g., `CREATE INDEX CONCURRENTLY` in PostgreSQL) and test migrations against representative data.
- Classify datasets (`public`, `internal`, `confidential`, `restricted/PII`), encrypt sensitive data at rest/in transit, mask/tokenize PII in non-prod, and define explicit retention/deletion policies.
