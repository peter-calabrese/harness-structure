---
name: service-layer
description: Structure Spring Boot @Service business logic cleanly with constructor injection and transactions.
domain: backend
version: 1.0.0
---

# Service Layer Skill (Java / Spring Boot)

## When to Use

When implementing business workflows, `@Transactional` boundaries, or Spring Data repository orchestration.

## Workflow Steps

1. Use constructor injection (no `@Autowired` field injection) and accept validated domain DTOs (never `HttpServletRequest`).
2. Annotate write workflows with `@Transactional` and read queries with `@Transactional(readOnly = true)`.
3. Throw typed domain exceptions (`ResourceNotFoundException`, `ConflictException`, `ForbiddenException`) handled by `@RestControllerAdvice`.
4. Emit structured SLF4J audit/telemetry logs on key state transitions.
