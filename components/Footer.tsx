import Link from 'next/link';
import { categories } from '@/data/categories';
import { getAllBrands } from '@/lib/brands';

const comparisonLinks = [
  { href: '/comparisons/popular', label: 'Popular Comparisons' },
  { href: '/comparisons/latest', label: 'Latest Comparisons' },
  { href: '/comparisons/editors-picks', label: "Editor's Picks" }
];

const resourceLinks = [
  { href: '/guides', label: 'Buying Guides' },
  { href: '/product-finder', label: 'Product Finder' },
  { href: '/compare-tool', label: 'Compare Tool' },
  { href: '/price-tracker', label: 'Price Tracker' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/faqs', label: 'FAQs' }
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/our-review-process', label: 'Our Review Process' },
  { href: '/how-we-compare', label: 'How We Compare Products' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/press', label: 'Press' }
];

const supportLinks = [
  { href: '/help-center', label: 'Help Center' },
  { href: '/report-incorrect-info', label: 'Report Incorrect Information' },
  { href: '/request-a-comparison', label: 'Request a Comparison' },
  { href: '/feedback', label: 'Feedback' }
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/dmca', label: 'DMCA' },
  { href: '/accessibility', label: 'Accessibility' }
];

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-slate-400 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const topBrands = getAllBrands().slice(0, 10);

  return (
    <footer className="mt-20 bg-slate-900">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-900">
                TCR
              </span>
              <span className="text-base font-bold tracking-tight text-white">
                The Comparison <span className="text-brand-400">Report</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              Spec-for-spec product comparisons generated from structured data — no top-10 lists, no opinion
              pieces. Just the answer to &ldquo;which one should I buy?&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Products</h3>
            <ul className="mt-3 space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-sm text-slate-400 hover:text-white">
                    {c.pluralName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/categories" className="text-sm font-medium text-brand-400 hover:text-brand-300">
                  All Categories →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Brands</h3>
            <ul className="mt-3 space-y-2">
              {topBrands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="text-sm text-slate-400 hover:text-white">
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/brands" className="text-sm font-medium text-brand-400 hover:text-brand-300">
                  View All Brands →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Comparisons</h3>
            <ul className="mt-3 space-y-2">
              {comparisonLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/comparisons" className="text-sm font-medium text-brand-400 hover:text-brand-300">
                  Browse All Comparisons →
                </Link>
              </li>
            </ul>
          </div>

          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="max-w-3xl text-xs text-slate-500">
            As an Amazon Associate, The Comparison Report earns from qualifying purchases. We link to products on
            Amazon and may earn a commission on sales made through those links, at no additional cost to you. This
            does not influence our comparisons, which are generated from structured product specifications. See
            our{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-300">
              Affiliate Disclosure
            </Link>
            .
          </p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} The Comparison Report. All product names, logos, and brands are property
            of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
