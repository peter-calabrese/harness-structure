---
id: std-frontend-react
scope: frontend
enforcement: required
---

# React Standards

- Use functional components and hooks; avoid class components.
- Keep components small and focused; extract custom hooks for reusable stateful logic.
- Derive state during render rather than synchronizing via `useEffect`.
- Memoize (`useMemo`, `useCallback`) only when profiling demonstrates a bottleneck or referential stability is required.
- Always provide stable, unique `key` props for list items (never array indices for dynamic lists).
