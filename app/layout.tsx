import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import { AutumnLeaves } from "@/components/autumn-leaves";
import { MotionEffects } from "@/components/motion-effects";
import { OreoCompanion } from "@/components/oreo-companion";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Software Engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${satoshi.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <AutumnLeaves />
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <OreoCompanion />
        <MotionEffects />
      </body>
    </html>
  );
}
