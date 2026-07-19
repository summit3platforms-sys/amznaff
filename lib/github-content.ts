// ---------------------------------------------------------------------------
// Live content persistence for the admin dashboard (/admin).
//
// This site's data (guides.json, products/*.json) lives in files committed
// to git, and Vercel's production filesystem is read-only at request time —
// so an admin edit can't just write to disk and be done. Instead, every
// admin write commits the updated JSON file straight to the GitHub repo via
// the Contents API. That commit lands on the same branch push.sh pushes to,
// so Vercel's existing auto-deploy picks it up automatically — the admin
// panel is really just a UI in front of the same git-based deploy pipeline
// used everywhere else on this project.
//
// Reads also go through the GitHub API (rather than importing the bundled
// JSON) so the admin list/edit views always reflect the latest committed
// content, even in the ~30-60s window while Vercel is still rebuilding
// after a previous edit.
//
// Requires these environment variables (see .env.example):
//   GITHUB_TOKEN   — a GitHub personal access token with repo write access
//   GITHUB_OWNER   — repo owner, defaults to this project's known owner
//   GITHUB_REPO    — repo name, defaults to this project's known repo
//   GITHUB_BRANCH  — branch to commit to, defaults to "main"
// ---------------------------------------------------------------------------

const GITHUB_API = 'https://api.github.com';

class GithubContentError extends Error {}

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || 'summit3platforms-sys';
  const repo = process.env.GITHUB_REPO || 'amznaff';
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!token) {
    throw new GithubContentError(
      'GITHUB_TOKEN is not set. Add it as an environment variable (locally in .env.local, and in Vercel project settings) to enable live admin edits.'
    );
  }
  return { token, owner, repo, branch };
}

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
}

/** Reads and JSON-parses a file from the repo, returning its current git blob SHA (needed for writes). */
export async function readJsonFile<T>(path: string): Promise<{ data: T; sha: string }> {
  const { token, owner, repo, branch } = getConfig();
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURI(path)}?ref=${branch}`, {
    headers: authHeaders(token),
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new GithubContentError(`Failed to read ${path} from GitHub (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  const content = Buffer.from(json.content, 'base64').toString('utf-8');
  return { data: JSON.parse(content) as T, sha: json.sha as string };
}

/** Commits a new version of a JSON file to the repo. Pass the sha from a prior readJsonFile call to avoid clobbering concurrent edits. */
export async function writeJsonFile(path: string, data: unknown, message: string, sha?: string): Promise<void> {
  const { token, owner, repo, branch } = getConfig();
  const content = Buffer.from(JSON.stringify(data, null, 2) + '\n', 'utf-8').toString('base64');
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURI(path)}`, {
    method: 'PUT',
    headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, content, sha, branch })
  });
  if (!res.ok) {
    throw new GithubContentError(`Failed to write ${path} to GitHub (${res.status}): ${await res.text()}`);
  }
}

export function isGithubContentError(err: unknown): err is GithubContentError {
  return err instanceof GithubContentError;
}
