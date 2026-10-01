# Build plan — Precious portfolio

**Sources of truth:** `PRD.md` (v6) · `DESIGN.md` (v1.1)  
**Goal:** Ship a distinctive software-engineer portfolio on Vercel, then deepen content and polish.  
**Out of scope for early phases:** custom domain, Spotify recently-played API, dual theme, CMS, contact form.

---

## Phase 0 — Preconditions (done / nearly done)

| # | Step | Status |
|---|------|--------|
| 0.1 | Lock positioning, IA, featured five, exclusions, contact | ✅ PRD |
| 0.2 | Lock visual system (palette, type, motion, Oreo, anti-slop) | ✅ DESIGN |
| 0.3 | Install Hallmark + Impeccable + web-design-guidelines | ✅ |
| 0.4 | Oreo reference photo | ✅ `assets/oreo/oreo-reference.png` |
| 0.5 | Defer Spotify Web API (recently played) | ✅ decided later |
| 0.6 | Spotify profile/playlist URL for link strip | ⬜ drop when ready (optional for scaffold) |
| 0.7 | Next.js scaffold + Phase 1 shell | ✅ in progress / runnable |

**Exit:** Docs + assets ready to code against.

---

## Phase 1 — Foundation (scaffold + shell)

**Outcome:** Runnable Next app with brand-correct home shell, empty-but-routed pages, tokens, Oreo v0.

### 1.1 Project bootstrap

1. Create Next.js App Router app in `my-portfolio` (TypeScript, ESLint, App Router, Tailwind v4).  
2. Keep `PRD.md`, `DESIGN.md`, `assets/`, `.agents/`, `.cursor/skills/` intact.  
3. Add `.env.example`:
   - `NEXT_PUBLIC_CONTACT_EMAIL=rukyjacob@gmail.com`
   - `NEXT_PUBLIC_CALENDAR_BOOKING_URL=https://calendar.app.google/za1EM3g7sQAV8wXP8`
   - `NEXT_PUBLIC_GITHUB_USERNAME=PreciousOritsedere`
   - `NEXT_PUBLIC_SPOTIFY_URL=` (optional until provided)
4. Add `.gitignore`, `README` blurb from PRD §19.  
5. Verify `pnpm dev` / `npm run dev` starts clean.

### 1.2 Design tokens + typography

1. Map Coolors + derived tokens into `app/globals.css` (`--brand`, `--paper`, `--ink`, hero gradient, etc.).  
2. Wire Tailwind theme to those CSS variables.  
3. Load **Syne** + **IBM Plex Mono** via `next/font`; self-host or Fontshare **Satoshi** for body.  
4. Set base body styles (paper canvas, ink text, focus ring).  
5. Add subtle paper grain / noise utility for hero atmosphere.

### 1.3 Global layout chrome

1. Root layout: fonts, metadata shell, skip link.  
2. **Nav:** Work · Volunteer · Writing · About · Contact (+ home wordmark / initials).  
3. **Footer:** mailto · Book a call · GitHub · LinkedIn · Medium · Hashnode · (Spotify when URL exists).  
4. Mobile nav (accessible drawer or simple expand — keep Oreo’s bottom space clear).  
5. Hallmark pass: brand-first, no card clutter in chrome.

### 1.4 Route stubs

Create pages with correct titles + one-line placeholders:

| Route | Stub content |
|-------|----------------|
| `/` | Hero + section shells (see 1.5) |
| `/work` | Filter UI shell + empty list |
| `/work/[slug]` | Case study template shell |
| `/volunteer` | Three org placeholders |
| `/writing` | Five post placeholders + profile links |
| `/about` | Bio + employment accordion shell |
| `/contact` | Email + Book a call only (no form) |
| `/cv` | Optional printable stub (can wait until Phase 2) |

### 1.5 Home — structure only (content can be lorem / short real copy)

1. **Hero (viewport 1):** name · SE headline · one support line · Email me + View work · burgundy atmosphere.  
2. **Featured work** row list (5 links to slugs).  
3. **Capabilities** bands.  
4. **GitHub** section shell (static placeholder graph or “loading” → real in 1.7).  
5. **Spotify** strip: link if env set; else “coming soon” hidden or omitted.  
6. **Volunteer** strip → `/volunteer`.  
7. **Writing** strip → `/writing`.  
8. **Contact** strip: mailto + calendar.

### 1.6 Motion + Oreo v0

1. Add Motion; hero stagger + scroll reveal on sections.  
2. Honor `prefers-reduced-motion`.  
3. Oreo companion client component (oneko-style) with **classic sprite** in `public/oreo/`.  
4. `aria-hidden`; disable on reduced motion / coarse pointer as per DESIGN.

### 1.7 GitHub contributions (basic)

1. Server fetch contribution data for `PreciousOritsedere` (API or trusted SVG approach).  
2. Recolor heat cells to burgundy/stone tokens.  
3. Soft-fail: show profile link only if fetch fails.  
4. Cache (revalidate periodically).

### 1.8 Phase 1 quality gate

- [ ] Lighthouse not disastrous on home (rough check)  
- [ ] AA contrast on hero + paper  
- [ ] Keyboard nav + focus visible  
- [ ] DESIGN §2 anti-slop gates pass on home shell  
- [ ] No secrets committed  

**Exit:** Deployable shell on Vercel preview (optional but recommended).

---

## Phase 2 — Content (make it true)

**Outcome:** Real copy, five case studies, employment, writing, volunteer — portfolio is hireable.

### 2.1 Content model + data files

1. Implement types from PRD §14 (`Project`, `WritingPost`, `VolunteerEntry`).  
2. Add `content/projects/*.mdx` (or JSON + MDX body).  
3. Add `content/writing.json` (curated five).  
4. Add `content/volunteer.json`.  
5. Add `content/employment.json` from PRD §12b (**omit Chedaro**).

### 2.2 Featured case studies (write in this order)

For each: Context → What I built → Stack → Links → optional screenshots.

1. OpenActive platform  
2. Solid File Manager  
3. Code Funhouse  
4. Excluvia  
5. Platnova  

### 2.3 Supporting work index

1. List supporting projects from PRD (Turbomedics, Minxx, Elite Camp, etc.).  
2. Wire `/work` filters: All | Product | Solid & RDF | Platforms & data | Mobile | Open source.  
3. Enforce exclusions (CEED, Chedaro products, Busy Jollof, Along, e-station, UNICCON products, ODI-Task, job-agent hidden).

### 2.4 Volunteer + Writing + About

1. `/volunteer` — OneSky, She Code Africa, WeTech.  
2. `/writing` — five curated posts + Medium/Hashnode.  
3. `/about` — bio, accordion employment (UNICCON yes), skills (Node.js + AI fluency; no Go/ASP/FastAPI), optional Oreo line.  
4. `/contact` — final CTA copy.  
5. `/cv` — printable HTML or PDF aligned with About.

### 2.5 Assets

1. Capture screenshots for featured five where live URLs allow.  
2. Optimize images (next/image).  
3. OG image draft (can finalize in Phase 3).

### 2.6 Phase 2 quality gate

- [ ] PRD acceptance criteria content items checked  
- [ ] No excluded products on Work  
- [ ] All live links from PRD registry verified  
- [ ] Impeccable / Hallmark content+layout pass  

**Exit:** Content-complete site on Vercel.

---

## Phase 3 — Polish & soft launch

**Outcome:** Public URL you’re proud to share; performance and SEO solid.

### 3.1 SEO & share

1. Per-route metadata, canonical, Open Graph, Twitter cards.  
2. `sitemap.xml` + `robots.txt`.  
3. Favicon / apple icon using brand burgundy.

### 3.2 Performance & a11y

1. Lighthouse Perf ≥90 mobile target (PRD).  
2. Full keyboard + screen-reader pass on primary journeys.  
3. Fix any layout shift from fonts/Oreo/GitHub section.

### 3.3 Oreo v1 (custom sprite)

1. Build 32×32 sprite sheet from `assets/oreo/oreo-reference.png` (white/tabby, optional collar).  
2. Replace classic oneko gif in `public/oreo/`.  
3. Quick idle/run sanity check; reduced-motion still off.

### 3.4 Soft launch

1. Deploy production Vercel URL.  
2. Smoke-test: home → work → case study → contact (mailto + calendar).  
3. Share for feedback (mentors / peers).  
4. Domain: still later unless you decide now.

### 3.5 Phase 3 quality gate

- [ ] PRD §18 acceptance criteria mostly green  
- [ ] DESIGN success look-test (name, SE, warm unique, Oreo)  

**Exit:** Soft-launched portfolio.

---

## Phase 4 — Iterate (post-launch)

Do in priority order as energy allows:

| # | Item | Notes |
|---|------|--------|
| 4.1 | Spotify recently played | Developer app + refresh token + `/api/spotify/*`; visitors never log in |
| 4.2 | Custom domain | DNS → Vercel; update Spotify redirect if using API |
| 4.3 | Deeper Solid / OpenActive case studies | Extra visuals, architecture diagrams |
| 4.4 | Refresh writing strip | New Medium/Hashnode picks |
| 4.5 | CV PDF download | If printable HTML isn’t enough |
| 4.6 | Optional About headshot | Not hero-required |

---

## Suggested working rhythm

```
Week-ish focus          Deliverable
─────────────────────   ──────────────────────────────
Day 1–2                 Phase 1.1–1.5 scaffold + home shell
Day 2–3                 Phase 1.6–1.8 Oreo v0 + GitHub + gate
Day 3–6                 Phase 2 case studies + pages
Day 6–7                 Phase 3 polish + soft launch
Later                   Phase 4 Spotify API, domain, depth
```

---

## Decision log (don’t reopen unless needed)

| Topic | Decision |
|-------|----------|
| Hero name | Precious O Oritsedere |
| Domain | Later; Vercel first |
| Contact | mailto + Google Calendar; no form |
| Theme | One light warm theme |
| Featured | OpenActive, Solid FM, CFH, Excluvia, Platnova |
| About employment | UNICCON yes; Chedaro no |
| Spotify v1 | Profile/playlist link only |
| Cursor pet | Oreo (classic sprite → custom) |
| Skills on site | Node.js + AI fluency; no Go/ASP/FastAPI |

---

## Immediate next action

**Start Phase 1.1** — scaffold Next.js in this folder and wire tokens + layout.

When you say go, execution begins at Phase 1.1.
