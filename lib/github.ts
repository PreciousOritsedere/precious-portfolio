export type ContributionYear = {
  year: number;
  total: number;
  start: string;
  counts: number[];
  levels: number[];
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: { date: string; count: number; level: number }[];
};

export async function getMergedPullRequestCount(username: string): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${username} type:pr is:merged`)}&per_page=1`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 60 * 60 * 24 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { total_count?: number };
    return typeof data.total_count === "number" ? data.total_count : null;
  } catch {
    return null;
  }
}

export async function getContributions(username: string): Promise<ContributionYear[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=all`,
      { next: { revalidate: 60 * 60 * 6 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as ApiResponse;
    const today = new Date().toISOString().slice(0, 10);

    const byYear = new Map<number, ApiResponse["contributions"]>();
    for (const day of data.contributions) {
      if (day.date > today) continue;
      const year = Number(day.date.slice(0, 4));
      const list = byYear.get(year) ?? [];
      list.push(day);
      byYear.set(year, list);
    }

    return [...byYear.entries()]
      .sort(([a], [b]) => b - a)
      .map(([year, days]) => {
        days.sort((a, b) => a.date.localeCompare(b.date));
        return {
          year,
          total: data.total[String(year)] ?? days.reduce((sum, d) => sum + d.count, 0),
          start: days[0].date,
          counts: days.map((d) => d.count),
          levels: days.map((d) => d.level),
        };
      });
  } catch {
    return null;
  }
}
