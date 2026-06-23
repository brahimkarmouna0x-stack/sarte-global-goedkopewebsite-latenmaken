# SEO-rebrand & optimalisatierapport — goedkopewebsite-latenmaken.nl

**Datum:** 23 juni 2026
**Bureau:** Sarte Global
**Domein (nieuw):** `https://goedkopewebsite-latenmaken.nl`
**Primair zoekwoord:** `goedkope website laten maken`
**Positionering:** *betaalbaar én professioneel* (vanaf €995) — geen race-to-the-bottom.
**Validatie:** `tsc --noEmit` schoon · `next build` schoon · 80 statische pagina's gegenereerd.

---

## 0. Kernconclusie

Het project was een volledig gebouwde, sterk gearchitecteerde site die rond het **verkeerde domein en het verkeerde primaire zoekwoord** was opgezet: `nieuwewebsite-latenmaken.nl` / "nieuwe website laten maken". Dit was dus een **domein- en zoekwoordpivot**, geen greenfield-build. Dankzij de gecentraliseerde architectuur (één `SITE`-config, gedeelde `lib/seo.ts`-helpers) cascadeerde de domeinwijziging naar alle ~80 pagina's via één bestand.

---

## 1. SEO-auditrapport (Fase 1 — bevindingen)

| # | Prioriteit | Bevinding | Status |
|---|---|---|---|
| 1 | P0 | Domein overal `nieuwewebsite-latenmaken.nl` i.p.v. doeldomein | ✅ Opgelost |
| 2 | P0 | Hele site geoptimaliseerd op "nieuwe website" i.p.v. de money-keyword "goedkope website laten maken" (0 titels/H1's bevatten het) | ✅ Opgelost |
| 3 | P0 | Geen betaalbaarheidsbewijs (vanaf-prijzen, waardeframing) gekoppeld aan de "goedkoop"-intentie | ✅ Opgelost |
| 4 | P1 | Risico op keyword-kannibalisatie tussen Home en `/website-laten-maken` | ✅ Opgelost (zie §4) |
| 5 | P1 | Fase 5: elke pagina 3 nieuwe unieke SEO-secties | ✅ Home + 10 landingspagina's |
| 6 | P1 | Programmatic city-pages + service-keywords hardcodeerden "nieuwe" | ✅ Opgelost |
| 7 | P2 | Service-schema miste prijs-/Offer-signaal voor de betaalbaarheidshoek | ✅ Offer toegevoegd |
| 8 | P2 | Placeholder-assets (randomuser.me, voorbeeld.nl-cases) | ⚠️ Gedisclaimd — vervangen vóór launch |

**Wat al uitstekend was (onaangetast gelaten):** gecentraliseerde metadata-generator, canonical-strategie, 308-redirects tegen cannibalisatie, Breadcrumb/FAQ/Service/Person/Article-schema, data-gedreven sitemap, font-optimalisatie, `optimizePackageImports`, inline-CSS, AVIF/WebP.

---

## 2. Bestandswijzigingsrapport (Fase 13)

**Nieuwe bestanden**
- `components/seo/PageSeoSections.tsx` — herbruikbare 3-sectie-SEO-component (Autoriteit / Verdieping / Conversie).
- `constants/page-seo.ts` — unieke Nederlandse content per pagina (home + 10 landingspagina's), getypeerd met `PageSeoContent`.
- `docs/seo-rebrand-2026-report.md` — dit rapport.

**Gewijzigde kernbestanden**
- `constants/index.ts` — `SITE` (domein, title, description), `HERO`, `TRUST_LINE`, `CTA_SECTION`, `FOOTER_MISSION`, nav-label, barrel-export van `page-seo`.
- `app/layout.tsx` — Organization/WebSite/Service-JSON-LD, OG/keywords, `legalName`, `SERVICE_NAME`, Offer-signaal.
- `app/page.tsx` — homepage-JSON-LD + `PageSeoSections`.
- 10 landingspagina's in `app/*/page.tsx` — `PageSeoSections` gewired + (waar van toepassing) titel/breadcrumb/OG.
- `constants/{new-website,about,landing-nieuwe-website,wordpress,nextjs,webshop,woocommerce,shopify,landing-page,webapp,seo-optimalisatie,website-onderhoud,services,locations,pricing,legal}.ts` — copy/metadata-pivot.
- `lib/programmatic.ts` — betaalbaarheid in de variant-pools van de city-pages.
- `app/{over-ons,contact,services}/page.tsx` — metadata-pivot + oud-domeinreferenties.
- `components/sections/{Services,AboutCompany}.tsx`, `components/landing/LandingLocalSeo.tsx`, `app/{team,journal}/[slug]/page.tsx` — zichtbare ankerteksten / `alternateName`.
- `app/globals.css` — scoped styling voor de conversie-FAQ/CTA (`page-seo__*`), hergebruik van bestaande `nws`/`lp-intro`-klassen.
- `docs/{gsc-readiness-checklist,seo-keyword-clusters,competitor-gap-analysis}.md` — domeinreferenties.

---

## 3. Metadata-wijzigingsrapport (Fase 4)

| Pagina | Nieuw `<title>` (kernzin) | Primair zoekwoord |
|---|---|---|
| Home `/` | Goedkope website laten maken vanaf €995 \| Sarte Global | goedkope website laten maken |
| `/website-laten-maken` | Website laten maken vanaf €995 \| Betaalbaar & Professioneel | website laten maken |
| `/wordpress-website-laten-maken` | WordPress website laten maken vanaf €995 | wordpress website laten maken |
| `/nextjs-website-laten-maken` | Next.js website laten maken \| Snel & betaalbaar | nextjs website laten maken |
| `/webshop-laten-maken` | Webshop laten maken vanaf €1.995 \| Betaalbaar | webshop laten maken |
| `/woocommerce-webshop-laten-maken` | WooCommerce webshop laten maken vanaf €1.995 | woocommerce webshop laten maken |
| `/shopify-webshop-laten-maken` | Shopify webshop laten maken \| Betaalbaar & professioneel | shopify webshop laten maken |
| `/landing-page-laten-maken` | Landing page laten maken \| Betaalbaar & conversiegericht | landing page laten maken |
| `/webapp-laten-maken` | Webapp laten maken \| Betaalbaar maatwerk | webapp laten maken |
| `/seo-optimalisatie` | SEO optimalisatie vanaf €299 per maand | seo optimalisatie |
| `/website-onderhoud` | Website onderhoud vanaf €79 per maand | website onderhoud |

Elke title is uniek, bevat een prijs-/waardesignaal (CTR-booster) en houdt een distinct hoofdzoekwoord aan. Descriptions zijn herschreven naar "betaalbaar én professioneel" met een vanaf-prijs en een vrijblijvende-offerte-CTA. Alle prijzen komen uit de echte tiers in `constants/pricing.ts` — **niets verzonnen**.

---

## 4. Zoekwoordkaart & anti-kannibalisatie (Fase 4/6)

- **Home** bezit de money-keyword **`goedkope website laten maken`** (domein-exact-match). H1: "Goedkope Website Laten Maken".
- **`/website-laten-maken`** bezit het generieke **`website laten maken`** (+ "goedkope/betaalbare website laten maken" als secundair).
- De 10 landingspagina's houden elk hun eigen platform-/diensttype-keyword.
- **City-pages** (`/[locatie]`) targeten `[dienst] [stad]` in twee dimensies (website ↔ webdesign), deterministisch gevarieerd per slug → geen thin/duplicate content.
- **`/services/[slug]`-twins** van de 4 keyword-landingspagina's blijven 308-redirecten + canonicaliseren naar de landingspagina (bestaand, intact).

---

## 5. Structured-data-rapport (Fase 7)

- **Organization + ProfessionalService** (`/#organization`): description/slogan/`knowsAbout`/`alternateName` herschreven naar betaalbaar; `legalName` = "Sarte Global".
- **Service** (`/#service-website-laten-maken`): **nieuw `Offer`-knooppunt** (`priceCurrency: EUR`, `price: 995`, `InStock`) als geldig betaalbaarheidssignaal.
- **WebSite**, **BreadcrumbList**, **FAQPage**, **BlogPosting**, **Person** — onaangetast en valide; rendering geverifieerd in de gebouwde HTML.
- **Geen fake reviews/ratings.** De zichtbare "4,9/5"-copy wordt bewust **niet** als `aggregateRating`-schema uitgezonden zolang er geen echte, verifieerbare data is.

---

## 6. Interne-link-/silo-rapport (Fase 6)

- Ankerteksten van "Nieuwe website laten maken" → **"Website laten maken"** (matcht de doelpagina) op `Services`, `/team/[slug]`, `/journal/[slug]`.
- De 3e (conversie)sectie van elke pagina voegt een contextuele CTA toe naar `#cta`.
- Bestaande silo-structuur (mega-menu, footer-diensten, `lp-related`-navigatie, city cross-links, author-linkage) is sterk en is behouden.

---

## 7. Content-expansierapport (Fase 5)

Elke money-pagina kreeg **3 nieuwe, unieke Nederlandse SEO-secties** via `<PageSeoSections>`:
1. **Autoriteit** — expertise, proces, vertrouwen, waarde (4 pijlers).
2. **Verdieping** — uitgebreide, intentie-relevante uitleg (2 paragrafen + 4 kennispunten, inclusief echte vanaf-prijzen).
3. **Conversie** — trust-signalen, beslissingshulp, benefits, CTA (+ mini-FAQ op de homepage).

11 pagina's × 3 secties = **33 nieuwe secties**, elk uniek geschreven, zonder keyword-stuffing of duplicaten. De component hergebruikt bestaande, bewezen CSS (`nws`/`lp-intro`) → **geen designregressie**.

---

## 8. Technisch-SEO-rapport (Fase 8)

- `robots.txt` en `sitemap.xml` gegenereerd op het **nieuwe domein** (geverifieerd in `.next/`).
- Canonicals: elke pagina zet een eigen `alternates.canonical`; root `metadataBase` = nieuw domein.
- 308-redirects (`/about`→`/over-ons`, 4 service-twins) intact.
- **hreflang:** niet nodig — één locale (`nl-NL`), `<html lang="nl">`.
- Sitemap data-gedreven (statisch + service + journal + city + author), kan niet driften.

---

## 9. Core-Web-Vitals-rapport (Fase 9)

- `PageSeoSections` is een **server-component** (geen client-JS, geen hydration-kosten); de enige interactiviteit is `Reveal` (bestaande IntersectionObserver-hook).
- Geen nieuwe afbeeldingen, fonts of libraries toegevoegd → **bundle-grootte ongewijzigd**.
- Bestaande CWV-optimalisaties behouden: `inlineCss`, `optimizePackageImports`, AVIF/WebP, immutable asset-caching, dynamische import van zware dialogs.
- **Geen CLS-risico:** secties gebruiken bestaande grid/flow-layout zonder late-shifting media.

---

## 10. Toegankelijkheid (Fase 10)

- Semantische opbouw: `<section aria-label>`, correcte `<h2>`/`<h3>`-hiërarchie, `<ul>`/`<dl>`/`<dt>`/`<dd>` voor benefits/FAQ.
- Unieke heading-`id`'s per sectie via `idPrefix` → geen dubbele id's.
- Bestaande skip-link, focus-states en `aria-labelledby` op secties behouden. Geen design- of a11y-regressie.

---

## 11. GSC-gereedheidsrapport (Fase 12)

✅ Unieke metadata per pagina · ✅ Unieke H1 per pagina · ✅ 3 SEO-secties per money-pagina · ✅ Geen broken routes (build groen, 80 pagina's) · ✅ Sitemap/robots op nieuw domein · ✅ Schema valide & matcht zichtbare content · ✅ Geen indexeringsblokkades.

**Post-deploy (zie `docs/gsc-readiness-checklist.md`):** property verifiëren, sitemap submitten, prioriteits-URL's laten indexeren, Rich Results Test draaien op Service/FAQ/Breadcrumb/BlogPosting.

---

## 12. Resterende aanbevelingen

1. **Echte assets vóór launch:** vervang `randomuser.me`-avatars en `voorbeeld.nl`-cases door echte klantdata; verwijder dan de disclaimers in `constants/landing-nieuwe-website.ts`.
2. **`aggregateRating`** pas toevoegen zodra er een geverifieerde reviewbron is (bv. Google/Trustpilot) — nooit met placeholderdata.
3. ✅ **3 SEO-secties uitgerold** naar `/over-ons`, `/work` en de 5 indexeerbare `/services/[slug]`-pagina's (ui-ux-design, mobile-development, ai-automation, brand-strategy, paid-media) via dezelfde `PageSeoSections`-component + nieuwe `page-seo.ts`-entries. De service-route gebruikt de getypeerde `getPageSeo(slug)`-helper en rendert de secties alleen voor indexeerbare slugs (de keyword-twins die wegredirecten krijgen ze niet). Totaal: **18 pagina's** met de 3 SEO-secties.
4. **Blogcontent** rond de money-keyword schrijven: "wat kost een goedkope website", "goedkope vs. dure website" — versterkt de topical authority richting de homepage.
5. **KvK/BTW** invullen in `constants/legal.ts` zodra bekend (juridische review staat al als TODO).
6. **Bestaande planningsdocs** (`content-map-100-topics.md`, `seo-keyword-clusters.md`) herijken op de goedkoop-intentie waar ze nog "nieuwe website" als hoofdterm gebruiken.
