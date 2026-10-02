import type { Metadata } from "next";
import { ExperienceList } from "@/components/experience-list";
import { SectionHeading } from "@/components/section-heading";
import { SpotifySection } from "@/components/spotify-section";
import { StackGroups } from "@/components/stack-groups";
import { education } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.tagline,
};

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">About</h1>
      <div className="mt-6 max-w-[62ch] space-y-4 text-[17px] leading-[1.75]">
        <p className="text-fg-muted">
          I&apos;m {site.name}, a software engineer in London. I mostly write JavaScript, TypeScript, and work
          with React, Next.js, Vue and Node.js. I also use Python for data work and automation.
          These days, a lot of my work involves Open Source, Solid and open data.
        </p>
        <p className="text-fg-muted">
          I started out in frontend development in 2019 and have built my career across Nigerian,
          UK and distributed international teams. I&apos;ve worked on products in education,
          healthcare, fintech and the creator economy, led a small frontend team, contributed to
          Creative Commons through Outreachy, and now work at the Open Data Institute.
        </p>
        <p className="text-fg-muted">
          I am a top advocate for accessibility. Accessibility is part of the work, not a final pass. I think about semantics, keyboard
          navigation, focus, contrast and responsive behaviour while I&apos;m building, and I test
          those details before release.
        </p>
        <p className="text-fg-muted">
          Outside my day job, I mentor frontend developers with WeTech and She Code Africa. Oreo,
          my cat, is the reason there&apos;s a pixel cat chasing your cursor.
        </p>
      </div>

      <SpotifySection />

      <section aria-labelledby="experience" className="mt-24">
        <SectionHeading id="experience" title="Experience" />
        <ExperienceList />
      </section>

      <section aria-labelledby="education" className="mt-24">
        <SectionHeading id="education" title="Education" />
        <ul className="border-t border-border">
          {education.map((e) => (
            <li
              key={e.org}
              className="grid gap-1 border-b border-border py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
            >
              <span className="font-mono text-xs text-fg-muted sm:pt-1">{e.dates}</span>
              <span>
                <span className="font-medium">{e.org}</span>
                <span className="text-fg-muted"> · {e.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="stack" className="mt-24">
        <SectionHeading id="stack" title="Stack" />
        <StackGroups />
      </section>
    </main>
  );
}
