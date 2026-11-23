import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dewata Tour | Curated Bali Private Journeys & Drivers",
  description:
    "Handcrafted private day tours across Bali. Travel at your own rhythm with licensed local storytellers, comfortable AC vehicles, transparent pricing, and flexible itineraries.",
  keywords: [
    "Bali private tour",
    "Bali private driver",
    "Bali custom tour",
    "Ubud day tour",
    "Nusa Penida private trip",
    "Bali luxury day trips",
    "Dewata Tour Bali",
  ],
  authors: [{ name: "Dewata Tour Bali" }],
  openGraph: {
    title: "Dewata Tour | Curated Bali Private Journeys",
    description:
      "See Bali at your rhythm, not a tour bus schedule. Private AC transport, licensed local storytellers, and customized itineraries.",
    url: "https://dewatatour.com",
    siteName: "Dewata Tour Bali",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dewata Tour Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dewata Tour | Curated Bali Private Journeys",
    description:
      "Handcrafted private day tours in Bali. Unhurried, customizable, and authentic.",
    images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Dewata Tour Bali",
  description: "Curated Bali private tours and chauffeur service with local storytellers.",
  url: "https://dewatatour.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bali, Indonesia",
  },
  priceRange: "$$",
  currenciesAccepted: "USD, IDR, AUD, EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, Wise",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "348",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col bg-[#FAF8F5] text-[#181A18]`}>
        {children}
      </body>
    </html>
  );
}
