import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page py-10 text-sm text-slate-500">
        <p className="mb-4 max-w-3xl">
          As an Amazon Associate, WhichOneToBuy earns from qualifying purchases. We link to products on Amazon and
          may earn a commission on sales made through those links, at no additional cost to you. This does not
          influence our comparisons, which are generated from structured product specifications.
        </p>
        <div className="flex flex-wrap gap-6">
          {categories.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="hover:text-brand-600">
              {c.pluralName}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} WhichOneToBuy. All product names, logos, and brands are property of their respective owners.</p>
      </div>
    </footer>
  );
}
