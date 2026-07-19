import raw from './guides.json';
import { Guide } from './types';

// ---------------------------------------------------------------------------
// Guide data lives in guides.json (not hand-written here) so the admin
// dashboard (/admin/guides) can read and rewrite it directly — see
// lib/github-content.ts for how admin edits get committed and deployed.
// This file is just the typed accessor layer everything else in the app
// uses; nothing outside /admin should import guides.json directly.
// ---------------------------------------------------------------------------

// Kept as a named export for backward compatibility with existing imports
// across the app (GuideCard, GuideSidebar, etc.) — it is just an alias for
// the full Guide type now that guides carry status/dates/content too.
export type GuideSummary = Guide;

export const guides: Guide[] = raw as Guide[];

/** Every guide, including drafts — for admin use only. */
export function getAllGuides(): Guide[] {
  return guides;
}

/** Guides visible on the public site. */
export function getPublishedGuides(): Guide[] {
  return guides.filter((g) => g.status === 'published');
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** Published guides in a given category — used by the public site. */
export function getGuidesByCategory(categorySlug: string): Guide[] {
  return getPublishedGuides().filter((g) => g.categorySlug === categorySlug);
}
