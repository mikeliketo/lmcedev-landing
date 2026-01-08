import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LMCE Dev - Swedish Apps for Sports & Family",
  description:
    "We build tools that help coaches, players, and families organize their sports life. LineupDesigner, CampDesigner, HockeyCampFinder, and HockeyHeart.",
  keywords: [
    "hockey",
    "sports apps",
    "lineup designer",
    "camp management",
    "Swedish software",
    "sports technology",
  ],
  authors: [{ name: "LMCE Dev" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LMCE Dev",
  },
  openGraph: {
    title: "LMCE Dev - Swedish Apps for Sports & Family",
    description:
      "We build tools that help coaches, players, and families organize their sports life.",
    url: "https://lmcedev.com",
    siteName: "LMCE Dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
