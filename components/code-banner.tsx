import { LondonTime } from "@/components/london-time";
import { site } from "@/lib/site";

export function CodeBanner() {
  return (
    <div className="code-banner overflow-hidden rounded-2xl pb-14 font-mono text-[13px] leading-relaxed sm:pb-16 sm:text-[15px]">
      <div className="flex items-center gap-4 border-b border-white/5 px-4 py-3 sm:px-5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="text-xs text-code-muted">hello.ts</span>
        <span className="ml-auto text-xs text-code-muted">
          <LondonTime />
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 pt-5 sm:gap-x-5 sm:px-5 sm:pt-6">
        <span aria-hidden className="select-none text-right text-code-muted/60">
          1
          <br />2
        </span>
        <div className="min-w-0 text-code-fg">
          <p className="text-code-muted">
            {"// "}
           Currently a {site.now.title} @ {site.now.org}
          </p>
          <p>
            <span className="text-code-key">console</span>.
            <span className="text-code-fn">log</span>(
            <a
              href={site.githubUrl}
              className="text-code-str underline-offset-4 hover:underline"
            >
              &quot;Since you&apos;re here, you might as well hire me. 😊&quot;
            </a>
            {");"}
            <span aria-hidden className="code-caret ml-0.5 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.2em] bg-code-fg/80" />
          </p>
        </div>
      </div>
    </div>
  );
}
