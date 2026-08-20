import Link from 'next/link';
import { categories } from '@/data/categories';
import { getPublishedGuides, getGuidesByCategory, GuideSummary } from '@/data/guides';
import { isCategoryLive } from '@/lib/products';

export default function GuideSidebar({ currentSlug }: { currentSlug: string }) {
  const related = getPublishedGuides()
    .filter((g) => g.slug !== currentSlug)
    .slice(0, 4);

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-slate-900">Guide categories</h3>
        <ul className="mt-3 space-y-2">
          {categories.map((c) => {
            const count = getGuidesByCategory(c.slug).length;
            // A category without products yet is shown, but as plain text —
            // the guide itself is still worth reading, the empty category
            // page behind it isn't worth linking to.
            return (
              <li key={c.slug} className="flex items-center justify-between gap-2 text-sm">
                {isCategoryLive(c.slug) ? (
                  <Link href={`/${c.slug}`} className="text-slate-600 hover:text-brand-600">
                    {c.pluralName}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 text-slate-400">
                    {c.pluralName}
                    <span className="pill !py-0.5 !text-[10px]">Soon</span>
                  </span>
                )}
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
