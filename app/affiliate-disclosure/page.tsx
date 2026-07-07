import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'WhichOneToBuy is a participant in the Amazon Services LLC Associates Program.'
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Affiliate Disclosure</h1>

      <div className="mt-6 space-y-5 text-slate-600">
        <p>
          WhichOneToBuy is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by advertising and linking to
          Amazon.com.
        </p>
        <p>
          In practice, this means: when you click a &ldquo;Buy on Amazon&rdquo; link on this site and make a qualifying
          purchase, we may earn a small commission — at no additional cost to you. The price you pay is the same
          whether you use our link or navigate to Amazon directly.
        </p>
        <p>
          This relationship never influences which product a comparison recommends. Scores and verdicts are
          generated from structured product specifications (battery life, weight, price, and so on), not from
          which product pays a higher commission. Where two products are close, we say so explicitly rather than
          picking a &ldquo;winner&rdquo; for the sake of it.
        </p>
        <p>
          Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
        </p>
      </div>
    </div>
  );
}
