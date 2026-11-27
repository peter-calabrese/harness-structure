---
id: std-backend-authentication
scope: backend
enforcement: required
---

# Authentication & Authorization Standards (Java / Spring Boot)

- Configure Spring Security with a stateless `SecurityFilterChain` and deny-by-default (`anyRequest().authenticated()`).
- Enforce object-level and role-based authorization in the service layer via `@PreAuthorize` / method security (`@EnableMethodSecurity`), not only at URL matchers.
- Validate JWT signatures, `exp`, `iss`, and `aud` via Spring Security OAuth2 Resource Server.
- Store passwords exclusively with `Argon2PasswordEncoder` or `BCryptPasswordEncoder` (strength >= 12); never roll custom cryptography.
