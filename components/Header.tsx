import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Which<span className="text-brand-600">One</span>ToBuy
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {categories.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="text-sm font-medium text-slate-600 hover:text-brand-600">
              {c.pluralName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
