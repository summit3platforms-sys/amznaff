import type { Metadata } from 'next';
import { getGuideBySlug, getPublishedGuides } from '@/data/guides';
import GuideDetail from '@/components/GuideDetail';

export function generateStaticParams() {
  return getPublishedGuides().map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide || guide.status !== 'published') return {};
  return {
    title: guide.title,
    description: guide.excerpt
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  return <GuideDetail slug={params.slug} />;
}
