import { categories } from '@/data/categories';
import GuideForm from '@/components/admin/GuideForm';

export default function NewGuidePage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-slate-900">New guide</h1>
      <p className="mt-1 text-slate-500">Publishing this commits directly to the live site.</p>
      <div className="mt-6 max-w-2xl">
        <GuideForm mode="create" categories={categories} />
      </div>
    </div>
  );
}
