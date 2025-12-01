import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://rajawalilelang.com'),
  title: "Rajawali Lelang Indonesia",
  description: "Platform lelang properti terpercaya di Indonesia",
  icons: {
    icon: "/images/assets/logo_rli.png",
    apple: "/images/assets/logo_rli.png",
  },
  openGraph: {
    title: "Rajawali Lelang Indonesia",
    description: "Platform lelang properti terpercaya di Indonesia",
    images: [
      {
        url: "/images/assets/logo_rli.png",
        width: 1200,
        height: 630,
        alt: "Rajawali Lelang Indonesia Logo",
      }
    ],
    type: "website",
    siteName: "Rajawali Lelang Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajawali Lelang Indonesia",
    description: "Platform lelang properti terpercaya di Indonesia",
    images: ["/images/assets/logo_rli.png"],
    creator: "@rajawalilelang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}