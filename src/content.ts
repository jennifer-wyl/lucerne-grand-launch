// ============================================================================
// LUCERNE GRAND — SITE CONTENT
// ============================================================================
// Every placeholder below is marked PLACEHOLDER. Replace with real project
// details as they come in from the developer — this is the ONLY file you
// should need to edit to update copy across the whole site.
//
// UPDATE (31 Aug 2026): pulled confirmed facts from your official PropNex
// microsite (https://lucernegrand-96797083.propnex.net/) — district,
// developer, tenure, unit count, and TOP are now real. Unit pricing, floor
// plans, and the pricelist are STILL NOT public even on that official
// site — they're gated behind its own "Early Access" lead form, same as
// this site. You'll need to pull those from your PropNex agent
// backend/developer directly, not from the public microsite.
// ============================================================================

export const project = {
  name: "Lucerne Grand", // confirmed — matches official PropNex microsite
  tagline: "A new address for those who've already arrived.", // PLACEHOLDER — still yours to write
  developer: "City Developments Limited", // confirmed (CDL)
  developerCredibility:
    "Developed by City Developments Limited (CDL), one of Singapore's largest listed property developers.", // factual/minimal — expand with specific track record details if you want more
  district: "D22 – Jurong (Lakeside Drive)", // confirmed
  nearestMRT: "Lakeside MRT (200m walk)", // confirmed
  travelTimes: [
    { destination: "Raffles Place / CBD", time: "XX min" }, // PLACEHOLDER — not published on official microsite either
    { destination: "Orchard Road", time: "XX min" }, // PLACEHOLDER
    { destination: "Changi Airport", time: "XX min" }, // PLACEHOLDER
  ],
  tenure: "99 Years", // confirmed
  possessionTimeline: "Expected TOP: 2029", // confirmed
  previewDate: "18 September 2026", // matches official site's "Target Preview Date: Q3 2026"
  launchDate: "3 October 2026",
};

export const heroStats = [
  { value: "575", label: "total housing units" }, // confirmed — replaces old unverified "500+ buyers" stat
  { value: "99", label: "years tenure" }, // confirmed
  { value: "2029", label: "expected TOP" }, // confirmed
];

export type UnitType = {
  type: string;
  sizeSqft: string;
  priceFrom: string;
};

// Still placeholder — not public even on the official PropNex microsite.
// Pull from your agent backend once available.
export const unitTypes: UnitType[] = [
  { type: "1 Bedroom", sizeSqft: "XXX – XXX sqft", priceFrom: "From $X.XXM" }, // PLACEHOLDER
  { type: "2 Bedroom", sizeSqft: "XXX – XXX sqft", priceFrom: "From $X.XXM" }, // PLACEHOLDER
  { type: "3 Bedroom", sizeSqft: "XXX – XXX sqft", priceFrom: "From $X.XXM" }, // PLACEHOLDER
  { type: "4 Bedroom", sizeSqft: "XXX – XXX sqft", priceFrom: "From $X.XXM" }, // PLACEHOLDER
];

export const paymentTerms = [
  "PLACEHOLDER — e.g. Booking fee: 5% on Option to Purchase",
  "PLACEHOLDER — e.g. Progressive payment scheme under Housing Developers Rules",
  "PLACEHOLDER — confirm with developer/sales team before publishing",
];

export const amenities: string[] = [
  "50m Lap Pool", // PLACEHOLDER
  "Gymnasium", // PLACEHOLDER
  "Function Room", // PLACEHOLDER
  "Concierge Service", // PLACEHOLDER
  "Landscaped Gardens", // PLACEHOLDER
  "Children's Playground", // PLACEHOLDER
  "BBQ Pavilions", // PLACEHOLDER
  "24-hr Security", // PLACEHOLDER
];

export type WhyPoint = { title: string; description: string };

export const whyChoose: WhyPoint[] = [
  {
    title: "Location advantage", // PLACEHOLDER
    description:
      "PLACEHOLDER — what makes this location stand out vs. surrounding projects (MRT access, upcoming developments, school proximity).",
  },
  {
    title: "Entry pricing vs. surrounding projects", // PLACEHOLDER
    description:
      "PLACEHOLDER — PSF comparison against nearby resale/new launch projects, once pricing is confirmed.",
  },
  {
    title: "Developer track record", // PLACEHOLDER
    description: "PLACEHOLDER — completed projects, build quality, delivery history.",
  },
  {
    title: "Timing", // PLACEHOLDER
    description:
      "PLACEHOLDER — why now (e.g. upcoming rezoning, MRT line completion, limited nearby land supply).",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is the expected TOP (Temporary Occupation Permit) date?",
    a: "Estimated 2029.", // confirmed via official microsite
  },
  {
    q: "What is the tenure of Lucerne Grand?",
    a: "99 years.", // confirmed
  },
  {
    q: "What financing options are available?",
    a: "PLACEHOLDER — outline progressive payment scheme, loan quantum guidance (do not state specific TDSR/LTV figures without verifying against current MAS rules).",
  },
  {
    q: "Can HDB owners buy before selling their flat?",
    a: "PLACEHOLDER — general guidance only; recommend readers confirm their specific eligibility and timeline (e.g. ABSD implications) with their agent before committing.",
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
  address: "PLACEHOLDER — sales gallery address",
  hours: "PLACEHOLDER — e.g. Daily, 10am – 7pm",
  phone: "PLACEHOLDER",
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
