import { getCategory } from '@/data/categories';
import { getProductBySlug } from '@/lib/products';
import { clampTitle, ogCard, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';

export const alt = 'Product specifications and comparisons';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function ProductOgImage({ params }: { params: { category: string; product: string } }) {
  const category = getCategory(params.category);
  const product = getProductBySlug(params.category, params.product);

  if (!category || !product) {
    return ogCard({ eyebrow: 'Product comparisons', title: 'The Comparison Report' });
  }

  return ogCard({
    eyebrow: category.pluralName,
    title: clampTitle(product.model),
    subtitle: product.shortTagline,
    footnote: `$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
  });
}
