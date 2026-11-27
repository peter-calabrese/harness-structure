# Spring Boot API Conventions

- Base path: `@RequestMapping("/api/v1/<plural-resource>")`
- DTOs: Use immutable Java `record`s with Jakarta Validation annotations (`@NotNull`, `@NotBlank`, `@Size`)
- Pagination: `?cursor=<opaque>&limit=20` (max `100`)
- Response envelope for collections: `{ "data": [...], "nextCursor": string | null }`
- Errors: `application/problem+json` via Spring `ProblemDetail` (`type`, `title`, `status`, `detail`, `traceId`).
