import { ContributionGraph } from "@/components/contribution-graph";
import { ExternalLink } from "@/components/external-link";
import { getContributions } from "@/lib/github";
import { site } from "@/lib/site";

export async function GitHubActivity() {
  const years = await getContributions(site.githubUsername);

  if (!years?.length) {
    return (
      <p className="text-fg-muted">
        The contribution graph is taking a break.{" "}
        <ExternalLink href={site.githubUrl} className="text-brand underline underline-offset-4">
          See it on GitHub ↗
        </ExternalLink>
      </p>
    );
  }

  return <ContributionGraph years={years} profileUrl={site.githubUrl} />;
}
