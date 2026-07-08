import Link from 'next/link';
import { Product, Category } from '@/data/types';
import { getVerdictTeaser } from '@/lib/comparisons';
import PlaceholderImage from './PlaceholderImage';

export default function VsCard({ product, competitor, category }: { product: Product; competitor: Product; category: Category }) {
  const teaser = getVerdictTeaser(product, competitor, category);
  const href = `/${category.slug}/${product.slug}/vs/${competitor.slug}`;

  return (
    <Link href={href} className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300">
      <div className="flex items-center justify-center gap-3">
        <PlaceholderImage label={product.model} className="h-16 w-16 flex-shrink-0" />
        <span className="flex-shrink-0 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-500">vs</span>
        <PlaceholderImage label={competitor.model} className="h-16 w-16 flex-shrink-0" />
      </div>

      <div className="mt-4 flex items-start justify-between text-sm">
        <div>
          <p className="font-medium text-slate-900">{product.model}</p>
          <p className="text-slate-500">${product.price.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-slate-900">{competitor.model}</p>
          <p className="text-slate-500">${competitor.price.toFixed(2)}</p>
        </div>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-sm text-slate-600">
        Verdict: <span className="font-medium text-winner-600">{teaser.winnerModel}</span> wins on{' '}
        {teaser.dimensionLabel} <span className="text-brand-600">→ Read why</span>
      </p>
    </Link>
  );
}
