import Link from 'next/link';
import { CategoryGroup } from '@/data/categoryGroups';
import { getCategory } from '@/data/categories';
import { getAllComparisonPairs } from '@/lib/products';
import CategoryIcon from './icons/CategoryIcon';

// Icon-forward card for a main category group. If the group has a live
// subcategory, the card links straight into that category (which lists
// every real comparison for it). Groups with nothing live yet still show,
// clearly labeled, and link to the full categories index instead of a
// dead page.
export default function CategoryIconCard({ group }: { group: CategoryGroup }) {
  const liveItem = group.items.find((item) => item.slug && getCategory(item.slug));
  const liveCategory = liveItem?.slug ? getCategory(liveItem.slug) : undefined;
  const comparisonCount = liveCategory ? getAllComparisonPairs(liveCategory.slug).length : 0;

  const href = liveCategory ? `/${liveCategory.slug}` : '/categories';

  return (
    <Link href={href} className="card card-hover flex flex-col items-center gap-3 p-6 text-center">
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <CategoryIcon iconKey={group.iconKey} className="h-6 w-6" />
      </span>
      <div>
        <h3 className="font-semibold text-slate-900">{group.name}</h3>
        <p className="mt-1 text-xs text-slate-500">
          {liveCategory ? `${comparisonCount} comparisons live` : 'Coming soon'}
        </p>
      </div>
    </Link>
  );
}
