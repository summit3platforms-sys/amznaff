import { notFound } from 'next/navigation';
import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { productFilePath } from '@/lib/admin-product-files';
import { Product } from '@/data/types';
import ProductForm from '@/components/admin/ProductForm';
import AdminSetupNotice from '@/components/admin/AdminSetupNotice';

export default async function EditProductPage({ params }: { params: { category: string; slug: string } }) {
  const path = productFilePath(params.category);
  if (!path) notFound();

  try {
    const { data: products } = await readJsonFile<Product[]>(path);
    const product = products.find((p) => p.slug === params.slug);
    if (!product) notFound();

    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Edit product</h1>
        <p className="mt-1 text-slate-500">Saving this commits directly to the live site.</p>
        <div className="mt-6 max-w-2xl">
          <ProductForm categorySlug={params.category} initial={product} />
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return (
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Edit product</h1>
        <div className="mt-6">
          <AdminSetupNotice message={isGithubContentError(err) ? message : `Something went wrong loading this product: ${message}`} />
        </div>
      </div>
    );
  }
}
