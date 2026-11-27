---
name: deployment-review
description: Pre-deployment readiness checklist for Kubernetes, rollout safety, and rollback plans.
domain: devops
version: 1.0.0
---

# Deployment Review Skill

## When to Use

Before deploying infrastructure or application changes to staging or production.

## Workflow Steps

1. Verify container security context (`runAsNonRoot: true`, `readOnlyRootFilesystem: true`, resource limits).
2. Confirm liveness, readiness, and startup probes are configured.
3. Validate progressive rollout strategy (canary/blue-green) and automated rollback triggers.
4. Confirm database migrations are backward-compatible with the currently running release.
