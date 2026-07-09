'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

const navLinks = [
  { href: '/comparisons', label: 'Compare' },
  { href: '/categories', label: 'Categories' },
  { href: '/brands', label: 'Brands' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <div className="container-page flex h-16 items-center gap-4 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold text-white">
            TCR
          </span>
          <span className="hidden text-base font-medium tracking-tight text-slate-900 sm:inline sm:text-lg">
            The Comparison <span className="text-brand-600">Report</span>
          </span>
        </Link>

        {/* Search — centered, real client-side product search */}
        <div className="hidden max-w-md flex-1 lg:block">
          <SearchBar />
        </div>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                isActive(link.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login (placeholder — no auth system yet) + CTA */}
        <div className="ml-auto hidden items-center gap-2 lg:flex xl:ml-3">
          <button
            type="button"
            disabled
            title="Accounts are coming soon"
            className="cursor-not-allowed rounded-xl px-3.5 py-2 text-sm font-medium text-slate-500"
          >
            Log in
          </button>
          <Link href="/headphones" className="btn-primary !px-4 !py-2 text-sm">
            Start Comparing
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="ml-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            <div className="pb-2">
              <SearchBar />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-base font-medium ${
                  isActive(link.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/headphones" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 w-full text-sm">
              Start Comparing
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
