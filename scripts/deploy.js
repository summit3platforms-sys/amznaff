#!/usr/bin/env node
/**
 * One-shot deploy helper.
 *
 * Runs a production build (fails fast on type errors), then commits and
 * pushes to the `main` branch. Vercel is expected to be connected to this
 * GitHub repo via its native Git integration, which triggers a deployment
 * automatically on every push — so "push" here is the only step needed to
 * ship a change. See DEPLOY.md for one-time setup.
 *
 * Usage:
 *   npm run deploy               -> commit message "chore: update site"
 *   npm run deploy -- "message"  -> custom commit message
 */
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

const message = process.argv[2] || 'chore: update site';

try {
  console.log('\n▶ Building...');
  run('npm run build');

  console.log('\n▶ Staging changes...');
  run('git add -A');

  // Nothing to commit is not an error for this script.
  try {
    run(`git commit -m ${JSON.stringify(message)}`);
  } catch (e) {
    console.log('  (nothing to commit)');
  }

  console.log('\n▶ Pushing to origin...');
  run('git push origin HEAD');

  console.log('\n✅ Pushed. Vercel will build and deploy automatically.');
} catch (err) {
  console.error('\n❌ Deploy step failed — see error above. Nothing further was pushed.');
  process.exit(1);
}
