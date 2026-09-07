import { PolicyTier, isUnverified } from '@/data/insurance/types';

// ---------------------------------------------------------------------------
// Build-time validation for policy tiers.
//
// Two jobs. First, refuse to publish a tier that is missing a field the verdict
// engine needs — a verdict computed from absent data is worse than no verdict.
// Second, surface staleness.
//
// On staleness, deliberately NOT the plan's original rule. Auto-dropping stale
// tiers out of the indexed set means pages leaving and re-entering the index on
// a rolling basis, and repeated deindex/reindex cycles cost more ranking than
// an honestly-dated page ever would. So:
//
//   - Past STALE_AFTER_DAYS, every page for the tier carries a visible
//     staleness notice. It stays indexed.
//   - Past MATERIAL_STALE_AFTER_DAYS, the tier is withheld from *verdicts*
//     only — the fields that decide a verdict (limits, waiting periods,
//     chronic-condition renewal) are the ones that hurt a reader when wrong.
//     Its own tier page stays up, clearly marked.
//
// A reader is never shown a confident comparison built on year-old wording.
// ---------------------------------------------------------------------------

export const STALE_AFTER_DAYS = 120;
export const MATERIAL_STALE_AFTER_DAYS = 270;

// The fields the verdict engine reads. A tier missing any of these cannot be
// scored, so it cannot be published into a comparison.
const REQUIRED_STAR: Array<{ path: string; get: (t: PolicyTier) => unknown }> = [
  { path: 'coverType', get: (t) => t.coverType },
  { path: 'underwriter', get: (t) => t.underwriter },
  { path: 'limits.annualLimit', get: (t) => t.limits.annualLimit },
  { path: 'limits.perConditionLimit', get: (t) => t.limits.perConditionLimit },
  { path: 'limits.resetsAnnually', get: (t) => t.limits.resetsAnnually },
  { path: 'cost.excessType', get: (t) => t.cost.excessType },
  { path: 'cost.reimbursementPercent', get: (t) => t.cost.reimbursementPercent },
  { path: 'cost.ageRelatedCoPay', get: (t) => t.cost.ageRelatedCoPay },
  { path: 'eligibility.maxEnrolmentAgeYears', get: (t) => t.eligibility.maxEnrolmentAgeYears },
  { path: 'eligibility.renewableForLife', get: (t) => t.eligibility.renewableForLife },
  { path: 'waitingPeriods.illnessDays', get: (t) => t.waitingPeriods.illnessDays },
  { path: 'waitingPeriods.orthopaedicDays', get: (t) => t.waitingPeriods.orthopaedicDays },
  { path: 'conditions.preExistingDefinition', get: (t) => t.conditions.preExistingDefinition },
  { path: 'conditions.chronicContinuesAtRenewal', get: (t) => t.conditions.chronicContinuesAtRenewal },
  { path: 'conditions.hereditaryCovered', get: (t) => t.conditions.hereditaryCovered },
  { path: 'conditions.dentalIllnessCovered', get: (t) => t.conditions.dentalIllnessCovered }
];

export type TierIssue = { tierId: string; level: 'error' | 'warning'; message: string };

export type TierStatus = {
  ageDays: number;
  /** Show a dated staleness notice on every page for this tier. */
  showStalenessNotice: boolean;
  /** Withhold from verdicts; the tier page itself stays up. */
  withheldFromVerdicts: boolean;
};

function daysSince(iso: string, now: Date): number {
  const then = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(then.getTime())) return Number.POSITIVE_INFINITY;
  return Math.floor((now.getTime() - then.getTime()) / 86_400_000);
}

export function tierStatus(tier: PolicyTier, now = new Date()): TierStatus {
  const ageDays = daysSince(tier.verifiedOn, now);
  return {
    ageDays,
    showStalenessNotice: ageDays > STALE_AFTER_DAYS,
    withheldFromVerdicts: ageDays > MATERIAL_STALE_AFTER_DAYS
  };
}

export function validateTier(tier: PolicyTier, now = new Date()): TierIssue[] {
  const issues: TierIssue[] = [];
  const err = (message: string) => issues.push({ tierId: tier.id, level: 'error', message });
  const warn = (message: string) => issues.push({ tierId: tier.id, level: 'warning', message });

  // A wording URL and a version date are the whole basis of the page's claim to
  // be accurate. Without them the tier is an assertion, not a comparison.
  if (!tier.wording?.url) err('no policy wording URL');
  if (!tier.wording?.versionDate) err('no wording version date');
  if (!tier.verifiedOn) err('no verifiedOn date');

  const age = daysSince(tier.verifiedOn, now);
  if (age === Number.POSITIVE_INFINITY) err(`verifiedOn is not a valid date: ${tier.verifiedOn}`);
  else if (age < 0) err(`verifiedOn is in the future: ${tier.verifiedOn}`);
  else if (age > MATERIAL_STALE_AFTER_DAYS) warn(`verified ${age} days ago — withheld from verdicts until re-checked`);
  else if (age > STALE_AFTER_DAYS) warn(`verified ${age} days ago — pages will carry a staleness notice`);

  for (const field of REQUIRED_STAR) {
    const value = field.get(tier);
    if (value === undefined || value === null) err(`missing required field ${field.path}`);
  }

  if (tier.species.length === 0) err('no species listed');
  if (!tier.positioning) warn('no positioning sentence');

  // An exclusion without a clause reference cannot be checked by a reader, and
  // an unverifiable exclusion is the kind of claim that gets a site sued.
  for (const exclusion of tier.exclusions) {
    if (!exclusion.clause) err(`exclusion has no clause reference: "${exclusion.text.slice(0, 60)}"`);
  }

  return issues;
}

/** How much of the star set the wording actually settled. Rendered on the tier page. */
export function verificationCoverage(tier: PolicyTier): { confirmed: number; total: number; unverified: string[] } {
  const unverified: string[] = [];
  for (const field of REQUIRED_STAR) {
    const value = field.get(tier);
    if (value !== undefined && isUnverified(value as never)) unverified.push(field.path);
  }
  return { confirmed: REQUIRED_STAR.length - unverified.length, total: REQUIRED_STAR.length, unverified };
}

export function validateCatalogue(tiers: PolicyTier[], now = new Date()): TierIssue[] {
  const issues = tiers.flatMap((tier) => validateTier(tier, now));
  const seen = new Set<string>();
  for (const tier of tiers) {
    const key = `${tier.country}/${tier.insurerSlug}/${tier.slug}`;
    if (seen.has(key)) issues.push({ tierId: tier.id, level: 'error', message: `duplicate tier route ${key}` });
    seen.add(key);
    for (const competitor of tier.competitorSlugs) {
      const exists = tiers.some((t) => t.country === tier.country && t.slug === competitor);
      if (!exists) issues.push({ tierId: tier.id, level: 'error', message: `competitor not in this country's catalogue: ${competitor}` });
    }
  }
  return issues;
}
