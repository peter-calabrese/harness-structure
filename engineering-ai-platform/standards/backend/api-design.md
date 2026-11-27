---
id: std-backend-api-design
scope: backend
enforcement: required
---

# API Design Standards (Java / Spring Boot)

- Version public HTTP APIs explicitly (`@RequestMapping("/api/v1/...")` on `@RestController` classes).
- Use plural nouns for resource paths (`GET /api/v1/orders`, `POST /api/v1/orders`).
- Validate request DTOs (Java `record`s) using Jakarta Bean Validation (`@Valid`, `@NotBlank`, `@NotNull`) and return RFC 9457 `ProblemDetail` for `400`/`422` errors.
- Support idempotency keys on non-idempotent mutating endpoints where retries are expected.
- Paginate list endpoints using cursor-based pagination by default.
