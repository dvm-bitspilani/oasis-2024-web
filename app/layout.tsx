import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
// import OasisLogo from "../public/oglogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis '24",
  description:
    "The official website of Oasis 2024 - Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2024! Est. 1971",
  keywords:
    "oasis 24, bits oasis, oasis bits, oasis bits pilani, oasis 24 bits, oasis 24 bits pilani, oasis bits pilani 24, oasis 2024, oasis 2024 bits, oasis 2024 bits pilani",
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
    url: "https://www.bits-oasis.org",
    title: "Oasis '24",
    description:
      "The official website of Oasis 2024 - Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2024! Est. 1971",
    images: [
      {
        url: "https://www.bits-oasis.org/oglogo.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Oasis &#39;24</title>
        <meta
          name="description"
          content="The official website of Oasis 2024 - Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2024! Est. 1971"
        />
        <meta
          name="google-site-verification"
          content="GKxgBVi8dPgOPEBsP-lgb_ZM201NN8NE5ZbVEhrhpDw"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-P6H0V5H4L7" />
        <GoogleOAuthProvider clientId="1003752349264-5u6j9a2thpcj84kj05bsah2u46q7jegt.apps.googleusercontent.com">
          <div id="modal-portal"></div>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
