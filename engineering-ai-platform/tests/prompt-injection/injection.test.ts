import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';

const rootDir = resolve(import.meta.dirname, '../..');

test('security standard and fixture cover prompt injection defense', () => {
  const securityStd = readFileSync(resolve(rootDir, 'standards/security.md'), 'utf8');
  const fixture = readFileSync(resolve(rootDir, 'tests/fixtures/untrusted-readme.md'), 'utf8');

  assert.match(securityStd, /Prompt injection defense/i);
  assert.match(fixture, /IGNORE PREVIOUS INSTRUCTIONS/i);
});
