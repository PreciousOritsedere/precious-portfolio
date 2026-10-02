"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { SpotifyTrack } from "@/lib/spotify";

function relativePlayed(iso: string) {
  const then = new Date(iso).getTime();
  const mins = Math.max(0, Math.round((Date.now() - then) / 60_000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export function SpotifyDeck({
  tracks,
  profileUrl,
}: {
  tracks: SpotifyTrack[];
  profileUrl?: string | null;
}) {
  const labelId = useId();
  const [activeId, setActiveId] = useState(tracks[0]?.id ?? "");
  const active = tracks.find((t) => t.id === activeId) ?? tracks[0];

  if (!active) return null;

  return (
    <div className="listening-booth overflow-hidden rounded-3xl">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {active.image && (
              <Image
                src={active.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="scale-125 object-cover opacity-25 blur-2xl"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-br from-[#3d0c09]/92 via-[#2a1f1c]/88 to-[#1a1210]/95" />
            <div className="listening-ring absolute -right-16 -bottom-20 size-56 rounded-full border border-white/10 sm:size-72" />
            <div className="listening-ring absolute -right-6 -bottom-8 size-40 rounded-full border border-white/5 sm:size-52" />
          </div>

          <div className="relative">
            <h2 id={labelId} className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#f3ebe0] sm:text-4xl">
              Always listening
            </h2>
            <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-[#e7d7c1]/80">
              I enjoy music a lot. There&apos;s usually something playing during work, after work
              and most of the time in between.
            </p>
          </div>

          <div className="relative flex items-end gap-5">
            <div className="relative shrink-0">
              <div
                aria-hidden
                className="listening-platter absolute inset-[-10%] rounded-full border border-white/10"
              />
              {active.image ? (
                <Image
                  src={active.image}
                  alt=""
                  width={160}
                  height={160}
                  className="relative size-28 rounded-2xl object-cover shadow-[0_24px_50px_-20px_rgb(0_0_0/0.65)] sm:size-36"
                />
              ) : (
                <div className="relative grid size-28 place-items-center rounded-2xl bg-[#8c1c13] font-display text-3xl font-bold text-[#f3ebe0] sm:size-36">
                  PO
                </div>
              )}
            </div>
            <div className="min-w-0 pb-1">
              <p className="font-mono text-[11px] text-[#e7d7c1]/55">Now playing</p>
              <p className="mt-1 truncate font-display text-xl font-bold tracking-tight text-[#f3ebe0] sm:text-2xl">
                {active.name}
              </p>
              <p className="mt-1 truncate text-sm text-[#e7d7c1]/75">{active.artists}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-black/35 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.8)] ring-1 ring-white/10">
            <iframe
              key={active.id}
              title={`Play ${active.name} on Spotify`}
              src={`https://open.spotify.com/embed/track/${active.id}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block w-full border-0"
            />
          </div>
        </div>

        <div className="border-t border-white/8 bg-[#f3ebe0]/96 p-4 sm:p-6 lg:border-t-0 lg:border-l lg:border-white/8">
          <div className="mb-4 flex items-end justify-between gap-3 px-1">
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-fg">Recently played</h3>
              <p className="mt-1 text-sm text-fg-muted">Pick a track to play it here.</p>
            </div>
            <span className="font-mono text-[11px] text-fg-muted">{tracks.length} tracks</span>
          </div>

          <ul className="listening-scroll max-h-[28rem] space-y-1 overflow-y-auto pr-2" aria-labelledby={labelId}>
            {tracks.map((track, index) => {
              const selected = track.id === active.id;
              return (
                <li key={`${track.id}-${track.playedAt}`}>
                  <button
                    type="button"
                    onClick={() => setActiveId(track.id)}
                    aria-pressed={selected}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left transition-colors duration-150 ${
                      selected
                        ? "bg-brand text-cta-fg"
                        : "hover:bg-bg-elevated"
                    }`}
                  >
                    <span
                      className={`w-5 shrink-0 text-center font-mono text-[11px] ${
                        selected ? "text-cta-fg/70" : "text-fg-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {track.image ? (
                      <Image
                        src={track.image}
                        alt=""
                        width={44}
                        height={44}
                        className="size-11 shrink-0 rounded-lg object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className={`grid size-11 shrink-0 place-items-center rounded-lg ${
                          selected ? "bg-cta-fg/15" : "bg-bg-elevated"
                        }`}
                      >
                        <svg viewBox="0 0 16 16" className="size-3.5 fill-current opacity-70">
                          <path d="M3 2.5v11l10-5.5L3 2.5Z" />
                        </svg>
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{track.name}</span>
                      <span
                        className={`mt-0.5 block truncate text-xs ${
                          selected ? "text-cta-fg/75" : "text-fg-muted"
                        }`}
                      >
                        {track.artists}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[10px] ${
                        selected ? "text-cta-fg/65" : "text-fg-muted"
                      }`}
                    >
                      {relativePlayed(track.playedAt)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {profileUrl && (
            <a
              href={profileUrl}
              className="mt-4 inline-flex px-1 text-sm font-medium text-brand hover:underline hover:underline-offset-4"
            >
              Open on Spotify ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
