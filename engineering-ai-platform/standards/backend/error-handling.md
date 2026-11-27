---
id: std-backend-error-handling
scope: backend
enforcement: required
---

# Backend Error Handling Standards (Java / Spring Boot)

- Map typed domain exceptions to HTTP status codes centrally in a `@RestControllerAdvice` extending `ResponseEntityExceptionHandler`.
- Return RFC 9457 `org.springframework.http.ProblemDetail` (`type`, `title`, `status`, `detail`, `instance`) for HTTP error responses.
- Never leak stack traces, SQL queries, or internal hostnames (`server.error.include-stacktrace: never`).
- Distinguish retryable transient errors from permanent validation or authorization failures.
