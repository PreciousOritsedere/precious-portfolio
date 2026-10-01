import Link from "next/link";
import { GithubActivity } from "@/components/github-activity";
import { FadeUp, HeroMotion, Reveal } from "@/components/motion";
import {
  capabilities,
  featuredProjects,
  site,
  volunteerOrgs,
  writingPosts,
} from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero-atmosphere hero-grain relative overflow-hidden text-cta-fg">
        <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
          <HeroMotion>
            <FadeUp>
              <p className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
                {site.name}
              </p>
            </FadeUp>
            <FadeUp className="mt-6 max-w-xl">
              <h1 className="text-lg font-medium text-cta-fg/90 sm:text-xl">
                {site.role}
              </h1>
            </FadeUp>
            <FadeUp className="mt-4 max-w-md">
              <p className="text-base leading-relaxed text-cta-fg/75">
                {site.tagline}
              </p>
            </FadeUp>
            <FadeUp className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-lg bg-cta-fg px-5 py-3 text-sm font-medium text-brand transition-opacity hover:opacity-90"
              >
                Email me
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--cta-secondary-border)] px-5 py-3 text-sm font-medium text-cta-fg transition-colors hover:bg-white/10"
              >
                View work
              </Link>
            </FadeUp>
          </HeroMotion>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
            Featured systems
          </h2>
          <p className="mt-2 max-w-xl text-fg-muted">
            Product UIs, open-data platforms, and the layers underneath.
          </p>
        </Reveal>
        <ul className="mt-10 divide-y divide-border">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <Reveal>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col gap-1 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="font-display text-xl font-bold text-fg group-hover:text-brand">
                      {project.title}
                    </p>
                    <p className="mt-1 max-w-xl text-sm text-fg-muted">
                      {project.line}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-stone">
                    {project.year}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-4">
          <Link
            href="/work"
            className="text-sm font-medium text-brand hover:text-brand-soft"
          >
            All work →
          </Link>
        </Reveal>
      </section>

      <section className="bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Capabilities
            </h2>
            <p className="mt-2 text-fg-muted">
              How I show up on a team — not a logo wall.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-md border border-border bg-bg px-4 py-2 font-mono text-sm text-fg"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Proof I ship
          </h2>
          <p className="mt-2 text-fg-muted">
            GitHub contributions — the quiet pulse of the work.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <GithubActivity />
        </Reveal>
      </section>

      {site.spotifyUrl ? (
        <section className="bg-bg-elevated">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Off the clock
              </h2>
              <p className="mt-2 max-w-md text-fg-muted">
                Something loud on Spotify when the code compiles.
              </p>
              <a
                href={site.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-brand hover:text-brand-soft"
              >
                Listen on Spotify →
              </a>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Volunteer
          </h2>
          <p className="mt-2 text-fg-muted">
            Mentoring and community engineering outside paid work.
          </p>
        </Reveal>
        <ul className="mt-8 space-y-4">
          {volunteerOrgs.map((entry) => (
            <li key={entry.org}>
              <Reveal>
                <p className="font-medium text-fg">{entry.org}</p>
                <p className="text-sm text-fg-muted">
                  {entry.role} — {entry.summary}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-6">
          <Link
            href="/volunteer"
            className="text-sm font-medium text-brand hover:text-brand-soft"
          >
            Volunteer work →
          </Link>
        </Reveal>
      </section>

      <section className="bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Writing
            </h2>
            <p className="mt-2 text-fg-muted">
              Occasional notes on craft, tools, and the non-tech side.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {writingPosts.slice(0, 3).map((post) => (
              <li key={post.title}>
                <Reveal>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <p className="font-medium text-fg group-hover:text-brand">
                      {post.title}
                    </p>
                    <p className="font-mono text-xs text-stone">{post.source}</p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-6">
            <Link
              href="/writing"
              className="text-sm font-medium text-brand hover:text-brand-soft"
            >
              All writing →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Let&apos;s talk
          </h2>
          <p className="mt-2 max-w-md text-fg-muted">
            Hiring, collaborating, or curious about Solid / open data — reach
            out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex rounded-lg bg-cta-bg px-5 py-3 text-sm font-medium text-cta-fg transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-brand hover:text-brand"
            >
              Book a call
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
