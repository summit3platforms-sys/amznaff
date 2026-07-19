import Link from 'next/link';
import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { categories } from '@/data/categories';
import { Guide } from '@/data/types';
import GuidesTable from '@/components/admin/GuidesTable';
import AdminSetupNotice from '@/components/admin/AdminSetupNotice';

export default async function AdminGuidesPage() {
  try {
    const { data: guides } = await readJsonFile<Guide[]>('data/guides.json');
    return (
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Guides</h1>
            <p className="mt-1 text-slate-500">All buying-guide articles, published and draft.</p>
          </div>
          <Link href="/admin/guides/new" className="btn-primary">
            New guide
          </Link>
        </div>
        <div className="mt-6">
          <GuidesTable guides={guides} categories={categories} />
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Guides</h1>
        <div className="mt-6">
          <AdminSetupNotice message={isGithubContentError(err) ? message : `Something went wrong loading guides: ${message}`} />
        </div>
      </div>
    );
  }
}
