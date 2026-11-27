import type { AgentPolicy, PolicyDecision, PolicyMap, ToolUseContext } from './types.ts';

function matchesPrefix(targetPath: string, patterns: string[]): boolean {
  const normalized = targetPath.replace(/^\/+/, '');
  return patterns.some((pattern) => {
    const prefix = pattern.replace(/\*+.*$/, '');
    return normalized.startsWith(prefix);
  });
}

function matchesCommand(command: string, patterns: string[]): string | undefined {
  return patterns.find((pattern) => command.includes(pattern));
}

/** Evaluates a tool invocation against an agent's configured policy. */
export function evaluateToolUse(ctx: ToolUseContext, policies: PolicyMap): PolicyDecision {
  const policy: AgentPolicy | undefined = policies[ctx.agent];
  if (!policy) {
    return { allowed: false, requiresApproval: false, reason: `Unknown agent: ${ctx.agent}` };
  }

  if (!policy.allowedTools.includes(ctx.tool)) {
    return {
      allowed: false,
      requiresApproval: false,
      reason: `Tool '${ctx.tool}' is not permitted for agent '${ctx.agent}'`,
    };
  }

  if (ctx.command && policy.deniedCommands) {
    const denied = matchesCommand(ctx.command, policy.deniedCommands);
    if (denied) {
      return {
        allowed: false,
        requiresApproval: false,
        reason: `Command matches denied pattern '${denied}'`,
      };
    }
  }

  if (ctx.targetPath && policy.allowedPaths && (ctx.tool === 'write' || ctx.tool === 'edit')) {
    if (!matchesPrefix(ctx.targetPath, policy.allowedPaths)) {
      return {
        allowed: false,
        requiresApproval: false,
        reason: `Path '${ctx.targetPath}' is outside allowed paths for '${ctx.agent}'`,
      };
    }
  }

  if (ctx.command && policy.requireApprovalFor) {
    const gated = matchesCommand(ctx.command, policy.requireApprovalFor);
    if (gated) {
      return {
        allowed: true,
        requiresApproval: true,
        reason: `Command '${gated}' requires explicit human approval`,
      };
    }
  }

  return { allowed: true, requiresApproval: false, reason: 'Allowed by policy' };
}
