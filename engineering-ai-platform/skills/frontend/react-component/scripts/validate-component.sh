#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <path-to-component.tsx>" >&2
  exit 1
fi

TARGET="$1"

if [ ! -f "$TARGET" ]; then
  echo "Error: File not found: $TARGET" >&2
  exit 1
fi

if grep -qE ':\s*any\b|as\s+any\b' "$TARGET"; then
  echo "Error: Disallowed 'any' type found in $TARGET" >&2
  exit 1
fi

echo "Component validation passed: $TARGET"
