# PRD — Precious Portfolio Website

**Product:** Personal portfolio site for Precious (Ruky Jacob)  
**Status:** Draft v6  
**Date:** 1 Oct 2026  
**Evidence base:** Local scan + live URLs + [LinkedIn](https://www.linkedin.com/in/oghenerukevwe-oritsedere-9ab1841b7/)  
**Writing:** [Medium @rukyjacob](https://medium.com/@rukyjacob) · [Hashnode @PreciousBlogs](https://hashnode.com/@PreciousBlogs) / [preciousblogs.hashnode.dev](https://preciousblogs.hashnode.dev)  
**LinkedIn:** [oghenerukevwe-oritsedere-9ab1841b7](https://www.linkedin.com/in/oghenerukevwe-oritsedere-9ab1841b7/)

---

## 1. One-liner

A distinctive personal site for a **software engineer** who ships product systems end-to-end — UIs, APIs, data pipelines, and decentralized/open-data platforms — and who also **writes** about the craft.

---

## 2. Problem

Hiring managers and collaborators currently have no single place that shows Precious as a **software engineer** (not “frontend only”), with proof across:

1. Client product systems (education, fintech, creator economy, health, sustainability, AI products)  
2. Open standards work (Solid Protocol, volunteering data, OpenActive)  
3. Full-stack and platform engineering with **Node.js**, modern web stacks, and open-data systems  
4. Occasional technical writing (Medium + Hashnode)  
5. **AI-fluent** delivery — ships effectively with modern AI coding tooling  

Without this site, evidence stays in private folders, client repos, and scattered blog posts.

---

## 3. Goals

### Primary

| Goal | Measure |
|------|---------|
| Position as software engineer in &lt;10s | First viewport: name + SE role line + CTA — not “Frontend Developer” alone |
| Prove full-stack / systems range | Featured work spans UI **and** API/data/protocol layers |
| Surface writing | Writing section with live links to Medium + Hashnode |
| Convert interest | Contact path works in ≤3 steps |

### Secondary

| Goal | Measure |
|------|---------|
| Credible case studies | ≥6 detailed projects with role, stack, and what was built |
| Maintainable content | Projects + writing entries as structured data / MDX |
| Performance | Lighthouse Perf ≥90 mobile on home |

### Non-goals (v1)

- CMS for non-technical editors  
- Dual light/dark theme as a product feature (ship one strong theme)  
- Blog hosting that replaces Medium/Hashnode (link out; optional later mirror)  
- Auto job applications / ApplyPack-style tooling  
- Multi-language site  

### Explicitly excluded from portfolio case studies / work index

Do **not** feature these as projects on the site. Their **tech stacks still count** toward the skills/stack inventory (§9.X stack-only + §12 skills):

| Excluded from portfolio pages | Keep stack evidence |
|-------------------------------|---------------------|
| Indegene cooking companion | — (omit entirely) |
| ApplyPack (spec / planned) | — |
| DWP frontend assessment | — |
| Cloudflare assessment (“Feedback Intelligence”) | — |
| CEED / Creative Tool Box (+ sibling CEED apps) | Vite, React 18, TS, MUI, Ant Design, Radix, TanStack Query, Formik/Yup/Zod, Zustand, Sass, Docker |
| Chedaro Zoom booking (web + admin + mobile) | Next.js, Redux Toolkit, TanStack Query, Emotion, Framer Motion, Tailwind, Axios, Expo/RN, Zustand, Recharts |
| Busy Jollof | Next.js, React, Tailwind |
| BIILD / Along | Next.js App Router, Redux, Mapbox |
| e-station B2B | Next.js, Redux Toolkit, Radix, Tailwind; **Go**, sqlx, MySQL, Zap, S3, SSE, JWT |
| UNICCON (drealvip + nft-market) | Next.js; Foundry/Forge, Solidity, OpenZeppelin; ethers, wagmi, Firebase |
| ODI-Task | Next.js, N3 |
| Empty stubs (`Learning React nativ`) | — |

**Note:** Stacks from excluded client work may still inform chips (e.g. Expo, Mapbox) without naming those products. Do **not** surface Go / ASP.NET / FastAPI as skills.  

---

## 4. Positioning

### Positioning statement

> **Precious** is a **software engineer** who designs and builds product systems — React/Next and Vue clients, **Node.js** backends and tooling, Solid/RDF open-data platforms, and data-rich product UIs. Highly effective with **AI coding** workflows. Occasional writing on [Medium](https://medium.com/@rukyjacob) and [Hashnode](https://hashnode.com/@PreciousBlogs).

### Tagline options (pick one)

1. Software engineer · product systems · open data & Solid  
2. I build the interfaces **and** the platforms underneath  
3. Software engineer shipping full-stack products and open standards  

### Audience priority

1. Hiring managers / tech leads evaluating **software engineers** (full-stack & systems)  
2. ODI / Solid / open-data orgs  
3. Product companies needing engineers who own UI + integration + data surfaces  
4. Readers / mentees who find you via writing or community mentoring and want the professional story  

### What this is *not*

- A “frontend-only” portfolio  
- A Dribbble clone with no systems depth  
- A GitHub dump without narrative  

---

## 5. User journeys

### A — Hiring manager (2–5 min)

Home → role as software engineer → 3 featured systems (product + Solid + OpenActive) → one case study → Contact / CV.

### B — Open-data / Solid lead

Home → Solid & platforms section → file manager / volunteering / CSS / OpenActive → GitHub or live demos → Contact.

### C — Reader from Medium/Hashnode

Blog post → portfolio Writing page → About → Work → Contact.

---

## 6. Information architecture

```
/                     Home (brand + SE positioning + proof + CTA)
/work                 All projects (filterable)
/work/[slug]          Case study
/volunteer            Volunteer & community work
/writing              Selected posts + links to Medium / Hashnode
/about                Bio, timeline, range of skills
/contact              Email + optional form
/cv                   PDF or printable HTML CV
```

**v1 minimum:** `/`, `/work`, `/work/[slug]`, `/volunteer`, `/writing`, `/about`, `/contact`.

---

## 7. Page requirements

### 7.1 Home — one composition (first viewport)

| Element | Rule |
|---------|------|
| Name / brand | Hero-level signal |
| Headline | Software engineer + niche (open data / product systems) |
| Supporting line | One sentence on range (clients · APIs · Solid · platforms) |
| CTA group | Primary: Contact · Secondary: View work |
| Visual | Full-bleed atmosphere — not a card collage |

**Below fold:** 5 featured projects · capability bands · **GitHub contributions** ([PreciousOritsedere](https://github.com/PreciousOritsedere)) · **Spotify / off-the-clock** strip · **Volunteer strip** (OneSky · She Code Africa · WeTech) · Writing strip · Contact strip.

**Do not** put stats strips, icon grids, contribution graphs, or multiple project cards in the first viewport.

### 7.2 Work index

Filters: `All | Product | Solid & RDF | Platforms & data | Mobile | Open source`.  
Each item: title, one-line purpose, role, 3–7 tech chips, year.

### 7.3 Case study

Context → What I built → Stack → Visuals → Outcome → Links (if public).  
Anonymize client names under NDA; keep stack and ownership accurate.

### 7.4 Volunteer (`/volunteer`)

Dedicated section for unpaid / community contribution — separate from paid client Work.

| Entry | Detail |
|-------|--------|
| **OneSky Collective** | Volunteer engineering on the gamified sustainability product (web, mobile, API monorepo). See §9.5. Live: [oneskycollective.org](https://www.oneskycollective.org) when linking marketing. |
| **She Code Africa** | Frontend mentor — supporting women in tech via mentoring. |
| **WeTech** | Frontend mentor — community mentoring. |

**Page requirements**

- Short intro: why you volunteer  
- Cards/list for each org: role, what you do, timeframe (if known), optional link  
- OneSky may deep-link to a short case note or stay on `/volunteer` only (not mixed into paid Work featured trio unless you choose)  
- Mentoring entries: role title + org + 1–2 sentences (no need for full case-study stack unless you want)

**Home:** compact volunteer strip with the three names + link to `/volunteer`.

### 7.5 Writing

- Intro: “I write occasionally about …”  
- Featured posts (manual curation) with title, date, source (Medium/Hashnode), link  
- Persistent profile links: Medium + Hashnode  

### 7.6 About / Contact / CV

About = bio + **employment timeline from §12b (LinkedIn)** + volunteer mentoring + skills (incl. AI fluency).  
**Employment display rule:** Include UNICCON on About/CV; **omit Chedaro entirely** from About/CV (and keep Chedaro products off Work).  
CV = PDF or printable HTML aligned with case studies + employment (same Chedaro omission).

### 7.7 Contact (`/contact`)

| Path | Requirement |
|------|-------------|
| **Email** | Primary **mailto** — **rukyjacob@gmail.com** |
| **Book a slot** | Secondary CTA: [Intro call with Precious](https://calendar.app.google/za1EM3g7sQAV8wXP8) |
| **No contact form** | Do not build a custom message form for v1 |

**Implementation notes (Google Calendar):**

- Booking URL (confirmed): `https://calendar.app.google/za1EM3g7sQAV8wXP8`  
- Env: `NEXT_PUBLIC_CONTACT_EMAIL=rukyjacob@gmail.com`, `NEXT_PUBLIC_CALENDAR_BOOKING_URL=https://calendar.app.google/za1EM3g7sQAV8wXP8`  
- CTA copy: “Email me” · “Book a call”.  
- Open booking URL in a new tab; mailto uses `mailto:rukyjacob@gmail.com`.

---

## 8. Design & tech (summary)

**Design:** Brand-first; expressive typography (no Inter/Roboto/Arial/system-only); atmospheric background; 2–3 intentional motions; WCAG 2.2 AA; avoid purple SaaS / cream-terracotta / broadsheet clichés.

**Recommended stack:** Next.js App Router + TypeScript + Tailwind v4 + MDX project/writing content + Vercel · contact via **mailto** + **Google Calendar appointment scheduling** (no form provider required for v1).

---

## 9. Master project catalog

Evidence from the three roots. Use for featured vs supporting vs omit decisions.  
Roles assume your involvement from local copies; confirm titles before publishing.

---

### 9.1 Work Files — CFH / Code Funhouse family

#### Code Funhouse (`CFH/cfh-fe`)

| Field | Detail |
|-------|--------|
| **Live URL** | [codefunhouse.com](https://codefunhouse.com/) |
| **What it is** | Main web platform for **Code Funhouse** — gamified coding education for students, teachers, and parents. Live site: AI coding tutors, chat/hints/lessons with Tutor Bot, personalized paths, Python/HTML/CSS/JS, gamification, collaborative challenges, school offerings (self-paced, 1:1 tutoring, group live). |
| **Product surfaces** | Public marketing (Sanity-driven landing pages), student/teacher/parent signup, learning product, hackathon CMS types, Arduino Web Serial for hardware lessons, Socket.IO realtime, Stripe, NextAuth, Leaflet, Cloudinary. |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind, Sanity, NextAuth, Stripe, Socket.IO, styled-components, Zustand, Zod/Yup, pnpm, Docker. |
| **Portfolio angle** | Large education product: roles, payments, CMS, realtime, hardware bridge. |

#### CFH Hackathon (`CFH/cfh-hackathon`)

| Field | Detail |
|-------|--------|
| **What it is** | Dedicated hackathon frontend: student, teacher, and admin areas plus in-browser **code editor**. |
| **Stack** | Next.js 15, React 18, MUI, Redux Toolkit, NextAuth, Tailwind, Yup. |
| **Portfolio angle** | Event product + IDE-like UI alongside main CFH. |

#### Elite Camp Connect (`CFH/elite-camp`)

| Field | Detail |
|-------|--------|
| **Live URL** | [elite-camp.vercel.app](https://elite-camp.vercel.app/) |
| **What it is** | **Elite Connect Camp** — luxury residential summer programme (Dubai & Canterbury): English & Maths immersion, AI/robotics labs, leadership, entrepreneurship, cultural excursions; ages 10–17; parent/agent registration and Stripe payments; Sanity CMS. |
| **Stack** | Next.js 16, React 19, Tailwind 4, Stripe, Sanity, styled-components, Framer Motion, Zod. |
| **Portfolio angle** | Commerce + CMS for a physical camp product. |

#### Next Gems Camp (`CFH/next-gem-camp`)

| Field | Detail |
|-------|--------|
| **Live URL** | [next-gems-camp.vercel.app](https://next-gems-camp.vercel.app/) |
| **What it is** | **Next Gems** — luxury residential summer camp in England; accredited English tuition; pathways (Tech, Business, Sport, Arts); parent/agent Stripe checkout; Sanity. |
| **Stack** | Next.js 16, React 19, Tailwind 4, Radix, Stripe, Sanity, Framer Motion, Zod. |
| **Portfolio angle** | Parallel camp brand; reusable payment/CMS architecture. |

#### Minxx (`CFH/Minxx`)

| Field | Detail |
|-------|--------|
| **Live URL** | [minxxclub.com](https://www.minxxclub.com/) |
| **What it is** | **Minxx Club** ecommerce — luxury handmade strip lashes, clusters, lash kits; goodie box offers; reviews; collections (Minxx Favs, Mega Volume, 3D Minks, etc.). |
| **Stack** | Next.js 16, React 19, Tailwind 4, TanStack Query, Zustand. |
| **Portfolio angle** | Supporting ecommerce case. |

#### Other CFH folders

| Folder | Detail |
|--------|--------|
| `Game curriculum` / `intro-to-html` | Curriculum content — not standalone products. |
| `cfh-fe-backup-*` / `.tgz` | Backup only — use live `cfh-fe` + codefunhouse.com. |

---

### 9.2 Work Files — Eclait / Excluvia

#### Excluvia client (`Eclait/new-excluvia-web-app`)

| Field | Detail |
|-------|--------|
| **Live URL** | [excluvia.com](https://www.excluvia.com/) |
| **What it is** | Creator economy platform: creators publish content & livestreams; fans subscribe (tiered memberships, exclusive content, fan chat, early access; ~10% platform fee messaging), gift, message, marketplace products/courses; Stripe + Paystack; LiveKit WebRTC; DashJS; native WebSocket chat/live. |
| **Feature domains** | Auth, content, livestream, marketplace, payments/wallet, messages, subscriptions, analytics, settings, public marketing. |
| **Stack** | Vite, React 18, TypeScript, Tailwind, Zustand, TanStack Query, MUI, Firebase, Framer Motion, Axios, LiveKit, Chart.js. |
| **Portfolio angle** | Strong full product client: realtime + payments + media. |

#### Excluvia super-admin (`Eclait/excluvia-super-admin-dashboard`)

| Field | Detail |
|-------|--------|
| **What it is** | Internal **management dashboard** for Excluvia ops: creators/fans, products/courses analytics, campaign email (segments, templates, sender identities), Lexical, Recharts, Redux. |
| **Stack** | Next.js 15, React 19, Redux Toolkit, Tailwind 4, Lexical, Recharts, Zod, Docker. |
| **Portfolio angle** | Admin/ops engineering paired with the consumer app. |

---

### 9.3 Work Files — Platnova (fintech)

#### Platnova business web (`Platnova/platnova-business-web`)

| Field | Detail |
|-------|--------|
| **Live URL (consumer brand)** | [platnova.com](https://platnova.com/) |
| **What it is** | Business-facing web app for **Platnova** fintech. Live consumer brand: all-in-one money & lifestyle app (100k+ users messaging) — send money locally/abroad (13+ currencies, 50+ countries), bills/airtime/TV, multi-currency cards, USD/GBP/EUR accounts, gift cards, **Vault** savings, tuition payments, NovaAnalytics. Business web: multi-currency wallets, transfers, business ops UI. |
| **Stack** | Vite, React 19, TypeScript, MUI, Radix, Redux Toolkit, TanStack Query, Tailwind, Framer Motion, Yup, pnpm. |
| **Portfolio angle** | Fintech product engineering (consumer + business surfaces). |

#### Platnova consumer web (`Platnova/platnova-web-app`)

| Field | Detail |
|-------|--------|
| **Live URL** | [platnova.com](https://platnova.com/) |
| **What it is** | Consumer Platnova app UI: dashboard, Vault, cards (create/link), settings/limits, auth. (Local backup missing root `package.json`; Vite + React + MUI/Radix/Redux/TanStack from source/`node_modules`.) |
| **Portfolio angle** | Consumer fintech companion to business web. |

#### `platnova-lighthouse`

| Field | Detail |
|-------|--------|
| **What it is** | Perf tooling/reports — omit from featured work. |

---

### 9.4 Work Files — Turbham / Turbomedics

#### Turbomedics patient webapp

| Field | Detail |
|-------|--------|
| **Live URL (company)** | [turbomedics.com](https://turbomedics.com/) |
| **What it is** | Vue patient-facing medical app (records, medical report download, charts, Socket.IO, rich text). Company site positions Turbomedics as MedTech: EMR/health data platforms, telemedicine, custom healthcare software, API integrations, AI clinical intelligence (“Dr Deuce”), workflow automation for clinics/hospitals/labs/pharmacies/NGOs. |
| **Stack** | Vue 3, Vue CLI, Vuex, Vue Router, Vuetify, Tailwind, TanStack Vue Query, Chart.js, Socket.IO, Axios. |
| **Portfolio angle** | Healthtech client + Vue depth. |

#### Turbomedics wellness center

| Field | Detail |
|-------|--------|
| **What it is** | Wellness-center operations UI (Vue 3 + Vite): Vuetify, VeeValidate/Yup, charts. |
| **Stack** | Vue 3, Vite, Vuex, Vuetify, Tailwind, TanStack Vue Query. |

#### Other Turbham folders

| Folder | Note |
|--------|------|
| `turbham-farms` / `turbomedics-website` | Marketing/other — company narrative lives at turbomedics.com. |

---

### 9.5 Work Files — OneSky Collective (**Volunteer**)

| Field | Detail |
|-------|--------|
| **Portfolio section** | **`/volunteer`** — not paid client Work |
| **What it is** | **Gamified sustainability** product: daily actions, community challenges, “view-to-clean,” rewards tied to ocean clean / tree planting narrative, partner pages, ESG-style reporting messaging. Live site: [oneskycollective.org](https://www.oneskycollective.org). |
| **Your role** | Volunteer contributor (software engineering across the monorepo surfaces you touched). |
| **Monorepo** | Turborepo + Yarn: `onesky-website` (Next.js marketing), `onesky-app` (Expo/React Native), `packages/backend` (Express API). |
| **Backend** | Express 5, Drizzle ORM, PostgreSQL, Redis, Supabase auth/DB, Google Cloud Storage + Vision, Expo push, Swagger, Zod; deployed to **Google Cloud Run**; frontend on Vercel. |
| **Portfolio angle** | Volunteer full-stack / product engineering for climate impact. |

---

### 9.6–9.10 / 9.13–9.14 — Excluded from portfolio pages (stack retained)

These exist locally but **must not appear** as case studies or Work index cards. Stacks feed the global skills inventory only.

| Source | Stacks to retain |
|--------|------------------|
| **CEED** Creative Tool Box (+ siblings) | Vite, React 18, TypeScript, MUI, Ant Design, Radix, TanStack Query, Formik, Yup, Zod, Zustand, Sass, Docker, JWT/cookies |
| **Chedaro** web / admin / mobile | Next.js, Redux Toolkit, TanStack Query, Emotion, Framer Motion, Tailwind, Axios, Recharts; Expo, React Native, Zustand |
| **Busy Jollof** | Next.js, React, Tailwind, OTP-style auth patterns |
| **BIILD / Along** | Next.js App Router, Redux, Mapbox |
| **e-station B2B** | Next.js, Redux Toolkit, Radix, Tailwind; **Go**, sqlx, MySQL, Zap, S3, SSE, JWT, multi-tenant commerce patterns |
| **UNICCON** drealvip / nft-market | Next.js; Foundry/Forge, Solidity, OpenZeppelin; ethers, wagmi, Firebase |

---

### 9.8 Work Files — SMG

| App | What it is |
|-----|------------|
| **smg-website** | Company/marketing site: about, services, blog, contact, start-project; Chakra UI + Next. |
| **sell-crea8** | Merch/ecommerce: shop, cart, checkout, dashboard, custom recommendations, auth. |
| **sellmerch** | Lighter merch surface (contact, request-quote). |

**Stack signals:** Next.js, Redux, Tailwind, Framer Motion, Chakra (website).  
**Portfolio angle:** Supporting agency/ecommerce work; anonymize if needed.

---

### 9.11 Work Files — JASERE / Engagevents

| Field | Detail |
|-------|--------|
| **What it is** | Live event engagement platform branded **Engagevents**: event hub, live events, moderation of questions, surveys, waitlist, Zoom integration routes, back-office, pricing/subscriptions, analytics (participant engagement). |
| **Stack** | Next.js (app + pages), Redux. |
| **Portfolio angle:** Realtime event SaaS-style product. |

---

### 9.12 Work Files — Zanny’s Food / Fodieplex

| Field | Detail |
|-------|--------|
| **What it is** | Food brand/site **Fodieplex** with Sanity studio + marketing routes + Cloudinary. |
| **Stack** | Next.js, Sanity, Cloudinary. |
| **Portfolio angle:** Supporting content-driven food brand site. |

---

### 9.15 Work Files — Sites & personal builds

| Project | What it is | Portfolio? |
|---------|------------|------------|
| **hamid-portfolio** | Client portfolio for architect **Izuagbe-Ibrahim Hamid Oshozuwa** — collaboration/innovation framing, project gallery (National Museum, Skyrun, Kwara, Asokoro), testimonials, Coventry master’s bio. **You built this.** | **Yes** — client site / freelance |
| **Live URL** | [izuagbe-ibrahim-hamid.vercel.app](https://izuagbe-ibrahim-hamid.vercel.app/) | |
| **novacreed-llc** | NovaCreed services marketing (admin support, consulting packages), Sanity + Next. | Supporting / optional |
| **referlytics** | Referral-analytics marketing site. | Optional |
| **trustfynd** | Trustfynd marketplace/product + auth + Socket.IO. | Optional |
| **Madistech website** | Madistech company site. | Optional |
| **ODI-Task** | Thin Next + N3 exercise. | **Excluded** (stack: Next, N3 only) |

**Hamid stack (from local backup):** Next.js App Router, React, marketing layout, components, public assets.

---

### 9.15b Live-only projects (code not in these folders)

You shipped these; local repos may be elsewhere. Include on the portfolio with live links.

#### Fun Tech AI

| Field | Detail |
|-------|--------|
| **Live URL** | [funtechai.com](https://www.funtechai.com/) |
| **What it is** | **Fun Tech AI** — agency/product site for custom AI agents and sector AI solutions (fintech, education, ecommerce, healthcare). ODI profile notes prior work at Funtech AI contributing to Code Funhouse. |
| **Stack** | Same family as other shipped web products: **TypeScript, React/Next.js, Tailwind** (and related UI/state tooling as used on the repo). |
| **Portfolio angle** | Supporting / company association; keep stack consistent with other featured Next/React work. |

#### SmartAfri Labs

| Field | Detail |
|-------|--------|
| **Live URL** | [smartafrilabs.com](https://smartafrilabs.com/) |
| **What it is** | SmartAfri Labs / Web3 ecosystem work (LinkedIn project: DREAL VIP, Truebacker, blockchain accessibility in Africa — “Web 2.5” UX). |
| **Stack** | Same family as other shipped web products: **TypeScript, React/Next.js, Tailwind** (+ Web3 UI libs only if you choose to mention that project). |
| **Portfolio angle** | Supporting; re-check live site before publish. |

#### Audiophile ecommerce

| Field | Detail |
|-------|--------|
| **Live URL** | [audiophile-ecommerce-sandy-ten.vercel.app](https://audiophile-ecommerce-sandy-ten.vercel.app/) |
| **What it is** | Premium audio ecommerce demo: headphones/speakers/earphones catalog (XX99 Mark II, ZX9/ZX7, YX1), category pages, brand story — Frontend Mentor–style audiophile storefront. |
| **Local code** | Not in scanned folders. |
| **Portfolio angle** | Polished ecommerce UI craft / personal project. |
| **Likely stack** | Confirm from repo (commonly Next/React + responsive CSS). |

---

### 9.16 Work Files — job-agent (**hidden**)

| Field | Detail |
|-------|--------|
| **Status** | **Hide from portfolio for now** — do not list on Work, Home, or Now. |
| **What it is** | Personal WhatsApp-first job discovery agent (early foundation). |
| **Revisit** | Only after you explicitly un-hide. |

---

### 9.17 Work Files — AI-For-Beginners

| Field | Detail |
|-------|--------|
| **What it is** | Local clone of Microsoft’s **AI for Beginners** curriculum: Jupyter notebooks (PyTorch, TensorFlow/Keras) across NN, CV, NLP, RL, etc. |
| **Portfolio angle:** Learning resource — omit from professional work list (or tiny “study” note). |

---

### 9.18 Documents/Solid — Protocol infrastructure & libraries

#### Community Solid Server (`css`)

| Field | Detail |
|-------|--------|
| **What it is** | Upstream **Community Solid Server** — modular Node implementation of Solid (LDP, OIDC identity, ACP/WAC, SPARQL via Comunica, Redis, WebSockets). Local working copy for contribution/config/plugins. |
| **Stack** | TypeScript, Node ≥18, N3, Comunica, oidc-provider, ioredis, Jest, Docker. |
| **Portfolio angle:** Protocol server engineering. |

#### CSS profile creation (`css-profile-creation` + `profile-creation-component`)

| Field | Detail |
|-------|--------|
| **What it is** | CSS component for **SolidOS-style profile creation**: modern UI, Mashlib/Pivot browser, organizations/CV section, social accounts, image upload, advanced pod options. Templates (EJS) + TS handlers. |
| **Stack** | TypeScript, `@solid/community-server`, N3, Mashlib. |
| **Portfolio angle:** Server plugin + identity UX. |

#### Hello-world / CSS profile handler (`hello-world-component`)

| Field | Detail |
|-------|--------|
| **What it is** | CSS component package (`css-profile-handler`) — starter/handler patterns for CSS extensions. |
| **Stack** | TypeScript, CSS, Jest, N3. |

#### Pivot (`solid-contrib/pivot`)

| Field | Detail |
|-------|--------|
| **What it is** | **Pivot** — Solid data browser packaged with CSS + mashlib + rdflib. |
| **Stack** | TypeScript, CSS, mashlib, rdflib. |

#### Reactive authentication (`reactive-authentication`)

| Field | Detail |
|-------|--------|
| **What it is** | Published npm library `@solid/reactive-authentication`: Solid-OIDC reactive fetch, DPoP tokens, web components (`authorization-code-flow`, `idp-picker`), global fetch patching. |
| **Stack** | TypeScript, oauth4webapi, DPoP, N3, RDF/JS, Vitest, Node ≥24. |
| **Portfolio angle:** Open-source auth engineering — strong SE proof. |

#### `@solid/object` (`solid-objects`)

| Field | Detail |
|-------|--------|
| **What it is** | RDF mapping classes for Solid resources (`@rdfjs/wrapper`). |
| **Stack** | TypeScript, N3, Node test runner. |

#### `@volunteeringdata/object` (`volunteering-data/object`)

| Field | Detail |
|-------|--------|
| **What it is** | RDF/JS object mapping for the [Volunteering Data](https://standard.volunteeringdata.io/) ontology. |
| **Stack** | TypeScript, `@rdfjs/wrapper`, N3. |
| **Portfolio angle:** Standards-aligned library work (ODI). |

#### `@solid/react-component` (`solid-react-components`)

| Field | Detail |
|-------|--------|
| **What it is** | Reusable React Solid components: OIDC login UI, provider picker, AuthGuard, Next.js adapter; depends on `@ldo/solid-react`. |
| **Stack** | React 18+, TypeScript, LDO, Next peer, Jest. |

#### Solid npm panes ecosystem (`npm-packages/`)

| Package | Role |
|---------|------|
| **mashlib** | Data mashup library for SolidOS databrowser |
| **solid-panes** | Pane applets/views for mashlib |
| **solid-ui** | UI library for Solid apps (React, Storybook) |
| **solid-logic** | Core SolidOS business logic + Inrupt authn |
| **chat / contacts / folder / meeting / issue / markdown / source / activity-streams panes** | Domain panes on rdflib + solid-ui |
| **pane-registry** | Registry for panes |

**Stack:** TypeScript, React, Webpack, rdflib, Jest, Storybook (some packages).  
**Portfolio angle:** Contribution to SolidOS ecosystem.

---

### 9.19 Documents/Solid — Product / demo applications

#### Solid File Manager (`file-manager` / `solid-file-manager`)

| Field | Detail |
|-------|--------|
| **Live URL** | [filemanager.solid-experiments.org](https://filemanager.solid-experiments.org/) |
| **What it is** | Google Drive–like **Solid Pod file manager**: browse multiple storage roots, grid/list, upload/download/ZIP, rename/copy/move/delete, ACP sharing with WebID contacts, previews, OIDC session, local CSS with ACP. |
| **Stack** | Next.js 16, React 19, Tailwind 4, Inrupt solid-client + authn, LDO, N3, RDF/JS wrapper for ACP, shadcn, CSS alpha. |
| **Portfolio angle:** Flagship Solid product engineering — ship with live experiment link. |

#### Volunteering Demo (`vounteering-demo`)

| Field | Detail |
|-------|--------|
| **What it is** | ODI demonstrator for **Volunteering Data** standard: Solid login; profile, skills, causes, equipment, availability, locations, credentials in `{pod}/volunteer/profile.ttl`; map UI; ontology TTL. |
| **Stack** | Next.js 16, LDO connected-solid, TanStack Query, Leaflet, N3, Tailwind 4. |
| **Portfolio angle:** Standards + product demo. |

#### National Volunteer Services (`national-volunteer-services`)

| Field | Detail |
|-------|--------|
| **What it is** | Opportunity discovery app: match volunteering opportunities to skills/availability/location using Solid profile data + vocabulary IRIs (`ns.volunteeringdata.io`); NVS **reads** pod profiles; OpenAI present for assistive features; Solid login via `solid-react-component`. |
| **Stack** | Next.js 16, LDO, TanStack Query, OpenAI, N3, Tailwind 4. |
| **Portfolio angle:** Consumer-facing Solid + matching logic. |

#### Volunteer Profile Manager (`volunteer-profile-manager`)

| Field | Detail |
|-------|--------|
| **What it is** | Earlier Solid + Next + LDO demo (commented teaching patterns), ACP, local CSS boot, Comunica SPARQL, Leaflet, Playwright tests. |
| **Stack** | Next.js 15, LDO, Inrupt, Comunica, Tailwind, Playwright. |

#### Volunteer application portal

| Field | Detail |
|-------|--------|
| **What it is** | Next.js 16 scaffold (default create-next-app page still present) — early portal shell. Treat as **early/WIP** unless filled out before publish. |

#### LDO demo / Next object-mapper demo

| Field | Detail |
|-------|--------|
| **What they are** | Teaching/demo apps for LDO + Inrupt + CSS alpha; object-mapper demo adds Leaflet + N3 mapping patterns. |
| **Portfolio angle:** Supporting / teaching demos. |

#### LibreChat fork (`libre-chat`)

| Field | Detail |
|-------|--------|
| **What it is** | Full **LibreChat** stack (ChatGPT-like multi-model AI UI) with custom **Solid OpenID strategy**: WebID profile fetch (vCard/FOAF via N3), DPoP-aware OIDC, Inrupt solid-client on API. |
| **Stack** | Turborepo; React/Vite client; Express API; MongoDB, Meilisearch, Redis, pgvector RAG; LangChain; AWS Bedrock/S3; Docker Compose. |
| **Portfolio angle:** AI product + Solid identity integration — systems engineering. |

---

### 9.20 Documents/Solid — Docs, site, process

| Project | What it is |
|---------|------------|
| **developers-docs** | [dev.solidproject.org](https://dev.solidproject.org/) — MkDocs Solid developer documentation; Docker. |
| **solid-project-website** | Jekyll 4 site for solidproject.org (Ruby, feed/sitemap plugins); small N3 RDFa extractor. |
| **solid-llm-skills** | Markdown “skills” docs for AI agents: Solid protocol, servers, data modelling, engineering role guides — documentation engineering, not a runtime app. |
| **w3c-cg-solid** | W3C Solid Community Group process/charter/meetings repo — community participation artifact. |

---

### 9.21 Documents/open-active — Platform (end-to-end)

#### open-active-monitor (Python / GCP)

| Field | Detail |
|-------|--------|
| **What it is** | Data pipeline + monitoring for **OpenActive** (UK open data on physical activity opportunities via RPDE feeds). |
| **Jobs** | Legacy: `get-feeds` → `get-opportunities` → `analyse-opportunities` (pickle + Pub/Sub). New: `ingest-feeds` → `ingest-opportunities` → `opportunity-insights` (+ feed quality) into BigQuery; backfill jobs. |
| **Service** | Streamlit `openactive-monitor` dashboard (maps, Plotly, Folium). |
| **Orchestration** | GCP Cloud Run Jobs, Pub/Sub, Workflows (europe-west2). |
| **Stack** | Python 3.13+, pandas, GeoPandas, BeautifulSoup, openactive SDK, BigQuery, uklookup. |
| **Portfolio angle:** Data platform / backend engineering. |

#### open-active-monitor-api (.NET)

| Field | Detail |
|-------|--------|
| **What it is** | ASP.NET Core API over BigQuery for public + **admin** dashboards: summary, areas hierarchy, publishers, activities, NHS trusts, opportunities, feed quality; admin incidents (stalls, ingestion errors, orphaned children, future decline), Active Places coverage. |
| **Stack** | **.NET 10**, Google.Cloud.BigQuery.V2, OpenAPI + Scalar. |
| **Portfolio angle:** Typed API layer — language range beyond JS/Python. |

#### open-active-dashboard (Next.js)

| Field | Detail |
|-------|--------|
| **Live URL** | [openactive-dashboard.vercel.app](https://openactive-dashboard.vercel.app/) |
| **What it is** | **OpenActive Data Intelligence Platform** — “Using data to help more people get active.” Live UI: daily-updating national summary; interactive map explorer (areas → sessions/classes/facilities); data-quality table (completeness vs content quality; Healthy / Warnings / Errors per provider). Consumes Monitor API. |
| **Stack** | Next.js 16, React 19, Tailwind 4, TanStack Query, D3, Vitest. |
| **Portfolio angle:** Analytics product UI on top of the pipeline + API. **Feature with the OpenActive system; link the live dashboard.** |

---

## 10. Live URL registry (confirmed)

| Product | URL | In portfolio? |
|---------|-----|---------------|
| Excluvia | https://www.excluvia.com/ | Yes |
| Turbomedics | https://turbomedics.com/ | Yes |
| Platnova | https://platnova.com/ | Yes |
| Code Funhouse | https://codefunhouse.com/ | Yes |
| Fun Tech AI | https://www.funtechai.com/ | Yes — stack: TS / React / Next / Tailwind family |
| Hamid architecture portfolio | https://izuagbe-ibrahim-hamid.vercel.app/ | Yes (you built it) |
| SmartAfri Labs | https://smartafrilabs.com/ | Yes — same stack family; re-check live site |
| Audiophile ecommerce | https://audiophile-ecommerce-sandy-ten.vercel.app/ | Yes |
| Minxx Club | https://www.minxxclub.com/ | Yes |
| Elite Camp Connect | https://elite-camp.vercel.app/ | Yes |
| Next Gems Camp | https://next-gems-camp.vercel.app/ | Yes |
| OpenActive dashboard | https://openactive-dashboard.vercel.app/ | Yes |
| Solid File Manager | https://filemanager.solid-experiments.org/ | Yes |
| OneSky Collective | https://www.oneskycollective.org | Yes — under **`/volunteer`** |

Case study / volunteer `links` must use these URLs. Re-verify SmartAfri before publish.

---

## 11. Featured work (recommended)

Feature on **Work** (all of these — not alternatives):

1. **OpenActive platform** — live [dashboard](https://openactive-dashboard.vercel.app/) + pipeline + API  
2. **Solid File Manager** — live [filemanager.solid-experiments.org](https://filemanager.solid-experiments.org/)  
3. **Code Funhouse** — live [codefunhouse.com](https://codefunhouse.com/)  
4. **Excluvia** — live [excluvia.com](https://www.excluvia.com/)  
5. **Platnova** — live [platnova.com](https://platnova.com/)  

**Volunteer (`/volunteer`) — required section:**

1. **OneSky Collective** — volunteer engineering (sustainability monorepo)  
2. **She Code Africa** — Frontend mentor  
3. **WeTech** — Frontend mentor (LinkedIn: Sep 2025 – Present)  

**Supporting Work (live links where available):** Turbomedics, Minxx, Elite Camp, Next Gems, Fun Tech AI, SmartAfri Labs, Hamid portfolio, Audiophile, LibreChat×Solid, reactive-authentication / volunteeringdata object, SellMedia/SMG, Engagevents/JASERE.

**Hidden for now:** job-agent (do not show on site until you say otherwise).

**Do not list on Work:** CEED, Chedaro, Busy Jollof, Along, e-station, UNICCON, ODI-Task (stacks only where still relevant).

Writing: always via `/writing` + footer.

---

## 12. Skills inventory (includes stacks from excluded projects)

Use on About / a compact skills strip — **not** as named case studies for excluded clients.

| Area | Technologies |
|------|----------------|
| Languages | TypeScript, JavaScript, Python (where used on OpenActive/jobs) |
| Runtime / backend | **Node.js** (APIs, tooling, Next/server surfaces) |
| Web | Next.js, React, Vue 3, Vite, Tailwind, MUI, Ant Design, Chakra, Vuetify, Radix/shadcn, Emotion, styled-components |
| Mobile | Expo, React Native (skill from excluded mobile work — chip only) |
| State / data fetching | Redux Toolkit, Zustand, Vuex, TanStack Query, Axios, Socket.IO, LiveKit |
| Data / cloud (used on shipped products) | PostgreSQL, MongoDB, Redis, MySQL, Supabase, BigQuery, GCP Cloud Run/Pub/Sub, Vercel, Docker, S3, Firebase |
| Solid / RDF | Community Solid Server, Inrupt clients, LDO, N3, rdflib, Comunica, ACP/OIDC |
| Payments / CMS | Stripe, Paystack, Sanity, Cloudinary |
| Maps / viz | Leaflet, D3, Chart.js, Recharts; Mapbox (skill chip only) |
| **AI fluency (recruiter signal)** | **AI-native software engineering** — highly effective with AI coding assistants, agentic workflows, skills/prompts, and LLM-assisted delivery (the tooling companies expect today). Position as *how you ship*, not as having authored LangChain/LibreChat/OpenAI product stacks. |
| Auth | NextAuth, JWT, Solid-OIDC, DPoP |

**Do not** list Go, ASP.NET Core, or FastAPI as portfolio skills. **Do not** lead with OpenAI / LangChain / LibreChat as “techs I write.”

---

## 12b. Employment history (from LinkedIn)

Source: [linkedin.com/in/oghenerukevwe-oritsedere-9ab1841b7](https://www.linkedin.com/in/oghenerukevwe-oritsedere-9ab1841b7/) · also [ODI profile](https://theodi.org/profile/precious-oritsedere/)  
Use on `/about`, CV, and optional “Experience” subsection. Titles as on LinkedIn (software engineer positioning on the site can still frame the overall brand).

| Role | Org | Dates | Highlights for portfolio |
|------|-----|-------|---------------------------|
| **Frontend Developer** (current) | Open Data Institute · London | Nov 2025 – Present | Solid website redesign/accessibility; Solid apps launch page; cross-team Solid/open-data products; support other ODI technical projects |
| **Frontend Engineer** | Code Funhouse | Jul 2024 – Nov 2025 | Gamified AI coding education; student/teacher/parent/admin; custom IDE, AI tutor/checker; hackathon platform |
| **Frontend Developer** | Turbham Technologies | Mar 2024 – Oct 2025 | Turbomedics patient + wellness + admin; AI health tools (Ask Dr. Deuce, risk calculators); Vue stack |
| **Senior Frontend Engineer** | Chedaro | May 2025 – Sep 2025 | **Omit from About/CV and Work** (per decision). Stack retained in excluded inventory only. |
| **Lead Frontend Engineer** | SellMedia Inc | Jul 2024 – Mar 2025 | Led 4 FE engineers; Next.js media products; mentoring |
| **Frontend Engineer** (Part-time) | EngagEvents | Apr 2024 – Dec 2024 | Real-time Q&A/quizzes/polls; Next.js, TypeScript, WebSockets |
| **Team Lead Blockchain Frontend** | UNICCON Group | Jan 2024 – Apr 2024 | Include on About/CV; **products off Work** |
| **Blockchain Frontend Developer** | UNICCON Group | Nov 2022 – Jan 2024 | Include on About/CV; **products off Work** |
| **Frontend Developer** (Outreachy) | Creative Commons | Dec 2022 – Mar 2023 | CC Search: PHP → semantic HTML/CSS/JS; docs |
| **Frontend Developer** (OSS) | Trial By Fire (TBF) | Jul 2022 – Nov 2022 | Internal social network UI |
| **Frontend Developer** | Stepcho Nigeria Limited | Nov 2019 – Nov 2021 | Corporate client web apps; React/Next |

**Education (LinkedIn)**

| Credential | Institution | Dates |
|------------|-------------|-------|
| Frontend Engineering diploma | AltSchool Africa | 2022 – 2023 |
| BA, International Studies & Diplomacy | University of Benin | 2014 – 2018 |

**Volunteer (LinkedIn + your note)** — also §7.4

| Role | Org | Notes |
|------|-----|-------|
| Frontend Developer Mentor | WeTech | Sep 2025 – Present (LinkedIn) |
| Frontend mentor | She Code Africa | Per your direction |
| Volunteer engineering | OneSky Collective | Per your direction |

**LinkedIn projects to cross-link** (when writing case studies): Minxx Club (+ AI stylist / Minxx Mirror), Platnova Business, Turbomedics, Architectural portfolio (Hamid), Madistech, SmartAfriLabs Web3 suite, GitSpy, Zannysfood.

---

## 13. Writing requirements

| Item | Detail |
|------|--------|
| Profiles | [Medium @rukyjacob](https://medium.com/@rukyjacob), [Hashnode @PreciousBlogs](https://hashnode.com/@PreciousBlogs) |
| `/writing` page | Curated list below + “See all on Medium / Hashnode” |
| Home | Optional strip of 2–3 picks from the curated five |
| Tone | Occasional writer — don’t claim full-time blogger |
| Maintenance | Manual entries in MDX/JSON |

### Curated featured posts (chosen for portfolio balance)

| # | Title | Source | Why feature |
|---|-------|--------|-------------|
| 1 | [How to Fix GitHub SSH Authentication Issues on Mac](https://medium.com/@rukyjacob) (May 2025) | Medium | Practical eng troubleshooting — recent, high utility |
| 2 | [The Non-Tech Side: Balancing Code with Real Life, Self-Care, and Mental Wellbeing](https://medium.com/@rukyjacob) | Medium (+ Hashnode) | Human voice / culture fit signal |
| 3 | [How I Created My Git-Spy Web Application using ReactJs](https://preciousblogs.hashnode.dev) | Hashnode | Build-in-public / React project narrative |
| 4 | [Outreachy Week 6: Mid-Point Project Progress](https://preciousblogs.hashnode.dev) | Hashnode | Open-source / Creative Commons internship arc |
| 5 | [“Everybody Struggles”](https://preciousblogs.hashnode.dev) (Outreachy journey) | Hashnode | Resilience + early-career authenticity |

*(Exact permalinks: confirm on Medium/Hashnode when wiring MDX — titles are authoritative.)*

---

## 14. Content model (extended)

```ts
type Project = {
  slug: string
  title: string
  tagline: string
  pillars: Array<'product' | 'solid' | 'platform' | 'mobile' | 'oss' | 'fintech' | 'health' | 'education'>
  role: string
  year: string
  featured: boolean
  confidential: boolean
  stack: string[]
  summary: string
  whatIBuilt: string[]
  outcomes?: string[]
  links?: { label: string; href: string }[]
  coverImage?: string
  body: string // MDX
}

type WritingPost = {
  title: string
  href: string
  source: 'medium' | 'hashnode'
  publishedAt?: string
  summary?: string
  featured?: boolean
}

type VolunteerEntry = {
  org: string
  role: string
  summary: string
  href?: string
  relatedProjectSlug?: string // e.g. onesky
}
```

---

## 15. Functional requirements (delta from v1)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-W1 | `/writing` lists curated posts + profile links | P0 |
| FR-W2 | Footer includes Medium + Hashnode | P0 |
| FR-P1 | Home positioning uses “software engineer” (not frontend-only) | P0 |
| FR-P2 | Filters/capability bands include platforms & Solid, not only UI | P0 |
| FR-X1 | Work index excludes CEED, Chedaro, Busy Jollof, Along, e-station, UNICCON, ODI-Task, Indegene, ApplyPack, DWP/CF assessments | P0 |
| FR-L1 | Featured/supporting projects that have live URLs use §10 registry links | P0 |
| FR-L2 | Hamid portfolio listed as client work you built, with live URL | P1 |
| FR-V1 | `/volunteer` page with OneSky, She Code Africa, WeTech | P0 |
| FR-V2 | Home includes volunteer strip linking to `/volunteer` | P1 |
| FR-C1 | `/contact` (and footer CTAs): working **mailto** | P0 |
| FR-C2 | `/contact`: **Book a slot** CTA linked to Google Calendar appointment schedule | P0 |
| FR-C3 | No custom contact form in v1 | P0 |
| FR-E1 | About/CV employment includes UNICCON; **excludes Chedaro** | P0 |
| FR-E2 | UNICCON (and other excluded) **products** never appear on Work | P0 |
| FR-G1 | Home (below fold): GitHub contribution activity for `PreciousOritsedere` + link to profile | P1 |
| FR-S1 | Home (below fold): Spotify “off the clock” strip linking to profile/playlist (`NEXT_PUBLIC_SPOTIFY_URL`) | P1 |
| FR-O1 | Oreo cursor companion (sprite from `assets/oreo/oreo-reference.png`); honor reduced motion | P1 |

(Other FRs — home, work, case studies, about, contact, CV, SEO — still apply.)

---

## 16. Phased delivery

**Phase 0 — Decisions:** name/domain (email + calendar booking URL confirmed).  
**Phase 1 — Foundation:** Next scaffold, design tokens, home (SE brand), nav with Writing + Volunteer.  
**Phase 2 — Content:** 5 featured case studies + supporting index + volunteer + writing (5 posts) + about/CV from §12b.  
**Phase 3 — Ship:** OG, Lighthouse, domain, soft launch.  
**Phase 4 — Iterate:** Solid/OpenActive depth, refresh writing.

---

## 17. Open questions

1. Hero name: **Precious O Oritsedere** (confirmed).  
2. Domain: later — ship on Vercel URL first.  

**Decided:** Contact = mailto (`rukyjacob@gmail.com`) + [Book a call](https://calendar.app.google/za1EM3g7sQAV8wXP8) · About/CV includes UNICCON, **not** Chedaro · Chedaro/UNICCON products stay off Work · Hero = Precious O Oritsedere.

---

## 18. Acceptance criteria (v1)

- [ ] Public URL live  
- [ ] Home reads as **software engineer** with brand-first composition  
- [ ] Writing page + Medium/Hashnode links work  
- [ ] Five featured Work case studies: OpenActive, Solid File Manager, Code Funhouse, Excluvia, Platnova  
- [ ] Writing page features the curated five from §13  
- [ ] About/CV employment from §12b (UNICCON yes; **Chedaro omitted**)  
- [ ] Job-agent not visible  
- [ ] Skills show Node.js + AI fluency; no Go/ASP.NET/FastAPI; no LangChain/OpenAI-as-authored-stack lead  
- [ ] Contact: mailto + Google Calendar book-a-slot (no form)  
- [ ] Lighthouse targets met  
- [ ] No secrets leaked  

---

## 19. Project blurb (for README / Cursor)

```text
# Project: precious-portfolio
# Stack: Next.js App Router, TypeScript, Tailwind CSS v4, MDX, Vercel
# Purpose: Portfolio for software engineer Precious — product systems, Solid/open data, platforms; writing via Medium/Hashnode.
# Structure: /app routes; /content/projects; /content/writing; design tokens in CSS
# Conventions: TypeScript strict; Vitest; conventional commits; WCAG 2.2 AA
# Env: NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CALENDAR_BOOKING_URL, NEXT_PUBLIC_SPOTIFY_URL, NEXT_PUBLIC_GITHUB_USERNAME — see .env.example
```

---

## 20. Next steps

See **`PLAN.md`** for the full step-by-step build plan.

**Immediate:** Phase 1.1 — scaffold Next.js in this folder.
