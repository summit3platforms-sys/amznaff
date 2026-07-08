import type { Metadata } from 'next';
import { categoryGroups } from '@/data/categoryGroups';
import CategoryGroupCard from '@/components/CategoryGroupCard';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Every product category we cover, with full spec-driven comparisons.'
};

export default function CategoriesPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">All Categories</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        We are adding new categories over time. Each one only goes live once it has real, verified product specs
        behind it — items marked &ldquo;Soon&rdquo; are not live yet.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryGroups.map((group) => (
          <CategoryGroupCard key={group.name} group={group} />
        ))}
      </div>
    </div>
  );
}
