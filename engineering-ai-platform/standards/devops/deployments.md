---
id: std-devops-deployments
scope: devops
enforcement: required
---

# Deployment Standards

- Use progressive delivery (canary or blue-green) for production releases with automated rollback on SLO regression.
- Separate build artifacts from environment configuration; promote immutable container digests (`@sha256:...`).
- Require change-window and approval gates for production infrastructure mutations.
- Verify health checks and smoke tests post-deploy before marking a rollout complete.
