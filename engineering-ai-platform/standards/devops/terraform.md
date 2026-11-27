---
id: std-devops-terraform
scope: devops
enforcement: required
---

# Terraform Standards

- Store state in encrypted remote backends with state locking enabled.
- Pin Terraform and provider versions with `~>` constraints and commit `.terraform.lock.hcl`.
- Organize reusable infrastructure into versioned modules with typed `variables.tf` and `outputs.tf`.
- Always run `terraform fmt -check`, `terraform validate`, and `terraform plan` in CI before apply.
