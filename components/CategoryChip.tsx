import CategoryIcon, { CategoryIconKey } from './icons/CategoryIcon';

export default function CategoryChip({ name, iconKey }: { name: string; iconKey: CategoryIconKey }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-500">
      <CategoryIcon iconKey={iconKey} className="h-4 w-4 text-slate-400" />
      {name}
    </span>
  );
}
