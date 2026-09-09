// ============================================================================
// LUCERNE GRAND — SITE CONTENT
// ============================================================================
// Every placeholder below is marked PLACEHOLDER. Replace with real project
// details as they come in from the developer — this is the ONLY file you
// should need to edit to update copy across the whole site.
//
// UPDATE (31 Aug 2026): pulled confirmed facts from your official PropNex
// microsite (https://lucernegrand-96797083.propnex.net/) — district,
// developer, tenure, and MRT/school proximity are real.
//
// UPDATE (31 Aug 2026, later): Jennifer supplied the developer's architect
// brief, which she confirmed is MORE ACCURATE than the public microsite —
// used to correct unit count (570, not 575) and completion date (Vacant
// Possession Dec 2031, not the public site's "2029"). NOTE: that brief is
// watermarked "strictly private and confidential — not for circulation and
// sales purposes." The exact unit-type/size/count breakdown from it has
// deliberately NOT been published here yet — only already-public categories
// of info (total units, tenure, completion window) were corrected. See
// unitTypes below and the project doc for the full breakdown, pending
// Jennifer's go-ahead on what's cleared to publish pre-launch.
//
// Unit pricing (exact quantum) and the pricelist are still not public.
// Jennifer confirmed an indicative PSF-from figure to use in the meantime.
// ============================================================================

export const project = {
  name: "Lucerne Grand", // confirmed — matches official PropNex microsite
  tagline: "200m from Lakeside MRT. A lifetime by the water.", // confirmed — chosen by Jennifer, 31 Aug 2026
  developer: "City Developments Limited", // confirmed (CDL)
  developerCredibility:
    "Developed by CDL Polaris Properties Pte Ltd, a wholly owned subsidiary of City Developments Limited (CDL) — one of Singapore's most established developers, with over 60 years of experience and a portfolio spanning Singapore and other countries. Lucerne Grand is designed by ADDP Architects LLP and built by United Tec Construction Pte Ltd, and has achieved BCA's Green Mark Platinum Super Low Energy (SLE) certification.", // confirmed — architect brief (consultant names, certification, CDL track record are standard project-info disclosures, not the confidential unit-mix data)
  district: "D22 – Jurong (Lakeside Drive)", // confirmed
  nearestMRT: "Lakeside MRT (200m walk)", // confirmed
  travelTimes: [
    { destination: "Raffles Place / CBD", time: "To be confirmed" }, // still not published anywhere — swap for a real drive/PT time when you have it
    { destination: "Orchard Road", time: "To be confirmed" },
    { destination: "Changi Airport", time: "To be confirmed" },
  ],
  tenure: "99 Years, from 8 September 2025", // confirmed — architect brief (more accurate than public microsite)
  possessionTimeline: "Expected Vacant Possession: December 2031", // corrected — architect brief supersedes public microsite's "2029" estimate
  previewDate: "18 September 2026", // matches official site's "Target Preview Date: Q3 2026"
  launchDate: "3 October 2026",
};

export const heroStats = [
  { value: "570", label: "total housing units" }, // corrected — architect brief (more accurate than public microsite's 575)
  { value: "99", label: "years tenure" }, // confirmed
  { value: "2031", label: "expected completion" }, // corrected — architect brief's Vacant Possession date (Dec 2031), supersedes public microsite's "2029"
];

export type UnitType = {
  type: string;
  sizeSqft: string;
  priceFrom: string;
  floorPlanImage?: string; // real developer drawing (shown blurred+watermarked) — omit to fall back to the abstract sketch
};

// Pricing: Jennifer confirmed indicative PSF pricing (31 Aug 2026) — official
// quantum not released yet, so this is deliberately a PSF-from figure, not a
// per-unit price.
//
// Unit types/sizes: sourced from the developer's architect brief (confirmed
// by Jennifer as the more accurate source, 31 Aug 2026). That brief is
// marked "not for circulation" pre-launch, so per Jennifer's instruction
// these are shown on-site as blurred/watermarked draft layouts with a
// "Contact Agent for Latest Layout" CTA (see FloorPlans.tsx) rather than
// published as final confirmed detail. Unit counts/% mix are deliberately
// NOT included here — only type, indicative size range, and PSF-from price.
// All 7 types now use the real developer floor plan drawing (watermarked
// "Draft" in FloorPlans.tsx, no blur — Jennifer, 9 Sept 2026: "no need to
// blur out all the room image, the watermark DRAFT is sufficient").
export const unitTypes: UnitType[] = [
  { type: "2 Bedroom", sizeSqft: "624 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "2-bedroom.png" },
  { type: "2 Bedroom + Study", sizeSqft: "667 – 710 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "2-bedroom-study.png" },
  { type: "3 Bedroom", sizeSqft: "872 – 904 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "3-bedroom.png" },
  { type: "3 Bedroom Premium + Study", sizeSqft: "947 – 1,001 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "3-bedroom-premium-study.png" },
  { type: "4 Bedroom Premium", sizeSqft: "1,152 – 1,195 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "4-bedroom-premium.png" },
  { type: "4 Bedroom Premium + Study", sizeSqft: "1,345 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "4-bedroom-premium-study.png" },
  { type: "4 Bedroom Premium + Entertainment", sizeSqft: "1,432 sqft", priceFrom: "From $2,xxx psf", floorPlanImage: "4-bedroom-premium-entertainment.png" },
];

// Made launch-safe (31 Aug 2026): swapped raw "PLACEHOLDER" text (which
// would have shown as-is to real site visitors) for an honest holding line
// that still drives to contact. Replace with the real schedule once
// confirmed with the developer/sales team.
export const paymentTerms = [
  "Full payment schedule will be shared during registration — contact us for the latest details.",
];

// Replaced 31 Aug 2026 with the real facility names from the developer's
// architect brief (Jennifer: "Replace. No need to be gated" — unlike the
// unit floor plans, these facility names are treated as standard project
// info, published outright).
export const amenities: string[] = [
  "Lap Pool & Aqua Lounge (with Spa Cove)", // confirmed — architect brief
  "Club Lucerne (Clubhouse)", // confirmed — architect brief
  "Kids Splash Pool", // confirmed — architect brief
  "Gourmet Pavilions", // confirmed — architect brief
  "Multi-Purpose Court", // confirmed — architect brief
  "Outdoor Fitness Area", // confirmed — architect brief
  "Wellness Garden", // confirmed — architect brief
  "Pets Garden", // confirmed — architect brief
  "Community Plaza", // confirmed — architect brief
  "Co-working Lounge", // confirmed — architect brief
  "Gymnasium", // confirmed — architect brief (previously an unconfirmed guess)
  "Concierge / Reception", // confirmed — visible in developer renderings
  "Landscaped Gardens & Riverside Promenade", // confirmed — visible in developer renderings
  "Ground-Floor Retail & F&B — Lucerne Galleria (incl. supermarket)", // confirmed — architect brief + renderings
];

export type WhyPoint = { title: string; description: string };

// Trimmed to only confirmed points for launch (31 Aug 2026) — the "Entry
// pricing vs. surrounding projects" and "Timing" cards were pure PLACEHOLDER
// copy that would have shown unfinished text to real visitors. Add them
// back once you have real PSF comparisons and a timing story to tell.
export const whyChoose: WhyPoint[] = [
  {
    title: "Location advantage", // confirmed — from official microsite data
    description:
      "A 200m walk to Lakeside MRT (East West Line), with Yuan Ching Secondary School just 110m away and three primary schools within 550m — a rare combination of transit and school proximity for an OCR new launch.",
  },
  {
    title: "Developer track record", // confirmed — architect brief
    description:
      "CDL has been developing homes in Singapore for over 60 years, with a portfolio that extends beyond Singapore as well. Lucerne Grand is designed by ADDP Architects LLP, fitted with appliances from established brands including Bosch, Samsung, Hansgrohe, Geberit and Franke, and has achieved BCA's Green Mark Platinum Super Low Energy (SLE) certification for building energy efficiency.",
  },
];

export type Faq = { q: string; a: string };

// NOTE (dev-only, not shown on-site): have the financing/HDB-timing answers
// below reviewed before treating them as final — avoid stating specific
// TDSR/LTV/ABSD figures without verifying current MAS/IRAS rules.
export const faqs: Faq[] = [
  {
    q: "What is the expected TOP (Temporary Occupation Permit) date?",
    a: "Expected Vacant Possession is December 2031, per the developer's project brief (TOP typically falls a few months ahead of Vacant Possession — exact TOP date not yet stated).", // corrected — architect brief supersedes the public microsite's earlier "2029" estimate
  },
  {
    q: "What is the tenure of Lucerne Grand?",
    a: "99 years.", // confirmed
  },
  {
    q: "What financing options are available?",
    a: "Financing details, including the progressive payment schedule, will be shared closer to preview. Contact us directly for guidance on loan quantum and TDSR/MSR — this depends on your individual financial situation and current MAS rules.", // made launch-safe 31 Aug 2026 — do not state specific TDSR/LTV figures without verifying against current MAS rules
  },
  {
    q: "Can HDB owners buy before selling their flat?",
    a: "It depends on your specific eligibility and timeline, including any ABSD implications. Contact us directly and we'll walk through your options before you commit to anything.", // made launch-safe 31 Aug 2026
  },
  {
    q: "Which MRT lines and schools are nearby?",
    a: "Lakeside MRT is a 200m walk (East West Line). Nearby schools include Yuan Ching Secondary, Rulang Primary, Shuqun Primary, and Lakeside Primary — confirm current school proximity eligibility directly with MOE before making a decision based on it.", // confirmed via official microsite; caveat added deliberately
  },
  {
    q: "How do I register for the VIP preview?",
    a: "Fill in the registration form above or below — our team will reach out with your preview slot and viewing details.",
  },
];

export const salesOffice = {
  address: "To be announced — contact us for the latest showflat details.", // made launch-safe 31 Aug 2026; swap for the real address once confirmed
  hours: "To be announced.",
  phone: "+65 9679 7083", // confirmed — Lucerne Grand marketing team hotline, from official microsite
  agentName: "Jennifer Wong",
  agentBrand: "@ImJen.Wong",
  agentEmail: "jenniferWong.YL@propnex.com",
};

// CEA-required disclosure — pulled verbatim from your official PropNex
// microsite footer. This was MISSING from the site before this update;
// Singapore's Council for Estate Agencies requires agent name + CEA
// registration number + agency licence number on marketing materials.
export const ceaDisclosure =
  "PropNex Realty Pte Ltd — Licence No: L3008022J · Jennifer Wong · CEA Reg. No: R073354G";
