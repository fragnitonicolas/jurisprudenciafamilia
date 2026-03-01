import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const srcDir = resolve(root, 'src');
const distDir = resolve(root, 'dist');

const staticExtensions = new Set([
  '.html',
  '.css',
  '.js',
  '.mjs',
  '.cjs',
  '.json',
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.ico',
]);

const entries = await readdir(srcDir, { withFileTypes: true });

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of entries) {
  if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
    continue;
  }

  const source = resolve(srcDir, entry.name);
  const target = resolve(distDir, entry.name);

  if (entry.isDirectory()) {
    await cp(source, target, { recursive: true });
    continue;
  }

  const extension = entry.name.slice(entry.name.lastIndexOf('.'));
  if (staticExtensions.has(extension)) {
    await cp(source, target);
  }
}

console.log('Web build completed: static assets copied to apps/web/dist');
