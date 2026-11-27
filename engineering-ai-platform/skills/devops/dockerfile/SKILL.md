---
name: dockerfile
description: Build minimal, reproducible, non-root multi-stage container images.
domain: devops
version: 1.0.0
---

# Dockerfile Skill

## When to Use

When creating or optimizing a `Dockerfile` for application services.

## Workflow Steps

1. Use multi-stage builds with pinned base image digests (`@sha256:...`).
2. Copy only production dependencies and compiled artifacts into the final distroless/alpine stage.
3. Create and switch to a non-root `USER` before `ENTRYPOINT` / `CMD`.
4. Include a `.dockerignore` excluding `.git`, `node_modules`, and local secrets.
