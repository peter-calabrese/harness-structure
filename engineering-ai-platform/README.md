# Engineering AI Platform

Canonical AI engineering harness providing a single source of truth for engineering standards, agent definitions, reusable skills, provider-specific adapters, governance policies, and distribution tooling.

## Repository Structure

```text
engineering-ai-platform/
├── standards/      # Global and domain-specific engineering rules
├── agents/         # Canonical role-based agent definitions
├── skills/         # Reusable, composable AI skills (SKILL.md + assets/scripts/references)
├── harnesses/      # Provider adapters (Copilot, Codex, Claude)
├── policies/       # Machine-readable governance, permissions, and ownership rules
├── tooling/        # Policy engine, schema/lint validators, and runtime hooks
├── distribution/   # Manifest-driven generation, drift detection, and repo sync
├── tests/          # Harness verification suites (discovery, routing, policy, security)
├── docs/           # Architecture, authoring guides, onboarding, and rollout
└── .github/        # CI/CD workflows and CODEOWNERS
```

## Quick Start

```bash
# Validate standards, agents, and skills
npm run validate

# Generate provider-specific harness artifacts from canonical sources
npm run generate

# Check for drift between canonical sources and provider adapters
npm run check-drift

# Run policy engine and harness test suites
npm test
```

## Design Principles

1. **Single Source of Truth**: Author standards, agents, and skills once; generate provider adapters via `distribution/generate.ts`.
2. **Least Privilege**: Every agent has explicit tool, path, and MCP server permissions in `policies/`.
3. **Verifiable Contracts**: All skills, agents, and standards are validated in CI before release or sync.
4. **Defense in Depth**: Pre/post tool-use hooks and prompt-injection tests guard against unsafe actions.

## Documentation

- [Architecture](docs/architecture.md)
- [Agent Development](docs/agent-development.md)
- [Skill Development](docs/skill-development.md)
- [Onboarding](docs/onboarding.md)
- [Rollout Strategy](docs/rollout.md)
