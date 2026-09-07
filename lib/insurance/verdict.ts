import { Country, EngineMode } from '@/data/insurance/countries';
import { PolicyTier, Verifiable, isUnverified } from '@/data/insurance/types';

// ---------------------------------------------------------------------------
// The verdict engine.
//
// Nine criteria, scored 0-5 from the star fields. Two output modes, set per
// country in data/insurance/countries.ts:
//
//   'ranked'  names a winner and applies the reader's profile weights.
//   'filter'  states the differences and eliminates tiers that fail a hard
//             requirement, and names no winner at all.
//
// 'filter' is the default everywhere. The distinction is regulatory, not
// cosmetic: a ranked answer that responds to a reader-selected profile is
// close to a personal recommendation, which several of these markets license.
// Keeping it a per-country flag means an adverse opinion costs one line here
// rather than a rebuild of the comparison page.
//
// Price is deliberately the lowest-weighted criterion in every profile and can
// never be the sole reason a tier wins. The classic bad outcome in this
// category is a reader buying the cheapest policy and discovering at renewal
// that their pet's chronic condition is now excluded.
// ---------------------------------------------------------------------------

export type CriterionKey =
  | 'coverCeiling'
  | 'outOfPocket'
  | 'chronicDurability'
  | 'hereditaryDental'
  | 'waitingPeriods'
  | 'enrolmentWindow'
  | 'extrasBreadth'
  | 'claimsExperience'
  | 'priceBand';

export type Criterion = { key: CriterionKey; label: string; description: string };

export const CRITERIA: Criterion[] = [
  { key: 'coverCeiling', label: 'Cover ceiling', description: 'Annual, per-condition and lifetime limits, and whether they reset each year' },
  { key: 'outOfPocket', label: 'Out of pocket', description: 'Excess, co-payment and any age-related loading' },
  { key: 'chronicDurability', label: 'Chronic-condition durability', description: 'Whether a long-term condition stays covered after the policy renews' },
  { key: 'hereditaryDental', label: 'Hereditary & dental', description: 'Hereditary and congenital conditions, and dental illness rather than only dental injury' },
  { key: 'waitingPeriods', label: 'Waiting periods', description: 'How long before accident, illness and orthopaedic cover starts' },
  { key: 'enrolmentWindow', label: 'Enrolment window', description: 'Minimum and maximum age at joining, and whether cover renews for life' },
  { key: 'extrasBreadth', label: 'Extras', description: 'Liability, boarding, travel, direct vet payment and other benefits' },
  { key: 'claimsExperience', label: 'Claims experience', description: 'Ombudsman complaints ratio and published turnaround' },
  { key: 'priceBand', label: 'Price band', description: 'Indicative premium range — context only, never the reason a policy wins' }
];

export type Profile = 'balanced' | 'puppy-kitten' | 'breed-prone' | 'senior' | 'budget' | 'multi-pet' | 'exotic';

type Weights = Record<CriterionKey, number>;

const BASE: Weights = {
  coverCeiling: 3, outOfPocket: 3, chronicDurability: 3, hereditaryDental: 2,
  waitingPeriods: 2, enrolmentWindow: 2, extrasBreadth: 1, claimsExperience: 2, priceBand: 1
};

// Price never rises above 2 in any profile, including 'budget'. A profile that
// let price dominate would reproduce exactly the bad advice this site exists
// to correct.
export const PROFILE_WEIGHTS: Record<Profile, Weights> = {
  balanced: BASE,
  'puppy-kitten': { ...BASE, chronicDurability: 4, hereditaryDental: 4, waitingPeriods: 3, enrolmentWindow: 1 },
  'breed-prone': { ...BASE, hereditaryDental: 5, chronicDurability: 5, coverCeiling: 4, waitingPeriods: 3 },
  senior: { ...BASE, enrolmentWindow: 5, chronicDurability: 5, outOfPocket: 4, priceBand: 2 },
  budget: { ...BASE, outOfPocket: 4, priceBand: 2, extrasBreadth: 0, coverCeiling: 2 },
  'multi-pet': { ...BASE, priceBand: 2, extrasBreadth: 2, outOfPocket: 4 },
  exotic: { ...BASE, enrolmentWindow: 4, coverCeiling: 4, extrasBreadth: 2 }
};

export const PROFILE_LABELS: Record<Profile, string> = {
  balanced: 'Balanced',
  'puppy-kitten': 'Puppy or kitten',
  'breed-prone': 'Pedigree or breed-prone',
  senior: 'Senior pet',
  budget: 'Lowest cost',
  'multi-pet': 'More than one pet',
  exotic: 'Rabbit or exotic'
};

// A field the wording did not settle scores as unknown rather than as zero.
// Scoring an unverified field as its worst case would silently punish an
// insurer for our own incomplete research.
function score<T>(value: Verifiable<T>, fn: (v: T) => number): number | null {
  if (value === undefined || value === null) return null;
  if (isUnverified(value)) return null;
  return Math.max(0, Math.min(5, fn(value as T)));
}

function num(value: Verifiable<number | 'none' | 'unlimited'>): number | null | 'unlimited' {
  if (value === undefined || value === null || isUnverified(value)) return null;
  if (value === 'unlimited') return 'unlimited';
  if (value === 'none') return null;
  return value as number;
}

export type CriterionScore = { key: CriterionKey; score: number | null };

export function scoreTier(tier: PolicyTier): CriterionScore[] {
  const annual = num(tier.limits.annualLimit);
  const coverCeiling =
    annual === 'unlimited' ? 5 : annual === null ? null : annual >= 15000 ? 5 : annual >= 10000 ? 4 : annual >= 5000 ? 3 : annual >= 2500 ? 2 : 1;

  const reimb = score(tier.cost.reimbursementPercent, (p) => (p >= 90 ? 5 : p >= 80 ? 4 : p >= 70 ? 3 : 2));
  const ageLoad = score(tier.cost.ageRelatedCoPay, (v) => (v === 'none' ? 5 : 2));
  const outOfPocket = reimb === null && ageLoad === null ? null : ((reimb ?? 3) + (ageLoad ?? 3)) / 2;

  const chronicDurability = score(tier.conditions.chronicContinuesAtRenewal, (v) => (v ? 5 : 0));

  const hered = score(tier.conditions.hereditaryCovered, (v) => (v ? 1 : 0));
  const congen = score(tier.conditions.congenitalCovered, (v) => (v ? 1 : 0));
  const dental = score(tier.conditions.dentalIllnessCovered, (v) => (v ? 1 : 0));
  const hereditaryDental =
    hered === null && congen === null && dental === null ? null : (((hered ?? 0) + (congen ?? 0) + (dental ?? 0)) / 3) * 5;

  const illness = score(tier.waitingPeriods.illnessDays, (d) => (d <= 3 ? 5 : d <= 14 ? 4 : d <= 21 ? 3 : d <= 30 ? 2 : 1));
  const ortho = score(tier.waitingPeriods.orthopaedicDays, (d) => (d <= 14 ? 5 : d <= 60 ? 4 : d <= 180 ? 2 : 1));
  const waitingPeriods = illness === null && ortho === null ? null : ((illness ?? 3) + (ortho ?? 3)) / 2;

  const maxAge = score(tier.eligibility.maxEnrolmentAgeYears, (v) => (v === 'none' ? 5 : (v as number) >= 14 ? 4 : (v as number) >= 10 ? 3 : (v as number) >= 8 ? 2 : 1));
  const lifelong = score(tier.eligibility.renewableForLife, (v) => (v ? 5 : 1));
  const enrolmentWindow = maxAge === null && lifelong === null ? null : ((maxAge ?? 3) + (lifelong ?? 3)) / 2;

  const extraFlags = [
    tier.extras.thirdPartyLiability, tier.extras.boardingFees, tier.extras.overseasTravel,
    tier.extras.euthanasiaAndCremation, tier.extras.complementaryTherapies,
    tier.extras.directVetPay, tier.extras.examFeesCovered, tier.extras.telehealth
  ];
  const known = extraFlags.filter((f) => f !== undefined && f !== null && !isUnverified(f));
  const present = known.filter((f) => f !== 'none' && f !== false).length;
  const extrasBreadth = known.length === 0 ? null : (present / known.length) * 5;

  const complaints = score(tier.claims.complaints, (c) => (c.ratio <= 0.5 ? 5 : c.ratio <= 1 ? 4 : c.ratio <= 2 ? 3 : c.ratio <= 4 ? 2 : 1));
  const turnaround = score(tier.claims.averageTurnaroundDays, (d) => (d <= 3 ? 5 : d <= 7 ? 4 : d <= 14 ? 3 : 2));
  const claimsExperience = complaints === null && turnaround === null ? null : ((complaints ?? 3) + (turnaround ?? 3)) / 2;

  const priceBand = score(tier.cost.premiumFromBand, (bands) => {
    const values = Object.values(bands).map((b) => b.from);
    if (values.length === 0) return 3;
    const lowest = Math.min(...values);
    return lowest <= 15 ? 5 : lowest <= 25 ? 4 : lowest <= 40 ? 3 : lowest <= 60 ? 2 : 1;
  });

  return [
    { key: 'coverCeiling', score: coverCeiling },
    { key: 'outOfPocket', score: outOfPocket },
    { key: 'chronicDurability', score: chronicDurability },
    { key: 'hereditaryDental', score: hereditaryDental },
    { key: 'waitingPeriods', score: waitingPeriods },
    { key: 'enrolmentWindow', score: enrolmentWindow },
    { key: 'extrasBreadth', score: extrasBreadth },
    { key: 'claimsExperience', score: claimsExperience },
    { key: 'priceBand', score: priceBand }
  ];
}

/** A hard fact that removes a tier from consideration for a profile. Never a judgement. */
export type DealBreaker = { tierSlug: string; reason: string };

export function dealBreakers(tier: PolicyTier, profile: Profile): DealBreaker[] {
  const out: DealBreaker[] = [];
  const maxAge = tier.eligibility.maxEnrolmentAgeYears;

  if (profile === 'senior' && !isUnverified(maxAge) && maxAge !== 'none' && (maxAge as number) <= 9) {
    out.push({ tierSlug: tier.slug, reason: `Will not accept a new pet over ${maxAge} years old.` });
  }
  if (profile === 'exotic' && !tier.species.some((s) => s === 'rabbit' || s === 'exotic')) {
    out.push({ tierSlug: tier.slug, reason: 'Covers cats and dogs only.' });
  }
  const chronic = tier.conditions.chronicContinuesAtRenewal;
  if ((profile === 'breed-prone' || profile === 'puppy-kitten') && !isUnverified(chronic) && chronic === false) {
    out.push({ tierSlug: tier.slug, reason: 'A long-term condition stops being covered when the policy renews.' });
  }
  const renews = tier.eligibility.renewableForLife;
  if (profile === 'senior' && !isUnverified(renews) && renews === false) {
    out.push({ tierSlug: tier.slug, reason: 'Cover is not guaranteed to renew as the pet ages.' });
  }
  return out;
}

export type Difference = {
  criterion: Criterion;
  leaderSlug: string;
  leaderScore: number;
  otherScore: number;
  gap: number;
};

export type Verdict = {
  mode: EngineMode;
  /** Populated only in 'ranked' mode. Null in 'filter' mode, by design. */
  winnerSlug: string | null;
  headline: string;
  /** Differences favouring A, then those favouring B. Both always rendered. */
  favouringA: Difference[];
  favouringB: Difference[];
  scoresA: CriterionScore[];
  scoresB: CriterionScore[];
  dealBreakers: DealBreaker[];
  /** Star fields neither wording settled — shown so the reader can weigh the gap. */
  unresolved: string[];
};

export function buildVerdict(a: PolicyTier, b: PolicyTier, country: Country, profile: Profile = 'balanced'): Verdict {
  const scoresA = scoreTier(a);
  const scoresB = scoreTier(b);
  const weights = PROFILE_WEIGHTS[profile];

  const diffs: Difference[] = [];
  for (const criterion of CRITERIA) {
    const sa = scoresA.find((s) => s.key === criterion.key)?.score;
    const sb = scoresB.find((s) => s.key === criterion.key)?.score;
    if (sa === null || sa === undefined || sb === null || sb === undefined) continue;
    if (Math.abs(sa - sb) < 0.5) continue;
    const leaderSlug = sa > sb ? a.slug : b.slug;
    diffs.push({ criterion, leaderSlug, leaderScore: Math.max(sa, sb), otherScore: Math.min(sa, sb), gap: Math.abs(sa - sb) });
  }
  diffs.sort((x, y) => y.gap * weights[y.criterion.key] - x.gap * weights[x.criterion.key]);

  const favouringA = diffs.filter((d) => d.leaderSlug === a.slug);
  const favouringB = diffs.filter((d) => d.leaderSlug === b.slug);

  const breakers = [...dealBreakers(a, profile), ...dealBreakers(b, profile)];

  const unresolved = CRITERIA.filter((c) => {
    const sa = scoresA.find((s) => s.key === c.key)?.score;
    const sb = scoresB.find((s) => s.key === c.key)?.score;
    return sa === null || sb === null;
  }).map((c) => c.label);

  if (country.engineMode === 'filter') {
    // No winner, no weighted total. The strongest single difference is stated
    // as a fact and the reader decides what it is worth to them.
    const top = diffs[0];
    const headline = top
      ? `${top.leaderSlug === a.slug ? a.tierName : b.tierName} offers more on ${top.criterion.label.toLowerCase()}`
      : `${a.tierName} and ${b.tierName} are closely matched on the criteria we score`;
    return { mode: 'filter', winnerSlug: null, headline, favouringA, favouringB, scoresA, scoresB, dealBreakers: breakers, unresolved };
  }

  const total = (scores: CriterionScore[]) =>
    scores.reduce((sum, s) => (s.score === null ? sum : sum + s.score * weights[s.key]), 0);
  const totalA = total(scoresA);
  const totalB = total(scoresB);
  const winnerSlug = totalA === totalB ? null : totalA > totalB ? a.slug : b.slug;
  const winningDiff = winnerSlug === a.slug ? favouringA[0] : favouringB[0];

  const headline = winnerSlug
    ? `${winnerSlug === a.slug ? a.tierName : b.tierName} scores higher overall${winningDiff ? `, led by ${winningDiff.criterion.label.toLowerCase()}` : ''}`
    : `${a.tierName} and ${b.tierName} score level`;

  return { mode: 'ranked', winnerSlug, headline, favouringA, favouringB, scoresA, scoresB, dealBreakers: breakers, unresolved };
}
