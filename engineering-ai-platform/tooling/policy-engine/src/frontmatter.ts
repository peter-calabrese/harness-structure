import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

export interface ParsedMarkdown {
  frontmatter: Record<string, string | string[]>;
  body: string;
}

/** Parses simple YAML frontmatter (`key: value` and `- item` lists) from a Markdown file. */
export function parseMarkdownFrontmatter(content: string): ParsedMarkdown {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const rawYaml = match[1] ?? '';
  const body = (match[2] ?? '').trim();
  const frontmatter: Record<string, string | string[]> = {};
  let currentListKey: string | null = null;

  for (const line of rawYaml.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (trimmed.startsWith('- ') && currentListKey) {
      const list = frontmatter[currentListKey];
      if (Array.isArray(list)) {
        list.push(trimmed.slice(2).trim());
      }
      continue;
    }

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;

    const key = trimmed.slice(0, colonIdx).trim();
    const value = trimmed.slice(colonIdx + 1).trim();
    if (value === '') {
      frontmatter[key] = [];
      currentListKey = key;
    } else {
      frontmatter[key] = value.replace(/^["']|["']$/g, '');
      currentListKey = null;
    }
  }

  return { frontmatter, body };
}

/** Recursively collects files matching a predicate under a directory. */
export function walkFiles(dir: string, predicate: (filePath: string) => boolean): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...walkFiles(fullPath, predicate));
    } else if (predicate(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

export function readText(filePath: string): string {
  return readFileSync(filePath, 'utf8');
}
