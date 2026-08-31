# Lucerne Grand — Data from Developer Architect Brief (CONFIDENTIAL)

Source: Google Drive file Jennifer shared 31 Aug 2026 (architect/e-brochure deck). The
document is watermarked **"Strictly private and confidential... Not for circulation and
sales purposes"** on every page. Treat unit-mix counts/% as the only remaining gated
item; everything else below has been cleared and published per Jennifer's instructions.

## Project facts (more precise than the public microsite) — PUBLISHED to site

| Field | Value |
|---|---|
| Developer (full legal name) | CDL Polaris Properties Pte. Ltd. (wholly owned subsidiary of City Developments Limited) |
| Description | 5 blocks of 17-storey apartments, commercial (supermarket, shops & F&B — "Lucerne Galleria") at 1st storey, basement carparks, communal facilities |
| Full address | 30, 32, 34, 36, 38 Lakeside Drive |
| Tenure | 99 years leasehold, commencing 8 September 2025 |
| Land area | 13,485.1 sqm / **145,152 sqft** — resolved; matches the earlier (not 149,618) public-site figure |
| Total units | **570** (per unit mix table) — corrected from public microsite's 575, published to `heroStats` |
| Expected Vacant Possession | **7 December 2031** — corrected from public microsite's "Estimated TOP: 2029", published as `possessionTimeline` and in FAQ |
| Carpark lots | ~456 lots + 6 accessible |
| Architect | ADDP Architects LLP — published in developer credibility copy |
| Landscape consultant | Tinderbox Pte Ltd |
| Interior designer | 2nd Edition Pte Ltd |
| Builder | United Tec Construction Pte Ltd — published |
| Green certification | BCA Green Mark Platinum Super Low Energy (SLE) — published |
| Appliance brands | Bosch, Samsung, Hansgrohe, Geberit, Franke — published in track record copy |

## Real unit mix — PUBLISHED as blurred/watermarked "Draft" cards (31 Aug 2026)

Jennifer's instruction: show real type names/sizes but "blurred and watermarked draft"
with a "Contact Agent for Latest Layout" CTA — implemented in `FloorPlans.tsx`/`.css`.
Unit counts and % mix are still withheld (not shown anywhere on-site — this is the one
piece of the brief still fully gated), only type name + size range + indicative PSF
price are shown, always under the draft/blur treatment. The Pricing section's own unit
table was also trimmed (Size column removed) so it doesn't expose the same sizes in
plain text elsewhere on the page — it now just links to Floor Plans.

| Unit Type | Size (sqft) | No. of Units (NOT published) | % Mix (NOT published) |
|---|---|---|---|
| 2 BR | 624 | 96 | 39% (with 2BR+S) |
| 2 BR + Study | 667–710 | 126 | |
| 3 BR | 872–904 | 125 | 44% (with 3BR Premium+Study) |
| 3 BR Premium + Study | 947–1,001 | 128 | |
| 4 BR Premium | 1,152–1,195 | 47 | 17% (all 4BR variants) |
| 4 BR Premium + Study | 1,345 | 16 | |
| 4 BR Premium + Entertainment | 1,432 | 32 | |
| **Total** | | **570** | 100% |

## Confirmed facility names — PUBLISHED to site (31 Aug 2026)

Jennifer: "Replace. No need to be gated." Full `amenities` array in `content.ts`
replaced with real names, no blur/watermark treatment (unlike unit types): Lap Pool &
Aqua Lounge (with Spa Cove), Club Lucerne (Clubhouse), Kids Splash Pool, Gourmet
Pavilions, Multi-Purpose Court, Outdoor Fitness Area, Wellness Garden, Pets Garden,
Community Plaza, Co-working Lounge, Gymnasium, Concierge/Reception (renderings),
Landscaped Gardens & Riverside Promenade (renderings), Ground-Floor Retail & F&B —
Lucerne Galleria (renderings + brief). Old unconfirmed guesses (Function Room,
Children's Playground, BBQ Pavilions, 24-hr Security) were dropped — no equivalent
found in the brief, not fabricated.

## Developer track record — PUBLISHED to site (31 Aug 2026)

Applied to `project.developerCredibility` and `whyChoose[2]` in `content.ts`: CDL's
60+ year history and global portfolio, project architect (ADDP Architects LLP),
builder (United Tec Construction Pte Ltd), appliance brands (Bosch, Samsung,
Hansgrohe, Geberit, Franke), and BCA Green Mark Platinum SLE certification. Treated as
standard project-info-level disclosure, not the gated unit-mix data.

## Developer's own Unique Selling Points (source list, for reference)

1. Mixed-use with supermarket + F&B/retail at 1st storey
2. Facilities: Lap Pool, Co-working Lounge, Clubhouses, Gourmet Pavilions, Gymnasium
3. Premium appliance brands: Bosch, Samsung, Hansgrohe, Geberit, Franke
4. BCA Green Mark Platinum SLE certification
5. Near Jurong Lake District (planned as Singapore's largest business district outside city centre)
6. Direct link to Lakeside MRT, quick access to AYE/PIE/KJE
7. 2 MRT stops to Jurong East interchange + IMM/JEM/Westgate
8. Near Rulang Primary, River Valley High School, NTU
9. Walking distance to Jurong Lake Gardens (90ha national park)
10. Developed by CDL — 60+ years experience, global portfolio

## Pricing

Jennifer confirmed 31 Aug 2026: "Price is not released yet, put from $2,xxx" — applied
to `src/content.ts` as an indicative PSF-from figure (assumed PSF given the format;
not a per-unit price). Not from this brief — her own instruction.

## Still open

Only the exact unit counts/% mix per type remain gated (not shown anywhere on-site).
Everything else from the architect brief that's useful for the public site has now
been published. Remaining unrelated site gaps: payment terms, sales gallery
address/hours, CBD/Orchard/Changi travel times.
