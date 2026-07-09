import Link from 'next/link';
import { getAllBrands } from '@/lib/brands';

// Real brand wordmark wall — every entry here comes from at least one real
// product in the data layer (see lib/brands.ts). No logo images are used
// since we don't have licensed brand assets; this renders clean text
// wordmarks instead, which stays honest and still reads as premium.
export default function BrandWall() {
  const brands = getAllBrands();
  if (brands.length === 0) return null;

  return (
    <div className="card grid grid-cols-2 gap-px overflow-hidden bg-slate-100 sm:grid-cols-3 lg:grid-cols-5">
      {brands.map((brand) => (
        <Link
          key={brand.slug}
          href={`/brands/${brand.slug}`}
          className="flex flex-col items-center justify-center gap-1 bg-white px-4 py-8 text-center transition hover:bg-slate-50"
        >
          <span className="text-base font-semibold tracking-tight text-slate-800">{brand.name}</span>
          <span className="text-xs text-slate-500">
            {brand.productCount} {brand.productCount === 1 ? 'product' : 'products'}
          </span>
        </Link>
      ))}
    </div>
  );
}
