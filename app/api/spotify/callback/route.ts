import { NextResponse } from "next/server";
import { exchangeCodeForTokens } from "@/lib/spotify";

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production" && process.env.SPOTIFY_SETUP !== "1") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new NextResponse(`Spotify auth error: ${error}`, {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (!code) {
    return new NextResponse("Missing code. Start from /api/spotify/login", {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  try {
    const tokens = await exchangeCodeForTokens(code, origin);
    const refresh = tokens.refresh_token ?? "(no refresh_token returned — revoke app access and try again)";

    return new NextResponse(
      [
        "Spotify connected.",
        "",
        "Copy this into .env.local:",
        "",
        `SPOTIFY_REFRESH_TOKEN=${refresh}`,
        "",
        "Then restart the dev server.",
        "You can close this tab.",
      ].join("\n"),
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new NextResponse(message, {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
