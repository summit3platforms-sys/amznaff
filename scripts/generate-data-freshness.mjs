#!/usr/bin/env node
// Writes data/dataFreshness.json — the date each category's product data was
// last changed, taken from git rather than from the clock.
//
// Why a generated file instead of reading git at build time: Vercel clones
// shallowly, so `git log` is not reliably available during a production build.
// Why not build time itself: using the deploy timestamp would restamp all 402
// products on every deploy, including deploys that change only CSS. Google
// learns to ignore a dateModified that moves without the content moving, and
// then the signal is worth nothing on the pages where it is true.
//
// Run after changing product data:  node scripts/generate-data-freshness.mjs
import { execSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const dir = 'data/products';
const out = {};

for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
  const slug = path.basename(file, '.json');
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${dir}/${file}"`, { encoding: 'utf8' }).trim();
    if (iso) out[slug] = iso.slice(0, 10);
  } catch {
    // A file not yet committed has no history — omit it rather than invent one.
  }
}

writeFileSync('data/dataFreshness.json', JSON.stringify(out, null, 2) + '\n');
console.log(`wrote data/dataFreshness.json — ${Object.keys(out).length} categories`);
