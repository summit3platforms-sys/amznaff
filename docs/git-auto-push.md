# Git auto-push setup

Committing on `main` pushes automatically, and Vercel deploys from that push.
Nothing else needs to be run.

## How the credential works

`.git/hooks/post-commit` pushes to `origin` after every commit. The push needs
a GitHub token, which is read by `.git/credential-from-env.sh` — a credential
helper scoped to this repository via `credential.helper` in `.git/config`.

That helper reads `GITHUB_TOKEN` from `.env.local`, the same file the `/admin`
dashboard already uses to commit content edits. The token therefore lives in
exactly one place on disk, and `.env.local` is gitignored.

## Why not the macOS keychain

The keychain helper was tried first and does not survive the hook. Running
`git credential fill` by hand returns the token correctly, but the identical
lookup made from inside `git-remote-https` during a push returns nothing, and
git then fails with:

    fatal: could not read Password for '...': Device not configured

That is git attempting to fall back to an interactive prompt with no terminal
attached. It is a keychain ACL behaviour, not a bad token, and it cannot be
resolved non-interactively.

## Rotating the token

Edit `GITHUB_TOKEN` in `.env.local` and update the same value in Vercel's
environment variables. Nothing else changes — no git config, no keychain entry.

The token is a GitHub fine-grained PAT and needs **Contents: Read and write**
on `summit3platforms-sys/amznaff`. Read-only is the default when creating one
and will fail with `Resource not accessible by personal access token`. If the
token is edited on GitHub rather than regenerated, the token string stays the
same and neither `.env.local` nor Vercel needs updating.

## If a push ever fails

1. `git log --oneline origin/main..main` — shows what has not been pushed.
2. `git push origin main` — pushes manually; the commits are safe locally.
3. Check `GITHUB_TOKEN` is still present in `.env.local` and still has write
   permission on GitHub.

## Note on `.git/` files

Neither the hook nor the credential helper is tracked by git, because nothing
under `.git/` can be. If this repository is ever re-cloned, both need to be
recreated — the hook from `push.sh` at the project root, and the helper from
the description above.
