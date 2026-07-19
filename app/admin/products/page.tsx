import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { categories } from '@/data/categories';
import { Product } from '@/data/types';
import ProductsTable from '@/components/admin/ProductsTable';
import AdminSetupNotice from '@/components/admin/AdminSetupNotice';

export default async function AdminProductsPage() {
  try {
    const results = await Promise.all(
      categories.map(async (c) => [c.slug, (await readJsonFile<Product[]>(`data/products/${c.slug}.json`)).data] as const)
    );
    const productsByCategory = Object.fromEntries(results);

    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Products</h1>
        <p className="mt-1 text-slate-500">All products across every category.</p>
        <div className="mt-6">
          <ProductsTable categories={categories} productsByCategory={productsByCategory} />
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Products</h1>
        <div className="mt-6">
          <AdminSetupNotice message={isGithubContentError(err) ? message : `Something went wrong loading products: ${message}`} />
        </div>
      </div>
    );
  }
}
