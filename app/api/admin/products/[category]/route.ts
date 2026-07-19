import { NextResponse } from 'next/server';
import { readJsonFile, isGithubContentError } from '@/lib/github-content';
import { productFilePath } from '@/lib/admin-product-files';
import { Product } from '@/data/types';

export async function GET(_req: Request, { params }: { params: { category: string } }) {
  const path = productFilePath(params.category);
  if (!path) {
    return NextResponse.json({ error: `Unknown category "${params.category}".` }, { status: 404 });
  }
  try {
    const { data } = await readJsonFile<Product[]>(path);
    return NextResponse.json({ products: data });
  } catch (err) {
    return errorResponse(err);
  }
}

function errorResponse(err: unknown) {
  const message = err instanceof Error ? err.message : 'Unknown error';
  const status = isGithubContentError(err) && message.includes('GITHUB_TOKEN') ? 501 : 500;
  return NextResponse.json({ error: message }, { status });
}
