---
applyTo: "**/*.java"
---

# Backend Instructions (Java / Spring Boot)

## API Design & Service Layer
- Version public HTTP APIs explicitly (`@RequestMapping("/api/v1/...")` on `@RestController` classes) and use plural nouns (`GET /api/v1/orders`).
- Use constructor injection (never field `@Autowired`) and immutable Java `record`s for DTOs.
- Validate request DTOs with Jakarta Bean Validation (`@Valid`, `@NotBlank`, `@NotNull`) at `@RestController` boundaries.
- Support idempotency keys on non-idempotent mutating endpoints where retries are expected, and paginate list endpoints with cursor-based pagination by default.

## Authentication & Authorization
- Configure Spring Security with a stateless `SecurityFilterChain` and deny-by-default (`anyRequest().authenticated()`).
- Enforce object-level and role-based authorization in the service layer via `@PreAuthorize` (`@EnableMethodSecurity`), not only at URL matchers.
- Validate JWT signatures, `exp`, `iss`, and `aud` via OAuth2 Resource Server; store passwords with `Argon2PasswordEncoder` or `BCryptPasswordEncoder` (strength >= 12).

## Error Handling & Logging
- Map typed domain exceptions centrally in `@RestControllerAdvice` extending `ResponseEntityExceptionHandler`, returning RFC 9457 `ProblemDetail`.
- Never leak stack traces, SQL queries, or internal hostnames (`server.error.include-stacktrace: never`).
- Emit structured JSON logs via SLF4J + Logback with `traceId`, `spanId`, and `correlationId` via Micrometer Tracing / `MDC` (never `System.out.println`), and redact `Authorization`, `Cookie`, `password`, `token`, and PII.

## Testing
- Write JUnit 5 unit tests, `@WebMvcTest` controller tests, and Testcontainers integration tests.
