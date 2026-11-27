---
name: devops
description: Manages CI/CD pipelines, Terraform modules, containers, and Kubernetes deployments.
tools: ['search', 'editFiles', 'runInTerminal', 'problems']
handoffs:
  - label: Request Security Review
    agent: security-reviewer
    prompt: Audit these infrastructure and CI/CD changes for least privilege and pinned actions.
    send: false
---

Follow canonical agent definition in `agents/devops.md`.

## Mandatory Standards
- `standards/security.md`
- `standards/devops/ci-cd.md`
- `standards/devops/terraform.md`
- `standards/devops/kubernetes.md`
- `standards/devops/deployments.md`
