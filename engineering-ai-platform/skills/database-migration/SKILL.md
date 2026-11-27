---
name: database-migration
description: Author zero-downtime, expand-and-contract database migrations.
domain: data
version: 1.0.0
---

# Database Migration Skill

## When to Use

When altering schemas, adding indexes, or backfilling data in production databases.

## Workflow Steps

1. Follow `standards/data/migrations.md`: never drop or rename live columns in one release.
2. Split breaking changes into Expand (add nullable) -> Backfill (batched) -> Contract (enforce/drop).
3. Use `CONCURRENTLY` for index creation and set `lock_timeout` to avoid blocking traffic.
4. Test migration against a representative dataset before merging.
