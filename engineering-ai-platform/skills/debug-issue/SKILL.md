---
name: debug-issue
description: Systematic root-cause investigation and verified resolution for bugs and failures.
domain: shared
version: 1.0.0
---

# Debug Issue Skill

## When to Use

When investigating failing tests, runtime exceptions, or unexpected behavior.

## Workflow Steps

1. **Reproduce**: Capture the exact failing command, input, or stack trace.
2. **Isolate**: Narrow the failure to the smallest possible module or input.
3. **Root Cause**: Inspect state, logs, and recent changes to identify why it fails (avoid guessing).
4. **Fix & Verify**: Apply the minimal fix, add a regression test, and re-run the suite.
