import { site } from "@/lib/site";

type Week = {
  contributionDays: { date: string; contributionCount: number }[];
};

async function fetchContributionWeeks(): Promise<Week[] | null> {
  const username = site.githubUsername;
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "text/html",
          "User-Agent": "precious-portfolio",
        },
      },
    );
    if (!res.ok) return null;
    const html = await res.text();
    const levelMatches = [
      ...html.matchAll(
        /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g,
      ),
    ];
    const altMatches = [
      ...html.matchAll(
        /data-level="(\d)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g,
      ),
    ];
    const days: { date: string; contributionCount: number }[] = [];
    if (levelMatches.length) {
      for (const m of levelMatches) {
        days.push({ date: m[1], contributionCount: Number(m[2]) });
      }
    } else {
      for (const m of altMatches) {
        days.push({ date: m[2], contributionCount: Number(m[1]) });
      }
    }
    if (!days.length) return null;

    const weeks: Week[] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push({ contributionDays: days.slice(i, i + 7) });
    }
    return weeks;
  } catch {
    return null;
  }
}

const levelColor = (level: number) => {
  switch (level) {
    case 0:
      return "bg-stone/25";
    case 1:
      return "bg-brand/25";
    case 2:
      return "bg-brand/45";
    case 3:
      return "bg-brand/70";
    default:
      return "bg-brand";
  }
};

export async function GithubActivity() {
  const weeks = await fetchContributionWeeks();

  return (
    <div>
      {!weeks ? (
        <p className="text-sm text-fg-muted">
          Contribution graph unavailable right now.{" "}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline-offset-2 hover:underline"
          >
            View GitHub profile
          </a>
          .
        </p>
      ) : (
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.contributionDays.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: level ${day.contributionCount}`}
                    className={`size-[10px] rounded-[2px] ${levelColor(day.contributionCount)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <a
        href={site.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-soft"
      >
        @{site.githubUsername} on GitHub →
      </a>
    </div>
  );
}
