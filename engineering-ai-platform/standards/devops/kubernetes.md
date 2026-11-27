---
id: std-devops-kubernetes
scope: devops
enforcement: required
---

# Kubernetes Standards

- Set explicit `requests` and `limits` for CPU and memory on all containers.
- Configure `livenessProbe`, `readinessProbe`, and `startupProbe` for every workload.
- Run containers as non-root (`runAsNonRoot: true`, `readOnlyRootFilesystem: true`, `allowPrivilegeEscalation: false`).
- Define `PodDisruptionBudget` and `HorizontalPodAutoscaler` for production services.
