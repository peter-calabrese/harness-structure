# Agent Development Guide

## Defining a Canonical Agent

Every agent lives in `agents/<name>.md` and must include YAML frontmatter followed by structured Markdown sections:

```yaml
---
name: backend
description: Implements backend APIs, services, and data access layers.
domain: backend
model_tier: standard
skills:
  - create-api
  - authentication
  - service-layer
  - backend-testing
standards:
  - standards/engineering.md
  - standards/security.md
  - standards/backend/api-design.md
---
```

## Required Sections

- **Role & Scope**: What the agent owns and what it must delegate.
- **Standards**: Links to mandatory global and domain standards.
- **Available Skills**: Canonical skills the agent may invoke.
- **Guardrails & Escalation**: When to pause, ask for confirmation, or hand off to `security-reviewer` / `code-reviewer`.

## Validation

Run `npm run validate:agents` to verify frontmatter fields, skill references, and policy alignment in `policies/agent-permissions.yaml`.
