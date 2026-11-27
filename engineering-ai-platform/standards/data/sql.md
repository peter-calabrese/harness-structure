---
id: std-data-sql
scope: data
enforcement: required
---

# SQL Standards

- Always use parameterized queries or prepared statements; never string-interpolate values.
- Avoid `SELECT *` in application queries; enumerate required columns explicitly.
- Verify query plans (`EXPLAIN ANALYZE`) for new or modified queries on high-volume tables.
- Use explicit `JOIN` syntax and qualify column names with table aliases in multi-table queries.
