---
id: std-dependencies
scope: global
enforcement: required
---

# Dependency Standards

## Adding or Updating Dependencies

- Prefer standard library or existing workspace utilities before introducing a new package.
- Check license compatibility (MIT, Apache-2.0, BSD-2/3-Clause, ISC) against `policies/dependency-policy.yaml`.
- Pin exact or lockfile-resolved versions; commit lockfiles on every dependency change.
- Run vulnerability scanning (`npm audit` / `pip-audit` / `trivy`) before merging.
