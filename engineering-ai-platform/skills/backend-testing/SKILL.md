---
name: backend-testing
description: Write fast JUnit 5/Mockito unit tests and isolated Spring Boot integration tests with Testcontainers.
domain: backend
version: 1.0.0
---

# Backend Testing Skill (Java / Spring Boot)

## When to Use

When testing Spring Boot controllers, security filters, `@Service` classes, or repositories.

## Workflow Steps

1. Unit test `@Service` classes with JUnit 5 and Mockito (fast, no Spring context).
2. Slice test controllers with `@WebMvcTest` + `MockMvc` for validation, status codes, and `ProblemDetail` payloads.
3. Integration test persistence and end-to-end flows with `@SpringBootTest` + Testcontainers (`@ServiceConnection`).
4. Verify auth denials (`401`/`403`) and idempotency on mutating endpoints.
