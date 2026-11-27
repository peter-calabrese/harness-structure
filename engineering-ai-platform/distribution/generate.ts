import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');
const version = readFileSync(resolve(rootDir, 'VERSION'), 'utf8').trim();

const targets = [
  {
    template: 'distribution/templates/copilot-instructions.md.tmpl',
    output: 'harnesses/copilot/copilot-instructions.md',
  },
  {
    template: 'distribution/templates/agents.md.tmpl',
    output: 'harnesses/codex/AGENTS.md',
  },
  {
    template: 'distribution/templates/claude.md.tmpl',
    output: 'harnesses/claude/CLAUDE.md',
  },
];

for (const item of targets) {
  const tmpl = readFileSync(resolve(rootDir, item.template), 'utf8');
  const rendered = tmpl.replaceAll('{{VERSION}}', version);
  writeFileSync(resolve(rootDir, item.output), rendered, 'utf8');
}

console.log(`Generated ${targets.length} provider root files for version ${version}.`);
