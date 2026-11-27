# Skill Development Guide

## Directory Layout

Each skill resides in `skills/<domain>/<skill-name>/` and requires a `SKILL.md` file:

```text
skills/frontend/react-component/
├── SKILL.md
├── references/      # Optional deep-dive docs loaded on demand
├── scripts/         # Optional deterministic validation/helper scripts
└── assets/          # Optional templates or starter files
```

## `SKILL.md` Format

```yaml
---
name: react-component
description: Create accessible, typed React components following design-system conventions.
domain: frontend
version: 1.0.0
---
```

Follow the frontmatter with:
1. **When to Use**
2. **Inputs / Prerequisites**
3. **Workflow Steps**
4. **Verification Checklist**

## Validation

Run `npm run validate:skills` to ensure every `SKILL.md` has valid frontmatter, non-empty instructions, and valid local script/reference paths.
