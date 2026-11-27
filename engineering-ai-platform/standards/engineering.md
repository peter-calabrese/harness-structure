---
id: std-engineering
scope: global
enforcement: required
---

# Engineering Standards

## Core Principles

- **Clarity over cleverness**: Prefer explicit, readable code with shallow nesting and early returns.
- **Single source of truth**: Avoid duplicating business logic, schemas, or configuration across modules.
- **Small, reviewable changes**: Keep PRs focused on a single concern with clear commit messages.
- **Fail fast**: Validate inputs at system boundaries and surface actionable errors immediately.

## Code Hygiene

- Remove dead code, unused imports, and commented-out blocks before merging.
- Document *why* non-obvious decisions or invariants exist; let clean naming explain *what* the code does.
- Never silently swallow exceptions or errors.
