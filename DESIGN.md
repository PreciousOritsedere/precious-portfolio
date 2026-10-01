# DESIGN.md — Precious Portfolio

**Product:** Personal portfolio for Precious O Oritsedere  
**Companion:** `PRD.md` (Draft v6)  
**Status:** v1.1 — locked for scaffold  
**Date:** 1 Oct 2026  
**Oreo reference:** `assets/oreo/oreo-reference.png` (white + brown tabby, blue collar + bell)  

**Skill stack (build with these):** [Hallmark](https://github.com/Nutlope/hallmark) · [Impeccable](https://github.com/pbakaus/impeccable) · [Vercel web-design-guidelines](https://github.com/vercel-labs/agent-skills)  

**Inspiration (steal DNA, not layout):**  
- [codewithdhruba.in](https://codewithdhruba.in/) — personal mascot / oneko cursor pet, quiet density, playfulness without clutter  
- [isoumya.is-a.dev](https://isoumya.is-a.dev/) — voice-first bio, inline tech chips in prose, accordion experience, calm section rhythm  

**Palette source:** [Coolors — 8C1C13 · BF4342 · E7D7C1 · A78A7F · 735751](https://coolors.co/8c1c13-bf4342-e7d7c1-a78a7f-735751)

---

## 1. Design thesis

> **Warm systems engineer, not dark-dev template.**  
> A light, parchment-and-burgundy site where the **name** is the first hero signal, motion feels continuous, and **Oreo** (the cursor companion) is the signature personality beat — not a joke sticker farm.

This is **not** a clone of Dhruba (dark SaaS chrome + cartoon avatar) or Soumya (near-black + Instrument Serif + floating dock). Those sites teach *craft and warmth*; our surface is unique via palette, type, and Oreo.

---

## 2. Anti-slop gates (must pass)

From Hallmark / Impeccable / brand rules — fail any of these and redesign:

| Gate | Rule |
|------|------|
| Brand-first | First viewport reads as **Precious O Oritsedere** without the nav. Name is hero-level; headline does not overpower it. |
| One composition | Hero is one scene — not a dashboard of cards/stats. |
| Hero budget | Only: brand · one headline · one supporting sentence · one CTA group · one dominant atmosphere. No stats, schedules, icon rows, or project cards above the fold. |
| No hero overlays | No floating badges, promo chips, or stickers on hero media. |
| Cards | Default: no cards. Cards only when they wrap a real interaction (e.g. accordion expand). |
| One job / section | Each section: one purpose, one headline, one short support line. |
| No purple SaaS | No indigo/violet gradients, glow stacks, or “AI purple.” |
| No cream-terracotta cliché | Palette uses parchment + burgundy, but **composition must not** be flat cream page + serif headline + terracotta pill CTAs. Lead with burgundy atmosphere in the hero; use parchment as paper fields below. |
| No broadsheet | No hairline-rule newspaper columns. |
| No dark-mode bias | Ship **one** strong light theme (PRD non-goal: dual theme). |
| Type | No Inter / Roboto / Arial / system-only stacks. |
| Motion | ≥2–3 intentional motions; respect `prefers-reduced-motion`. |

---

## 3. Color system

### 3.1 Brand tokens (Coolors locked)

| Token | Hex | Role |
|-------|-----|------|
| `--brand` | `#8C1C13` | Primary burgundy — hero atmosphere, key links, focus rings |
| `--brand-soft` | `#BF4342` | Hover / secondary emphasis / active states |
| `--paper` | `#E7D7C1` | Page ground / section paper |
| `--stone` | `#A78A7F` | Muted borders, captions, idle UI |
| `--ink` | `#735751` | Body text, icons at rest |

### 3.2 Derived tokens

```css
:root {
  --brand: #8C1C13;
  --brand-soft: #BF4342;
  --paper: #E7D7C1;
  --stone: #A78A7F;
  --ink: #735751;

  --bg: #F3EBE0;              /* slightly lighter than paper — page canvas */
  --bg-elevated: #E7D7C1;     /* paper panels */
  --fg: #2A1F1C;              /* near-ink for long reading (AA on paper) */
  --fg-muted: #735751;
  --border: color-mix(in srgb, var(--stone) 55%, transparent);
  --focus: var(--brand);

  --hero-from: #8C1C13;
  --hero-via: #6E1610;
  --hero-to: #3D0C09;

  --cta-bg: #8C1C13;
  --cta-fg: #F3EBE0;
  --cta-secondary-bg: transparent;
  --cta-secondary-fg: #F3EBE0;
  --cta-secondary-border: color-mix(in srgb, #F3EBE0 40%, transparent);
}
```

### 3.3 Usage rules

- **Hero:** full-bleed burgundy gradient (`--hero-from` → `--hero-to`) with soft paper grain / vignette — *atmosphere*, not a flat fill. Light text on hero.  
- **Below fold:** `--bg` canvas; occasional `--bg-elevated` paper bands. Dark ink on paper.  
- **Accent sparingly:** `--brand-soft` for hover and rare highlights — never rainbow tech logos as the color story.  
- **Contrast:** Body text `#2A1F1C` on `#F3EBE0` / `#E7D7C1`; hero text `#F3EBE0` on burgundy. Check WCAG 2.2 AA for all text / UI.

---

## 4. Typography

### 4.1 Pairing (locked)

| Role | Family | Source | Why |
|------|--------|--------|-----|
| **Display** | **Syne** (700–800) | Google Fonts | Expressive geometric sans — distinctive vs Instrument Serif / Bricolage used on inspiration sites |
| **Body / UI** | **Satoshi** (400–500) | Fontshare | Warm neo-grotesk; pairs with burgundy; not Inter |
| **Mono / chips** | **IBM Plex Mono** (400–500) | Google Fonts | Stack pills, env snippets, technical asides |

Fallback stack only after webfonts: `Syne, "Segoe UI", sans-serif` — never Inter as the designed face.

### 4.2 Scale (approx, fluid)

| Step | Use | Size |
|------|-----|------|
| Display | Hero name | `clamp(2.75rem, 8vw, 5.5rem)` · Syne 800 · tracking `-0.03em` |
| H1 | Page titles | `clamp(2rem, 4vw, 3rem)` · Syne 700 |
| H2 | Section titles | `clamp(1.5rem, 2.5vw, 2rem)` · Syne 700 |
| Lead | Supporting hero line | `1.125–1.25rem` · Satoshi 400 · max-width ~36ch |
| Body | Prose | `1rem / 1.65` · Satoshi 400 |
| Caption | Meta, dates | `0.8125rem` · Satoshi 500 · `--fg-muted` |
| Chip | Tech pills | `0.75rem` · IBM Plex Mono |

### 4.3 Voice in type

- Name: Syne, hero-sized, single line when possible.  
- Headline under name: Satoshi medium weight — *software engineer* positioning, not a second display font competing with the name.  
- Writing pages may use slightly larger body measure (`~65ch`).

---

## 5. Layout & IA surfacing

Aligns with PRD §6–7.

### 5.1 First viewport (home)

One composition on burgundy atmosphere:

1. **Precious O Oritsedere** (display)  
2. One headline — software engineer · product systems · open data / Solid  
3. One supporting sentence (range: clients · APIs · Solid · platforms · AI-fluent delivery)  
4. CTA group: **Email me** · **View work** (Book a call can sit in contact strip / footer)  
5. Dominant visual = the burgundy atmospheric field itself (subtle grain / soft radial light) — not an inset photo card  

Nav is minimal and quiet (wordmark or initials + links). Removing nav must still leave unmistakable brand.

### 5.2 Below fold (home) — one job each

| Section | Job |
|---------|-----|
| Featured work | Five systems (OpenActive · Solid File Manager · CFH · Excluvia · Platnova) as a calm list or editorial rows — **not** a card grid in the hero style |
| Capabilities | Short bands: Product · Solid/RDF · Platforms · AI fluency |
| GitHub activity | Contribution graph / yearly heat for [PreciousOritsedere](https://github.com/PreciousOritsedere) — proof of craft, not a vanity dash. **Never in the hero.** |
| Off the clock | Spotify — profile / playlist link (+ optional now-playing). Personal texture beside the engineer story. |
| Volunteer | OneSky · She Code Africa · WeTech → `/volunteer` |
| Writing | 2–3 curated posts → `/writing` |
| Contact | Mailto + Book a call |

### 5.3 Global chrome

- Prefer **top text nav** (Work, Volunteer, Writing, About, Contact) over a Soumya-style floating dock — keep bottom-of-viewport free for **Oreo**.  
- Footer: socials · Medium · Hashnode · mailto · calendar.  
- No Cmd+K search in v1 (Dhruba DNA we skip — scope).

---

## 6. Motion (seamless, not noisy)

Library: **Motion** (`motion` / Framer Motion) on Next.js.

### 6.1 Required motions (ship ≥3)

1. **Hero entrance** — name + headline + CTA stagger (opacity + slight Y), ~400–600ms, shared easing `cubic-bezier(0.22, 1, 0.36, 1)`.  
2. **Scroll reveal** — section headings and featured rows fade/rise once into view (`viewport once`, modest distance).  
3. **Oreo companion** — continuous cursor follow (see §7).  

Optional polish: accordion height animation on About experience (Soumya DNA); link underline grow on hover.

### 6.2 Rules

- One easing family sitewide.  
- No parallax stacks, no scroll-jacking, no cursor glow trails.  
- `prefers-reduced-motion: reduce` → disable Oreo + entrance/scroll motion; show static Oreo mark in footer or omit companion.

---

## 7. Oreo — cursor companion (signature)

### 7.1 Intent

Like [Dhruba’s oneko](https://codewithdhruba.in/) (based on [adryd325/oneko.js](https://github.com/adryd325/oneko.js)): a small sprite that follows the pointer, idles, sleeps. **Ours is Oreo** — Precious’s pet — not the default neko skin as the brand story.

### 7.2 Asset plan

| Phase | Asset |
|-------|-------|
| **Reference (received)** | `assets/oreo/oreo-reference.png` — white base, brown/black tabby patches, tan nose bridge, dilated eyes, blue collar + silver bell |
| Build | Custom **32×32 sprite sheet** (GIF or PNG atlas) in oneko layout — idle, alert, N/NE/E/SE/S/SW/W/NW run, sleep/scratch if feasible. Match Oreo’s markings; collar optional at this scale. |
| Fallback v0 | Classic oneko sprite labeled Oreo in UI copy until custom sheet ships |
| Placement | `public/oreo/oreo.gif` (+ optional variants later) |

### 7.3 Behavior

- Fixed layer, `pointer-events` limited (don’t block clicks on CTAs; hit target optional for easter egg).  
- Speed ~ similar to oneko; idle animations when close to cursor.  
- Hide on coarse pointers / touch-primary unless a tap-friendly mode is added later.  
- Honor reduced motion.  
- Do **not** put Oreo as a hero overlay badge — he lives in the chrome layer only.

### 7.4 Copy / easter egg

- Tooltip or footer note: “Oreo follows you around.”  
- Optional About mention: one line about Oreo — personality, not a pet landing page.

---

## 7b. Personal texture — GitHub + Spotify

Both sit **below the fold** on Home (and optionally echoed on About). They add life without turning the site into a widget zoo.

### GitHub contributions

| Item | Spec |
|------|------|
| Handle | [github.com/PreciousOritsedere](https://github.com/PreciousOritsedere) |
| UI | Year contribution heat + short label (“Proof I ship”) — burgundy/stone recolor of cells to match tokens, not default GitHub green if we draw our own |
| Data | Prefer server-fetched summary (GitHub API / GraphQL) or a maintained SVG; cache aggressively; fail soft (hide section or show profile link only) |
| Link | Whole section → GitHub profile |
| Anti-pattern | No follower counts, streak badges, or trophy walls in the hero |

### Spotify

| Item | Spec |
|------|------|
| Placement | Compact “Off the clock” strip — one headline, one sentence, one CTA |
| Content | Link to Spotify profile and/or a favorite playlist; optional lightweight “now playing” / embed **muted**, no autoplay |
| Look | Editorial row with Spotify mark in stone/ink — not a giant green embed card |
| Env | `NEXT_PUBLIC_SPOTIFY_URL` (profile or playlist URL — drop in when ready) |
| Anti-pattern | No full-page player, no competing audio with Oreo motion |

---

## 8. Component patterns

| Pattern | Spec |
|---------|------|
| Primary CTA | Filled `--cta-bg` / `--cta-fg`, radius `0.5rem` (not pill-full), Syne or Satoshi medium |
| Secondary CTA | Ghost on hero (light border); on paper = brand outline |
| Tech chips | Mono, quiet stone border, no rainbow brand-color explosion; optional tiny logo OK in prose (Soumya DNA) sparingly |
| Experience | Accordion timeline (Soumya DNA) — expand one role at a time |
| Project rows | Editorial list: title · one line · chips · year · link — avoid card shadows |
| Writing list | Title + source + date; external link icon |
| GitHub heat | Custom-colored cells on paper; caption in Satoshi |
| Spotify strip | Text + outbound link; optional slim embed |
| Focus | Visible 2px `--brand` ring |

---

## 9. Imagery & texture

- Hero atmosphere: CSS gradient + **subtle paper grain** (SVG noise, low opacity) — not stock photos of laptops.  
- Case studies: real product screenshots when available (full-bleed in case study, not card thumbnails in hero).  
- Avatar: optional later; not required for v1 hero if name + atmosphere carry brand.  
- Oreo photos: companion sprite + optional About aside — never clutter hero.

---

## 10. What we take from each inspiration

### From Dhruba ([codewithdhruba.in](https://codewithdhruba.in/))

| Take | Leave |
|------|-------|
| Cursor pet as signature personality | Dark theme, cartoon avatar hero, Cmd+K, bookshelf gimmicks, dense “gears” pages |
| Calm section labeling | Exact layout / Hanken + Bricolage pairing |

### From Soumya ([isoumya.is-a.dev](https://isoumya.is-a.dev/))

| Take | Leave |
|------|-------|
| First-person bio voice with inline tech chips | Near-black canvas, Instrument Serif, floating dock, weather widget |
| Accordion “story so far” | Copying section titles (“Proof I Don’t Touch Grass”) |

### Ours alone

Burgundy–parchment Coolors system · Syne + Satoshi · Oreo · SE + Solid/open-data proof · Writing + Volunteer as first-class · mailto + Google Calendar CTAs.

---

## 11. Accessibility

- WCAG 2.2 AA contrast on all text/UI.  
- Focus visible; skip link to main.  
- Accordion buttons real `<button>` with `aria-expanded`.  
- Oreo `aria-hidden="true"` (decorative).  
- Reduced motion supported.  
- Hit targets ≥44px on primary nav/CTAs.

---

## 12. Implementation notes (for scaffold)

```text
Stack: Next.js App Router, TypeScript, Tailwind CSS v4, MDX, Motion, Vercel
Tokens: CSS variables in app/globals.css (map to Tailwind theme)
Fonts: next/font for Syne + IBM Plex Mono; Satoshi via Fontshare or self-host
Oreo: client component wrapping oneko-style loop; reference at assets/oreo/oreo-reference.png; sprite in /public/oreo/
Env: NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CALENDAR_BOOKING_URL, NEXT_PUBLIC_SPOTIFY_URL, NEXT_PUBLIC_GITHUB_USERNAME=PreciousOritsedere
```

When implementing UI, load **Hallmark + Impeccable + web-design-guidelines** skills and run a pass against §2 gates before calling a page “done.”

---

## 13. Open asset checklist

- [x] Oreo reference photo → `assets/oreo/oreo-reference.png`  
- [ ] Custom Oreo sprite sheet from reference  
- [ ] Spotify profile/playlist URL → `NEXT_PUBLIC_SPOTIFY_URL`  
- [ ] Optional: headshot for About (not hero-required)  
- [ ] Case study screenshots for featured five  
- [x] Hallmark + Impeccable + web-design-guidelines installed  

---

## 14. Success look-test

A stranger should feel in &lt;5 seconds:

1. This belongs to **Precious O Oritsedere**.  
2. She is a **software engineer** (systems, not “frontend-only”).  
3. The site feels warm and considered — burgundy paper world, not generic dark portfolio.  
4. Something alive is here (**Oreo**).  
5. It could not be mistaken for Dhruba’s or Soumya’s site after a refresh.
