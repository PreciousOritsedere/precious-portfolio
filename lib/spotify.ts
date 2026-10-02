export type SpotifyTrack = {
  id: string;
  name: string;
  artists: string;
  album: string;
  url: string;
  image: string | null;
  playedAt: string;
};

type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
};

function credentials() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  return { clientId, clientSecret, refreshToken };
}

export function spotifyConfigured() {
  return credentials() !== null;
}

export function spotifyRedirectUri(origin: string) {
  // Spotify no longer accepts "localhost" as a redirect host.
  // Local HTTP is only allowed with an explicit loopback IP.
  // https://developer.spotify.com/documentation/web-api/concepts/redirect_uri
  const normalized = origin.replace(/\/$/, "").replace("://localhost", "://127.0.0.1");
  return `${normalized}/api/spotify/callback`;
}

export function spotifyAuthorizeUrl(origin: string) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  if (!clientId) return null;
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: spotifyRedirectUri(origin),
    scope: "user-read-recently-played",
  });
  return `https://accounts.spotify.com/authorize?${params}`;
}

async function refreshAccessToken() {
  const creds = credentials();
  if (!creds) return null;

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: creds.refreshToken,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${creds.clientId}:${creds.clientSecret}`).toString("base64")}`,
    },
    body,
    cache: "no-store",
  });

  if (!res.ok) return null;
  return (await res.json()) as TokenResponse;
}

export async function exchangeCodeForTokens(code: string, origin: string) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET");
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: spotifyRedirectUri(origin),
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }

  return (await res.json()) as TokenResponse;
}

export async function getRecentlyPlayed(limit = 8): Promise<SpotifyTrack[] | null> {
  if (!spotifyConfigured()) return null;

  const token = await refreshAccessToken();
  if (!token?.access_token) return null;

  // Fetch extra items so duplicates don't leave the list short.
  const fetchLimit = Math.min(50, Math.max(limit * 3, limit));
  const res = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${fetchLimit}`,
    {
      headers: { Authorization: `Bearer ${token.access_token}` },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) return null;

  const data = (await res.json()) as {
    items?: Array<{
      played_at: string;
      track: {
        id: string;
        name: string;
        external_urls?: { spotify?: string };
        artists?: Array<{ name: string }>;
        album?: {
          name?: string;
          images?: Array<{ url: string }>;
        };
      };
    }>;
  };

  const seen = new Set<string>();
  const tracks: SpotifyTrack[] = [];

  for (const item of data.items ?? []) {
    const track = item.track;
    if (!track?.id || seen.has(track.id)) continue;
    seen.add(track.id);
    const images = track.album?.images ?? [];
    tracks.push({
      id: track.id,
      name: track.name,
      artists: (track.artists ?? []).map((a) => a.name).join(", "),
      album: track.album?.name ?? "",
      url: track.external_urls?.spotify ?? `https://open.spotify.com/track/${track.id}`,
      image: images[0]?.url ?? images[images.length - 1]?.url ?? null,
      playedAt: item.played_at,
    });
    if (tracks.length >= limit) break;
  }

  return tracks;
}
