---
name: architecture-review
description: Evaluate system boundaries, coupling, scalability, and backward compatibility.
domain: shared
version: 1.0.0
---

# Architecture Review Skill

## When to Use

When introducing new services, cross-domain APIs, or major refactors.

## Workflow Steps

1. Review module boundaries and dependency direction against `standards/architecture.md`.
2. Check for single points of failure, statefulness, and data-ownership violations.
3. Verify backward compatibility for APIs, events, and database schemas.
4. Document key trade-offs in an ADR if the change is non-reversible.
