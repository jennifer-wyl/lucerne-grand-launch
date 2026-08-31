# Lucerne Grand — Preview Registration Site

Lead-capture site for HDB upgraders ahead of the Sept 18 preview / Oct 3 official launch.

## Status

Structural build is complete and production-ready. **Almost all copy is placeholder** — see
`src/content.ts`. Every placeholder line is marked with a comment; nothing else in the
codebase needs to change to update copy.

## What's real vs. placeholder

Updated 31 Aug 2026 — pulled confirmed facts from your official PropNex microsite
(https://lucernegrand-96797083.propnex.net/):

| Real / confirmed | Still placeholder — needs your input |
|---|---|
| Project name: Lucerne Grand | Tagline — still yours to write |
| District: D22 – Jurong (Lakeside Drive) | Unit types, sizes, **pricing** — gated behind that official site's own "Early Access" lead form; not public anywhere. Pull from your PropNex agent backend/developer directly |
| Developer: City Developments Limited (CDL) | Payment terms |
| Nearest MRT: Lakeside MRT, 200m | Building amenities/facilities (pool, gym etc. — not released yet even officially) |
| Tenure: 99 years | Raffles Place/Orchard/Changi travel times — not published on the official site either |
| Expected TOP: 2029 | Floor plan images, hero image, location map |
| Total units: 575 | Financing/HDB-timing FAQ answers (deliberately vague — legal review needed before publishing specifics) |
| Full page structure, Alpine brand styling, mobile responsive, Google Form lead capture (4 places), production build tested (63KB gzipped) | |
| **CEA disclosure added** — was missing before, now in the footer (agency licence + your CEA reg. no., copied verbatim from the official site) | |

The old "500+ interested buyers" stat is gone — replaced with the real 575 units / 99-year tenure / 2029 TOP, since those are now confirmed.

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

To swap in real images: drop files into `src/assets/`, import them at the top of the
relevant component (e.g. `src/components/Hero.tsx`, `FloorPlans.tsx`, `Highlights.tsx`),
and replace the placeholder `<div>` blocks with `<img>` tags. The placeholder blocks are
easy to spot — they're the dashed/striped boxes with a "placeholder" label.

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
