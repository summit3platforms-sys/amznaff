# TV & Home Entertainment — Content & Data Sourcing Plan

Research date: July 2026. Sources cited inline; re-verify prices/specs at time of writing since this category moves fast (new TV generations launch yearly, streaming devices refresh less often but do change).

---

## 1. How to pull real product data from Amazon

**Important update:** Amazon's old Product Advertising API (PA-API 5.0) is being deprecated on **May 15, 2026** and is no longer accepting new customers. It's being replaced by the **Amazon Creators API**. Both have the same core problem for a pre-launch site: they require sales performance to unlock.

| Path | Requirement | Status for this site |
|---|---|---|
| Amazon Creators API (successor to PA-API) | Approved Associates account + **10 qualifying sales in the trailing 30 days**, ongoing (access pauses if sales drop below that) | Not yet eligible — no sales history |
| Initial Associates approval | 3 qualifying sales within 180 days of joining | Needed before any API access |
| Manual sourcing | No sales requirement | **This is the realistic path right now** |

**Never scrape Amazon product pages directly** — it violates the Associates Operating Agreement and risks account termination. That rule hasn't changed.

### Practical sourcing workflow until the site has sales history

1. **Amazon SiteStripe** — available immediately to any approved Associate, no sales threshold. Use it on each product's live Amazon page to grab the correct affiliate link and confirm the current ASIN. This is the only piece of "Amazon data" you should be pulling directly from Amazon.
2. **Manufacturer spec sheets** — the actual source of truth for specs (Samsung.com, LG.com, Sony.com, TCL.com, Hisense.com, Roku.com, Sonos.com product/support pages). This is both more accurate than scraping and fully legitimate — it's public technical documentation, not a violation of anyone's terms.
3. **Price reference (not for scraping, just for manual research):** Amazon's own listing page (read manually, enter manually) and CamelCamelCamel for historical price context when deciding if something is a genuine "deal."
4. **Optional paid tool once budget allows:** Keepa (keepa.com) has its own API separate from Amazon's, commonly used by affiliate sites for price history and review-count tracking. Not required to start.
5. Enter everything manually into `data/products/<category>.ts` following the same structured, no-invented-specs pattern already used for the site's data model. This is slower per-product but is exactly what the current architecture expects (structured fields → generated comparisons, not hand-written articles).

**Path forward:** once this site has driven 3 qualifying sales (any category), apply for Associates approval → once monthly volume reaches 10 qualifying sales/30 days, apply for Creators API access and this whole step becomes automatable. Realistically, the first batch of TV content will be built manually.

---

## 2. Priority products (TV & Home Entertainment)

Matches the three subcategories already defined in `data/categoryGroups.ts` (Smart TVs, Streaming Devices, Soundbars). Recommend building in this order — TVs first (highest search volume + highest average order value = best affiliate potential), then streaming devices (cheap but very high purchase intent), then soundbars.

### Smart TVs — mix of flagship and budget/bestseller

| Product | Why it belongs in the first batch |
|---|---|
| Samsung Crystal UHD U8000H (or current-gen equivalent) | Samsung is the most-searched TV brand; mid-range Crystal UHD is a high-volume seller |
| Samsung Mini LED (QN90-class / M70H-class) | Flagship Samsung — needed for the "Samsung vs LG" and OLED/QLED comparisons |
| LG OLED C-series (current gen) | The default "OLED" reference point in almost every TV comparison search |
| Sony Bravia (mid-range) | Third major brand, strong for the picture-quality-vs-price angle |
| TCL QM/Q-series QLED | Budget/value leader, extremely high Amazon search + purchase volume |
| Hisense U6/U7/U8-class (or Hi-QLED S7) | TCL's direct rival — "TCL vs Hisense" is a huge budget-segment search term |
| Amazon Insignia F50 series | Amazon's own budget brand, currently the #1 bestselling TV on Amazon — very high purchase intent, low price point (easy affiliate conversion) |
| Roku Select/Plus Series | Roku-branded TVs sell extremely well on Amazon specifically because of platform trust |

### Streaming Devices — low price, very high purchase intent (great affiliate entry point)

| Product | Why |
|---|---|
| Roku Streaming Stick 4K | Consistently the "best value" pick across review sites |
| Amazon Fire TV Stick 4K Max | Home-turf advantage on Amazon, huge search volume |
| Google TV Streamer | Replaced Chromecast as Google's flagship streamer |
| Apple TV 4K | Premium segment, strong for cross-shopping with Apple ecosystem buyers |
| Walmart Onn Google TV 4K Plus | Budget breakout pick, good for a "best cheap streaming device" angle |

### Soundbars — good margin, pairs naturally with TV comparisons

| Product | Why |
|---|---|
| Samsung HW-Q990F | Current top-rated flagship soundbar |
| Sonos Arc Ultra | Premium/lifestyle brand, high search interest |
| Klipsch Flexus Core 200 | Strong mid-range value pick |
| Creative Stage Pro | Sub-$200 budget leader |

---

## 3. Priority comparison pages (ranked by expected search demand + affiliate fit)

Format matches the existing comparison page template exactly — no new page design needed, just real data.

**Tier 1 — build these first:**

1. **Samsung vs LG (flagship TVs)** — perennial highest-volume brand-vs-brand TV search.
2. **OLED vs QLED** — this is normally a technology explainer, but it's the single highest-intent evergreen search term in the whole category; frame it as a "which one should you buy" comparison between a representative OLED model and a representative QLED model, backed by the guide content explaining the technology.
3. **TCL vs Hisense** — the budget-segment equivalent of Samsung vs LG; extremely high volume from value-conscious shoppers who are further down the funnel (closer to buying).
4. **Roku Streaming Stick 4K vs Fire TV Stick 4K Max** — classic, evergreen, very high volume, low price point = easy conversions.
5. **Amazon Fire TV Stick vs Google TV Streamer**

**Tier 2 — next batch:**

6. Apple TV 4K vs Roku Streaming Stick 4K
7. Samsung HW-Q990F vs Sonos Arc Ultra (flagship soundbar showdown)
8. Insignia F50 vs Samsung Crystal UHD (budget vs mid-range TV — "is it worth paying more" angle)
9. Mini LED vs OLED (distinct from QLED vs OLED — different technology question, still high volume)
10. Creative Stage Pro vs Klipsch Flexus Core 200 (budget soundbar shootout)

---

## 4. Keyword targets per comparison

Primary keyword first, then supporting long-tail variants to cover in the same page (matches the site's existing single-comprehensive-page-with-jump-links approach, so all of these map to ONE page per comparison, not separate thin pages).

| Comparison | Primary keyword | Supporting long-tail |
|---|---|---|
| Samsung vs LG TV | `samsung vs lg tv` | `samsung or lg tv which is better`, `lg vs samsung tv 2026`, `samsung tv vs lg oled` |
| OLED vs QLED | `oled vs qled` | `oled vs qled which is better`, `is oled better than qled`, `oled vs qled for gaming`, `oled vs qled burn in` |
| TCL vs Hisense | `tcl vs hisense` | `tcl or hisense tv`, `hisense vs tcl 2026`, `tcl vs hisense qled` |
| Roku vs Fire TV Stick | `roku vs fire stick` | `roku streaming stick vs fire tv stick 4k max`, `is roku or firestick better`, `roku vs amazon fire stick 2026` |
| Fire TV vs Google TV Streamer | `fire tv vs google tv` | `fire tv stick vs google tv streamer`, `amazon fire tv vs google tv which is better` |
| Apple TV vs Roku | `apple tv vs roku` | `apple tv 4k vs roku ultra`, `is apple tv worth it over roku` |
| Samsung HW-Q990F vs Sonos Arc Ultra | `samsung hw-q990f vs sonos arc ultra` | `best soundbar 2026 samsung or sonos`, `sonos arc ultra vs samsung q990f` |
| Insignia vs Samsung (budget TV) | `insignia tv vs samsung tv` | `is insignia tv good`, `insignia vs samsung crystal uhd` |
| Mini LED vs OLED | `mini led vs oled` | `mini led vs oled tv`, `is mini led as good as oled` |
| Budget soundbar comparison | `best soundbar under $200` | `creative stage pro vs klipsch flexus`, `cheap soundbar comparison 2026` |

Each of these should also target the page's natural buyer-intent long-tail automatically covered by the existing page template's FAQ section and jump-nav sections (battery/performance/value equivalents for TVs would be picture quality, refresh rate, gaming features, smart platform, value).

---

## 5. What this requires from the data layer (not yet built)

Before any of this can go live, `data/categories.ts` needs a `tv` (or per-subcategory) entry with its own `specFields` and `scoreDimensions` — the same way `headphones` has battery/ANC/comfort/etc. TVs need their own dimensions, for example:

- **Spec fields:** screen size, resolution, panel type (OLED/QLED/Mini-LED/LED), refresh rate, HDR formats supported, smart platform, ports (HDMI 2.1 count), peak brightness (nits)
- **Score dimensions:** picture quality, brightness/HDR performance, gaming features (input lag, VRR, ALLM), smart platform/apps, value, build/design

Streaming devices and soundbars would each need their own smaller schema too (streaming devices: resolution supported, storage, remote features, ecosystem; soundbars: channel config, Dolby Atmos support, wireless subwoofer, connectivity).

That schema work is the natural next step once you're ready to move from planning to building.

---

## Sources

- [Amazon Best Sellers: Best Televisions](https://www.amazon.com/Best-Sellers-Televisions/zgbs/electronics/172659)
- [Top Selling TVs on Amazon in 2026](https://www.accio.com/business/top-selling-tvs-on-amazon)
- [OLED vs QLED vs LED 2026: Which TV Is Right for You?](https://electroniquehifi.ca/blogs/guide/oled-vs-qled-tv-guide)
- [QLED vs. RGB vs. OLED and QD-OLED: Which TV Tech Is Best? — Consumer Reports](https://www.consumerreports.org/electronics-computers/tvs/qled-vs-oled-and-qd-oled-which-tv-tech-is-right-for-you-a6691090566/)
- [Best streaming devices 2026 — PCWorld](https://www.pcworld.com/article/582754/best-media-streaming-device.html)
- [The best streaming devices for 2026 — Engadget](https://www.engadget.com/entertainment/streaming/best-streaming-devices-media-players-123021395.html)
- [The 5 Best Soundbars of 2026 — RTINGS.com](https://www.rtings.com/soundbar/reviews/best/soundbar)
- [Best soundbars 2026 — What Hi-Fi?](https://www.whathifi.com/best-buys/home-cinema/best-soundbars)
- [Amazon Product API (PA-API) in 2026: Restrictions, Alternatives, and Web Scraping](https://dev.to/agenthustler/amazon-product-api-pa-api-in-2026-restrictions-alternatives-and-web-scraping-4l35)
- [Amazon Creators API — official portal](https://affiliate-program.amazon.com/creatorsapi)
- [Amazon PA-API "AssociateNotEligible" Error / 10-sale rule explainer](https://www.keywordrush.com/blog/amazon-pa-api-associatenoteligible-error-is-there-a-new-10-sales-rule/)
- [Are There Any Requirements to Use the Product Advertising API? — Amazon Associates Help](https://affiliate-program.amazon.com/help/node/topic/GVJ2BJP35457CLML)
