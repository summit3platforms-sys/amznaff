import raw from './headphones.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Headphones category — product data
//
// Product data now lives in headphones.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly — see
// lib/github-content.ts for how admin edits get committed and deployed.
//
// Intentionally empty for now. Every product page, comparison page, and
// filter page in the app is generated from whatever objects live in this
// array — see lib/content-generator.ts and lib/scoring.ts for how copy and
// rankings are derived (never invented) from structured data. Add real
// products here (with verified specs, real Amazon ASINs, and real
// photography), via /admin/products or by editing headphones.json
// directly, when this category is ready to go live again.
// ---------------------------------------------------------------------------

export const headphonesProducts: Product[] = raw as Product[];
