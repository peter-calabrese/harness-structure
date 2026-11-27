---
name: write-tests
description: Author deterministic unit and integration tests following the test pyramid.
domain: shared
version: 1.0.0
---

# Write Tests Skill

## When to Use

When adding new functionality, refactoring existing logic, or fixing a bug.

## Workflow Steps

1. Identify the unit or boundary under test and list happy paths, edge cases, and failure modes.
2. For bug fixes, write a failing regression test first.
3. Use isolated fixtures and mock only external boundaries.
4. Run the test suite and verify all assertions pass without skipped or relaxed checks.
