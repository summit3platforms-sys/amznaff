import { NextRequest, NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile, isGithubContentError } from '@/lib/github-content';
import { Guide } from '@/data/types';

const GUIDES_PATH = 'data/guides.json';

export async function GET() {
  try {
    const { data } = await readJsonFile<Guide[]>(GUIDES_PATH);
    return NextResponse.json({ guides: data });
  } catch (err) {
    return errorResponse(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Guide>;
    const missing = ['slug', 'title', 'excerpt', 'categorySlug', 'content'].filter(
      (key) => !body[key as keyof Guide]
    );
    if (missing.length > 0) {
      return NextResponse.json({ error: `Missing required field(s): ${missing.join(', ')}` }, { status: 400 });
    }

    const { data, sha } = await readJsonFile<Guide[]>(GUIDES_PATH);
    if (data.some((g) => g.slug === body.slug)) {
      return NextResponse.json({ error: `A guide with slug "${body.slug}" already exists.` }, { status: 409 });
    }

    const now = new Date().toISOString();
    const guide: Guide = {
      slug: body.slug!,
      title: body.title!,
      excerpt: body.excerpt!,
      categorySlug: body.categorySlug!,
      content: body.content!,
      status: body.status === 'published' ? 'published' : 'draft',
      publishedAt: body.status === 'published' ? now : body.publishedAt || now,
      updatedAt: now
    };

    const updated = [...data, guide];
    await writeJsonFile(GUIDES_PATH, updated, `Admin: create guide "${guide.title}"`, sha);
    return NextResponse.json({ guide }, { status: 201 });
  } catch (err) {
    return errorResponse(err);
  }
}

function errorResponse(err: unknown) {
  const message = err instanceof Error ? err.message : 'Unknown error';
  const status = isGithubContentError(err) && message.includes('GITHUB_TOKEN') ? 501 : 500;
  return NextResponse.json({ error: message }, { status });
}
