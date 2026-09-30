import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://oasis2024.bits-oasis.org"),
  title: "Oasis ’24 | Regal Roulette — DVM Portfolio Archive",
  description: "Restored frontend design portfolio for Oasis 2024, Regal Roulette. Historical artwork and interactive demos; registrations are closed.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: "Oasis ’24 | Regal Roulette — Portfolio Archive", images: [{ url: "/oglogo.png" }] },
};
export const viewport: Viewport = { colorScheme: "dark", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><aside className="portfolio-notice" aria-label="Portfolio archive">Oasis 2024 · Portfolio archive · Demo interactions only</aside><div id="modal-portal" />{children}</body></html>;
}
