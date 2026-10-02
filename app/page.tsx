import Image from "next/image";
import Link from "next/link";
import { CodeBanner } from "@/components/code-banner";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink } from "@/components/external-link";
import { GitHubActivity } from "@/components/github-activity";
import { FadeUp, HeroMotion } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SplitReveal } from "@/components/split-reveal";
import { SpotifySection } from "@/components/spotify-section";
import { StackGroups } from "@/components/stack-groups";
import { TechChip } from "@/components/tech-chip";
import { featuredProjects, volunteerOrgs, writingPosts } from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 sm:px-8">
      <section aria-labelledby="intro" className="pt-6">
        <CodeBanner />

        <HeroMotion>
          <div className="relative z-10 -mt-10 flex items-end justify-between gap-4 px-1 sm:-mt-12 sm:px-5">
            <FadeUp>
              <Image
                src="/about/headshot.jpg"
                alt={site.name}
                width={192}
                height={192}
                priority
                sizes="96px"
                className="size-20 rounded-full object-cover object-[50%_18%] ring-[5px] ring-bg transition-[scale,box-shadow] duration-500 ease-(--ease-out-expo) hover:scale-105 hover:shadow-[0_0_0_7px_var(--brand-soft)] sm:size-24"
              />
            </FadeUp>
            <FadeUp className="hidden sm:block">
              <ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 pb-1 font-mono text-xs text-fg-muted">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <ExternalLink href={s.href} className="hover:text-brand">
                      {s.label} ↗
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <FadeUp>
            <h1
              id="intro"
              aria-label={site.name}
              className="mt-6 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
            >
              <SplitReveal text={site.name} />
            </h1>
            <p className="mt-2 text-lg text-fg-muted">
              {site.role} · JavaScript, TypeScript, React, Python, Node.js · {site.location.split(",")[0]}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg-muted sm:hidden">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <ExternalLink href={s.href} className="hover:text-brand">
                    {s.label} ↗
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp>
            <div className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-[1.75]">
              <p>
                I&apos;m a software engineer in London. I mostly build with{" "}
                <TechChip inline name="JavaScript" />, <TechChip inline name="TypeScript" />, <TechChip inline name="React" />,
                <TechChip inline name="Next.js" />,  <TechChip inline name="Vue" /> and{" "} <TechChip inline name="Node.js" />. I also use{" "}
                <span className="whitespace-nowrap">
                  <TechChip inline name="Python" />
                </span>{" "}
                for data work and automation. I like understanding the whole product, not just the
                UI. And I am always exploring new tools and tech stacks.
              </p>
              <p>
                I currently work at the Open Data Institute, where most of my time goes into the{" "}
                <strong className="font-medium">OpenActive dashboard</strong> and{" "}
                <strong className="font-medium">Solid File Manager</strong>. Before ODI, I worked
                on products in education, fintech, healthcare and the creator economy.
              </p>
              <p className="text-fg-muted">
                Since 2019, I&apos;ve built my career across Nigerian, UK and distributed
                international teams. Accessibility is part of how I build, not something I leave
                until the end. I&apos;ve also led a small frontend team, contributed through
                Outreachy, and mentored other frontend developers.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-primary"
              >
                Email me
              </a>
              <ExternalLink
                href={site.calendarUrl}
                className="btn btn-ghost"
              >
                Book a call
              </ExternalLink>
              <a
                href={site.cvUrl}
                download={site.cvFilename}
                className="btn btn-ghost"
              >
                Download CV
              </a>
            </div>
          </FadeUp>
        </HeroMotion>
      </section>

      <section aria-labelledby="work" className="mt-28">
        <SectionHeading
          id="work"
          title="A few things I’ve worked on"
          intro="The public repositories are linked. Client code stays private."
          link={{ href: "/work", label: "All work" }}
        />
        <div data-reveal-stagger="up" className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <div key={project.slug} className={i === 0 ? "sm:col-span-2" : undefined}>
              <ProjectCard project={project} large={i === 0} priority={i === 0} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="stack" className="mt-28">
        <SectionHeading
          id="stack"
          title="Tools I use"
          intro="The languages, frameworks and services that show up most often in my work."
        />
        <div data-reveal="up">
          <StackGroups />
        </div>
      </section>

      <section aria-labelledby="experience" className="mt-28">
        <SectionHeading
          id="experience"
          title="Experience"
          link={{ href: "/about", label: "Full experience" }}
        />
        <div data-reveal="up">
          <ExperienceList limit={6} />
        </div>
      </section>

      <section aria-labelledby="github" className="mt-28">
        <SectionHeading
          id="github"
          title="GitHub activity"
          intro="This is pulled from my public GitHub profile. Pick a year or move through the days with the arrow keys."
        />
        <div data-reveal="up">
          <GitHubActivity />
        </div>
      </section>

      <div className="mt-28 grid gap-16 sm:grid-cols-2 sm:gap-10">
        <section aria-labelledby="writing">
          <SectionHeading id="writing" title="Writing" link={{ href: "/writing", label: "All posts" }} />
          <ul data-reveal-stagger="up" className="-mt-2 divide-y divide-border">
            {writingPosts.slice(0, 4).map((post) => (
              <li key={post.title}>
                <ExternalLink href={post.href} className="group block py-3 transition-transform duration-300 ease-(--ease-out-expo) hover:translate-x-1">
                  <span className="link-grow font-medium leading-snug transition-colors group-hover:text-brand">
                    {post.title}
                  </span>
                  <span className="mt-1 block font-mono text-xs text-fg-muted">
                    {post.source}
                    {post.date ? ` · ${post.date}` : ""}
                  </span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="community">
          <SectionHeading
            id="community"
            title="Community"
            link={{ href: "/volunteer", label: "Volunteer work" }}
          />
          <ul data-reveal-stagger="up" className="-mt-2 divide-y divide-border">
            {volunteerOrgs.map((v) => (
              <li key={v.org} className="py-3">
                <p className="font-medium">
                  {v.org} <span className="font-normal text-fg-muted">· {v.role}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">{v.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <SpotifySection />

      <section
        aria-labelledby="oreo"
        data-reveal="up"
        className="mt-28 grid items-center gap-8 rounded-2xl bg-bg-elevated p-5 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:p-8"
      >
        <figure>
          <Image
            src="/oreo/oreo-photo.jpg"
            alt="Oreo, a white cat with brown tabby patches and a blue collar, looking up at the camera"
            width={675}
            height={900}
            sizes="(min-width: 640px) 208px, 100vw"
            className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[3/4]"
          />
          <figcaption className="mt-2 font-mono text-xs text-fg-muted">Oreo · usually nearby</figcaption>
        </figure>
        <div>
          <h2 id="oreo" className="font-display text-2xl font-bold tracking-tight">
            Off the clock
          </h2>
          <p className="mt-3 max-w-[50ch] leading-relaxed text-fg-muted">
            This is Oreo. The pixel cat chasing your cursor is based on the real one.
          </p>
          <p className="mt-3 max-w-[50ch] leading-relaxed text-fg-muted">
            Away from work, I mentor frontend developers with WeTech and She Code Africa. I also
            write occasionally when I have something useful to share.
          </p>
          <p className="mt-5 text-sm">
            <Link href="/about" className="group font-medium text-brand">
              <span className="link-grow">More about me</span>{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-1">
                →
              </span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
