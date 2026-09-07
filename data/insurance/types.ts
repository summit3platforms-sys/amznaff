import { CountryCode } from './countries';

// ---------------------------------------------------------------------------
// The spec sheet for a policy tier.
//
// One tier is one row in the comparison engine. Fields marked in REQUIRED_STAR
// below drive verdicts; everything else renders in tables.
//
// The governing principle, carried over from the electronics catalogue and
// more important here: nothing is asserted that is not in the policy wording.
// A field the wording does not settle is not guessed and is not left blank —
// it carries an Unverified value naming what was checked. A reader deciding
// whether their dog's lifelong condition will still be covered at renewal is
// owed the difference between "no" and "the wording does not say".
// ---------------------------------------------------------------------------

/** A value the wording does not settle. Renders as an explicit gap, never as a fact. */
export type Unverified = {
  unverified: true;
  /** What was checked, so the next person does not repeat the search. */
  checked: string;
};

export type Verifiable<T> = T | Unverified;

export function isUnverified<T>(value: Verifiable<T>): value is Unverified {
  return typeof value === 'object' && value !== null && (value as Unverified).unverified === true;
}

export type Species = 'dog' | 'cat' | 'rabbit' | 'exotic' | 'horse';

/** UK taxonomy, which the other markets map onto loosely. */
export type CoverType = 'accident-only' | 'time-limited' | 'max-benefit' | 'lifetime' | 'accident-illness' | 'comprehensive';

export type ExcessType = 'annual' | 'per-condition' | 'per-claim';

export type Limits = {
  annualLimit: Verifiable<number | 'unlimited'>;
  perConditionLimit: Verifiable<number | 'none'>;
  lifetimeLimit: Verifiable<number | 'none'>;
  /** Whether the limit refreshes each policy year. The whole game in the UK. */
  resetsAnnually: Verifiable<boolean>;
  /** Named sub-limits, e.g. { cruciate: 3000, dental: 500 }. */
  subLimits: Record<string, Verifiable<number | 'none'>>;
};

export type CostStructure = {
  excessAmounts: Verifiable<number[]>;
  excessType: Verifiable<ExcessType>;
  coPaymentPercent: Verifiable<number>;
  reimbursementPercent: Verifiable<number>;
  ageRelatedCoPay: Verifiable<{ startsAtAge: number; percent: number } | 'none'>;
  /** A band, never a headline premium: a single number is wrong for almost every reader. */
  premiumFromBand: Verifiable<Record<string, { from: number; to: number }>>;
  multiPetDiscountPercent: Verifiable<number | 'none'>;
  contract: Verifiable<'monthly' | 'annual'>;
  cancelAnytime: Verifiable<boolean>;
};

export type Eligibility = {
  minEnrolmentWeeks: Verifiable<number>;
  maxEnrolmentAgeYears: Verifiable<number | 'none'>;
  renewableForLife: Verifiable<boolean>;
  breedExclusions: Verifiable<string[]>;
  /** States, provinces or regions where the tier is unavailable. */
  regionExclusions: Verifiable<string[]>;
};

export type WaitingPeriods = {
  accidentDays: Verifiable<number>;
  illnessDays: Verifiable<number>;
  orthopaedicDays: Verifiable<number>;
  dentalDays: Verifiable<number>;
  waivedOnSwitch: Verifiable<boolean>;
};

export type ConditionRules = {
  preExistingDefinition: Verifiable<string>;
  curableWindowMonths: Verifiable<number | 'never-covered'>;
  bilateralRule: Verifiable<string>;
  hereditaryCovered: Verifiable<boolean>;
  congenitalCovered: Verifiable<boolean>;
  dentalIllnessCovered: Verifiable<boolean>;
  behaviouralCovered: Verifiable<boolean>;
  /** Whether a chronic condition keeps being covered after the policy renews. */
  chronicContinuesAtRenewal: Verifiable<boolean>;
};

export type Extras = {
  thirdPartyLiability: Verifiable<number | 'none'>;
  deathFromIllness: Verifiable<number | 'none'>;
  theftAndStraying: Verifiable<number | 'none'>;
  boardingFees: Verifiable<number | 'none'>;
  holidayCancellation: Verifiable<number | 'none'>;
  overseasTravel: Verifiable<boolean>;
  euthanasiaAndCremation: Verifiable<number | 'none'>;
  complementaryTherapies: Verifiable<number | 'none'>;
  directVetPay: Verifiable<boolean>;
  examFeesCovered: Verifiable<boolean>;
  telehealth: Verifiable<boolean>;
};

export type ClaimsRecord = {
  /** Insurer-published, and labelled as such wherever it renders. */
  averageTurnaroundDays: Verifiable<number>;
  channels: Verifiable<string[]>;
  /** From the national ombudsman, with the publication it came from. */
  complaints: Verifiable<{ ratio: number; source: string; period: string }>;
  ratingSnapshot: Verifiable<{ platform: string; score: number; count: number; date: string }>;
  yearsInMarket: Verifiable<number>;
};

export type Monetisation = {
  network: 'impact' | 'cj' | 'awin' | 'commission-factory' | 'involve-asia' | 'direct' | 'none';
  payoutModel: Verifiable<'cpa' | 'cpl' | 'percent-premium'>;
  trackingUrl: string | null;
  /** Regions where the link must not be shown. */
  geoRestrictions: string[];
};

export type PolicyTier = {
  id: string;
  country: CountryCode;
  insurerSlug: string;
  insurerName: string;
  /** Who actually carries the risk. In Australia this is the fact that matters most. */
  underwriter: Verifiable<string>;
  planName: string;
  tierName: string;
  slug: string;
  species: Species[];
  coverType: CoverType;

  wording: {
    url: string;
    /** The version or effective date printed on the document itself. */
    versionDate: string;
  };
  /** Date a human last checked every star field against the wording above. */
  verifiedOn: string;

  limits: Limits;
  cost: CostStructure;
  eligibility: Eligibility;
  waitingPeriods: WaitingPeriods;
  conditions: ConditionRules;
  extras: Extras;
  claims: ClaimsRecord;
  monetisation: Monetisation;

  /** Plain-language exclusions, each with the clause it came from. */
  exclusions: Array<{ text: string; clause: string }>;
  /** One honest sentence. Not a recommendation. */
  positioning: string;
  competitorSlugs: string[];
};
