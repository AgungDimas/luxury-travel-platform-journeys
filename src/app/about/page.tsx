import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/Components/Navbar";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import {
  Car,
  Compass,
  Heart,
  ShieldCheck,
  Star,
  CheckCircle,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dewata Tour Bali - Our Story & Philosophy",
  description:
    "Learn why Dewata Tour is dedicated to unhurried, private travel in Bali with licensed local storytellers and transparent pricing.",
};

export default function AboutPage() {
  const WHATSAPP_NUMBER = "6281234567890";

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[#1A1D1A]/10 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E86338]" />
            The Dewata Philosophy
          </span>

          <h1
            className="text-4xl sm:text-6xl text-[#181A18] tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Crafted for travelers who refuse to be <span className="italic text-[#E86338]">rushed</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#181A18]/75 leading-relaxed font-normal">
            Dewata Tour was born in Bali out of a simple observation: the island’s true magic doesn’t happen on a strict 40-person tour bus schedule. It happens in the quiet moments between the landmarks.
          </p>
        </div>
      </section>

      {/* Story & Visuals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#E5DFD5] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
                alt="Balinese sunrise terrace in Ubud"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Overlay Quote Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white p-5 shadow-lg border border-[#1A1D1A]/10 max-w-xs">
              <div className="flex text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#181A18]/80 italic">
                &ldquo;Putu didn&apos;t just drive us; he introduced us to the soul and ceremonies of his village.&rdquo;
              </p>
              <p className="mt-2 text-[11px] font-bold text-[#181A18]">The Morrison Family (UK)</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E86338]">
              Why We Started
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#181A18] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Bali is an island of spirit, not just an Instagram checklist.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#181A18]/75">
              Standard group tours force visitors through crowded souvenir factories and rushed 20-minute stops at major temples in the peak midday heat.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#181A18]/75">
              We started Dewata Tour to do the exact opposite. We pair you with a licensed, native Balinese driver-storyteller who knows the secret dawn timings, respects sacred cultural etiquette, and gives you complete freedom to linger at that hidden waterfall as long as your heart desires.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#1A1D1A]/10 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-medium text-[#181A18]">
                <CheckCircle className="h-4 w-4 text-[#2D4F3E]" />
                100% Balinese Native Drivers
              </div>
              <div className="flex items-center gap-2 font-medium text-[#181A18]">
                <CheckCircle className="h-4 w-4 text-[#2D4F3E]" />
                Zero Commission Shopping Stops
              </div>
              <div className="flex items-center gap-2 font-medium text-[#181A18]">
                <CheckCircle className="h-4 w-4 text-[#2D4F3E]" />
                Spotless Chilled Private Cars
              </div>
              <div className="flex items-center gap-2 font-medium text-[#181A18]">
                <CheckCircle className="h-4 w-4 text-[#2D4F3E]" />
                Flat-Rate Transparent Pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="border-t border-[#1A1D1A]/10 bg-[#F4EFE6]/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
              Core Principles
            </span>
            <h2
              className="mt-2 text-3xl sm:text-4xl text-[#181A18]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Dewata Standards
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D4F3E]/10 text-[#2D4F3E]">
                <Users className="h-6 w-6" />
              </div>
              <h3
                className="mt-4 text-xl font-medium text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Fair Driver Wages
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#181A18]/70 leading-relaxed">
                We believe exceptional hospitality begins with treating our drivers with respect and above-market fair compensation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E86338]/10 text-[#E86338]">
                <Compass className="h-6 w-6" />
              </div>
              <h3
                className="mt-4 text-xl font-medium text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Local Storytelling
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#181A18]/70 leading-relaxed">
                Learn the true meanings behind canang sari offerings, subak irrigation philosophy, and sacred temple ceremonies.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D4F3E]/10 text-[#2D4F3E]">
                <Car className="h-6 w-6" />
              </div>
              <h3
                className="mt-4 text-xl font-medium text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Impeccable Fleet
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#181A18]/70 leading-relaxed">
                Late-model Toyota Innova Reborn and Toyota HiAce vans, cleaned daily, equipped with cold AC and USB charging ports.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E86338]/10 text-[#E86338]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3
                className="mt-4 text-xl font-medium text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Zero Tourist Traps
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#181A18]/70 leading-relaxed">
                We never force you into high-pressure souvenir markets. Every stop on your journey is chosen for authenticity and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2
          className="text-3xl sm:text-4xl text-[#181A18]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Ready to experience the real Bali?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#181A18]/70 max-w-md mx-auto">
          Take a look at our curated packages or get in touch for a bespoke custom itinerary.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/#tours"
            className="inline-flex items-center gap-2 rounded-xl bg-[#E86338] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#D45229] transition-all"
          >
            <span>Explore Journeys</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[#1A1D1A]/20 bg-white px-7 py-3 text-sm font-semibold text-[#181A18] hover:border-[#E86338] hover:text-[#E86338] transition-colors"
          >
            <span>Contact Concierge</span>
          </Link>
        </div>
      </section>

      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
