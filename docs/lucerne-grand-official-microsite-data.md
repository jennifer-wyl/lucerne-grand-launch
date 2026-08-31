# Lucerne Grand — Data Pulled from Official PropNex Microsite

Source: https://lucernegrand-96797083.propnex.net/ (Jennifer's PropNex-hosted, developer-appointed project microsite — she is the appointed marketing agent). Pulled 31 Aug 2026, re-checked same day (later pass) when Jennifer asked for unit types/sizes.

## Confirmed project facts

| Field | Value |
|---|---|
| Project name | Lucerne Grand |
| Chinese name | 琉森嘉园 |
| Road | Lakeside Drive |
| District | D22 – Jurong |
| Region | West Region / Outside Central Region (OCR) |
| Subtown | Taman Jurong |
| Developer | City Developments Limited (CDL) |
| Tenure | 99 years |
| Category | Non-landed residential |
| Total units | 575 |
| Land size | 149,618 sqft — this is the figure shown in the "Project Details" block on the live page as of the 31 Aug re-check. An earlier pass on the same day also saw 145,152 sqft elsewhere on the page; that figure did not reappear on the re-check, so it may have been a stale/dynamic value rather than a persistent discrepancy — still worth a quick check with the developer before ever quoting a number to a client |
| Plot ratio | 3.7 |
| Gross floor area | 537,065 sqm |
| Mukim lot no. | 05222A MK06 at Lakeside Drive |
| Target preview date | Q3 2026 (matches our Sept 18 preview) |
| Expected TOP | 2029 |
| Architect | Not yet disclosed (per official site) |

## NOT public — gated behind the official site's own lead form

Unit types, unit sizes, pricing/pricelist, payment terms, and detailed floor plans are all behind an "Early Access" / "Request Information" / "Get Developer Price" lead-capture gate on the official microsite itself. Re-confirmed 31 Aug 2026: the page has an "Available Bedroom Type" section with no values rendered in the static page text (likely populated dynamically after the gate, or not yet released) and an explicit "Request Information... early access to our upcoming data release" CTA. Jennifer does not have public access to these either — she'd need to pull from her PropNex agent backend or the developer directly.

## Location / nearby amenities (from official site)

- Lakeside MRT: 200m (East West Line)
- Chinese Garden MRT: 1380m
- Boon Lay MRT: 1630m
- Nearest secondary: Yuan Ching Secondary (110m)
- Nearest primary: Rulang Primary (480m), Shuqun Primary (520m), Lakeside Primary (540m)
- International schools within ~1km: Canadian International School (Lakeside Campus, 850m)
- Supermarkets/malls: Taman Jurong Shopping Centre (870m), Boon Lay Shopping Centre (950m), Jurong Point (1540m)
- Healthcare: My Doctor @ Lakeside (190m), Lakeside Family Medicine Clinic (310m), Tzu Chi Community Health Centre (310m)
- Bus numbers nearby: 154, 154A, 240, 240A, 246, 49, 98, 98A, 98B, 98M, 180, 187, 240M, 180A, 335

## Compliance note

The official microsite footer discloses: "PropNex Realty Pte Ltd - Licence No: L3008022J Jennifer Wong | R073354G" — this is a CEA-required disclosure (agency licence + agent's CEA registration number) that was **missing** from our custom-built site until this update. Now added to the custom site's footer verbatim.

## Applied to our custom site (lucerne-grand-launch project)

- `src/content.ts`: district, developer, tenure, nearestMRT, possessionTimeline, and heroStats (575 units / 99yr / 2029 TOP, replacing an unverified "500+ buyers" placeholder) updated to these confirmed values
- FAQ: added real TOP, tenure, and MRT/schools answers sourced from the official site
- Footer: added `ceaDisclosure` constant + rendered it — compliance gap closed
- Highlights section: added a 5th tile for Tenure
- Hero/gallery: real developer renderings (exterior, lobby/concierge, night pool, retail street) added
- Tagline: Jennifer chose "200m from Lakeside MRT. A lifetime by the water." (31 Aug 2026)
- Still placeholder: unit types/pricing, payment terms, building amenities/facilities confirmation, CBD/Orchard/Changi travel times, sales gallery address/hours — none of these exist publicly even on the official site

## Open question for Jennifer

Land size showed two different figures in one pass (145,152 sqft vs. 149,618 sqft); the re-check only surfaced 149,618. Worth a quick confirmation with the developer/source document before it's ever quoted to a client.

## Unit types/sizes/pricing — re-checked 31 Aug 2026

Jennifer asked for unit types and sizes. Re-navigated to the live official microsite to check for an update — confirmed still gated behind the site's own "Early Access"/"Get Developer Price" lead form, same as the initial pull. No unit mix, sizes, or pricing are published anywhere publicly, including on the site Jennifer is the appointed agent for. She was told to pull this from her PropNex agent backend or developer directly rather than have it guessed/fabricated.

---

## Note (superseded, 31 Aug 2026 later same day)

Jennifer subsequently shared the developer's confidential architect brief, which she
confirmed is more accurate than this public microsite. See
`lucerne-grand-architect-brief-data.md` (same folder) for the corrected total unit
count (570, not 575), corrected completion date (Vacant Possession Dec 2031, not TOP
2029), and resolved land size (145,152 sqft).
