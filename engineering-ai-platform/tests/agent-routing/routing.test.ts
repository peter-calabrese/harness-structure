import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';

const rootDir = resolve(import.meta.dirname, '../..');

test('routing table maps domains to specialized agents', () => {
  const routes = JSON.parse(
    readFileSync(resolve(rootDir, 'tests/fixtures/sample-routes.json'), 'utf8'),
  ) as Array<{ prompt: string; expectedAgent: string }>;

  const orchestrator = readFileSync(resolve(rootDir, 'agents/orchestrator.md'), 'utf8');
  for (const item of routes) {
    assert.ok(
      orchestrator.includes(`\`${item.expectedAgent}\``),
      `Orchestrator does not reference agent ${item.expectedAgent}`,
    );
  }
});
