import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why The Comparison Report exists and how our comparisons are built.'
};

const commonQuestions = [
  'Which laptop is better?',
  'Is Product A worth the extra money over Product B?',
  "What's the real difference between these two models?",
  'Which offers better value for the price?',
  'Which product is best for my specific needs?'
];

const missionValues = [
  'Easy to understand',
  'Transparent',
  'Organized',
  'Comprehensive',
  'Continuously updated',
  'Focused on helping — not confusing'
];

const whatWeCover = [
  'Key differences',
  'Shared features',
  'Advantages',
  'Disadvantages',
  'Performance comparisons',
  'Value for money',
  'Best use cases',
  'Technical specifications',
  'Buying recommendations'
];

const processSteps = [
  {
    title: 'Product Overview',
    body: 'A quick introduction to both products, highlighting their intended audience and primary strengths.'
  },
  {
    title: 'Specifications',
    body: 'A detailed side-by-side breakdown of technical specifications, including dimensions, performance, compatibility, connectivity, battery life, materials, and other relevant features depending on the product category.'
  },
  {
    title: 'Features Comparison',
    body: 'We compare the capabilities that matter most to buyers, highlighting meaningful differences rather than overwhelming readers with unnecessary technical jargon.'
  },
  {
    title: 'Performance Analysis',
    body: 'Whenever applicable, we evaluate areas such as speed, efficiency, reliability, usability, and overall user experience.'
  }
];

const valueFactors = ['Features offered', 'Build quality', 'Long-term value', 'Warranty', 'Overall ownership experience'];

const categoryGroups = [
  {
    name: 'Electronics',
    items: ['Smartphones', 'Laptops', 'Tablets', 'Desktop Computers', 'Monitors', 'Graphics Cards', 'Processors', 'Storage Devices', 'Networking Equipment']
  },
  {
    name: 'Audio',
    items: ['Wireless Earbuds', 'Headphones', 'Speakers', 'Soundbars', 'Microphones']
  },
  {
    name: 'Home & Kitchen',
    items: ['Coffee Makers', 'Air Fryers', 'Blenders', 'Vacuum Cleaners', 'Robot Vacuums', 'Cookware', 'Kitchen Appliances']
  },
  {
    name: 'Office',
    items: ['Office Chairs', 'Standing Desks', 'Printers', 'Keyboards', 'Computer Mice', 'Webcams']
  },
  {
    name: 'Smart Home',
    items: ['Security Cameras', 'Smart Lights', 'Smart Locks', 'Video Doorbells', 'Smart Displays']
  },
  {
    name: 'Fitness',
    items: ['Smartwatches', 'Fitness Trackers', 'Exercise Equipment']
  },
  {
    name: 'Outdoor',
    items: ['Portable Power Stations', 'Camping Equipment', 'Electric Scooters', 'Action Cameras']
  }
];

const editorialPrinciples = [
  {
    title: 'Accurate',
    body: 'We work to verify product specifications and technical information using reliable sources whenever possible.'
  },
  {
    title: 'Clear',
    body: 'Our goal is to make complicated product comparisons understandable for everyone — not just industry experts.'
  },
  {
    title: 'Transparent',
    body: 'When information changes, we update our comparison pages to reflect the latest available data whenever practical.'
  },
  {
    title: 'User-Focused',
    body: 'Every article is created with one question in mind: "What information does someone need to confidently make a buying decision?"'
  }
];

const whyChooseUs = [
  'Comprehensive side-by-side comparisons',
  'Easy-to-read specification tables',
  'Practical buying advice',
  'Product highlights',
  'Pros and cons',
  'Feature breakdowns',
  'Value comparisons',
  'Regularly updated content',
  'A clean, distraction-free reading experience'
];

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-5">
      {eyebrow && <span className="pill mb-3">{eyebrow}</span>}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-gradient relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-winner-50 opacity-60 blur-3xl" />
        <div className="container-page relative py-16 text-center sm:py-20">
          <span className="pill mx-auto">About Us</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Welcome to The Comparison Report (TCR)
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Making buying decisions shouldn&apos;t feel complicated.
          </p>
        </div>
      </section>

      <div className="container-page max-w-3xl py-14">
        <div className="space-y-16">
          {/* Intro */}
          <section>
            <p className="text-slate-600">
              At The Comparison Report (TCR), our mission is simple: help people confidently choose between products
              by providing clear, unbiased, and easy-to-understand comparisons.
            </p>
            <p className="mt-4 text-slate-600">Every day, millions of shoppers search questions like:</p>
            <BulletList items={commonQuestions} />
            <p className="mt-6 text-slate-600">
              Finding reliable answers often means opening dozens of tabs, reading conflicting reviews, comparing
              technical specifications manually, and spending hours researching.
            </p>
            <p className="mt-4 text-slate-600">We built The Comparison Report to solve that problem.</p>
            <p className="mt-4 text-slate-600">
              Instead of making you search across multiple websites, we bring everything together into one
              comprehensive comparison experience.
            </p>
          </section>

          {/* Mission */}
          <section>
            <SectionHeading title="Our Mission" />
            <p className="text-slate-600">
              Our goal is to simplify product research by transforming complex product information into clear,
              actionable insights.
            </p>
            <p className="mt-4 text-slate-600">We believe consumers deserve information that is:</p>
            <BulletList items={missionValues} />
            <p className="mt-6 text-slate-600">
              Whether you&apos;re buying your first laptop, upgrading your smartphone, replacing your office chair,
              or choosing kitchen appliances, we aim to make every decision easier.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <SectionHeading title="What We Do" />
            <p className="text-slate-600">The Comparison Report specializes in head-to-head product comparisons.</p>
            <p className="mt-4 text-slate-600">
              Rather than publishing generic reviews, we focus on answering one specific question:
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">&ldquo;Which product should I buy?&rdquo;</p>
            <p className="mt-4 text-slate-600">Each comparison is designed to help users quickly understand:</p>
            <BulletList items={whatWeCover} />
            <p className="mt-6 text-slate-600">
              Our comparison pages are structured to help readers reach a confident decision in just a few minutes.
            </p>
          </section>

          {/* Process */}
          <section>
            <SectionHeading title="Our Comparison Process" />
            <p className="text-slate-600">
              Every comparison follows a structured methodology to ensure consistency and clarity. Our reports may
              include:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.title} className="card p-5">
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 card p-5">
              <h3 className="font-semibold text-slate-900">Value Assessment</h3>
              <p className="mt-1.5 text-sm text-slate-600">Price is only one part of the buying decision. We also consider:</p>
              <BulletList items={valueFactors} />
              <p className="mt-4 text-sm text-slate-600">
                This helps readers determine which product delivers the best value — not simply the lowest price.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section>
            <SectionHeading title="Categories We Cover" />
            <p className="text-slate-600">Our library continues to expand across a wide variety of consumer products. Examples include:</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {categoryGroups.map((group) => (
                <div key={group.name} className="card p-5">
                  <h3 className="font-semibold text-slate-900">{group.name}</h3>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-600">And many more categories are added regularly.</p>
          </section>

          {/* How we create content */}
          <section>
            <SectionHeading title="How We Create Our Content" />
            <p className="text-slate-600">
              Our content is developed using a combination of structured product data, manufacturer information,
              publicly available technical documentation, expert research, editorial review, and advanced
              AI-assisted analysis.
            </p>
            <p className="mt-4 text-slate-600">
              Artificial intelligence helps us organize and summarize complex information more efficiently, while
              our editorial process focuses on improving readability, consistency, and overall quality.
            </p>
            <p className="mt-4 text-slate-600">
              We continually review and update our content as new products, firmware updates, specifications, and
              pricing become available.
            </p>
          </section>

          {/* Editorial principles */}
          <section>
            <SectionHeading title="Our Editorial Principles" />
            <p className="text-slate-600">We strive to provide information that is:</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {editorialPrinciples.map((principle) => (
                <div key={principle.title} className="card p-5">
                  <h3 className="font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{principle.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate disclosure */}
          <section>
            <SectionHeading title="Affiliate Disclosure" />
            <p className="text-slate-600">Some pages on The Comparison Report may contain affiliate links.</p>
            <p className="mt-4 text-slate-600">
              If you purchase a product through one of these links, we may earn a small commission at no additional
              cost to you.
            </p>
            <p className="mt-4 text-slate-600">
              These commissions help support the operation of the website, fund ongoing research, and allow us to
              continue creating free comparison content.
            </p>
            <p className="mt-4 text-slate-600">
              Our editorial opinions are never influenced by affiliate partnerships, advertisers, or manufacturers.
              See our{' '}
              <a href="/affiliate-disclosure" className="font-medium text-brand-600 hover:underline">
                full affiliate disclosure
              </a>{' '}
              for details.
            </p>
          </section>

          {/* Transparency */}
          <section>
            <SectionHeading title="Our Commitment to Transparency" />
            <p className="text-slate-600">We understand that trust is earned.</p>
            <p className="mt-4 text-slate-600">
              That&apos;s why we aim to clearly distinguish factual specifications, product information, editorial
              opinions, and buying recommendations.
            </p>
            <p className="mt-4 text-slate-600">
              Whenever possible, we encourage readers to consider multiple factors — including features, price,
              intended use, and personal preferences — before making a purchase.
            </p>
          </section>

          {/* Why choose us */}
          <section>
            <SectionHeading title="Why Choose The Comparison Report?" />
            <p className="text-slate-600">
              Thousands of products enter the market every year. Researching them individually can be overwhelming.
            </p>
            <p className="mt-4 text-slate-600">The Comparison Report helps simplify the process by offering:</p>
            <BulletList items={whyChooseUs} />
            <p className="mt-6 text-slate-600">
              Our goal isn&apos;t simply to review products — it&apos;s to help people make smarter purchasing
              decisions.
            </p>
          </section>

          {/* Looking ahead */}
          <section>
            <SectionHeading title="Looking Ahead" />
            <p className="text-slate-600">Technology evolves rapidly, and so do consumer products.</p>
            <p className="mt-4 text-slate-600">
              As our platform grows, we plan to expand our coverage across additional categories, improve our
              comparison tools, enhance search capabilities, and continue developing resources that make product
              research faster, easier, and more reliable.
            </p>
            <p className="mt-4 text-slate-600">
              We&apos;re committed to building one of the web&apos;s most trusted destinations for product
              comparisons.
            </p>
          </section>

          {/* Get in touch */}
          <section className="card bg-gradient-to-br from-brand-50 to-white p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Get in Touch</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We value feedback from our readers. Whether you&apos;ve spotted an error, have a suggestion for a
              future comparison, or simply want to share your experience, we&apos;d love to hear from you.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Your feedback helps us improve and ensures The Comparison Report continues to provide useful,
              accurate, and trustworthy information for shoppers everywhere.
            </p>
            <a href="/contact" className="btn-primary mt-6 inline-flex">
              Contact us
            </a>
            <p className="mx-auto mt-8 max-w-xl text-sm text-slate-500">
              Thank you for visiting The Comparison Report (TCR). We&apos;re here to help you compare smarter,
              choose confidently, and buy with greater peace of mind.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
