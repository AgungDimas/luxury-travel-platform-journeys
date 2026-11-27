import Image from "next/image";
import Link from "next/link";
import { TRAVEL_GUIDES } from "@/data/guides";
import { CONTACT_INFO } from "@/data/contact";
import { Navbar } from "@/Components/Navbar";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bali Travel Guides & Local Tips | Dewata Tour Bali",
  description:
    "Practical Bali travel guides from local storytellers: temple etiquette, avoiding crowds in Ubud & Nusa Penida, and smooth Ngurah Rai airport arrivals.",
};

export default function GuidesIndexPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      <Navbar whatsappNumber={CONTACT_INFO.whatsappNumber} />

      {/* Header */}
      <section className="pt-32 sm:pt-40 pb-14 border-b border-[#1A1D1A]/10 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E] mb-4">
            <BookOpen className="h-3.5 w-3.5 text-[#E86338]" />
            Local Travel Journal
          </span>

          <h1
            className="text-4xl sm:text-6xl text-[#181A18] tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Insider <span className="italic text-[#E86338]">Bali Guides</span> for Thoughtful Travelers
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#181A18]/75 leading-relaxed">
            Honest, practical advice from our native Balinese drivers—covering temple etiquette, optimal sunrise timings, and stress-free airport arrivals.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVEL_GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1A1D1A]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-[#EAE5DC]"
                >
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#181A18] shadow-xs">
                    {guide.category}
                  </span>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#1A1D1A]/60 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#E86338]" />
                      {guide.readTime}
                    </span>
                    <span>•</span>
                    <span>{guide.publishedAt}</span>
                  </div>

                  <Link href={`/guides/${guide.slug}`}>
                    <h2
                      className="text-2xl font-normal leading-snug text-[#181A18] group-hover:text-[#E86338] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {guide.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/75 line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#1A1D1A]/10 px-6 py-4 bg-[#FAF8F5]/50">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#E86338] hover:underline"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-[#181A18] p-8 sm:p-12 text-center text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E86338]/20 px-3 py-1 text-xs font-semibold text-[#E86338]">
            <Sparkles className="h-3.5 w-3.5" />
            Ready to Explore?
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-normal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pair local wisdom with a private driver
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-lg mx-auto">
            Browse our curated Bali day journeys or reserve an airport pickup before you land.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/#tours"
              className="rounded-xl bg-[#E86338] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#D45229] transition-colors"
            >
              Explore Journeys
            </Link>
            <Link
              href="/#transfers"
              className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Airport Transfers
            </Link>
          </div>
        </div>
      </section>

      <FloatingWhatsApp whatsappNumber={CONTACT_INFO.whatsappNumber} />
    </main>
  );
}
