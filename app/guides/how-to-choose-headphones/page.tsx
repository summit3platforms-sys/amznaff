import type { Metadata } from 'next';
import { getGuideBySlug } from '@/data/guides';
import GuideDetail from '@/components/GuideDetail';

// This static route file could not be deleted from the sandbox (permissions
// quirk — see components/GuideDetail.tsx comment). It now just renders the
// same shared component the dynamic app/guides/[slug]/page.tsx route uses,
// sourced from data/guides.json, so there is no stale/duplicated content.
const SLUG = 'how-to-choose-headphones';

export function generateMetadata(): Metadata {
  const guide = getGuideBySlug(SLUG);
  if (!guide || guide.status !== 'published') return {};
  return {
    title: guide.title,
    description: guide.excerpt
  };
}

export default function HowToChooseHeadphonesGuide() {
  return <GuideDetail slug={SLUG} />;
}
