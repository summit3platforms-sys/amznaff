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
