export default function AdminSetupNotice({ message }: { message: string }) {
  return (
    <div className="card border-amber-200 bg-amber-50 p-6">
      <h2 className="font-bold text-amber-900">Admin isn&apos;t connected to GitHub yet</h2>
      <p className="mt-2 text-sm text-amber-800">{message}</p>
      <p className="mt-3 text-sm text-amber-800">
        Add <code className="rounded bg-amber-100 px-1.5 py-0.5">GITHUB_TOKEN</code> (a GitHub personal access token
        with write access to this repo) as an environment variable — locally in <code className="rounded bg-amber-100 px-1.5 py-0.5">.env.local</code>,
        and in your Vercel project&apos;s Settings → Environment Variables for it to work on the live site.
      </p>
    </div>
  );
}
