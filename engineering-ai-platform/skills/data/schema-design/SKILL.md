---
name: schema-design
description: Design normalized, performant relational schemas with governance metadata.
domain: data
version: 1.0.0
---

# Schema Design Skill

## When to Use

When modeling new database tables, relationships, or indexes.

## Workflow Steps

1. Follow `standards/data/database-design.md` (`snake_case`, plural table names, UTC timestamps).
2. Define primary keys, foreign keys with explicit `ON DELETE` rules, and check constraints.
3. Add indexes aligned with actual query predicates and sort orders.
4. Classify PII/sensitive columns per `standards/data/data-governance.md`.
