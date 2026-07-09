import Link from 'next/link';
import { categories } from '@/data/categories';
import { guides, getGuidesByCategory, GuideSummary } from '@/data/guides';

export default function GuideSidebar({ currentSlug }: { currentSlug: string }) {
  const related = guides.filter((g) => g.slug !== currentSlug).slice(0, 4);

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-slate-900">Guide categories</h3>
        <ul className="mt-3 space-y-2">
          {categories.map((c) => {
            const count = getGuidesByCategory(c.slug).length;
            return (
              <li key={c.slug} className="flex items-center justify-between text-sm">
                <Link href={`/${c.slug}`} className="text-slate-600 hover:text-brand-600">
                  {c.pluralName}
                </Link>
                <span className="text-xs text-slate-400">{count}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="card p-5">
        <h3 className="text-sm font-semibold text-slate-900">Related guides</h3>
        {related.length > 0 ? (
          <ul className="mt-3 space-y-3">
            {related.map((g: GuideSummary) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-sm font-medium text-slate-700 hover:text-brand-600">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-400">More guides coming soon.</p>
        )}
      </div>
    </aside>
  );
}
