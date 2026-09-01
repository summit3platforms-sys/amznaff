import { ImageResponse } from 'next/og';

// ---------------------------------------------------------------------------
// OpenGraph card renderer.
//
// The site has no product photography for 97% of its catalogue, so every share
// and every social preview was a blank rectangle. A typographic card is not a
// substitute for a product photo, but it is the difference between a link that
// looks broken and one that looks deliberate — and it costs nothing per product
// because it is drawn from the same record the page is.
//
// Kept deliberately plain: no gradients, no icons, no web fonts. ImageResponse
// runs at build time for every product and comparison, so anything expensive
// here is paid ~1,300 times.
// ---------------------------------------------------------------------------

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const INK = '#0F172A';
const MUTED = '#64748B';
const RULE = '#E2E8F0';
const ACCENT = '#0F766E';

export function ogCard({
  eyebrow,
  title,
  subtitle,
  footnote
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footnote?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          padding: '64px 72px',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: ACCENT,
              fontWeight: 700
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: title.length > 60 ? 62 : 76,
              lineHeight: 1.1,
              fontWeight: 800,
              color: INK,
              letterSpacing: -2
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ marginTop: 26, fontSize: 32, lineHeight: 1.35, color: MUTED }}>{subtitle}</div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid ${RULE}`,
            paddingTop: 28
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: INK }}>The Comparison Report</div>
          {footnote ? <div style={{ fontSize: 26, color: MUTED }}>{footnote}</div> : null}
        </div>
      </div>
    ),
    OG_SIZE
  );
}

// Titles longer than this wrap to three lines and overflow the card.
export function clampTitle(text: string, max = 78): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
