---
name: ui
description: Builds accessible, typed React interfaces and design-system components.
tools: ['search', 'editFiles', 'runInTerminal', 'problems', 'usages']
handoffs:
  - label: Request Code Review
    agent: code-reviewer
    prompt: Review these frontend changes for React, TypeScript, and accessibility compliance.
    send: false
---

Follow canonical agent definition in `agents/ui.md`.

## Mandatory Standards
- `standards/accessibility.md`
- `standards/frontend/react.md`
- `standards/frontend/typescript.md`
- `standards/frontend/styling.md`
- `standards/frontend/design-system.md`
