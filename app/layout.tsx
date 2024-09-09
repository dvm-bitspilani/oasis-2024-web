import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import OasisLogo from "../public/oglogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis '24",
  description: "The official website of Oasis 2024 - Asia's Largest Student-Run College Cultural Festival returns for its 52nd edition in 2024! Est. 1971",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images: [
      OasisLogo.src,
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-P6H0V5H4L7" />
        <GoogleOAuthProvider clientId="1003752349264-5u6j9a2thpcj84kj05bsah2u46q7jegt.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
