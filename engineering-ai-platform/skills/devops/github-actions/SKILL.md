---
name: github-actions
description: Author secure, minimal-permission GitHub Actions workflows with SHA-pinned actions.
domain: devops
version: 1.0.0
---

# GitHub Actions Skill

## When to Use

When creating or updating CI/CD workflows under `.github/workflows/`.

## Workflow Steps

1. Set top-level `permissions: read-all` or `{}` and grant minimal permissions per job.
2. Pin every `uses:` action to a full 40-character commit SHA with a version comment.
3. Never interpolate untrusted PR titles, branch names, or commit messages directly into `run:` scripts; pass them via `env:`.
4. Use OIDC (`id-token: write`) instead of static cloud secrets.
