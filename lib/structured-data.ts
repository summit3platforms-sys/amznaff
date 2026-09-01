import { Category, Product } from '@/data/types';
import { SITE_URL } from '@/lib/seo';

// ---------------------------------------------------------------------------
// JSON-LD builders.
//
// Everything here is derived from data already in data/products/*.json. Nothing
// is asserted that the page does not also show a human, which is the line
// structured data has to stay on: markup that claims more than the visible page
// is a manual-action risk, not a rich-result opportunity.
//
// AggregateRating is deliberately absent. Every product on this site carries
// rating: 0 and ratingCount: 0, because there is no source for Amazon's
// aggregate ratings that the Associates Operating Agreement permits us to
// scrape. Emitting invented star ratings is the single fastest way to earn a
// structured-data manual action, so the stars stay off until there is a real
// first-party review corpus behind them.
// ---------------------------------------------------------------------------

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'The Comparison Report',
    url: `${SITE_URL}/`,
    description:
      'Spec-for-spec product comparisons scored from published manufacturer specifications rather than opinion.',
    publishingPrinciples: `${SITE_URL}/how-we-compare`,
    actionableFeedbackPolicy: `${SITE_URL}/report-incorrect-info`
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE_URL}/`,
    name: 'The Comparison Report',
    publisher: { '@id': ORG_ID }
  };
}

// Emitted once in the root layout so every page inherits the publisher identity
// without each route repeating it.
export function siteSchema() {
  return { '@context': 'https://schema.org', '@graph': [organizationSchema(), websiteSchema()] };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`
    }))
  };
}

// A Product node with a real Offer. Price and currency come straight from the
// product record, and every price on this site was confirmed against a retail
// listing before the product was published, so the Offer is honest.
//
// A product with no confirmed ASIN gets no Offer at all rather than an Offer
// with a null URL: those are the direct-to-consumer and not-yet-confirmed
// items, and claiming a purchase path we cannot provide would be worse than
// claiming nothing.
export function productSchema(product: Product, category: Category, buyUrl: string | null) {
  const specs = Object.entries(product.specs)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .slice(0, 20)
    .map(([key, value]) => {
      const field = category.specFields.find((f) => f.key === key);
      return {
        '@type': 'PropertyValue',
        name: field?.label ?? key,
        value: field?.unit ? `${value} ${field.unit}` : String(value)
      };
    });

  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/${category.slug}/${product.slug}#product`,
    name: product.model,
    description: product.shortTagline,
    brand: { '@type': 'Brand', name: product.brand },
    category: category.pluralName,
    url: `${SITE_URL}/${category.slug}/${product.slug}`,
    additionalProperty: specs
  };

  if (product.releaseYear) node.releaseDate = String(product.releaseYear);
  if (product.material) node.material = product.material;
  if (product.colorOptions?.length) node.color = product.colorOptions.join(', ');

  if (buyUrl) {
    node.offers = {
      '@type': 'Offer',
      price: product.price.toFixed(2),
      priceCurrency: product.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: buyUrl,
      seller: { '@type': 'Organization', name: 'Amazon' }
    };
  }

  return node;
}

// The category page is a list of products, in the order the page renders them.
export function itemListSchema(category: Category, products: Product[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.pluralName} compared`,
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: product.model,
      url: `${SITE_URL}/${category.slug}/${product.slug}`
    }))
  };
}

// Renders a JSON-LD node. Kept in one place so escaping is handled identically
// everywhere: JSON.stringify does not escape "<", so a spec string containing
// "</script>" would otherwise break out of the tag.
export function jsonLd(node: unknown): string {
  return JSON.stringify(node).replace(/</g, '\\u003c');
}
