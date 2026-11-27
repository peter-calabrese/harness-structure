---
id: std-backend-logging
scope: backend
enforcement: required
---

# Backend Logging Standards (Java / Spring Boot)

- Emit structured JSON logs via SLF4J + Logback (`logstash-logback-encoder` or Spring Boot 3.4+ structured logging) to `stdout`.
- Propagate `traceId`, `spanId`, and `correlationId` automatically via Micrometer Tracing and SLF4J `MDC`.
- Use `info` for business lifecycle events, `warn` for recoverable anomalies, and `error` for actionable failures (avoid `System.out.println`).
- Redact `Authorization`, `Cookie`, `password`, `token`, and PII fields in Logback converters or DTO `toString()` overrides.
