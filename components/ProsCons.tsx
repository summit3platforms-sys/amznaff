export default function ProsCons({ pros, cons, title }: { pros: string[]; cons: string[]; title: string }) {
  return (
    <div className="card p-5">
      <h4 className="mb-3 font-semibold text-slate-900">{title}</h4>
      <div className="mb-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-winner-600">Pros</p>
        <ul className="space-y-1 text-sm text-slate-600">
          {pros.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-winner-600">+</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-500">Cons</p>
        <ul className="space-y-1 text-sm text-slate-600">
          {cons.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-red-500">−</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
