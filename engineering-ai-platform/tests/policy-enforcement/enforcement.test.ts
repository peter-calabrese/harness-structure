import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluateToolUse } from '../../tooling/policy-engine/src/evaluator.ts';
import type { PolicyMap } from '../../tooling/policy-engine/src/types.ts';

const policies: PolicyMap = {
  backend: {
    allowedTools: ['read', 'write', 'edit', 'search', 'bash'],
    allowedPaths: ['src/backend/**', 'tests/backend/**'],
  },
  'security-reviewer': {
    allowedTools: ['read', 'search'],
  },
};

test('backend agent cannot write to frontend paths', () => {
  const res = evaluateToolUse(
    { agent: 'backend', tool: 'write', targetPath: 'src/frontend/App.tsx' },
    policies,
  );
  assert.equal(res.allowed, false);
});

test('security-reviewer is strictly read-only', () => {
  const res = evaluateToolUse(
    { agent: 'security-reviewer', tool: 'edit', targetPath: 'policies/agent-permissions.yaml' },
    policies,
  );
  assert.equal(res.allowed, false);
});
