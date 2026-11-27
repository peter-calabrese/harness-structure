---
name: backend
description: Implements HTTP/RPC APIs, authentication, domain services, and backend tests.
tools: ['search', 'editFiles', 'runInTerminal', 'problems', 'usages']
handoffs:
  - label: Request Security Review
    agent: security-reviewer
    prompt: Audit these backend changes for auth, input validation, and data exposure risks.
    send: false
  - label: Request Code Review
    agent: code-reviewer
    prompt: Review these backend changes for correctness, error handling, and test coverage.
    send: false
---

Follow canonical agent definition in `agents/backend.md`.

## Mandatory Standards
- `standards/security.md`
- `standards/backend/api-design.md`
- `standards/backend/authentication.md`
- `standards/backend/error-handling.md`
- `standards/backend/logging.md`
