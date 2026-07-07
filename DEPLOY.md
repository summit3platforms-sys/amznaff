# Deployment Setup (one-time)

This project already has a local git repo with an initial commit. You need
to (1) create a GitHub repo and push this code to it, and (2) connect that
repo to Vercel. After that, **every push to `main` deploys automatically** —
Vercel's GitHub integration handles that natively, no extra config needed.

## 1. Create the GitHub repo

1. Go to https://github.com/new
2. Name it (e.g. `amazon-aff-site`), leave it **empty** — do not initialize
   with a README, .gitignore, or license (this project already has all of
   those; an empty repo avoids a merge conflict on first push).
3. Set visibility (Private recommended while you're filling in real ASINs
   and images).
4. Click **Create repository** and copy the URL it gives you, e.g.
   `https://github.com/yourname/amazon-aff-site.git`

## 2. Push this project to it

Run these from inside the project folder on your own machine (in Terminal,
Finder → right-click → "New Terminal at Folder", or your code editor's
terminal):

```bash
cd "path/to/AMAZON AFF/amazon-aff-site"
git remote add origin https://github.com/yourname/amazon-aff-site.git
git push -u origin main
```

If prompted for credentials, GitHub requires a Personal Access Token (not
your account password) — create one at
https://github.com/settings/tokens → "Generate new token (classic)" → scope
`repo` → use it as the password when Git prompts you.

## 3. Connect Vercel (this is what makes deploys automatic)

1. Go to https://vercel.com/new
2. Click **Import Git Repository**, authorize Vercel to access your GitHub
   account if prompted, and select the repo you just pushed.
3. Vercel auto-detects Next.js — leave the build settings as default.
4. Under **Environment Variables**, add:
   - `AMAZON_ASSOCIATE_TAG` = your real Amazon Associates tracking ID
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g.
     `https://amazon-aff-site.vercel.app` or your custom domain once set up)
5. Click **Deploy**.

From this point on, **every `git push` to `main` triggers a new Vercel
deployment automatically** — that's Vercel's native Git integration, not
something extra to configure.

## 4. Keeping it automatic while you edit

Three ways to push changes without thinking about it, all defined in
`package.json`:

**Auto-push hook (set once, works forever):**

```bash
npm run install-hooks
```

Installs a `post-commit` git hook (from `scripts/git-hooks/post-commit`)
that pushes automatically every time you run `git commit`, so you never
forget the push step. This also runs automatically after `npm install`.

**Watch mode (recommended while actively working):**

```bash
npm run watch-deploy
```

Leave this running in a terminal tab. It watches `data/`, `app/`,
`components/`, `lib/`, and `public/` and automatically commits + pushes any
change (debounced ~4s) so Vercel picks it up within seconds. Stop with
Ctrl+C.

**One-shot deploy (recommended before you walk away / for CI-style use):**

```bash
npm run deploy
```

This runs a full production build first (catches errors before they hit
Vercel), then commits and pushes.

## Why I can't push directly from this session

I (the assistant) built and committed this project in an isolated sandbox
that has no outbound network access to GitHub or the npm registry — that's
a security boundary of the environment, not something I can work around. So
step 2 above has to be run from your own machine, which does have normal
internet access. Everything else (all the code, the data, the deploy
scripts) is done — this is a five-minute copy/paste job.

## Adding a custom domain (optional)

In the Vercel project → Settings → Domains → add your domain and follow the
DNS instructions Vercel gives you. Update `NEXT_PUBLIC_SITE_URL` to match
once it's live so the sitemap and OpenGraph tags use the right domain.
