#!/bin/bash
# One-command deploy: stages all changes, commits, and pushes to GitHub
# (Vercel auto-deploys on push). Safe to run even if there's nothing new —
# it just skips the commit step in that case.
set -e
cd "$(dirname "$0")"

# Clear any stale git locks left over from an interrupted process
rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/*.lock .git/objects/maintenance.lock

git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
else
  git commit -m "Update $(date +'%Y-%m-%d %H:%M')"
fi

git push origin main
echo "Done — pushed to GitHub. Vercel will redeploy shortly."
