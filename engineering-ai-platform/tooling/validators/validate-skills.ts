import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseMarkdownFrontmatter, readText, walkFiles } from '../policy-engine/src/frontmatter.ts';

const rootDir = resolve(import.meta.dirname, '../..');
const skillsDir = resolve(rootDir, 'skills');
const skillFiles = walkFiles(skillsDir, (file) => file.endsWith('/SKILL.md'));

const errors: string[] = [];

for (const file of skillFiles) {
  const { frontmatter, body } = parseMarkdownFrontmatter(readText(file));
  for (const field of ['name', 'description', 'domain', 'version']) {
    if (!frontmatter[field]) {
      errors.push(`${file}: missing frontmatter field '${field}'`);
    }
  }
  if (body.length < 40) {
    errors.push(`${file}: skill body is unexpectedly short`);
  }
}

if (!existsSync(skillsDir) || skillFiles.length === 0) {
  errors.push('No SKILL.md files found under skills/');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${skillFiles.length} skills successfully.`);
