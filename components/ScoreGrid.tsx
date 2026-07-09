import { Category, Product } from '@/data/types';
import { dimensionWinner } from '@/lib/scoring';

export default function ScoreGrid({ a, b, category }: { a: Product; b: Product; category: Category }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {category.scoreDimensions.map((dim) => {
        const scoreA = a.scores[dim.key] ?? 0;
        const scoreB = b.scores[dim.key] ?? 0;
        const winner = dimensionWinner(a, b, dim.key);
        return (
          <div key={dim.key} className="card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">{dim.label}</span>
              <span className="text-xs text-slate-400">{dim.description}</span>
            </div>
            <ScoreRow label={a.model} value={scoreA} highlighted={winner === 'a'} />
            <ScoreRow label={b.model} value={scoreB} highlighted={winner === 'b'} />
          </div>
        );
      })}
    </div>
  );
}

function ScoreRow({ label, value, highlighted }: { label: string; value: number; highlighted: boolean }) {
  return (
    <div className="mb-1.5 flex items-center gap-2">
      <span className={`w-32 flex-shrink-0 truncate text-xs ${highlighted ? 'font-semibold text-brand-700' : 'text-slate-500'}`}>
        {label}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${highlighted ? 'bg-brand-600' : 'bg-slate-300'}`}
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
      <span className={`w-8 flex-shrink-0 text-right text-xs ${highlighted ? 'font-semibold text-brand-700' : 'text-slate-500'}`}>
        {value.toFixed(1)}
      </span>
    </div>
  );
}
