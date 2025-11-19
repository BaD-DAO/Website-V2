import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildaDAO - Building the Future of Decentralized Innovation",
  description: "BuildaDAO empowers startups and talent across Africa through blockchain education, DAO infrastructure, and community-driven innovation.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "BuildaDAO - Building the Future of Decentralized Innovation",
    description: "BuildaDAO empowers startups and talent across Africa through blockchain education, DAO infrastructure, and community-driven innovation.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BuildaDAO Logo',
      },
    ],
    type: 'website',
    siteName: 'BuildaDAO',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BuildaDAO - Building the Future of Decentralized Innovation",
    description: "BuildaDAO empowers startups and talent across Africa through blockchain education, DAO infrastructure, and community-driven innovation.",
    images: ['/logo.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full overflow-x-hidden">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
