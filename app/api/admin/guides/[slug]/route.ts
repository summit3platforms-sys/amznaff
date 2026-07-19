import { NextRequest, NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile, isGithubContentError } from '@/lib/github-content';
import { Guide } from '@/data/types';

const GUIDES_PATH = 'data/guides.json';

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { data } = await readJsonFile<Guide[]>(GUIDES_PATH);
    const guide = data.find((g) => g.slug === params.slug);
    if (!guide) {
      return NextResponse.json({ error: `No guide found with slug "${params.slug}".` }, { status: 404 });
    }
    return NextResponse.json({ guide });
  } catch (err) {
    return errorResponse(err);
  }
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const body = (await req.json()) as Partial<Guide>;
    const { data, sha } = await readJsonFile<Guide[]>(GUIDES_PATH);
    const index = data.findIndex((g) => g.slug === params.slug);
    if (index === -1) {
      return NextResponse.json({ error: `No guide found with slug "${params.slug}".` }, { status: 404 });
    }

    // If a new slug is provided, make sure it doesn't collide with another guide.
    const newSlug = body.slug || params.slug;
    if (newSlug !== params.slug && data.some((g) => g.slug === newSlug)) {
      return NextResponse.json({ error: `A guide with slug "${newSlug}" already exists.` }, { status: 409 });
    }

    const existing = data[index];
    const now = new Date().toISOString();
    const wasPublished = existing.status === 'published';
    const willBePublished = (body.status || existing.status) === 'published';

    const updated: Guide = {
      ...existing,
      ...body,
      slug: newSlug,
      updatedAt: now,
      // Only stamp a fresh publishedAt the first time a guide transitions into "published".
      publishedAt: !wasPublished && willBePublished ? now : body.publishedAt || existing.publishedAt
    };

    const nextGuides = [...data];
    nextGuides[index] = updated;
    await writeJsonFile(GUIDES_PATH, nextGuides, `Admin: update guide "${updated.title}"`, sha);
    return NextResponse.json({ guide: updated });
  } catch (err) {
    return errorResponse(err);
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { data, sha } = await readJsonFile<Guide[]>(GUIDES_PATH);
    const exists = data.some((g) => g.slug === params.slug);
    if (!exists) {
      return NextResponse.json({ error: `No guide found with slug "${params.slug}".` }, { status: 404 });
    }
    const updated = data.filter((g) => g.slug !== params.slug);
    await writeJsonFile(GUIDES_PATH, updated, `Admin: delete guide "${params.slug}"`, sha);
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
