---
applyTo: "{.github/workflows/*.{yml,yaml},**/*.tf,**/*.tfvars,**/Dockerfile*,**/*.k8s.{yml,yaml},**/k8s/**/*.{yml,yaml}}"
---

# DevOps & Infrastructure Instructions

## CI/CD (GitHub Actions)
- Pin third-party GitHub Actions to full commit SHAs rather than mutable tags.
- Use OIDC federation for cloud authentication; avoid long-lived static cloud credentials in CI secrets.
- Enforce minimal `permissions:` blocks on every workflow/job and require lint, typecheck, unit tests, and security scans before merge.

## Terraform
- Store state in encrypted remote backends with state locking enabled; pin Terraform and provider versions with `~>` constraints and commit `.terraform.lock.hcl`.
- Organize reusable infrastructure into versioned modules with typed `variables.tf` and `outputs.tf`; always run `terraform fmt -check`, `terraform validate`, and `terraform plan` in CI before apply.

## Containers, Kubernetes & Deployments
- Set explicit CPU/memory `requests` and `limits`, plus `livenessProbe`, `readinessProbe`, and `startupProbe` on every workload.
- Run containers as non-root (`runAsNonRoot: true`, `readOnlyRootFilesystem: true`, `allowPrivilegeEscalation: false`) and define `PodDisruptionBudget` and `HorizontalPodAutoscaler` for production services.
- Promote immutable container digests (`@sha256:...`), use progressive delivery (canary/blue-green) with automated rollback on SLO regression, and require approval gates for production mutations.
