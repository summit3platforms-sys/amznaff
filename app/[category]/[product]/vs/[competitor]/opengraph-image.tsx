import { getCategory } from '@/data/categories';
import { getProductBySlug } from '@/lib/products';
import { clampTitle, ogCard, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';

export const alt = 'Head-to-head product comparison';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function ComparisonOgImage({
  params
}: {
  params: { category: string; product: string; competitor: string };
}) {
  const category = getCategory(params.category);
  const a = getProductBySlug(params.category, params.product);
  const b = getProductBySlug(params.category, params.competitor);

  if (!category || !a || !b) {
    return ogCard({ eyebrow: 'Product comparisons', title: 'The Comparison Report' });
  }

  return ogCard({
    eyebrow: `${category.name} comparison`,
    title: clampTitle(`${a.model} vs ${b.model}`),
    subtitle: 'Side-by-side specs, category scores, and which one to buy.',
    footnote: 'thecomparisonreport.com'
  });
}
