import { Category, Product } from '@/data/types';
import { radarData } from '@/lib/scoring';

const SIZE = 320;
const CENTER = SIZE / 2;
const MAX_RADIUS = SIZE / 2 - 56;
const MAX_VALUE = 10;

function pointFor(index: number, total: number, value: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = (value / MAX_VALUE) * MAX_RADIUS;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle)
  };
}

function labelPointFor(index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = MAX_RADIUS + 28;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle)
  };
}

export default function RadarChart({ a, b, category }: { a: Product; b: Product; category: Category }) {
  const data = radarData(a, b, category);
  const total = data.length;
  if (total < 3) return null;

  const ringLevels = [2, 4, 6, 8, 10];
  const pointsA = data.map((d, i) => pointFor(i, total, d.a));
  const pointsB = data.map((d, i) => pointFor(i, total, d.b));

  const toPolygon = (pts: { x: number; y: number }[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="card flex flex-col items-center gap-4 p-6">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" height="auto" className="max-w-sm">
        {ringLevels.map((level) => {
          const ringPoints = data.map((_, i) => pointFor(i, total, level));
          return (
            <polygon
              key={level}
              points={toPolygon(ringPoints)}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={1}
            />
          );
        })}
        {data.map((_, i) => {
          const outer = pointFor(i, total, MAX_VALUE);
          return <line key={i} x1={CENTER} y1={CENTER} x2={outer.x} y2={outer.y} stroke="#e2e8f0" strokeWidth={1} />;
        })}

        <polygon points={toPolygon(pointsB)} fill="#317dff22" stroke="#317dff" strokeWidth={2} />
        <polygon points={toPolygon(pointsA)} fill="#22c55e22" stroke="#16a34a" strokeWidth={2} />

        {data.map((d, i) => {
          const lp = labelPointFor(i, total);
          return (
            <text
              key={d.key}
              x={lp.x}
              y={lp.y}
              fontSize="10"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#475569"
            >
              {d.label}
            </text>
          );
        })}
      </svg>
      <div className="flex gap-6 text-sm">
        <span className="flex items-center gap-2 font-medium text-slate-700">
          <span className="h-2.5 w-2.5 rounded-full bg-winner-600" /> {a.model}
        </span>
        <span className="flex items-center gap-2 font-medium text-slate-700">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-600" /> {b.model}
        </span>
      </div>
    </div>
  );
}
