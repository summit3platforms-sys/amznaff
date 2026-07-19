import { notFound } from 'next/navigation';
import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { categories } from '@/data/categories';
import { Guide } from '@/data/types';
import GuideForm from '@/components/admin/GuideForm';
import AdminSetupNotice from '@/components/admin/AdminSetupNotice';

export default async function EditGuidePage({ params }: { params: { slug: string } }) {
  try {
    const { data: guides } = await readJsonFile<Guide[]>('data/guides.json');
    const guide = guides.find((g) => g.slug === params.slug);
    if (!guide) notFound();

    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Edit guide</h1>
        <p className="mt-1 text-slate-500">Saving this commits directly to the live site.</p>
        <div className="mt-6 max-w-2xl">
          <GuideForm mode="edit" initial={guide} categories={categories} />
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Edit guide</h1>
        <div className="mt-6">
          <AdminSetupNotice message={isGithubContentError(err) ? message : `Something went wrong loading this guide: ${message}`} />
        </div>
      </div>
    );
  }
}
