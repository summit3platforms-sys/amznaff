'use client';

import { useEffect } from 'react';
import { addRecentlyViewed } from '@/lib/recentlyViewed';

// Mount this on product and comparison pages. It records the view into
// localStorage and renders nothing — the actual "Recently viewed" strip
// lives on the homepage and reads this same storage key.
export default function RecentlyViewedTracker({ categorySlug, slug }: { categorySlug: string; slug: string }) {
  useEffect(() => {
    addRecentlyViewed({ categorySlug, slug });
  }, [categorySlug, slug]);

  return null;
}
