---
name: terraform-module
description: Author reusable, typed Terraform modules with remote state and CI plan checks.
domain: devops
version: 1.0.0
---

# Terraform Module Skill

## When to Use

When provisioning cloud resources or creating reusable infrastructure modules.

## Workflow Steps

1. Structure module with `main.tf`, `variables.tf`, `outputs.tf`, and `versions.tf`.
2. Pin Terraform and provider versions with `~>` constraints.
3. Apply least-privilege IAM roles and encryption at rest by default.
4. Run `terraform fmt -check`, `terraform validate`, and `terraform plan`.
