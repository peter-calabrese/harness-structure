export interface ToolUseContext {
  agent: string;
  tool: string;
  targetPath?: string;
  command?: string;
}

export interface PolicyDecision {
  allowed: boolean;
  requiresApproval: boolean;
  reason: string;
}

export interface AgentPolicy {
  allowedTools: string[];
  allowedPaths?: string[];
  deniedCommands?: string[];
  requireApprovalFor?: string[];
}

export type PolicyMap = Record<string, AgentPolicy>;
