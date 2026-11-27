---
agent: code-reviewer
description: Run a structured code review on the current diff or selected files.
---

Perform a code review following the `code-review` skill (`skills/shared/code-review/SKILL.md`):
1. Check scope, correctness, and edge cases.
2. Verify compliance with `standards/engineering.md` and relevant domain standards.
3. Confirm deterministic tests exist for new behavior or bug fixes.
4. Report findings grouped by severity (`blocker`, `suggestion`, `nit`) with file and line references.
