import Link from 'next/link';
import { Category } from '@/data/types';
import { MarketTrap } from '@/data/marketTraps';
import { decapitalizeWords } from '@/lib/content-generator';

// Renders the "what the marketing doesn't tell you" research for a category or
// for a specific product. Deliberately plain: numbered entries with a rule
// between them rather than cards, because these are meant to be read in order,
// not scanned as a grid.
export default function MarketTraps({
  traps,
  category,
  heading,
  intro,
  moreHref
}: {
  traps: MarketTrap[];
  category: Category;
  heading: string;
  intro?: string;
  moreHref?: string;
}) {
  if (traps.length === 0) return null;

  const specLabel = (key?: string) =>
    key ? category.specFields.find((field) => field.key === key)?.label : undefined;

  return (
    <section id="what-marketing-doesnt-tell-you" className="mt-16 scroll-mt-24">
      <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
      {intro && <p className="mt-3 max-w-3xl text-slate-600">{intro}</p>}

      <ol className="mt-8 max-w-3xl space-y-8">
        {traps.map((trap, i) => {
          const label = specLabel(trap.specKey);
          return (
            <li key={trap.id} id={trap.id} className="scroll-mt-24 border-t border-slate-100 pt-6 first:border-0 first:pt-0">
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug text-slate-900">{trap.title}</h3>
                  <p className="mt-2 text-slate-600">{trap.body}</p>
                  {label && (
                    <p className="mt-3 text-sm text-slate-400">
                      Check the <span className="font-medium text-slate-500">{label}</span> row in the
                      specifications.
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {moreHref && (
        <p className="mt-8 max-w-3xl text-sm text-slate-500">
          <Link href={moreHref} className="underline hover:text-brand-600">
            All {decapitalizeWords(category.pluralName)} buying traps
          </Link>{' '}
          — the full set for this category, including the ones that apply to every model.
        </p>
      )}
    </section>
  );
}
