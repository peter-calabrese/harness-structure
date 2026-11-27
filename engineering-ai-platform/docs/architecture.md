# Architecture

## Overview

The `engineering-ai-platform` separates **canonical knowledge** from **provider-specific delivery** and **runtime enforcement**.

```text
[standards/] + [agents/] + [skills/] + [policies/]
                        │
                        ▼
            [distribution/generate.ts]
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
  [harnesses/      [harnesses/     [harnesses/
   copilot/]        codex/]         claude/]
```

## Layers

1. **Standards (`standards/`)**: Declarative engineering rules (global and domain-specific). Referenced by agents and injected into provider instruction files.
2. **Agents (`agents/`)**: Role-based personas with explicit responsibilities, allowed skills, escalation rules, and boundaries.
3. **Skills (`skills/`)**: Modular task workflows following the `SKILL.md` specification, optionally accompanied by `references/`, `scripts/`, and `assets/`.
4. **Harnesses (`harnesses/`)**: Thin provider-specific adapters for GitHub Copilot, OpenAI Codex, and Anthropic Claude.
5. **Policies (`policies/`)**: YAML-defined guardrails for tool permissions, path ownership, MCP servers, dependencies, and required checks.
6. **Tooling (`tooling/`)**: Runtime policy evaluation (`policy-engine/`), static validators (`validators/`), and lifecycle hooks (`hooks/`).
7. **Distribution (`distribution/`)**: Generates provider artifacts, detects drift, and syncs updates to target repositories.
