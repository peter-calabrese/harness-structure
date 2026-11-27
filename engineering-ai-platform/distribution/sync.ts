import { cpSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');
const dryRun = process.argv.includes('--dry-run');
const targetIdx = process.argv.indexOf('--target');
const targetPath = targetIdx !== -1 ? process.argv[targetIdx + 1] : undefined;

function copyPath(src: string, dest: string): void {
  if (dryRun) {
    console.log(`[DRY RUN] ${src} -> ${dest}`);
    return;
  }
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`Synced ${dest}`);
}

function syncDirFiles(srcDir: string, destDir: string, suffix: string): number {
  let count = 0;
  for (const entry of readdirSync(srcDir)) {
    if (entry.endsWith(suffix)) {
      copyPath(join(srcDir, entry), join(destDir, entry));
      count++;
    }
  }
  return count;
}

if (!targetPath) {
  const manifest = readFileSync(resolve(rootDir, 'distribution/manifest.yaml'), 'utf8');
  const repos = [...manifest.matchAll(/repo:\s*(.+)/g)].map((m) => m[1]?.trim()).filter(Boolean);
  console.log(`${dryRun ? '[DRY RUN] ' : ''}Sync targets (${repos.length}): ${repos.join(', ')}`);
  console.log('Pass --target <repo-path> to install VS Code Copilot harness files locally.');
  process.exit(0);
}

const targetRoot = resolve(targetPath);
const copilotDir = resolve(rootDir, 'harnesses/copilot');

copyPath(join(copilotDir, 'copilot-instructions.md'), join(targetRoot, '.github/copilot-instructions.md'));
copyPath(join(copilotDir, 'mcp.json'), join(targetRoot, '.vscode/mcp.json'));

const agentsCount = syncDirFiles(join(copilotDir, 'agents'), join(targetRoot, '.github/agents'), '.agent.md');
const instrCount = syncDirFiles(
  join(copilotDir, 'instructions'),
  join(targetRoot, '.github/instructions'),
  '.instructions.md',
);
const promptsCount = syncDirFiles(join(copilotDir, 'prompts'), join(targetRoot, '.github/prompts'), '.prompt.md');

let skillsCount = 0;
const skillsRoot = resolve(rootDir, 'skills');
for (const domain of readdirSync(skillsRoot)) {
  const domainDir = join(skillsRoot, domain);
  if (!statSync(domainDir).isDirectory()) continue;
  for (const skill of readdirSync(domainDir)) {
    const skillDir = join(domainDir, skill);
    if (!statSync(skillDir).isDirectory()) continue;
    copyPath(skillDir, join(targetRoot, '.github/skills', skill));
    skillsCount++;
  }
}

console.log(
  `${dryRun ? '[DRY RUN] ' : ''}VS Code Copilot sync complete: ${agentsCount} agents, ${instrCount} instructions, ${promptsCount} prompts, ${skillsCount} skills.`,
);
