import Link from 'next/link';

export default function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <div className="container-page max-w-2xl py-20 text-center">
      <span className="pill mb-4 inline-flex">Coming soon</span>
      <h1 className="text-3xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-4 text-slate-500">{description}</p>
      <Link href="/comparisons" className="btn-secondary mt-6 inline-flex">
        Browse comparisons instead
      </Link>
    </div>
  );
}
