import { resolve } from 'node:path';
import { parseMarkdownFrontmatter, readText, walkFiles } from '../policy-engine/src/frontmatter.ts';

const rootDir = resolve(import.meta.dirname, '../..');
const standardsDir = resolve(rootDir, 'standards');
const standardFiles = walkFiles(standardsDir, (file) => file.endsWith('.md'));

const errors: string[] = [];

for (const file of standardFiles) {
  const { frontmatter, body } = parseMarkdownFrontmatter(readText(file));
  for (const field of ['id', 'scope', 'enforcement']) {
    if (!frontmatter[field]) {
      errors.push(`${file}: missing frontmatter field '${field}'`);
    }
  }
  if (body.length < 40) {
    errors.push(`${file}: standard body is unexpectedly short`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${standardFiles.length} standards successfully.`);
