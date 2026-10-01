import type { Metadata } from "next";
import { WorkBrowser } from "@/components/work-browser";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of work by Precious O Oritsedere.",
};

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">Work</h1>
      <p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-fg-muted">
        A mix of open-source work and products I&apos;ve worked on for clients and employers. The
        public repositories are linked where I can share them.
      </p>
      <div className="mt-10">
        <WorkBrowser />
      </div>
    </main>
  );
}
