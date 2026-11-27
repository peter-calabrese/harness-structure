import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseMarkdownFrontmatter, readText, walkFiles } from '../policy-engine/src/frontmatter.ts';

const rootDir = resolve(import.meta.dirname, '../..');
const agentsDir = resolve(rootDir, 'agents');
const agentFiles = walkFiles(agentsDir, (file) => file.endsWith('.md'));

const errors: string[] = [];

for (const file of agentFiles) {
  const { frontmatter, body } = parseMarkdownFrontmatter(readText(file));
  for (const field of ['name', 'description', 'domain', 'model_tier']) {
    if (!frontmatter[field]) {
      errors.push(`${file}: missing frontmatter field '${field}'`);
    }
  }

  const standards = frontmatter.standards;
  if (!Array.isArray(standards) || standards.length === 0) {
    errors.push(`${file}: must reference at least one standard`);
  } else {
    for (const stdPath of standards) {
      if (!existsSync(resolve(rootDir, stdPath))) {
        errors.push(`${file}: referenced standard not found: ${stdPath}`);
      }
    }
  }

  if (body.length < 40) {
    errors.push(`${file}: agent body is unexpectedly short`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${agentFiles.length} agents successfully.`);
