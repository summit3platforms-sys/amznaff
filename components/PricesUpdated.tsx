import { PRICES_LAST_VERIFIED } from '@/lib/constants';

export default function PricesUpdated({ className = '' }: { className?: string }) {
  return <p className={`text-xs text-slate-500 ${className}`}>Prices last verified {PRICES_LAST_VERIFIED}</p>;
}
