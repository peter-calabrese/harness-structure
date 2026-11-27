---
agent: backend
description: Scaffold and validate a versioned Spring Boot REST API endpoint.
---

Follow the `create-api` skill (`skills/backend/create-api/SKILL.md`):
1. Use `@RequestMapping("/api/v1/<plural-resource>")` and validate Java `record` DTOs with Jakarta `@Valid`.
2. Return RFC 9457 `ProblemDetail` via `@RestControllerAdvice` and enforce Spring Security / `@PreAuthorize`.
3. Add `@WebMvcTest` and integration tests for success, validation failure (`400`), and unauthorized access (`401`/`403`).
