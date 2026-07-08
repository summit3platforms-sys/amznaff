import type { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about how The Comparison Report works.'
};

const faqs = [
  {
    question: 'How do you decide which product wins a comparison?',
    answer:
      'Every product in a category is scored 0 to 10 across a fixed set of dimensions (battery, comfort, value, and so on). The overall winner is whichever product has the higher average score. See How We Compare Products for the full method.'
  },
  {
    question: 'Do you test products yourselves?',
    answer:
      'Scores and comparisons are generated from structured manufacturer specifications and official retailer data rather than in-house lab testing. We are transparent about that so you can weigh our comparisons accordingly.'
  },
  {
    question: 'Does earning a commission affect your recommendations?',
    answer:
      'No. The scoring method is applied the same way to every product in a category regardless of commission rate. See our Affiliate Disclosure for details.'
  },
  {
    question: 'How current are the prices shown?',
    answer:
      'Prices are checked periodically but can change on Amazon at any time. Always confirm the current price on the product page before completing a purchase.'
  },
  {
    question: 'Can I request a product or comparison?',
    answer: 'Yes — use the Request a Comparison page and tell us what you would like to see covered.'
  },
  {
    question: 'I found an error in a spec or price. How do I report it?',
    answer: 'Use the Report Incorrect Information page with the product name and what looks wrong, and we will verify and correct it.'
  }
];

export default function FaqsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">FAQs</h1>
      <p className="mt-2 text-slate-500">Frequently asked questions about how this site works.</p>

      <div className="mt-8">
        <FaqAccordion faqs={faqs} />
      </div>
    </div>
  );
}
