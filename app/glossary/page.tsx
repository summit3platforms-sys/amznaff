import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Plain-language definitions for the spec terms used across our comparisons.'
};

const terms: { term: string; definition: string }[] = [
  { term: 'ANC (Active Noise Cancelling)', definition: 'Electronic noise cancellation that uses microphones and inverted sound waves to reduce ambient noise, most effective against constant, low-frequency sounds.' },
  { term: 'Multipoint pairing', definition: 'The ability for a device to stay connected to two Bluetooth sources at once (for example, a laptop and a phone) and switch between them automatically.' },
  { term: 'Driver (audio)', definition: 'The component inside a headphone or speaker that converts electrical signal into sound. Larger is not automatically better — tuning matters as much as size.' },
  { term: 'Quick charge', definition: 'A feature that gives a meaningful amount of playback time from a very short charging window, useful when a device is picked up already low on battery.' },
  { term: 'Codec (Bluetooth audio)', definition: 'The compression format used to send audio over Bluetooth. Higher-quality codecs (like LDAC or aptX Adaptive) can carry more detail than the baseline SBC codec, if both the device and source support them.' },
  { term: 'IPX rating', definition: 'A standardized scale for water and dust resistance. Higher numbers indicate more protection; a rating of "None" means the manufacturer has not published or certified one.' },
  { term: 'Overall score', definition: 'The average of every category score for a product, used to determine the "winner" on a comparison page. See How We Compare Products for the full method.' },
  { term: 'Close call', definition: 'Our label for a comparison where the overall score gap between two products is small enough that the right choice depends more on personal use case than on the numbers alone.' }
];

export default function GlossaryPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Glossary</h1>
      <p className="mt-2 text-slate-500">Plain-language definitions for terms used throughout our comparisons.</p>

      <dl className="mt-8 space-y-6">
        {terms.map((t) => (
          <div key={t.term} className="border-b border-slate-100 pb-6">
            <dt className="font-semibold text-slate-900">{t.term}</dt>
            <dd className="mt-1 text-slate-600">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
