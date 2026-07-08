import Link from 'next/link';
import { categories } from '@/data/categories';

// Trimmed to only real, load-bearing pages per the homepage redesign brief —
// no placeholder/stub links (careers, press, help center, glossary, and so
// on). Those pages still exist and work, they're just not linked from here
// anymore. See app/careers, app/press, etc. if you want them back in nav.
const footerLinks = [
  { href: '/comparisons', label: 'Comparisons' },
  { href: '/about', label: 'About and methodology' },
  { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' }
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900">
      <div className="container-page py-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white text-xs font-medium text-slate-900">
            TCR
          </span>
          <span className="text-base font-medium tracking-tight text-white">
            The Comparison <span className="text-brand-400">Report</span>
          </span>
        </Link>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {categories.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="text-sm text-slate-400 hover:text-white">
              {c.pluralName}
            </Link>
          ))}
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="max-w-2xl text-xs text-slate-500">
            As an Amazon Associate, The Comparison Report earns from qualifying purchases. This does not influence
            our comparisons, which are generated from structured product specifications. See our{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-300">
              affiliate disclosure
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} The Comparison Report</p>
        </div>
      </div>
    </footer>
  );
}
