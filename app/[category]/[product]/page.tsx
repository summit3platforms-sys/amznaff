import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCategory } from '@/data/categories';
import { getAllProducts, getCompetitors, getProductBySlug, getProductsByCategory } from '@/lib/products';
import { cheaperAlternative, premiumAlternative, sameBrand } from '@/lib/related';
import { overallScore } from '@/lib/scoring';
import AmazonButton from '@/components/AmazonButton';
import ProductCard from '@/components/ProductCard';
import PlaceholderImage from '@/components/PlaceholderImage';

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ category: p.categorySlug, product: p.slug }));
}

export function generateMetadata({ params }: { params: { category: string; product: string } }): Metadata {
  const product = getProductBySlug(params.category, params.product);
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} Review — Specs, Price & Best Alternatives`,
    description: product.shortTagline
  };
}

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const category = getCategory(params.category);
  const product = getProductBySlug(params.category, params.product);
  if (!category || !product) notFound();

  const competitors = getCompetitors(product);
  const brandSiblings = sameBrand(product).slice(0, 4);
  const cheaper = cheaperAlternative(product);
  const premium = premiumAlternative(product);
  const score = overallScore(product, category);
  const previous = product.previousModelSlug
    ? getProductsByCategory(category.slug).find((p) => p.slug === product.previousModelSlug)
    : undefined;
  const next = product.nextModelSlug
    ? getProductsByCategory(category.slug).find((p) => p.slug === product.nextModelSlug)
    : undefined;

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href={`/${category.slug}`} className="hover:text-brand-600">
          {category.pluralName}
        </Link>{' '}
        / {product.brand}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <PlaceholderImage label={`${product.brand} ${product.model}`} className="aspect-square" />
        <div>
          <span className="pill mb-3">{product.brand} · {product.series}</span>
          <h1 className="text-3xl font-extrabold text-slate-900">{product.model}</h1>
          <p className="mt-2 text-slate-500">{product.shortTagline}</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            {product.msrp && product.msrp > product.price && (
              <span className="text-slate-400 line-through">${product.msrp.toFixed(2)}</span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-400">
            ★ {product.rating.toFixed(1)} ({product.ratingCount.toLocaleString()} ratings) · Overall score {score}/10
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <AmazonButton product={product} />
            {previous && (
              <Link href={`/${category.slug}/${product.slug}/vs/${previous.slug}`} className="btn-secondary">
                Compare to {previous.model}
              </Link>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-winner-600">Pros</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {product.pros.map((p, i) => (
                  <li key={i}>+ {p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-500">Cons</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {product.cons.map((c, i) => (
                  <li key={i}>− {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Full Specifications</h2>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {category.specFields.map((field, i) => (
                <tr key={field.key} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                  <td className="px-4 py-2.5 text-slate-500">{field.label}</td>
                  <td className="px-4 py-2.5 font-medium text-slate-900">
                    {typeof product.specs[field.key] === 'boolean'
                      ? product.specs[field.key]
                        ? 'Yes'
                        : 'No'
                      : `${product.specs[field.key]}${field.unit ? ` ${field.unit}` : ''}`}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50">
                <td className="px-4 py-2.5 text-slate-500">Connectivity</td>
                <td className="px-4 py-2.5 font-medium text-slate-900">{product.connectivity.join(', ')}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 text-slate-500">Material</td>
                <td className="px-4 py-2.5 font-medium text-slate-900">{product.material}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2.5 text-slate-500">Warranty</td>
                <td className="px-4 py-2.5 font-medium text-slate-900">{product.warrantyMonths} months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Compare {product.model} With</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competitors.map((c) => (
            <Link
              key={c.id}
              href={`/${category.slug}/${product.slug}/vs/${c.slug}`}
              className="card p-4 text-sm font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
            >
              vs {c.brand} {c.model}
            </Link>
          ))}
        </div>
      </section>

      {(cheaper || premium) && (
        <section className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cheaper && (
            <Link href={`/${category.slug}/${product.slug}/vs/${cheaper.slug}`} className="card p-5 hover:border-brand-400">
              <p className="text-xs font-semibold uppercase text-slate-400">Cheaper Alternative</p>
              <p className="mt-1 font-bold text-slate-900">{cheaper.model} — ${cheaper.price.toFixed(2)}</p>
            </Link>
          )}
          {premium && (
            <Link href={`/${category.slug}/${product.slug}/vs/${premium.slug}`} className="card p-5 hover:border-brand-400">
              <p className="text-xs font-semibold uppercase text-slate-400">Premium Alternative</p>
              <p className="mt-1 font-bold text-slate-900">{premium.model} — ${premium.price.toFixed(2)}</p>
            </Link>
          )}
        </section>
      )}

      {brandSiblings.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-xl font-bold text-slate-900">More from {product.brand}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brandSiblings.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
