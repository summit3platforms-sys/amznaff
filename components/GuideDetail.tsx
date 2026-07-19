import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuideBySlug } from '@/data/guides';
import GuideSidebar from '@/components/GuideSidebar';
import GuideThumbnail from '@/components/GuideThumbnail';
import { renderMarkdown } from '@/lib/markdown';

// Shared guide-detail renderer used by app/guides/[slug]/page.tsx. Also
// re-exported by app/guides/how-to-choose-headphones/page.tsx — a legacy
// static route file that a sandbox permissions quirk prevented deleting
// when this site moved to fully data-driven guides; keeping it as a thin
// wrapper around this same component means both paths always render
// identical, non-duplicated content sourced from data/guides.json.
export default function GuideDetail({ slug }: { slug: string }) {
  const guide = getGuideBySlug(slug);
  if (!guide || guide.status !== 'published') notFound();

  const publishedDate = new Date(guide.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href="/guides" className="hover:text-brand-600">
          Guides
        </Link>{' '}
        / {guide.title}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        <div className="max-w-2xl">
          <GuideThumbnail label={guide.title} className="aspect-[16/7] w-full" />
          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">{guide.title}</h1>
          <p className="mt-2 text-sm text-slate-400">Published {publishedDate}</p>
          <p className="mt-3 text-slate-500">{guide.excerpt}</p>

          <div className="prose-guide mt-8 space-y-4 text-slate-600">{renderMarkdown(guide.content)}</div>
        </div>

        <GuideSidebar currentSlug={guide.slug} />
      </div>
    </div>
  );
}
