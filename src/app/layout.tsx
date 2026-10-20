import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vella Growth | The Marketing Agency for DMCs",
  description: "We help DMCs and concierge travel companies get found in search and AI answers, turn visibility into qualified enquiries, and grow direct bookings.",
  applicationName: "Vella Growth",
  authors: [{ name: "Vella Growth" }],
  generator: "Next.js",
  keywords: ["DMC marketing", "travel SEO", "GEO", "destination management", "concierge travel", "digital growth", "AI search", "travel marketing"],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vella Growth | The Marketing Agency for DMCs",
    description: "We help DMCs and concierge travel companies get found in search and AI answers, turn visibility into qualified enquiries, and grow direct bookings.",
    url: "https://vellagrowth.com",
    siteName: "Vella Growth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vellagrowth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vella Growth - Destination Growth, Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vella Growth | The Marketing Agency for DMCs",
    description: "We help DMCs and concierge travel companies get found in search and AI answers, turn visibility into qualified enquiries, and grow direct bookings.",
    creator: "@VellaGrowth",
    images: ["https://vellagrowth.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vellagrowth.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#121B22",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
