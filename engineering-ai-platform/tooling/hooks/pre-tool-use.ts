import { evaluateToolUse } from '../policy-engine/src/evaluator.ts';
import type { PolicyMap } from '../policy-engine/src/types.ts';

const DEFAULT_POLICIES: PolicyMap = {
  default: {
    allowedTools: ['read', 'write', 'edit', 'search', 'bash'],
    deniedCommands: ['rm -rf /', 'terraform apply', 'git push --force'],
  },
};

const rawInput = process.argv[2];
if (rawInput) {
  const payload = JSON.parse(rawInput) as { agent?: string; tool?: string; command?: string; targetPath?: string };
  const decision = evaluateToolUse(
    {
      agent: payload.agent ?? 'default',
      tool: payload.tool ?? 'read',
      command: payload.command,
      targetPath: payload.targetPath,
    },
    DEFAULT_POLICIES,
  );
  if (!decision.allowed) {
    console.error(`Blocked by pre-tool-use hook: ${decision.reason}`);
    process.exit(2);
  }
}

console.log('pre-tool-use check passed');
