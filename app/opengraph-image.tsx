import { clampTitle, ogCard, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';

export const alt = 'The Comparison Report — spec-for-spec product comparisons';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Site-wide fallback card. Any page that does not define its own inherits this,
// so no page on the site shares as a blank rectangle.
export default function OpengraphImage() {
  return ogCard({
    eyebrow: 'Product comparisons',
    title: clampTitle('Which one should you buy?'),
    subtitle: 'Head-to-head verdicts scored from published specifications — not opinion, not top-10 lists.',
    footnote: 'thecomparisonreport.com'
  });
}
