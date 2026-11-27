---
applyTo: "**/*.{ts,tsx,jsx,css,scss}"
---

# Frontend Instructions (React + TypeScript)

## React
- Use functional components and hooks; keep components small and extract custom hooks for reusable stateful logic.
- Derive state during render rather than synchronizing via `useEffect`.
- Memoize (`useMemo`, `useCallback`) only when profiling demonstrates a bottleneck or referential stability is required.
- Always provide stable, unique `key` props for list items (never array indices for dynamic lists).

## TypeScript
- Enable `strict: true`, `noUncheckedIndexedAccess: true`, and `exactOptionalPropertyTypes: true`.
- Never use `any`; use `unknown` with runtime narrowing (e.g., Zod or type guards) at boundaries.
- Prefer `interface` for public object contracts and `type` for unions/intersections; use discriminated unions for state machines (`{ status: 'loading' } | { status: 'ready'; data: T }`).

## Styling & Design System
- Compose from existing design-system primitives (`Button`, `Input`, `Dialog`, `Stack`) with consistent `variant`, `size`, and `disabled` APIs.
- Use design tokens (CSS custom properties or theme tokens) for colors, spacing, typography, and radii; avoid hardcoded hex values.
- Prefer utility classes or scoped CSS modules over global stylesheets; build mobile-first responsive layouts with CSS Grid/Flexbox and respect `prefers-reduced-motion`.

## Accessibility (WCAG 2.2 AA) & Testing
- Use semantic HTML (`<button>`, `<a>`, `<input>`, `<nav>`, landmarks) before `aria-*`; ensure full keyboard navigation with visible focus indicators.
- Maintain >= 4.5:1 contrast for normal text (>= 3:1 large text/UI), meaningful `alt` text, `<label>` associations, and `aria-live` announcements for async updates.
- Write Testing Library tests covering user interactions and accessibility assertions.
