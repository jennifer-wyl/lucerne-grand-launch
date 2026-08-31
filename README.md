# Lucerne Grand — Preview Registration Site

Lead-capture site for HDB upgraders ahead of the Sept 18 preview / Oct 3 official launch.

## Status — READY TO LAUNCH

Updated 31 Aug 2026. **This site is safe to deploy as-is.** Every field that would have
shown raw "PLACEHOLDER" text to a real visitor has been swapped for an honest holding
line (e.g. "To be confirmed", "Contact us for the latest details") — nothing looks
broken or unfinished. Content is sourced from your official PropNex microsite and the
developer's architect brief; unit specifics that brief marks confidential are shown as
blurred/watermarked drafts with a "Contact Agent" CTA rather than published outright.

**One thing to check once it's actually deployed:** the embedded Google Map didn't
render in my own sandboxed test (likely a network restriction on my end reaching Google
domains, not a code issue) — give it a quick look on the live URL before you rely on it.

What's left below is genuinely gated data only you can supply — none of it blocks
launch, since every spot has a graceful holding message in the meantime.

## What's real now

| Area | Status |
|---|---|
| Project facts | District (D22 – Jurong, Lakeside Drive), developer (City Developments Limited), tenure (99 yrs), total units (575), expected TOP (2029), nearest MRT (Lakeside, 200m) — all confirmed |
| Photos | Hero background + 3-image gallery, using the developer's own official renderings (exterior, lobby/concierge, night pool, ground-floor retail) — pulled from the official microsite, appropriate since you're its appointed agent |
| Location map | Real embedded Google Map centered on Lakeside MRT (no API key needed) — replaces the old placeholder box |
| Contact | Phone + WhatsApp now use the real Lucerne Grand marketing hotline (+65 9679 7083), pulled from the official site |
| CEA disclosure | Added to the footer — was missing before (agency licence + your CEA reg. no. R073354G, copied verbatim from the official site) |
| Amenities | Lap pool, concierge, landscaped riverside promenade, poolside lounge deck, ground-floor retail/F&B — all confirmed visible in the renderings. Gym/function room/playground/BBQ/24hr security are still guesses (common for this unit count, but unconfirmed) |
| "Location advantage" (Why Lucerne Grand) | Now real copy — MRT + school proximity, sourced from the official site's data |
| Hero stats | 575 units / 99-yr tenure / 2029 TOP — replaced the old unverified "500+ buyers" placeholder |
| Brand styling, mobile responsive, Google Form lead capture (4 places), production build tested | Unchanged, all working |

## What's still missing — needs you to supply

1. **Payment terms** — pull from your PropNex agent backend or the developer directly
2. **Real floor plan images** — the Unit Types section now shows real type names and
   sizes (from the developer's architect brief) as blurred/watermarked "Draft" sketches
   with a "Contact Agent for Latest Layout" CTA per card — deliberately not the real
   floor plan PDFs, since that brief is marked "not for circulation" pre-launch. Swap
   in the real floor plan crops once the developer releases them publicly.
3. **CBD / Orchard / Changi travel times** — not published anywhere; either pull exact
   times from Google Maps yourself, or tell me and I'll fill them in
4. **Sales gallery address & opening hours** — not yet announced

**Resolved this round:**
- Tagline: "200m from Lakeside MRT. A lifetime by the water."
- Total units corrected to 570 (was 575 — public microsite was outdated)
- Completion corrected to "Expected Vacant Possession: December 2031" (was "TOP 2029")
- Land size discrepancy resolved: 145,152 sqft confirmed (architect brief)
- Pricing: "From $2,xxx psf" (indicative, per your instruction — official quantum not released)
- Unit types: real 7-category mix (2BR through 4BR Premium + Entertainment) with real
  size ranges, shown as blurred/watermarked drafts, not final published detail
- Developer track record: CDL's 60+ year history, project architect (ADDP), builder,
  appliance brands, and Green Mark Platinum SLE certification — added to both the
  "Why Lucerne Grand" section and the developer credibility line

Send any of the remaining items over whenever you have them and I'll drop them straight
into `src/content.ts` — no other file needs to change.

## Brand palette

Uses an "Alpine" palette derived from your Lucerne mood image (mountain lake, timber
chalet, mist) — distinct from your personal @ImJen.Wong portfolio's navy/gold, so this
site reads as its own project. Tokens live in `src/index.css`:

| Token | Hex | Source |
|---|---|---|
| `--color-charcoal` | `#2E3338` | Alpine Charcoal — text, footer |
| `--color-navy` | `#445468` | Alpine Slate — mountain rock/lake, primary dark |
| `--color-cream` | `#F0F1EE` | Alpine Mist — snow-toned background |
| `--color-gold` | `#9C7B58` | Timber — accent, from the chalet wood |

If you want to adjust (lighter/darker slate, different accent), these four lines are
the only place to change — everything else references them.

## Editing content

Open `src/content.ts` — it's the single file that drives every section's copy. Replace
each `// PLACEHOLDER` line with the real detail and the site updates everywhere that
value is used.

Real developer renderings now live in `src/assets/renders/` (used by `Hero.tsx` and
`Gallery.tsx`). To add more images later (e.g. floor plans once released): drop the
file into `src/assets/`, import it at the top of the relevant component, and replace
the placeholder `<div>` block with an `<img>` tag. Remaining placeholder blocks are easy
to spot — they're the dashed/striped boxes with a "placeholder" label (currently only
in `FloorPlans.tsx`, since those images aren't public yet).

## Lead capture

Currently points to your existing Google Form (the one used for general CRM intake).
The URL lives in one place: `src/config.ts`. If you switch forms later, that's the only
line to change — every CTA on the site reads from it.

**Worth revisiting after launch:** confirm what this form actually feeds into (Notion
CRM via n8n?) — if it's not automated yet, make sure someone's checking form
submissions manually so preview registrations don't sit unseen.

## FAQ legal content

The financing/TDSR/ABSD-related FAQ answers are deliberately vague placeholders —
don't publish specific loan percentage or eligibility figures without confirming
current MAS/IRAS rules first.

## Running locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deploying

Same pattern as your portfolio site:

1. Push this to a new GitHub repo (suggest `jennifer-wyl/lucerne-grand-launch`)
2. Import into Vercel, connect the repo — it auto-detects Vite
3. Deploy

If Vercel serves a stale cached version after a build (known issue from the portfolio
site), force a fresh deploy:

```bash
vercel deploy --prod --force
```

## Timeline

- Preview reveal: **Sept 18, 2026**
- Official launch: **Oct 3, 2026**
- Recommended: get real project details + images in by **Sept 5** so there's buffer
  before preview.
