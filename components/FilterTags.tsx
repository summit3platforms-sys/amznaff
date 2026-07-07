import Link from 'next/link';
import { CategoryFilter } from '@/data/types';

export default function FilterTags({
  categorySlug,
  filters,
  activeSlug
}: {
  categorySlug: string;
  filters: CategoryFilter[];
  activeSlug?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={`/${categorySlug}`} className={`pill hover:bg-slate-200 ${!activeSlug ? 'bg-slate-900 text-white' : ''}`}>
        All
      </Link>
      {filters.map((f) => (
        <Link
          key={f.slug}
          href={`/${categorySlug}?filter=${f.slug}`}
          className={`pill hover:bg-slate-200 ${activeSlug === f.slug ? 'bg-slate-900 text-white' : ''}`}
        >
          {f.label}
        </Link>
      ))}
    </div>
  );
}
