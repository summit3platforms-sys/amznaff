#!/usr/bin/env node
// Installs scripts/git-hooks/post-commit into .git/hooks/post-commit so
// every `git commit` auto-pushes to your remote. Git doesn't track hook
// scripts itself, so this copy step runs once (or again any time you
// re-clone the repo).
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'git-hooks', 'post-commit');
const destDir = path.join(__dirname, '..', '.git', 'hooks');
const dest = path.join(destDir, 'post-commit');

if (!fs.existsSync(path.join(__dirname, '..', '.git'))) {
  console.error('No .git directory found — run this from inside a git repo (after `git init`).');
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
fs.chmodSync(dest, 0o755);
console.log('✅ Installed post-commit hook — commits will now auto-push to your remote.');
