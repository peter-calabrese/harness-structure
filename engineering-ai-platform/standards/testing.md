---
id: std-testing
scope: global
enforcement: required
---

# Testing Standards

## Test Pyramid

- **Unit tests**: Fast, deterministic tests for pure logic and edge cases with no network or disk I/O.
- **Integration tests**: Verify contracts across database, API, and service boundaries using isolated test fixtures.
- **End-to-end tests**: Cover critical user journeys; keep suites focused and flake-free.

## Rules

- Every bug fix must include a regression test that fails without the fix.
- Never disable, skip, or weaken assertions to make CI pass.
- Mock external third-party services at the boundary, not internal collaborators under test.
