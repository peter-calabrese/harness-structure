---
id: std-devops-ci-cd
scope: devops
enforcement: required
---

# CI/CD Standards

- Pin third-party GitHub Actions to full commit SHAs rather than mutable tags.
- Use OIDC federation for cloud authentication; avoid long-lived static cloud credentials in CI secrets.
- Enforce minimal `permissions:` blocks on every workflow and job.
- Require lint, typecheck, unit tests, and security scans to pass before merge.
