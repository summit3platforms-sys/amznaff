// ---------------------------------------------------------------------------
// Six markets, six catalogues. A policy sold in one country is never compared
// with one sold in another: the cover taxonomies, the regulators, the
// terminology and the underwriting are all different, and a cross-border
// verdict would be meaningless at best.
//
// Everything country-specific lives here rather than being spread through the
// components. The engine works in one internal vocabulary and this file
// translates it at render time.
// ---------------------------------------------------------------------------

export type CountryCode = 'us' | 'uk' | 'ca' | 'au' | 'nz' | 'sg';

// How much the verdict engine is allowed to say in a given market.
//
//   'ranked'  — the engine names a winner and applies profile weights.
//   'filter'  — the engine states feature differences and eliminates tiers
//               that fail a hard requirement, but never names a winner and
//               never reweights by reader circumstance.
//
// 'filter' is the default for every market. A market moves to 'ranked' only
// once a regulatory opinion for that jurisdiction has cleared it, and the
// opinion is recorded in `clearanceNote`. This is a one-line change per market
// precisely so an adverse opinion does not mean rebuilding the verdict page.
export type EngineMode = 'ranked' | 'filter';

// Whether outbound insurer links are live in this market.
//
//   'live'     — affiliate/referral CTAs shown, rel="sponsored", disclosed.
//   'none'     — information only, no outbound commercial links at all.
export type CtaMode = 'live' | 'none';

export type Terminology = {
  /** What the reader pays before cover starts. */
  excess: string;
  /** The share of the remaining bill the reader pays. */
  coPayment: string;
  /** The share the insurer pays back. */
  reimbursement: string;
  /** The document that governs the policy. */
  wording: string;
  /** The upper bound on what the policy pays. */
  limit: string;
  /** A vet visit charge, which several markets treat as a separate benefit. */
  examFee: string;
};

export type Country = {
  code: CountryCode;
  name: string;
  adjective: string;
  /** BCP-47 tag for <html lang> and hreflang. */
  locale: string;
  currency: string;
  currencySymbol: string;
  /** Intl locale used for currency and date formatting. */
  formatLocale: string;
  /** en-US spelling or en-GB spelling in body copy. */
  spelling: 'us' | 'gb';
  regulator: { name: string; short: string; url: string };
  ombudsman: { name: string; short: string; url: string };
  /** Shown in the footer of every page in this market. */
  regulatoryNote: string;
  terminology: Terminology;
  engineMode: EngineMode;
  ctaMode: CtaMode;
  /** Why the market is in the mode it is in. Rendered nowhere; read by humans. */
  clearanceNote: string;
  /** Market facts a reader needs on every page in this country. */
  marketNotes: string[];
};

export const countries: Country[] = [
  {
    code: 'us',
    name: 'United States',
    adjective: 'US',
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    formatLocale: 'en-US',
    spelling: 'us',
    regulator: {
      name: 'State departments of insurance',
      short: 'State DOI',
      url: 'https://content.naic.org/state-insurance-departments'
    },
    ombudsman: {
      name: 'NAIC Consumer Insurance Search and state complaint indexes',
      short: 'NAIC',
      url: 'https://content.naic.org/consumer.htm'
    },
    regulatoryNote:
      'Pet insurance in the United States is regulated state by state. Availability, wording and pricing differ by state. We do not sell, arrange or advise on insurance; we compare published policy documents and link to the insurer.',
    terminology: {
      excess: 'deductible',
      coPayment: 'co-insurance',
      reimbursement: 'reimbursement rate',
      wording: 'policy document',
      limit: 'annual limit',
      examFee: 'exam fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote: 'Awaiting confirmation that a regulatory review has been completed. Defaults to filter/none until then.',
    marketNotes: [
      'Availability and wording vary by state — check your own state before relying on any figure here.',
      'Some products marketed alongside pet insurance are membership or wellness plans, not insurance, and are labelled as such on this site.'
    ]
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    adjective: 'UK',
    locale: 'en-GB',
    currency: 'GBP',
    currencySymbol: '£',
    formatLocale: 'en-GB',
    spelling: 'gb',
    regulator: {
      name: 'Financial Conduct Authority',
      short: 'FCA',
      url: 'https://www.fca.org.uk/'
    },
    ombudsman: {
      name: 'Financial Ombudsman Service',
      short: 'FOS',
      url: 'https://www.financial-ombudsman.org.uk/'
    },
    regulatoryNote:
      'We are not authorised by the Financial Conduct Authority and we do not arrange, advise on or sell insurance. This site compares published policy wordings and Insurance Product Information Documents and links to the insurer.',
    terminology: {
      excess: 'excess',
      coPayment: 'co-payment',
      reimbursement: 'percentage paid',
      wording: 'policy wording',
      limit: 'cover limit',
      examFee: 'consultation fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote:
      'FCA perimeter question is open: a ranked verdict responsive to a reader-selected profile may fall inside "advising on insurance". Stays in filter mode until an opinion clears it.',
    marketNotes: [
      'UK policies fall into four cover types — lifetime, maximum benefit, time-limited and accident-only — and the type matters more than any other feature for a pet that develops a long-term condition.',
      'Third-party liability cover is standard on most UK dog policies and is not offered on cat policies.'
    ]
  },
  {
    code: 'ca',
    name: 'Canada',
    adjective: 'Canadian',
    locale: 'en-CA',
    currency: 'CAD',
    currencySymbol: '$',
    formatLocale: 'en-CA',
    spelling: 'gb',
    regulator: {
      name: 'Provincial insurance regulators',
      short: 'Provincial regulators',
      url: 'https://www.ccir-ccrra.org/'
    },
    ombudsman: {
      name: 'General Insurance OmbudService',
      short: 'GIO',
      url: 'https://www.giocanada.org/'
    },
    regulatoryNote:
      'Pet insurance in Canada is regulated provincially. We do not sell, arrange or advise on insurance; we compare published policy documents and link to the insurer.',
    terminology: {
      excess: 'deductible',
      coPayment: 'co-insurance',
      reimbursement: 'reimbursement rate',
      wording: 'policy document',
      limit: 'annual limit',
      examFee: 'exam fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote: 'Awaiting confirmation that a regulatory review has been completed. Defaults to filter/none until then.',
    marketNotes: [
      'Availability differs by province, and Quebec wordings differ from the rest of Canada.',
      'Fewer insurers operate here than in the US or UK, so company-level differences carry more weight than tier-level ones.'
    ]
  },
  {
    code: 'au',
    name: 'Australia',
    adjective: 'Australian',
    locale: 'en-AU',
    currency: 'AUD',
    currencySymbol: '$',
    formatLocale: 'en-AU',
    spelling: 'gb',
    regulator: {
      name: 'Australian Securities and Investments Commission',
      short: 'ASIC',
      url: 'https://asic.gov.au/'
    },
    ombudsman: {
      name: 'Australian Financial Complaints Authority',
      short: 'AFCA',
      url: 'https://www.afca.org.au/'
    },
    regulatoryNote:
      'We do not hold an Australian Financial Services Licence and we do not provide financial product advice, general or personal. This site compares published Product Disclosure Statements and Target Market Determinations and links to the insurer.',
    terminology: {
      excess: 'excess',
      coPayment: 'co-payment',
      reimbursement: 'benefit percentage',
      wording: 'Product Disclosure Statement',
      limit: 'annual benefit limit',
      examFee: 'consultation fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote:
      'Comparing insurance for retail clients generally requires an AFSL or authorised representative status, and ASIC has litigated misleading comparison sites. Stays in filter mode with no CTAs until licensed or routed through a licensed partner.',
    marketNotes: [
      'Most Australian pet insurance brands are underwritten by the same underwriter. Where that is the case, the underwriter is named on every page for that brand — two brands sharing an underwriter often share the wording too.',
      'The Product Disclosure Statement is the governing document, not the marketing page.'
    ]
  },
  {
    code: 'nz',
    name: 'New Zealand',
    adjective: 'New Zealand',
    locale: 'en-NZ',
    currency: 'NZD',
    currencySymbol: '$',
    formatLocale: 'en-NZ',
    spelling: 'gb',
    regulator: {
      name: 'Financial Markets Authority',
      short: 'FMA',
      url: 'https://www.fma.govt.nz/'
    },
    ombudsman: {
      name: 'Insurance & Financial Services Ombudsman',
      short: 'IFSO',
      url: 'https://www.ifso.nz/'
    },
    regulatoryNote:
      'We do not provide regulated financial advice. This site compares published policy wordings and links to the insurer.',
    terminology: {
      excess: 'excess',
      coPayment: 'co-payment',
      reimbursement: 'percentage paid',
      wording: 'policy wording',
      limit: 'annual limit',
      examFee: 'consultation fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote: 'Awaiting confirmation that a regulatory review has been completed. Defaults to filter/none until then.',
    marketNotes: [
      'A small market with few insurers, so the practical choice is narrower than the number of brands suggests.',
      'Whether a policy carries a co-payment, and at what age it starts, is the axis most New Zealand policies differ on.'
    ]
  },
  {
    code: 'sg',
    name: 'Singapore',
    adjective: 'Singapore',
    locale: 'en-SG',
    currency: 'SGD',
    currencySymbol: 'S$',
    formatLocale: 'en-SG',
    spelling: 'gb',
    regulator: {
      name: 'Monetary Authority of Singapore',
      short: 'MAS',
      url: 'https://www.mas.gov.sg/'
    },
    ombudsman: {
      name: 'Financial Industry Disputes Resolution Centre',
      short: 'FIDReC',
      url: 'https://www.fidrec.com.sg/'
    },
    regulatoryNote:
      'We are not a licensed insurance intermediary and we do not advise on or arrange insurance. This site compares published policy wordings and links to the insurer.',
    terminology: {
      excess: 'excess',
      coPayment: 'co-insurance',
      reimbursement: 'percentage paid',
      wording: 'policy wording',
      limit: 'annual limit',
      examFee: 'consultation fee'
    },
    engineMode: 'filter',
    ctaMode: 'none',
    clearanceNote: 'Awaiting confirmation that a regulatory review has been completed. Defaults to filter/none until then.',
    marketNotes: [
      'Licensed-breed rules affect which dogs can be insured and on what terms.',
      'Third-party liability and cashless surgery arrangements are the features Singapore policies most often differ on.'
    ]
  }
];

export const countryCodes = countries.map((c) => c.code);

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

export function isCountryCode(value: string): value is CountryCode {
  return countryCodes.includes(value as CountryCode);
}

export function formatMoney(amount: number, country: Country): string {
  return new Intl.NumberFormat(country.formatLocale, {
    style: 'currency',
    currency: country.currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2
  }).format(amount);
}

export function formatDate(iso: string, country: Country): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(country.formatLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

/** Renders the internal term in the vocabulary of the reader's market. */
export function term(country: Country, key: keyof Terminology): string {
  return country.terminology[key];
}
