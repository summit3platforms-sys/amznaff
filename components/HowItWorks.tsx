import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Structured specs',
    description:
      'Every product starts as a full spec sheet — battery, weight, connectivity, price — pulled from manufacturer data, not opinion.'
  },
  {
    number: '02',
    title: 'Consistent scoring',
    description:
      'Every product in a category is scored 0-10 on the same dimensions, the same way, so comparisons stay apples-to-apples.'
  },
  {
    number: '03',
    title: 'A direct verdict',
    description: 'One page, one answer: which one you should buy, and exactly why — not a list of ten options.'
  }
];

export default function HowItWorks() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number}>
            <span className="text-sm font-bold text-brand-600">{step.number}</span>
            <h3 className="mt-1 font-bold text-slate-900">{step.title}</h3>
            <p className="mt-1.5 text-sm text-slate-500">{step.description}</p>
          </div>
        ))}
      </div>
      <Link href="/how-we-compare" className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:underline">
        See the full method →
      </Link>
    </div>
  );
}
