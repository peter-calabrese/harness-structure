---
name: create-api
description: Design and implement versioned, validated Spring Boot REST endpoints following backend conventions.
domain: backend
version: 1.0.0
---

# Create API Skill (Java / Spring Boot)

## When to Use

When adding a new Spring Boot `@RestController` endpoint or modifying an existing route contract.

## References & Scripts

- Conventions: `references/api-conventions.md`
- Validator: `scripts/validate-api.sh`

## Workflow Steps

1. Review `references/api-conventions.md` and `standards/backend/api-design.md`.
2. Define Java `record` request/response DTOs with Jakarta Bean Validation (`@Valid`) and map domain exceptions via `@RestControllerAdvice` to `ProblemDetail`.
3. Enforce Spring Security authentication and `@PreAuthorize` authorization checks.
4. Add `@WebMvcTest` and integration tests covering success, validation error (`400`), and unauthorized (`401`/`403`) paths.
5. Run `scripts/validate-api.sh <controller-file.java>` to verify conventions.
