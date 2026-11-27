# Engineering AI Platform (VS Code Agents + Claude Code)

Global **VS Code Copilot Agents** and **Claude Code** harness tailored for **React + TypeScript** (frontend) and **Java + Spring Boot** (backend), with zero Node.js dependencies.

## Structure

```text
engineering-ai-platform/
├── standards/               # Global and domain rules (frontend, backend, devops, data)
├── agents/                  # Canonical role definitions
├── skills/                  # Reusable SKILL.md workflows
└── harnesses/
    ├── copilot/             # VS Code Copilot Agents, instructions, prompts, MCP
    └── claude/              # Claude Code CLAUDE.md, settings.json, and subagents
```

## 1. Global VS Code Agents Setup (Copilot Harness — Nov 2026)

VS Code's legacy **Local** agent harness and `chat.*Locations` settings (`chat.agentFilesLocations`, `chat.instructionsFilesLocations`, `chat.promptFilesLocations`, `chat.agentSkillsLocations`) are deprecated. The native **Copilot harness** discovers user-level customizations directly from `~/.copilot/` (`%USERPROFILE%\.copilot` on Windows).

> **Note on `harnesses/copilot/prompts/`:** Prompt files (`*.prompt.md`) are retired in the Copilot harness in favor of **Skills** (`SKILL.md`). All four prompts (`code-review`, `create-api`, `react-component`, `write-tests`) already exist under `skills/`, so `prompts/` does not need to be linked.

### Windows (PowerShell)

Run in PowerShell (directory `Junction`s work without elevation; if `SymbolicLink` for `copilot-instructions.md` is restricted on your machine, use `Copy-Item -Force` instead):

```powershell
$Platform = "<PATH_TO_PLATFORM>" # e.g. C:\Users\<you>\Developer\util\engineering-ai-platform
$CopilotDir = "$env:USERPROFILE\.copilot"

New-Item -ItemType Directory -Force -Path "$CopilotDir\skills" | Out-Null

New-Item -ItemType SymbolicLink -Force -Path "$CopilotDir\copilot-instructions.md" -Target "$Platform\harnesses\copilot\copilot-instructions.md" | Out-Null
New-Item -ItemType Junction -Force -Path "$CopilotDir\agents" -Target "$Platform\harnesses\copilot\agents" | Out-Null
New-Item -ItemType Junction -Force -Path "$CopilotDir\instructions" -Target "$Platform\harnesses\copilot\instructions" | Out-Null

foreach ($domain in @("shared", "frontend", "backend", "devops", "data")) {
  Get-ChildItem -Directory "$Platform\skills\$domain" | ForEach-Object {
    New-Item -ItemType Junction -Force -Path "$CopilotDir\skills\$($_.Name)" -Target $_.FullName | Out-Null
  }
}
```

### macOS / Linux (bash)

```bash
PLATFORM="<PATH_TO_PLATFORM>" # e.g. ~/Developer/util/engineering-ai-platform
mkdir -p ~/.copilot/skills

ln -sf "$PLATFORM/harnesses/copilot/copilot-instructions.md" ~/.copilot/copilot-instructions.md
ln -sfn "$PLATFORM/harnesses/copilot/agents" ~/.copilot/agents
ln -sfn "$PLATFORM/harnesses/copilot/instructions" ~/.copilot/instructions

for domain in shared frontend backend devops data; do
  for skill in "$PLATFORM/skills/$domain"/*; do
    ln -sfn "$skill" ~/.copilot/skills/"$(basename "$skill")"
  done
done
```

### Finish in VS Code

1. Open User Settings (`Ctrl+Shift+P` / `Cmd+Shift+P` → **Preferences: Open User Settings (JSON)**) and remove any deprecated `chat.agentFilesLocations`, `chat.instructionsFilesLocations`, `chat.promptFilesLocations`, or `chat.agentSkillsLocations` entries.
2. In the Chat / Agents view, ensure your session target/harness is set to **Copilot** (not **Local**).
3. Reload VS Code (**Developer: Reload Window**) and verify your agents, instructions, and skills appear under **Chat: Open Customizations**.

> **Tip**: To use a Claude model inside VS Code's Agents panel, select it in the VS Code chat model picker or add `model: <model-name>` to any `harnesses/copilot/agents/*.agent.md` frontmatter.

## 2. Global Claude Code Setup

### Windows (PowerShell)

Run in PowerShell (with Windows Developer Mode enabled or as Administrator for file symlinks; `Junction` for directories works without elevation):

```powershell
$Platform = "<PATH_TO_PLATFORM>" # e.g. C:\Users\<you>\dev\engineering-ai-platform
$ClaudeDir = "$env:USERPROFILE\.claude"

New-Item -ItemType Directory -Force -Path "$ClaudeDir\skills" | Out-Null

New-Item -ItemType SymbolicLink -Force -Path "$ClaudeDir\CLAUDE.md" -Target "$Platform\harnesses\claude\CLAUDE.md" | Out-Null
New-Item -ItemType SymbolicLink -Force -Path "$ClaudeDir\settings.json" -Target "$Platform\harnesses\claude\settings.json" | Out-Null
New-Item -ItemType Junction -Force -Path "$ClaudeDir\agents" -Target "$Platform\harnesses\claude\agents" | Out-Null

foreach ($domain in @("shared", "frontend", "backend", "devops", "data")) {
  Get-ChildItem -Directory "$Platform\skills\$domain" | ForEach-Object {
    New-Item -ItemType Junction -Force -Path "$ClaudeDir\skills\$($_.Name)" -Target $_.FullName | Out-Null
  }
}
```

*(If file symlinks are restricted on your machine, use `Copy-Item -Force` instead of `New-Item -ItemType SymbolicLink` for `CLAUDE.md` and `settings.json`.)*

### Linux (bash)

```bash
PLATFORM="<PATH_TO_PLATFORM>" # e.g. ~/dev/engineering-ai-platform
mkdir -p ~/.claude/skills

ln -sf "$PLATFORM/harnesses/claude/CLAUDE.md" ~/.claude/CLAUDE.md
ln -sf "$PLATFORM/harnesses/claude/settings.json" ~/.claude/settings.json
ln -sfn "$PLATFORM/harnesses/claude/agents" ~/.claude/agents

for domain in shared frontend backend devops data; do
  for skill in "$PLATFORM/skills/$domain"/*; do
    ln -sfn "$skill" ~/.claude/skills/"$(basename "$skill")"
  done
done
```
