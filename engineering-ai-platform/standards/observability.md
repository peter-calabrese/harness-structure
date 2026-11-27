---
id: std-observability
scope: global
enforcement: required
---

# Observability Standards

## Telemetry Pillars

- **Structured logs**: Emit JSON logs with `timestamp`, `level`, `service`, `trace_id`, and `message`.
- **Metrics**: Track RED metrics (Rate, Errors, Duration) for all services and endpoints.
- **Tracing**: Propagate W3C `traceparent` headers across async queues and HTTP/gRPC calls.

## Rules

- Never log PII, credentials, tokens, or raw payment data.
- Define actionable alerts tied to SLO burn rates rather than noisy CPU thresholds.
