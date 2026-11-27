---
id: std-frontend-typescript
scope: frontend
enforcement: required
---

# TypeScript Standards

- Enable `strict: true`, `noUncheckedIndexedAccess: true`, and `exactOptionalPropertyTypes: true`.
- Never use `any`; use `unknown` with runtime narrowing (e.g., Zod or type guards) at boundaries.
- Prefer `interface` for public object contracts and `type` for unions, intersections, and mapped types.
- Use discriminated unions for state machines (`{ status: 'loading' } | { status: 'ready'; data: T }`).
