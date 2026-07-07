# WhichOneToBuy — Programmatic Comparison Site

A programmatic-SEO Amazon affiliate site. Every page answers one question:
**"Which one should I buy?"** No articles, no opinion pieces — every page is
generated from structured product data.

## How it's structured

```
data/types.ts               Core data model: Brand -> Series -> Model -> Specs -> ... -> Amazon link
data/categories.ts           Category definitions: which specs/scores/filters apply per category
data/products/headphones.ts  Seed product data (10 headphones) — THE source of truth

lib/products.ts              Product registry + comparison-pair generation
lib/scoring.ts                Overall/dimension scoring, radar chart data, spec winners
lib/content-generator.ts     Deterministic "AI" copy generator — reads ONLY structured specs,
                              never invents a claim. Produces summary, verdict, best-for
                              reasons, and FAQs for every comparison automatically.
lib/related.ts                Internal linking: same brand, same series, cheaper/premium
                              alternative, alternative comparisons
lib/filters.ts                Dynamic filter matching (Under $200, Travel, Gaming, etc.)
lib/amazon.ts                 Affiliate link builder

app/page.tsx                            Homepage
app/[category]/page.tsx                 Category listing + filters
app/[category]/[product]/page.tsx       Product profile page
app/[category]/[product]/vs/[competitor]/page.tsx   The comparison page (the main event)
app/sitemap.ts, app/robots.ts           Auto-generated for every product/comparison page
```

### One page per comparison, not fifteen

Per the "Part I'd Change" section of the brief, this build does **not** generate
separate `A vs B Battery`, `A vs B Gaming`, etc. pages. Instead every comparison
is one comprehensive page with jump-link sections (`#battery`, `#comfort`,
`#gaming`, ...) covering every search intent without keyword cannibalization or
maintaining near-duplicate pages.

### How pages scale

`getAllComparisonPairs()` in `lib/products.ts` walks every product's
`competitorSlugs` and builds every comparison page automatically. Add a new
product to `data/products/headphones.ts`, list its competitors, and its
product page + every comparison page generate themselves — no page code to
write. `generateStaticParams` pre-renders everything at build time; once the
catalog grows large enough that pre-rendering everything is impractical,
`dynamicParams = true` + `revalidate = 86400` (already set on the comparison
page) means uncovered pairs still render on first request and get cached —
this is how you get to hundreds of thousands of pages without a hundred-
thousand-page build.

### Adding a new category

1. Add a `Category` object to `data/categories.ts` (spec fields, score
   dimensions, filters).
2. Create `data/products/<category>.ts` with the same `Product` shape as
   `headphones.ts`.
3. Import and spread it into `allProducts` in `lib/products.ts`.
4. Add the category slug to `generateStaticParams` in the comparison page
   (or refactor to loop `categories` automatically, already done via
   `allCategories` import).

That's the entire integration surface — no other file needs to change.

## Before going live — required data updates

The seed data in `data/products/headphones.ts` is real published product
data to the best of available knowledge, but three things are placeholders
you must fix before launch:

1. **`amazonAsin`** — every product has a placeholder like `B0XXXXXXX1`.
   Replace with the real ASIN from Amazon SiteStripe for your Associates
   account.
2. **`images`** — placeholder paths under `/public/images/products/<slug>/`.
   Add real photography (or use SiteStripe's approved image URLs).
3. **Prices** — snapshot at time of writing. Amazon prices change constantly;
   consider automating price refresh via the Product Advertising API if you
   scale this up.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in AMAZON_ASSOCIATE_TAG and NEXT_PUBLIC_SITE_URL
npm run dev
```

## Deployment — see DEPLOY.md

DEPLOY.md has the one-time GitHub + Vercel setup, plus the two ways to keep
Git and Vercel automatically in sync as you make changes:

- `npm run deploy` — builds, commits, and pushes once
- `npm run watch-deploy` — watches the project and auto-commits + pushes on
  every save while you work
