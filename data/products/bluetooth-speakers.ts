import raw from './bluetooth-speakers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Bluetooth Speakers category — researched August 2026.
//
// Product data lives in bluetooth-speakers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: specs come from first-party manufacturer specification pages
// wherever they exist, cross-checked against reputable review outlets
// (RTINGS, SoundGuys, What Hi-Fi, TechRadar, Tom's Guide, The Verge, CNET,
// Engadget, FlatpanelsHD). Where a manufacturer publishes nothing, the field
// carries an honest note rather than a guess — this is common in audio, where
// several major brands deliberately do not publish amplifier wattage, driver
// dimensions or microphone counts.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites, each cross-checked against a
// second independent source. Amazon product pages were NOT scraped — that
// would violate the Associates Operating Agreement. Confirm each ASIN in
// SiteStripe before relying on it for revenue.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const bluetoothSpeakerProducts: Product[] = raw as Product[];
