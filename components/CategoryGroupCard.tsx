import Link from 'next/link';
import { CategoryGroup } from '@/data/categoryGroups';
import { getCategory } from '@/data/categories';
import { getProductsByCategory } from '@/lib/products';

export default function CategoryGroupCard({ group }: { group: CategoryGroup }) {
  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl" aria-hidden="true">
          {group.icon}
        </span>
        <h3 className="font-bold text-slate-900">{group.name}</h3>
      </div>
      <ul className="space-y-1.5">
        {group.items.map((item) => {
          const category = item.slug ? getCategory(item.slug) : undefined;
          const isLive = category && getProductsByCategory(category.slug).length > 0;

          if (isLive && category) {
            return (
              <li key={item.name}>
                <Link href={`/${category.slug}`} className="text-sm font-medium text-slate-700 hover:text-brand-600">
                  {item.name}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.name} className="flex items-center gap-2 text-sm text-slate-400">
              <span>{item.name}</span>
              <span className="pill !py-0.5 !text-[10px]">Soon</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
