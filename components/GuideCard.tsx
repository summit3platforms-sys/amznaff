import Link from 'next/link';
import { GuideSummary } from '@/data/guides';
import { getCategory } from '@/data/categories';
import GuideThumbnail from './GuideThumbnail';

export default function GuideCard({ guide }: { guide: GuideSummary }) {
  const category = getCategory(guide.categorySlug);

  return (
    <Link href={`/guides/${guide.slug}`} className="card card-hover flex flex-col overflow-hidden p-0">
      <GuideThumbnail label={guide.title} className="aspect-[16/10] w-full rounded-none" />
      <div className="p-4">
        {category && <span className="pill mb-2">{category.pluralName}</span>}
        <h3 className="font-semibold text-slate-900">{guide.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-slate-500">{guide.excerpt}</p>
      </div>
    </Link>
  );
}

// Non-clickable placeholder tile used to fill out a grid row when there
// aren't enough real guides yet — clearly labeled, never a dead link.
export function GuideCardPlaceholder({ label }: { label: string }) {
  return (
    <div className="card flex flex-col overflow-hidden p-0 opacity-60">
      <div className="flex aspect-[16/10] w-full items-center justify-center bg-slate-100 text-slate-300">
        <svg width="28%" height="28%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>
      <div className="p-4">
        <span className="pill mb-2">Coming soon</span>
        <h3 className="font-semibold text-slate-500">{label}</h3>
      </div>
    </div>
  );
}
