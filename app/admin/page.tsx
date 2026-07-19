import Link from 'next/link';
import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { categories } from '@/data/categories';
import { Guide, Product } from '@/data/types';
import AdminSetupNotice from '@/components/admin/AdminSetupNotice';

export default async function AdminOverviewPage() {
  try {
    const [{ data: guides }, ...productResults] = await Promise.all([
      readJsonFile<Guide[]>('data/guides.json'),
      ...categories.map((c) => readJsonFile<Product[]>(`data/products/${c.slug}.json`))
    ]);

    const published = guides.filter((g) => g.status === 'published').length;
    const drafts = guides.length - published;
    const totalProducts = productResults.reduce((sum, r) => sum + r.data.length, 0);

    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-slate-500">Manage guides and product listings for the site.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Published guides" value={published} />
          <StatCard label="Draft guides" value={drafts} />
          <StatCard label="Total products" value={totalProducts} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="font-bold text-slate-900">Guides</h2>
            <p className="mt-1 text-sm text-slate-500">{guides.length} total — see all, edit, delete, or publish a new one.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/admin/guides" className="btn-secondary">
                View guides
              </Link>
              <Link href="/admin/guides/new" className="btn-primary">
                New guide
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-bold text-slate-900">Products</h2>
            <p className="mt-1 text-sm text-slate-500">{totalProducts} total across {categories.length} categories.</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {categories.map((c, i) => (
                <li key={c.slug} className="flex justify-between">
                  <span>{c.pluralName}</span>
                  <span className="text-slate-400">{productResults[i].data.length}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/admin/products" className="btn-secondary">
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
        <div className="mt-6">
          <AdminSetupNotice message={isGithubContentError(err) ? message : `Something went wrong loading content: ${message}`} />
        </div>
      </div>
    );
  }
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-6">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
