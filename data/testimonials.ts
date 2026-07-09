// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — these are dummy names/quotes added at the user's
// explicit request to fill out the homepage layout before real testimonials
// exist. None of this is real customer feedback.
//
// TODO before launch: replace every entry below with actual testimonials
// (real names/initials with permission, or verified review excerpts).
// Publishing fabricated testimonials to real site visitors can run into FTC
// endorsement-guideline issues in the US, so this file should not ship to
// production as-is.
// ---------------------------------------------------------------------------

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jordan M.',
    role: 'Bought Sony WH-1000XM5',
    quote:
      'I was stuck between three pairs of headphones for a week. The spec breakdown made the decision take five minutes instead.'
  },
  {
    name: 'Priya S.',
    role: 'Bought Bose QC Ultra',
    quote: 'No fluff, just the numbers side by side. Exactly what I needed before spending this much on headphones.'
  },
  {
    name: 'Alex T.',
    role: 'Bought Sennheiser Momentum 4',
    quote: 'The battery and comfort comparison alone saved me from buying the wrong pair for long flights.'
  }
];
