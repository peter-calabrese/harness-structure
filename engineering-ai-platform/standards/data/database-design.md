---
id: std-data-database-design
scope: data
enforcement: required
---

# Database Design Standards

- Use `snake_case` for all table and column names, with plural table names (`users`, `order_items`).
- Every table must have a primary key and `created_at` / `updated_at` UTC timestamps.
- Enforce referential integrity with foreign keys and explicit `ON DELETE` / `ON UPDATE` behavior.
- Model money using integer minor units (e.g., `amount_cents`) or `NUMERIC(p, s)`, never floating-point types.
