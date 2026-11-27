---
name: sql-optimization
description: Analyze and optimize SQL queries using execution plans and index tuning.
domain: data
version: 1.0.0
---

# SQL Optimization Skill

## When to Use

When queries exhibit high latency, full table scans, or lock contention.

## Workflow Steps

1. Capture `EXPLAIN (ANALYZE, BUFFERS)` on realistic data volume.
2. Eliminate `SELECT *`, N+1 loops, and non-sargable predicates on indexed columns.
3. Recommend composite or partial indexes ordered by selectivity and equality-before-range.
4. Re-measure execution time and buffer reads after changes.
