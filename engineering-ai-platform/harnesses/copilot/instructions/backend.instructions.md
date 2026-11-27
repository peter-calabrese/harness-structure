---
applyTo: "**/*.java"
---

# Backend Instructions (Java / Spring Boot)

- Use constructor injection (never field `@Autowired`) and immutable Java `record`s for DTOs.
- Validate inputs with Jakarta `@Valid` at `@RestController` boundaries and return RFC 9457 `ProblemDetail` via `@RestControllerAdvice`.
- Enforce Spring Security (`SecurityFilterChain` + `@PreAuthorize`) in the service layer.
- Log via SLF4J with MDC trace context; never use `System.out.println` or log PII/credentials.
- Write JUnit 5 unit tests, `@WebMvcTest` controller tests, and Testcontainers integration tests.
