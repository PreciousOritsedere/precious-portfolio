import type { Metadata } from "next";
import { site, writingPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Writing
      </h1>
      <p className="mt-3 text-fg-muted">
        I write occasionally about engineering, tools, and life beside the code.
      </p>
      <p className="mt-4 flex flex-wrap gap-4 text-sm">
        <a
          href={site.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:text-brand-soft"
        >
          Medium →
        </a>
        <a
          href={site.hashnodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:text-brand-soft"
        >
          Hashnode →
        </a>
      </p>
      <ul className="mt-12 divide-y divide-border">
        {writingPosts.map((post) => (
          <li key={post.title} className="py-5">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="font-medium text-fg group-hover:text-brand">
                {post.title}
              </p>
              <p className="mt-1 font-mono text-xs text-stone">{post.source}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
