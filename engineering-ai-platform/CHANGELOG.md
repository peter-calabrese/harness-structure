# Changelog

All notable changes to `engineering-ai-platform` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-11-27

### Added
- Initial canonical AI harness structure (`standards/`, `agents/`, `skills/`, `harnesses/`, `policies/`, `tooling/`, `distribution/`, `tests/`, `docs/`, `.github/`).
- Global and domain engineering standards for frontend, backend, devops, and data.
- Canonical agent definitions (`orchestrator`, `ui`, `backend`, `devops`, `data`, `code-reviewer`, `security-reviewer`).
- Canonical skills with references, validation scripts, and templates.
- Provider adapters for GitHub Copilot, OpenAI Codex, and Anthropic Claude.
- Policy enforcement definitions, policy engine, validators, hooks, and distribution scripts.
- Harness test suite covering skill discovery, agent routing, policy enforcement, and prompt injection defense.
