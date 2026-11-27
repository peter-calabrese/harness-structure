---
name: frontend-testing
description: Write user-centric component and integration tests using Testing Library patterns.
domain: frontend
version: 1.0.0
---

# Frontend Testing Skill

## When to Use

When testing React components, hooks, or client-side flows.

## Workflow Steps

1. Query elements by accessible role, label, or text (`getByRole`, `getByLabelText`), not CSS selectors or test IDs.
2. Simulate realistic user interactions (`userEvent.click`, `userEvent.type`).
3. Assert visible DOM state, ARIA attributes, and callback invocations.
4. Mock network calls at the boundary (e.g., MSW) rather than internal state hooks.
