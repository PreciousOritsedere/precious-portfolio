import { SpotifyDeck } from "@/components/spotify-deck";
import { getRecentlyPlayed, spotifyConfigured } from "@/lib/spotify";
import { site } from "@/lib/site";

export async function SpotifySection() {
  if (!spotifyConfigured()) {
    if (!site.spotifyUrl) return null;

    return (
      <section aria-labelledby="listening" className="mt-28">
        <div className="listening-booth overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#8c1c13] via-[#6e1610] to-[#2a1f1c]" aria-hidden />
            <div className="relative max-w-[42ch]">
              <h2
                id="listening"
                className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#f3ebe0] sm:text-4xl"
              >
                Always listening
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e7d7c1]/85">
                I enjoy music a lot. There&apos;s usually something playing during work, after work
                and most of the time in between.
              </p>
              <a
                href={site.spotifyUrl}
                className="mt-6 inline-flex rounded-full border border-[#f3ebe0]/30 px-4 py-2 text-sm font-medium text-[#f3ebe0] hover:border-[#f3ebe0]"
              >
                What I&apos;m listening to ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const tracks = await getRecentlyPlayed(8);

  if (!tracks?.length) {
    if (!site.spotifyUrl) return null;
    return (
      <section aria-labelledby="listening" className="mt-28">
        <div className="rounded-3xl bg-bg-elevated p-6 sm:p-8">
          <h2 id="listening" className="font-display text-3xl font-extrabold tracking-tight">
            Always listening
          </h2>
          <p className="mt-3 max-w-[42ch] text-fg-muted">
            I enjoy music a lot. Spotify&apos;s recent tracks aren&apos;t loading right now, but you
            can still open what I&apos;ve been into.
          </p>
          <a
            href={site.spotifyUrl}
            className="mt-5 inline-flex text-sm font-medium text-brand hover:underline hover:underline-offset-4"
          >
            Open Spotify ↗
          </a>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="listening" className="mt-28">
      <SpotifyDeck tracks={tracks} profileUrl={site.spotifyUrl} />
    </section>
  );
}
