// Lightweight guide index. Each entry needs a matching page at
// app/guides/<slug>/page.tsx — this file only drives the /guides listing
// and any "related guide" links elsewhere on the site.
export type GuideSummary = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
};

export const guides: GuideSummary[] = [
  {
    slug: 'how-to-choose-headphones',
    title: 'How to Choose Wireless Headphones: A Buying Guide',
    excerpt:
      'What battery life, ANC, driver size, and the other specs on our comparison pages actually mean for how a pair of headphones will feel to use — and which ones matter most for your use case.',
    categorySlug: 'headphones'
  }
];

export function getGuideBySlug(slug: string): GuideSummary | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(categorySlug: string): GuideSummary[] {
  return guides.filter((g) => g.categorySlug === categorySlug);
}
