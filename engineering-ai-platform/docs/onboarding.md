# Onboarding

## For Platform Contributors

1. Clone the repository and ensure Node.js >= 22 is installed.
2. Run `npm run validate` and `npm test` to confirm a clean baseline.
3. Review `standards/engineering.md` and `policies/path-ownership.yaml`.

## For Adopting Repositories

1. Add the target repository to `distribution/manifest.yaml`.
2. Run `npm run generate` to build provider adapters.
3. Run `npm run sync -- --target <repo-path>` (or rely on `.github/workflows/sync-repositories.yml`).
4. Verify no drift exists with `npm run check-drift`.
