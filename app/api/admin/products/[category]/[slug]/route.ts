import { NextRequest, NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile, isGithubContentError } from '@/lib/github-content';
import { productFilePath } from '@/lib/admin-product-files';
import { Product } from '@/data/types';

export async function GET(_req: NextRequest, { params }: { params: { category: string; slug: string } }) {
  const path = productFilePath(params.category);
  if (!path) {
    return NextResponse.json({ error: `Unknown category "${params.category}".` }, { status: 404 });
  }
  try {
    const { data } = await readJsonFile<Product[]>(path);
    const product = data.find((p) => p.slug === params.slug);
    if (!product) {
      return NextResponse.json({ error: `No product found with slug "${params.slug}".` }, { status: 404 });
    }
    return NextResponse.json({ product });
  } catch (err) {
    return errorResponse(err);
  }
}

export async function PUT(req: NextRequest, { params }: { params: { category: string; slug: string } }) {
  const path = productFilePath(params.category);
  if (!path) {
    return NextResponse.json({ error: `Unknown category "${params.category}".` }, { status: 404 });
  }
  try {
    const body = (await req.json()) as Partial<Product>;
    const { data, sha } = await readJsonFile<Product[]>(path);
    const index = data.findIndex((p) => p.slug === params.slug);
    if (index === -1) {
      return NextResponse.json({ error: `No product found with slug "${params.slug}".` }, { status: 404 });
    }

    const existing = data[index];
    // Shallow merge for most fields; specs/scores merge key-by-key so a
    // partial edit (e.g. just updating price and one spec) never wipes out
    // every other spec/score value already on the product.
    const updated: Product = {
      ...existing,
      ...body,
      specs: body.specs ? { ...existing.specs, ...body.specs } : existing.specs,
      scores: body.scores ? { ...existing.scores, ...body.scores } : existing.scores,
      slug: body.slug || existing.slug
    };

    const nextProducts = [...data];
    nextProducts[index] = updated;
    await writeJsonFile(path, nextProducts, `Admin: update product "${updated.brand} ${updated.model}"`, sha);
    return NextResponse.json({ product: updated });
  } catch (err) {
    return errorResponse(err);
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { category: string; slug: string } }) {
  const path = productFilePath(params.category);
  if (!path) {
    return NextResponse.json({ error: `Unknown category "${params.category}".` }, { status: 404 });
  }
  try {
    const { data, sha } = await readJsonFile<Product[]>(path);
    const target = data.find((p) => p.slug === params.slug);
    if (!target) {
      return NextResponse.json({ error: `No product found with slug "${params.slug}".` }, { status: 404 });
    }
    const updated = data.filter((p) => p.slug !== params.slug);
    await writeJsonFile(path, updated, `Admin: delete product "${target.brand} ${target.model}"`, sha);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return errorResponse(err);
  }
}

function errorResponse(err: unknown) {
  const message = err instanceof Error ? err.message : 'Unknown error';
  const status = isGithubContentError(err) && message.includes('GITHUB_TOKEN') ? 501 : 500;
  return NextResponse.json({ error: message }, { status });
}
