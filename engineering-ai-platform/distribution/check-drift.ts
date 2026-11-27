import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');
const version = readFileSync(resolve(rootDir, 'VERSION'), 'utf8').trim();

const checks = [
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

const drifted: string[] = [];

for (const item of checks) {
  const expected = readFileSync(resolve(rootDir, item.template), 'utf8').replaceAll('{{VERSION}}', version);
  const actual = readFileSync(resolve(rootDir, item.output), 'utf8');
  if (expected !== actual) {
    drifted.push(item.output);
  }
}

if (drifted.length > 0) {
  console.error(`Drift detected in: ${drifted.join(', ')}. Run 'npm run generate'.`);
  process.exit(1);
}

console.log('No drift detected across generated harness files.');
