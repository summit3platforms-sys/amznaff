import Link from 'next/link';
import { Category } from '@/data/types';
import { getProductsByCategory, getAllComparisonPairs } from '@/lib/products';
import CategoryIcon, { CategoryIconKey } from './icons/CategoryIcon';

export default function FeaturedCategoryCard({ category, iconKey }: { category: Category; iconKey: CategoryIconKey }) {
  const productCount = getProductsByCategory(category.slug).length;
  const comparisonCount = getAllComparisonPairs(category.slug).length;

  return (
    <div className="card flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <CategoryIcon iconKey={iconKey} className="h-6 w-6" />
        </span>
        <div>
          <span className="pill mb-2">Live now</span>
          <h3 className="text-xl font-bold text-slate-900">{category.pluralName}</h3>
          <p className="mt-1 max-w-md text-sm text-slate-500">{category.description}</p>
          <p className="mt-2 text-xs font-medium text-slate-400">
            {productCount} models · {comparisonCount} comparisons
          </p>
        </div>
      </div>
      <Link href={`/${category.slug}`} className="btn-amazon flex-shrink-0 !bg-slate-900 !text-white hover:!bg-slate-800">
        Browse {category.pluralName} →
      </Link>
    </div>
  );
}
