import { Product } from '@/data/types';
import AmazonButton from './AmazonButton';

export default function WinnerCard({
  winner,
  margin,
  isClose
}: {
  winner: Product;
  margin: number;
  isClose: boolean;
}) {
  return (
    <div className="card card-hover flex flex-col items-center gap-3 border-winner-200 bg-gradient-to-br from-winner-50 to-white p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <span className="pill mb-2 border-winner-200 bg-white text-winner-600">
          {isClose ? 'Best Overall (Close Call)' : 'Best Overall'}
        </span>
        <h3 className="text-xl font-bold text-slate-900">{winner.model}</h3>
        <p className="text-sm text-slate-600">{winner.shortTagline}</p>
        <p className="mt-1 text-xs text-slate-400">Wins overall by {margin.toFixed(1)} points</p>
      </div>
      <AmazonButton product={winner} />
    </div>
  );
}
