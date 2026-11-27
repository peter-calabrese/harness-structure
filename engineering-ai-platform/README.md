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

## 1. Global VS Code Agents Panel Setup

1. Open VS Code User Settings (`Ctrl+Shift+P` → **Preferences: Open User Settings (JSON)**).
2. Replace `<PATH_TO_PLATFORM>` with the absolute path to your `engineering-ai-platform` folder (use forward slashes `/` or escaped `\\` on Windows, e.g., `C:/Users/<you>/dev/engineering-ai-platform`):

```json
{
  "chat.agentFilesLocations": {
    "<PATH_TO_PLATFORM>/harnesses/copilot/agents": true
  },
  "chat.instructionsFilesLocations": {
    "<PATH_TO_PLATFORM>/harnesses/copilot/instructions": true
  },
  "chat.promptFilesLocations": {
    "<PATH_TO_PLATFORM>/harnesses/copilot/prompts": true
  },
  "chat.agentSkillsLocations": {
    "<PATH_TO_PLATFORM>/skills/shared": true,
    "<PATH_TO_PLATFORM>/skills/frontend": true,
    "<PATH_TO_PLATFORM>/skills/backend": true,
    "<PATH_TO_PLATFORM>/skills/devops": true,
    "<PATH_TO_PLATFORM>/skills/data": true
  }
}
```

3. Reload VS Code (`Ctrl+Shift+P` → **Developer: Reload Window**).

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
