import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Open roles at The Comparison Report.'
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

type JobOpening = {
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
};

const openings: JobOpening[] = [
  {
    title: 'Content Writer',
    type: 'Freelance / Contract',
    location: 'Remote',
    description:
      'Write clear, structured buying guides and category explainers that help readers understand what actually matters when comparing products.',
    responsibilities: [
      'Write buying guides in our established structured, spec-first style',
      'Turn technical specifications into plain-language explanations',
      'Work from provided product data — no invented claims or specs',
      'Collaborate with editors on tone, accuracy, and structure'
    ]
  },
  {
    title: 'Senior Content Writer',
    type: 'Freelance / Contract',
    location: 'Remote',
    description:
      'Own a content category end to end — from planning the guide roadmap to writing and reviewing final drafts from other writers.',
    responsibilities: [
      '2+ years writing product or technical content',
      'Plan and prioritize guide topics for one or more categories',
      'Review and edit drafts from other content writers',
      'Ensure every claim is traceable to real product data or specs'
    ]
  },
  {
    title: 'Email Outreach Specialist',
    type: 'Freelance / Contract',
    location: 'Remote',
    description:
      'Build relationships with other sites and partners through personalized, well-researched outreach — no spam, no mass blasts.',
    responsibilities: [
      'Research and identify relevant partnership and linking opportunities',
      'Write personalized outreach emails and manage follow-ups',
      'Track outreach performance and iterate on messaging',
      'Report on partnerships secured each month'
    ]
  },
  {
    title: 'SEO Content Editor',
    type: 'Freelance / Contract',
    location: 'Remote',
    description:
      'Review guides and comparison copy for search intent, structure, and clarity before publishing.',
    responsibilities: [
      'Experience with on-page SEO and keyword research tools',
      'Edit drafts for structure, readability, and search intent match',
      'Suggest internal linking between guides, comparisons, and categories',
      'Flag thin or unclear content for revision'
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="container-page max-w-4xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Careers</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        We&apos;re a small, growing team building a product comparison site that actually respects the reader&apos;s
        time — structured data over opinion, clarity over clickbait. If that sounds like your kind of work, take a
        look at what&apos;s open below.
      </p>

      <div className="mt-10 space-y-4">
        {openings.map((job) => {
          const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;
          return (
            <div key={job.title} className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{job.title}</h2>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    <span className="pill">{job.type}</span>
                    <span className="pill">{job.location}</span>
                  </div>
                </div>
                <a href={mailto} className="btn-primary flex-shrink-0 text-sm">
                  Apply
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-600">{job.description}</p>

              <ul className="mt-4 space-y-1.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-10 card bg-gradient-to-br from-brand-50 to-white p-6 text-center">
        <h2 className="text-lg font-semibold text-slate-900">Don&apos;t see a fit?</h2>
        <p className="mx-auto mt-1.5 max-w-md text-sm text-slate-600">
          We&apos;re always open to hearing from people who&apos;d be a good addition down the line. Send us a note
          and tell us what you&apos;d want to work on.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Careers inquiry')}`}
          className="btn-secondary mt-4 inline-flex text-sm"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
