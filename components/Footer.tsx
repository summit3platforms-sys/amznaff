import Link from 'next/link';
import { categories } from '@/data/categories';

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

const legalLinks = [
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' }
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                W
              </span>
              <span className="text-base font-bold tracking-tight text-slate-900">
                Which<span className="text-brand-600">One</span>ToBuy
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-500">
              Spec-for-spec product comparisons generated from structured data — no top-10 lists, no opinion
              pieces. Just the answer to &ldquo;which one should I buy?&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Shop by category</h3>
            <ul className="mt-3 space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-sm text-slate-600 hover:text-brand-600">
                    {c.pluralName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Company</h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6">
          <p className="max-w-3xl text-xs text-slate-400">
            As an Amazon Associate, WhichOneToBuy earns from qualifying purchases. We link to products on Amazon
            and may earn a commission on sales made through those links, at no additional cost to you. This does
            not influence our comparisons, which are generated from structured product specifications. See our{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-600">
              Affiliate Disclosure
            </Link>
            .
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} WhichOneToBuy. All product names, logos, and brands are property of
            their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
