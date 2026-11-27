---
name: state-management
description: Structure local, URL, server, and global client state cleanly in React applications.
domain: frontend
version: 1.0.0
---

# State Management Skill

## When to Use

When designing data fetching, caching, form state, or shared UI state.

## Workflow Steps

1. Classify state: local UI state (`useState`/`useReducer`), URL state (router search params), server cache (TanStack Query/SWR), or global client store.
2. Keep server state in a dedicated query cache—never duplicate server responses into global stores.
3. Model async states with discriminated unions or explicit status flags (`loading`, `error`, `success`).
4. Avoid prop drilling beyond 2–3 levels by using composition or scoped context.
