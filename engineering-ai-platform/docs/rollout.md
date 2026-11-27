# Rollout Strategy

## Phases

1. **Phase 1 — Pilot (Weeks 1–2)**: Enable in 2–3 opt-in repositories with `enforce: warn` in policy hooks. Collect feedback on skill discovery and false positives.
2. **Phase 2 — Standard Adoption (Weeks 3–4)**: Sync canonical harnesses across active product repositories via `sync-repositories.yml`. Enable `check-drift` in PR checks.
3. **Phase 3 — Enforcement (Week 5+)**: Switch `policies/agent-permissions.yaml` and `policies/required-checks.yaml` to `enforce: block` for protected branches.

## Exception Process

Teams requiring temporary deviations must submit an exception request documented in `policies/exceptions/README.md` with an expiration date and owner approval.
