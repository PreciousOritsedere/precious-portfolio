import { NextResponse } from "next/server";
import { spotifyAuthorizeUrl } from "@/lib/spotify";

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production" && process.env.SPOTIFY_SETUP !== "1") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const origin = new URL(request.url).origin;
  const url = spotifyAuthorizeUrl(origin);
  if (!url) {
    return NextResponse.json(
      { error: "Set SPOTIFY_CLIENT_ID in .env.local first" },
      { status: 400 },
    );
  }

  return NextResponse.redirect(url);
}
