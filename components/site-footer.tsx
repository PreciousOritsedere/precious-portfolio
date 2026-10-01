import Link from "next/link";
import { site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[64rem] px-5 pb-10 pt-28 sm:px-8">
      <div className="border-t border-border pt-14">
        <p className="max-w-[22ch] font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Thanks for stopping by.
        </p>
        <p className="mt-4 max-w-[54ch] leading-relaxed text-fg-muted">
          Have a project in mind, or want to ask about something here? Send me an email or book a
          call.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-cta-fg transition-colors duration-150 hover:bg-brand-soft"
          >
            {site.email}
          </a>
          <a
            href={site.calendarUrl}
            className="rounded-full border border-fg/25 px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:border-fg"
          >
            Book a call
          </a>
        </div>
        <p className="mt-12 font-display text-xl font-bold">
          — Precious{" "}
          <span className="font-sans text-base font-normal text-fg-muted">
            &amp; Oreo, still chasing your cursor
          </span>
        </p>

        <div className="mt-14 flex flex-col gap-4 font-mono text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-fg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
