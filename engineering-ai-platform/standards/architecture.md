---
id: std-architecture
scope: global
enforcement: required
---

# Architecture Standards

## Modularity & Boundaries

- Separate domain logic from transport (HTTP/RPC), persistence (SQL/ORM), and presentation (UI).
- Depend on abstractions/interfaces at module boundaries rather than concrete implementations.
- Avoid circular dependencies between packages or feature modules.

## Evolutionary Design

- Record significant architectural decisions as lightweight ADRs (`docs/adr/`).
- Design stateless services by default; externalize session and cache state.
- Prefer backward-compatible contract changes (expand-and-contract) over breaking changes.
