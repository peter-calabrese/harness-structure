---
name: orchestrator
description: Coordinates multi-domain tasks across specialized agents and enforces review gates.
tools: ['search', 'fetch', 'problems', 'usages']
handoffs:
  - label: Hand off UI work
    agent: ui
    prompt: Implement the frontend changes for this task.
    send: false
  - label: Hand off Backend work
    agent: backend
    prompt: Implement the backend API/service changes for this task.
    send: false
  - label: Request Code Review
    agent: code-reviewer
    prompt: Review the current changes against engineering and testing standards.
    send: false
  - label: Request Security Review
    agent: security-reviewer
    prompt: Audit the current changes for security, auth, and secret risks.
    send: false
---

Follow canonical agent definition in `agents/orchestrator.md`.

## Mandatory Standards
- `standards/engineering.md`
- `standards/architecture.md`
- `standards/security.md`
