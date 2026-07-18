import { Product } from '@/data/types';
import { amazonLink } from '@/lib/amazon';

export default function AmazonButton({
  product,
  label = 'Buy on Amazon',
  className = ''
}: {
  product: Product;
  label?: string;
  className?: string;
}) {
  if (product.usAvailable === false) {
    return (
      <span className={`btn-secondary cursor-default opacity-80 ${className}`} title="Not currently sold on US Amazon">
        Not available on US Amazon
      </span>
    );
  }

  // No confirmed ASIN yet (e.g. a just-launched model not yet verified live
  // on Amazon.com) — never fabricate a placeholder ASIN/link.
  if (!product.amazonAsin) {
    return (
      <span className={`btn-secondary cursor-default opacity-80 ${className}`} title="Amazon listing not yet confirmed">
        Check Price at Retailers
      </span>
    );
  }

  return (
    <a
      href={amazonLink(product)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`btn-amazon ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
