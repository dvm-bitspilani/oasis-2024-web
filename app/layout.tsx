import type { Metadata, Viewport } from "next";
import "./globals.css";
import Experience from "@/components/Experience/Experience";
export const metadata: Metadata = {
  metadataBase: new URL("https://oasis2024.bits-oasis.org"),
  title: "Oasis ’24 | Regal Roulette",
  description: "The official website for Oasis 2024, Regal Roulette.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: "Oasis ’24 | Regal Roulette", images: [{ url: "/oglogo.png" }] },
};
export const viewport: Viewport = { colorScheme: "dark", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><div id="modal-portal" /><Experience>{children}</Experience></body></html>;
}
