export const site = {
  name: "Precious O Oritsedere",
  shortName: "Precious",
  role: "Software engineer",
  location: "London, UK",
  tagline:
    "Software engineer in London working with TypeScript, React, Python, Solid and open data across global teams.",
  now: { title: "Senior Frontend Developer", org: "Open Data Institute", focus: "Accessibility, AI, Product engineering & open data" },
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
  cvUrl: "/Precious-Oritsedere-CV.pdf",
  cvFilename: "Precious-Oritsedere-CV.pdf",
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/about", label: "About" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Medium", href: site.mediumUrl },
  { label: "Hashnode", href: site.hashnodeUrl },
  ...(site.spotifyUrl ? [{ label: "Spotify", href: site.spotifyUrl }] : []),
];
