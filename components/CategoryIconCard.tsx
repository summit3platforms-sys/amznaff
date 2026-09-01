import Link from 'next/link';
import { CategoryGroup } from '@/data/categoryGroups';
import { getCategory } from '@/data/categories';
import { getAllComparisonPairs, getProductsByCategory } from '@/lib/products';
import CategoryIcon from './icons/CategoryIcon';

// Icon-forward card for a main category group. "Live" requires both a
// category schema AND at least one real product in it — a category with a
// schema but zero products (e.g. freshly cleared for real content) should
// still read as "Coming soon", not "0 comparisons live". If the group has a
// live subcategory, the card links straight into that category (which
// lists every real comparison for it). Groups with nothing live yet still
// show, clearly labeled, and link to the full categories index instead of
// a dead page.
export default function CategoryIconCard({ group }: { group: CategoryGroup }) {
  const liveItems = group.items.filter(
    (item) => item.slug && getCategory(item.slug) && getProductsByCategory(item.slug).length > 0
  );
  const liveCategory = liveItems[0]?.slug ? getCategory(liveItems[0].slug) : undefined;

  // Count every live subcategory in the group, not just the first one. Counting
  // only the first understated Smart Home as 48 comparisons when it has 327,
  // and TV & Home Entertainment as 184 when it has 401 — the card was
  // advertising a fraction of what the group actually holds.
  const comparisonCount = liveItems.reduce(
    (total, item) => total + (item.slug ? getAllComparisonPairs(item.slug).length : 0),
    0
  );

  // One live subcategory has an obvious destination; more than one does not,
  // so those send the reader to the index where they can pick.
  const href = liveItems.length === 1 && liveCategory ? `/${liveCategory.slug}` : '/categories';

  return (
    <Link href={href} className="card card-hover flex flex-col items-center gap-3 p-6 text-center">
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <CategoryIcon iconKey={group.iconKey} className="h-6 w-6" />
      </span>
      <div>
        <h3 className="font-semibold text-slate-900">{group.name}</h3>
        <p className="mt-1 text-xs text-slate-500">
          {liveItems.length
            ? `${comparisonCount.toLocaleString()} comparisons live`
            : 'Coming soon'}
        </p>
      </div>
    </Link>
  );
}
