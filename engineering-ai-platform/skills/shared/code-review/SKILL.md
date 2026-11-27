---
name: code-review
description: Structured code review checklist for correctness, maintainability, security, and tests.
domain: shared
version: 1.0.0
---

# Code Review Skill

## When to Use

Before approving or merging any pull request or multi-file change.

## Workflow Steps

1. **Scope Check**: Verify the diff matches the stated goal with no unrelated edits.
2. **Correctness & Edge Cases**: Trace error paths, null/undefined handling, concurrency, and boundary conditions.
3. **Standards Compliance**: Check against `standards/engineering.md` and domain standards.
4. **Tests**: Confirm new behavior and bug fixes have deterministic tests that fail without the change.
5. **Report**: Group findings by severity (`blocker`, `suggestion`, `nit`) with exact file paths and line numbers.
