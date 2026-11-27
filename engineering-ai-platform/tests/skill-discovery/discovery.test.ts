import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import { parseMarkdownFrontmatter, readText, walkFiles } from '../../tooling/policy-engine/src/frontmatter.ts';

const rootDir = resolve(import.meta.dirname, '../..');

test('every skill has valid SKILL.md frontmatter', () => {
  const skillsDir = resolve(rootDir, 'skills');
  assert.equal(existsSync(skillsDir), true);

  const skillFiles = walkFiles(skillsDir, (f) => f.endsWith('/SKILL.md'));
  assert.ok(skillFiles.length >= 20, `Expected at least 20 skills, found ${skillFiles.length}`);

  for (const file of skillFiles) {
    const { frontmatter } = parseMarkdownFrontmatter(readText(file));
    assert.ok(frontmatter.name, `${file} missing name`);
    assert.ok(frontmatter.description, `${file} missing description`);
    assert.ok(frontmatter.domain, `${file} missing domain`);
  }
});
