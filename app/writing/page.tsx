import type { Metadata } from "next";
import { writingPosts } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
        Writing
      </h1>
      <p className="mt-3 max-w-[56ch] text-lg leading-relaxed text-fg-muted">
        I don&apos;t write on a schedule. When I do, it&apos;s usually about something I&apos;ve
        learned at work or while fixing a problem. You can find the posts on{" "}
        <a href={site.mediumUrl} className="text-brand hover:underline hover:underline-offset-4">
          Medium
        </a>{" "}
        and{" "}
        <a href={site.hashnodeUrl} className="text-brand hover:underline hover:underline-offset-4">
          Hashnode
        </a>
        .
      </p>
      <ul className="mt-12 border-t border-border">
        {writingPosts.map((post) => (
          <li key={post.title} className="border-b border-border">
            <a href={post.href} className="group flex items-baseline justify-between gap-6 py-5">
              <span className="font-medium group-hover:text-brand">{post.title}</span>
              <span className="shrink-0 font-mono text-xs text-fg-muted">
                {post.source}
                {post.date ? ` · ${post.date}` : ""}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
