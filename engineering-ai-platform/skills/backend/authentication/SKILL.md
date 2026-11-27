---
name: authentication
description: Implement secure Spring Security authentication, JWT validation, and method-level RBAC/ABAC checks.
domain: backend
version: 1.0.0
---

# Authentication Skill (Java / Spring Boot)

## When to Use

When configuring `SecurityFilterChain`, JWT/OAuth2 Resource Server, or `@PreAuthorize` authorization rules.

## Workflow Steps

1. Follow `standards/backend/authentication.md` (stateless `SecurityFilterChain`, deny by default).
2. Verify JWT signatures, expiration (`exp`), issuer (`iss`), and audience (`aud`).
3. Enforce resource ownership or role checks inside `@Service` methods using `@PreAuthorize`.
4. Request `security-reviewer` review before merging auth changes.
