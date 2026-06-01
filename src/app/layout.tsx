import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CS2 1vs1 Turnaj | ELITE GAME ARENA Karlovy Vary",
  description:
    "CS2 1vs1 turnaj v Karlových Varech. 19. 6. 2026 v ELITE GAME ARENA. Přihlas se přes FACEIT.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${rajdhani.variable} h-full`}>
      <body className="min-h-full antialiased">
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
