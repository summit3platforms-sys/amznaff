import Link from 'next/link';
import type { Metadata } from 'next';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Buying Guides',
  description: 'Plain-language guides to the specs that actually matter when comparing products.'
};

export default function GuidesPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Buying Guides</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Comparisons show you the numbers. These guides explain what the numbers mean in practice.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-6 transition hover:shadow-lg">
            <h2 className="text-lg font-bold text-slate-900">{g.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{g.excerpt}</p>
          </Link>
        ))}
      </div>

      {guides.length === 0 && <p className="mt-10 text-center text-slate-400">No guides published yet.</p>}
    </div>
  );
}
