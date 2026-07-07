#!/usr/bin/env node
/**
 * Fully automatic mode: watches data/, app/, components/, and lib/ for file
 * changes and auto-commits + pushes on every change (debounced), so Vercel's
 * Git integration picks it up and deploys within seconds. This is what
 * gives you "whenever new changes are made, it auto-pushes to Git, and
 * Vercel deploys" with zero manual steps while you're actively editing.
 *
 * Run this in a terminal while you work:
 *   npm run watch-deploy
 *
 * Stop it with Ctrl+C when you're done editing for the session.
 *
 * Note: this intentionally skips the production build step (unlike
 * `npm run deploy`) to keep pushes fast. Vercel runs the real build on its
 * side and will show you if something broke — check the Vercel dashboard
 * or enable deployment notifications.
 */
const chokidar = require('chokidar');
const { execSync } = require('child_process');

const WATCH_PATHS = ['data', 'app', 'components', 'lib', 'public'];
const DEBOUNCE_MS = 4000;

let timer = null;
let pending = false;

function commitAndPush() {
  pending = false;
  try {
    execSync('git add -A', { stdio: 'inherit' });
    const status = execSync('git status --porcelain').toString().trim();
    if (!status) {
      console.log('[watch-deploy] no changes to commit');
      return;
    }
    const message = `chore: auto-update ${new Date().toISOString()}`;
    execSync(`git commit -m ${JSON.stringify(message)}`, { stdio: 'inherit' });
    execSync('git push origin HEAD', { stdio: 'inherit' });
    console.log('[watch-deploy] pushed — Vercel will deploy automatically');
  } catch (err) {
    console.error('[watch-deploy] push failed:', err.message);
  }
}

function schedule() {
  pending = true;
  if (timer) clearTimeout(timer);
  timer = setTimeout(commitAndPush, DEBOUNCE_MS);
}

console.log(`[watch-deploy] watching ${WATCH_PATHS.join(', ')} for changes...`);
chokidar
  .watch(WATCH_PATHS, { ignoreInitial: true, ignored: ['**/node_modules/**', '**/.next/**'] })
  .on('all', (event, path) => {
    console.log(`[watch-deploy] ${event}: ${path}`);
    schedule();
  });

process.on('SIGINT', () => {
  if (pending) commitAndPush();
  process.exit(0);
});
