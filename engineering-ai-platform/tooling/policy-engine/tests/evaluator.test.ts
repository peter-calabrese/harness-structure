import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluateToolUse } from '../src/evaluator.ts';
import type { PolicyMap } from '../src/types.ts';

const samplePolicies: PolicyMap = {
  ui: {
    allowedTools: ['read', 'write', 'edit', 'search', 'bash'],
    allowedPaths: ['src/frontend/**', 'tests/frontend/**'],
  },
  devops: {
    allowedTools: ['read', 'write', 'bash'],
    requireApprovalFor: ['terraform apply'],
  },
  'code-reviewer': {
    allowedTools: ['read', 'search'],
  },
};

test('denies unknown agents', () => {
  const decision = evaluateToolUse({ agent: 'unknown', tool: 'read' }, samplePolicies);
  assert.equal(decision.allowed, false);
});

test('denies write for read-only reviewer', () => {
  const decision = evaluateToolUse(
    { agent: 'code-reviewer', tool: 'write', targetPath: 'src/app.ts' },
    samplePolicies,
  );
  assert.equal(decision.allowed, false);
});

test('denies out-of-scope path writes for ui agent', () => {
  const decision = evaluateToolUse(
    { agent: 'ui', tool: 'write', targetPath: 'src/backend/auth.ts' },
    samplePolicies,
  );
  assert.equal(decision.allowed, false);
});

test('flags approval-required commands for devops', () => {
  const decision = evaluateToolUse(
    { agent: 'devops', tool: 'bash', command: 'terraform apply -auto-approve' },
    samplePolicies,
  );
  assert.equal(decision.allowed, true);
  assert.equal(decision.requiresApproval, true);
});
