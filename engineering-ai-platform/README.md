# Engineering AI Platform (VS Code Copilot Agents)

Self-contained global **VS Code Copilot Agents** setup for **React + TypeScript** (frontend), **Java + Spring Boot** (backend), **DevOps**, and **Data**. Everything is structured so you can drag and drop it directly into your Windows `.copilot` folder and use it across all projects.

---

## What Each Section Does

- **`copilot-instructions.md`** — **Always-on global rules.** Loaded automatically in every Copilot chat and agent session across all projects (core engineering, architecture, security, testing, and agent routing).
- **`agents/`** — **Custom specialized agents (`*.agent.md`).** Selectable in the VS Code Agents dropdown (`orchestrator`, `backend`, `ui`, `data`, `devops`, `code-reviewer`, `security-reviewer`), each with its own role, tool permissions, handoffs, and inlined domain standards.
- **`instructions/`** — **Auto-applied file rules (`*.instructions.md`).** Automatically attached when you work on matching files (`global` for `**`, `frontend` for `**/*.{ts,tsx,jsx,css,scss}`, `backend` for `**/*.java`, `devops` for CI/Terraform/Docker/K8s, and `data` for SQL/migrations).
- **`skills/`** — **On-demand workflows (`<skill-name>/SKILL.md`).** 20 reusable task playbooks (e.g., `create-api`, `react-component`, `code-review`, `database-migration`) that Copilot discovers and loads automatically when relevant.
- **`mcp.json`** — **Optional MCP server config.** Configures the `github` MCP server and the `claude-code` MCP server (`claude mcp serve`) so `orchestrator` can delegate tasks to Claude Code.

---

## Step-by-Step Setup (Windows)

### 1. Open your `.copilot` folder
Open File Explorer and go to:
```text
C:\Users\<your-username>\.copilot
```
*(If the `.copilot` folder does not exist yet, create it.)*

### 2. Drag and drop the files
From `engineering-ai-platform\`, copy (drag and drop) these 4 items into `C:\Users\<your-username>\.copilot\`:
- `copilot-instructions.md`
- `agents\`
- `instructions\`
- `skills\`

Your `.copilot` folder should look like this:
```text
C:\Users\<your-username>\.copilot\
├── copilot-instructions.md
├── agents\
├── instructions\
└── skills\
```

### 3. Remove deprecated location settings (if you had them)
1. In VS Code, press `Ctrl+Shift+P` and run **Preferences: Open User Settings (JSON)**.
2. Remove any old `chat.agentFilesLocations`, `chat.instructionsFilesLocations`, `chat.promptFilesLocations`, or `chat.agentSkillsLocations` entries.

### 4. *(Optional)* Enable GitHub & Claude Code MCP servers
1. Make sure the Claude Code CLI is installed and logged in (`claude --version` in PowerShell).
2. In VS Code, press `Ctrl+Shift+P` and run **MCP: Open User Configuration**.
3. Copy the `"servers"` block from `mcp.json` into that file.
4. Press `Ctrl+Shift+P`, run **MCP: List Servers**, and start **`claude-code`** if it isn't already running.

### 5. Switch to the Copilot harness and reload
1. In the VS Code Chat / Agents view, make sure the harness/session target is set to **Copilot** (not **Local**).
2. Press `Ctrl+Shift+P` and run **Developer: Reload Window**.
3. Press `Ctrl+Shift+P` and run **Chat: Open Customizations** to confirm your agents, instructions, and skills are loaded.
