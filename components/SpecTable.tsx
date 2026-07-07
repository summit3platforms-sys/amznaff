import { Category, Product } from '@/data/types';
import { specWinner } from '@/lib/scoring';

function formatValue(v: string | number | boolean, unit?: string): string {
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  if (typeof v === 'number') return unit ? `${v} ${unit}` : String(v);
  return v;
}

export default function SpecTable({ a, b, category }: { a: Product; b: Product; category: Category }) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left">
            <th className="px-4 py-3 font-medium text-slate-500">Spec</th>
            <th className="px-4 py-3 font-semibold text-slate-900">{a.model}</th>
            <th className="px-4 py-3 font-semibold text-slate-900">{b.model}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-100">
            <td className="px-4 py-3 text-slate-500">Price</td>
            <td className="px-4 py-3 font-medium">${a.price.toFixed(2)}</td>
            <td className="px-4 py-3 font-medium">${b.price.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-slate-100">
            <td className="px-4 py-3 text-slate-500">Release Year</td>
            <td className="px-4 py-3">{a.releaseYear}</td>
            <td className="px-4 py-3">{b.releaseYear}</td>
          </tr>
          {category.specFields.map((field) => {
            const winnerFn = specWinner(a, b, field.betterDirection);
            const winner = winnerFn(field.key);
            return (
              <tr key={field.key} className="border-b border-slate-100">
                <td className="px-4 py-3 text-slate-500">
                  {field.label}
                  {field.unit ? ` (${field.unit})` : ''}
                </td>
                <td className={`px-4 py-3 ${winner === 'a' ? 'font-semibold text-brand-700' : ''}`}>
                  {formatValue(a.specs[field.key])}
                  {winner === 'a' && <span className="ml-1 text-winner-600">✓</span>}
                </td>
                <td className={`px-4 py-3 ${winner === 'b' ? 'font-semibold text-brand-700' : ''}`}>
                  {formatValue(b.specs[field.key])}
                  {winner === 'b' && <span className="ml-1 text-winner-600">✓</span>}
                </td>
              </tr>
            );
          })}
          <tr className="border-b border-slate-100">
            <td className="px-4 py-3 text-slate-500">Warranty</td>
            <td className="px-4 py-3">{a.warrantyMonths} months</td>
            <td className="px-4 py-3">{b.warrantyMonths} months</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-slate-500">Colors</td>
            <td className="px-4 py-3">{a.colorOptions.join(', ')}</td>
            <td className="px-4 py-3">{b.colorOptions.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
