export const site = {
  name: "Precious O Oritsedere",
  role: "Software engineer · product systems · open data & Solid",
  tagline:
    "I build the interfaces and the platforms underneath — clients, Node.js APIs, Solid/RDF systems, and data-rich product UIs.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "rukyjacob@gmail.com",
  calendarUrl:
    process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ??
    "https://calendar.app.google/za1EM3g7sQAV8wXP8",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "PreciousOritsedere",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/PreciousOritsedere",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/oghenerukevwe-oritsedere-9ab1841b7/",
  mediumUrl: process.env.NEXT_PUBLIC_MEDIUM_URL ?? "https://medium.com/@rukyjacob",
  hashnodeUrl:
    process.env.NEXT_PUBLIC_HASHNODE_URL ?? "https://hashnode.com/@PreciousBlogs",
  spotifyUrl: process.env.NEXT_PUBLIC_SPOTIFY_URL || null,
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const featuredProjects = [
  {
    slug: "openactive",
    title: "OpenActive platform",
    line: "Open standards data pipeline, API, and dashboard for activity data.",
    year: "2025",
  },
  {
    slug: "solid-file-manager",
    title: "Solid File Manager",
    line: "Solid Protocol file management for personal data pods.",
    year: "2025",
  },
  {
    slug: "code-funhouse",
    title: "Code Funhouse",
    line: "Gamified AI coding education for kids — IDE, tutors, hackathons.",
    year: "2024–2025",
  },
  {
    slug: "excluvia",
    title: "Excluvia",
    line: "Creator / camp brand site with payments and CMS architecture.",
    year: "2025",
  },
  {
    slug: "platnova",
    title: "Platnova",
    line: "Fintech business web for multi-currency wallets and transfers.",
    year: "2024–2025",
  },
] as const;

export const capabilities = [
  "Product systems",
  "Solid & RDF",
  "Platforms & data",
  "AI-fluent delivery",
] as const;

export const volunteerOrgs = [
  {
    org: "OneSky Collective",
    role: "Volunteer engineering",
    summary: "Gamified sustainability product — web, mobile, and API monorepo.",
  },
  {
    org: "She Code Africa",
    role: "Frontend mentor",
    summary: "Mentoring women in tech through frontend practice and guidance.",
  },
  {
    org: "WeTech",
    role: "Frontend mentor",
    summary: "Community mentoring for emerging frontend engineers.",
  },
] as const;

export const writingPosts = [
  {
    title: "How to Fix GitHub SSH Authentication Issues on Mac",
    href: "https://medium.com/@rukyjacob",
    source: "Medium" as const,
  },
  {
    title: "The Non-Tech Side: Balancing Code with Real Life",
    href: "https://medium.com/@rukyjacob",
    source: "Medium" as const,
  },
  {
    title: "How I Created My Git-Spy Web Application using ReactJs",
    href: "https://preciousblogs.hashnode.dev",
    source: "Hashnode" as const,
  },
  {
    title: "Outreachy Week 6: Mid-Point Project Progress",
    href: "https://preciousblogs.hashnode.dev",
    source: "Hashnode" as const,
  },
  {
    title: "Everybody Struggles",
    href: "https://preciousblogs.hashnode.dev",
    source: "Hashnode" as const,
  },
] as const;
