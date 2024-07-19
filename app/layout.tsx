import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis 2024 - Regal Roulette",
  description: "The official website of Oasis 2024 - Regal Roulette, Asia's Largest Student-Run College Cultural Festival returns for its 52nd edition in 2024! Est. 1971",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
