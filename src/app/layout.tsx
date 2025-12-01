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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://rajawalilelangindo.com'),
  title: {
    default: "Rajawali Lelang Indonesia",
    template: "%s | Rajawali Lelang Indonesia"
  },
  description: "Platform lelang properti terpercaya di Indonesia. Temukan properti impian Anda dengan mudah, aman, dan menguntungkan. Alamat Kantor: Jl. Medokan Asri Utara V Blok E No.30",
  keywords: ["lelang properti", "properti lelang", "rumah lelang", "tanah lelang", "ruko lelang", "apartemen lelang", "Rajawali Lelang Indonesia", "lelang Indonesia"],
  authors: [{ name: "Rajawali Lelang Indonesia" }],
  creator: "Rajawali Lelang Indonesia",
  publisher: "Rajawali Lelang Indonesia",
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" },
      { url: "/images/assets/logo_rli.png" }
    ],
    apple: "/images/assets/logo_rli.png",
    shortcut: "/icon.ico",
  },
  openGraph: {
    title: "Rajawali Lelang Indonesia",
    description: "Platform lelang properti terpercaya di Indonesia. Temukan properti impian Anda dengan mudah, aman, dan menguntungkan.",
    url: "https://rajawalilelangindo.com",
    siteName: "Rajawali Lelang Indonesia",
    images: [
      {
        url: "/images/assets/logo_rli.png",
        width: 1200,
        height: 630,
        alt: "Rajawali Lelang Indonesia Logo",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajawali Lelang Indonesia",
    description: "Platform lelang properti terpercaya di Indonesia",
    images: ["/images/assets/logo_rli.png"],
    creator: "@rajawalilelang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.8, maximum-scale=2.0" />
      </head>
      <body className="antialiased min-h-screen flex flex-col" style={{ minWidth: '100%', overflow: 'auto' }}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}