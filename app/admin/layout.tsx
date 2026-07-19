import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-slate-900 text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/admin" className="font-bold tracking-tight">
            Admin Dashboard
          </Link>
          <nav className="flex gap-5 text-sm font-medium text-slate-300">
            <Link href="/admin" className="hover:text-white">
              Overview
            </Link>
            <Link href="/admin/guides" className="hover:text-white">
              Guides
            </Link>
            <Link href="/admin/products" className="hover:text-white">
              Products
            </Link>
            <Link href="/" className="hover:text-white">
              View site →
            </Link>
          </nav>
        </div>
      </div>
      <div className="container-page py-10">{children}</div>
    </div>
  );
}
