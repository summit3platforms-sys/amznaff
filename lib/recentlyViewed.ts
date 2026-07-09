// Client-only, localStorage-backed "recently viewed" — a real feature with
// no backend: it just remembers what this browser actually looked at. Safe
// to import from server components as long as the read/write functions are
// only called inside useEffect/event handlers (never during render).
const STORAGE_KEY = 'tcr:recently-viewed';
const MAX_ITEMS = 8;

export type RecentlyViewedItem = {
  categorySlug: string;
  slug: string;
  viewedAt: number;
};

export function getRecentlyViewed(): RecentlyViewedItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function addRecentlyViewed(item: Omit<RecentlyViewedItem, 'viewedAt'>): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getRecentlyViewed().filter(
      (i) => !(i.categorySlug === item.categorySlug && i.slug === item.slug)
    );
    const next = [{ ...item, viewedAt: Date.now() }, ...existing].slice(0, MAX_ITEMS);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently, feature is non-critical
  }
}
