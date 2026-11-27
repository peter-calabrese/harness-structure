#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <path-to-controller.java>" >&2
  exit 1
fi

TARGET="$1"

if [ ! -f "$TARGET" ]; then
  echo "Error: File not found: $TARGET" >&2
  exit 1
fi

if grep -qE 'SELECT\s+\*' "$TARGET"; then
  echo "Error: Avoid SELECT * in API/repository files: $TARGET" >&2
  exit 1
fi

if grep -qE 'System\.out\.print' "$TARGET"; then
  echo "Error: Use SLF4J Logger instead of System.out in $TARGET" >&2
  exit 1
fi

echo "API validation passed: $TARGET"
