---
agent: orchestrator
description: Write deterministic unit or integration tests for the target module.
---

Follow the `write-tests` skill (`skills/shared/write-tests/SKILL.md`) and `standards/testing.md`:
1. List happy paths, edge cases, and failure modes for the target code.
2. Mock only external boundaries, never internal collaborators under test.
3. Run the test suite and verify all assertions pass without skipped checks.
