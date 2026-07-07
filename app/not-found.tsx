import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-500">The product or comparison you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn-secondary mt-6">
        Back to home
      </Link>
    </div>
  );
}
