import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const links = [
    { href: `mailto:${site.email}`, label: "Email" },
    { href: site.calendarUrl, label: "Book a call", external: true },
    { href: site.githubUrl, label: "GitHub", external: true },
    { href: site.linkedinUrl, label: "LinkedIn", external: true },
    { href: site.mediumUrl, label: "Medium", external: true },
    { href: site.hashnodeUrl, label: "Hashnode", external: true },
    ...(site.spotifyUrl
      ? [{ href: site.spotifyUrl, label: "Spotify", external: true }]
      : []),
  ];

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-fg">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-fg-muted">
            Software engineer shipping product systems, Solid/open data, and
            platforms. Oreo follows you around.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-fg-muted transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-fg-muted transition-colors hover:text-brand"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
