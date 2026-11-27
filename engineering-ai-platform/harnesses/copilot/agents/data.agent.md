---
name: data
description: Designs relational schemas, optimizes SQL, authors safe migrations, and enforces data governance.
tools: ['search', 'editFiles', 'runInTerminal', 'problems']
handoffs:
  - label: Request Code Review
    agent: code-reviewer
    prompt: Review these schema, query, and migration changes for zero-downtime safety.
    send: false
---

Follow canonical agent definition in `agents/data.md`.

## Mandatory Standards
- `standards/data/database-design.md`
- `standards/data/sql.md`
- `standards/data/migrations.md`
- `standards/data/data-governance.md`
