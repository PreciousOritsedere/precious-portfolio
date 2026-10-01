import { ContributionGraph } from "@/components/contribution-graph";
import { getContributions } from "@/lib/github";
import { site } from "@/lib/site";

export async function GitHubActivity() {
  const years = await getContributions(site.githubUsername);

  if (!years?.length) {
    return (
      <p className="text-fg-muted">
        The contribution graph is taking a break.{" "}
        <a href={site.githubUrl} className="text-brand underline underline-offset-4">
          See it on GitHub ↗
        </a>
      </p>
    );
  }

  return <ContributionGraph years={years} profileUrl={site.githubUrl} />;
}
