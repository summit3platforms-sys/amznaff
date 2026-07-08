import { getAllProducts } from '@/lib/products';
import { getAllComparisonsAcrossCategories } from '@/lib/comparisons';
import { getAllBrands } from '@/lib/brands';
import { categories } from '@/data/categories';

export default function StatsBar() {
  const stats = [
    { label: 'Products compared', value: getAllProducts().length },
    { label: 'Head-to-head comparisons', value: getAllComparisonsAcrossCategories().length },
    { label: 'Brands covered', value: getAllBrands().length },
    { label: 'Categories live', value: categories.length }
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white px-4 py-5 text-center">
          <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{s.value}</p>
          <p className="mt-1 text-xs text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
