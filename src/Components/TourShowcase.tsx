"use client";

import { useState } from "react";
import Image from "next/image";
import { TOURS, Vibe } from "@/data/tours";
import { Clock, MapPin, Users, Check, ArrowRight, MessageCircle } from "lucide-react";

const VIBES: { label: string; value: Vibe }[] = [
  { label: "All Journeys", value: "all" },
  { label: "Slow & Spiritual", value: "spiritual" },
  { label: "Wild & Adrenaline", value: "adventure" },
  { label: "Hidden Culinary", value: "culinary" },
  { label: "Golden Hour", value: "sunset" },
];

export function TourShowcase() {
  const [activeVibe, setActiveVibe] = useState<Vibe>("all");
  const [currency, setCurrency] = useState<"USD" | "IDR">("USD");

  const filtered =
    activeVibe === "all"
      ? TOURS
      : TOURS.filter((tour) => tour.vibe === activeVibe);

  const formatPrice = (idr: number, usd: number) =>
    currency === "USD"
      ? `$${usd}`
      : `Rp ${(idr / 1000).toLocaleString("id-ID")}.000`;

  return (
    <section id="tours" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#1A1D1A]/10 pb-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E86338]" />
            Signature Handpicked Routes
          </div>
          <h2
            className="mt-3 text-3xl sm:text-4xl md:text-5xl text-[#1A1D1A] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Curated journeys, <span className="italic text-[#E86338]">unrushed</span> memories.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1A1D1A]/70">
            Every itinerary includes a clean air-conditioned private vehicle, professional English-speaking driver, fuel, and flexible stop timings.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="text-xs font-medium text-[#1A1D1A]/60">Currency:</span>
          <div className="inline-flex rounded-full border border-[#1A1D1A]/15 bg-white p-1 text-xs font-medium shadow-xs">
            {(["USD", "IDR"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`rounded-full px-4 py-1.5 transition-colors cursor-pointer ${
                  currency === curr
                    ? "bg-[#1A1D1A] text-white font-semibold"
                    : "text-[#1A1D1A]/70 hover:text-[#1A1D1A]"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vibe Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
        {VIBES.map((v) => {
          const count =
            v.value === "all"
              ? TOURS.length
              : TOURS.filter((t) => t.vibe === v.value).length;
          const isActive = activeVibe === v.value;

          return (
            <button
              key={v.value}
              type="button"
              onClick={() => setActiveVibe(v.value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-[#E86338] text-white shadow-sm"
                  : "border border-[#1A1D1A]/10 bg-white/80 text-[#1A1D1A]/80 hover:border-[#E86338]/40 hover:text-[#1A1D1A]"
              }`}
            >
              <span>{v.label}</span>
              <span
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-[#1A1D1A]/5 text-[#1A1D1A]/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tour Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tour) => {
          const waMessage = encodeURIComponent(
            `Hello Dewata Tour! I am interested in booking the "${tour.title}" private journey (${tour.duration}). Could you share availability and pickup details?`
          );
          const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

          return (
            <article
              key={tour.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1A1D1A]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Image Container with fixed aspect ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE5DC]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#1A1D1A] shadow-xs backdrop-blur-md">
                      {tour.vibeLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      <Clock className="h-3 w-3" />
                      {tour.duration}
                    </span>
                  </div>

                  {/* Bottom Location Overlay */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs font-medium text-white drop-shadow-sm">
                    <MapPin className="h-3.5 w-3.5 text-[#E86338]" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3
                    className="text-xl sm:text-2xl font-normal leading-snug text-[#1A1D1A] group-hover:text-[#E86338] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {tour.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/70 line-clamp-2">
                    {tour.tagline}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tour.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-md bg-[#FAF8F5] px-2 py-1 text-[11px] font-medium text-[#1A1D1A]/80 border border-[#1A1D1A]/5"
                      >
                        <Check className="h-3 w-3 text-[#2D4F3E]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="border-t border-[#1A1D1A]/10 bg-[#FAF8F5]/50 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#1A1D1A]/60 block font-medium">
                      Private Vehicle
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl sm:text-2xl font-bold text-[#1A1D1A]">
                        {formatPrice(tour.priceIDR, tour.priceUSD)}
                      </span>
                      <span className="text-xs text-[#1A1D1A]/60">/ group</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2D4F3E]">
                      <Users className="h-3 w-3" />
                      {tour.capacity}
                    </span>
                  </div>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1D1A] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#E86338] active:scale-[0.99]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </article>
          );
        })}

        {/* Custom Itinerary Card */}
        <article className="flex flex-col justify-between rounded-2xl border-2 border-dashed border-[#E86338]/40 bg-gradient-to-br from-[#FAF8F5] to-[#F5ECE1] p-6 sm:p-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E86338]/10 px-3 py-1 text-xs font-semibold text-[#E86338]">
              Bespoke Route
            </div>
            <h3
              className="mt-4 text-2xl sm:text-3xl font-normal leading-snug text-[#1A1D1A]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Have your own Bali dream list?
            </h3>
            <p className="mt-3 text-sm text-[#1A1D1A]/75 leading-relaxed">
              Tell us the temples, waterfalls, beach clubs, or cafe spots you want to visit. We will optimize the route, arrange the driver, and ensure a seamless day.
            </p>
            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#1A1D1A]/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#E86338]" />
                100% customized stops & timings
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#E86338]" />
                Island-wide pickup (Canggu, Seminyak, Ubud, Sanur)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#E86338]" />
                Flat-rate transparent day driver pricing
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Hello%20Dewata%20Tour!%20I%20would%20like%20to%20plan%20a%20custom%20Bali%20private%20itinerary."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E86338] bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#E86338] shadow-xs transition hover:bg-[#E86338] hover:text-white"
          >
            <span>Plan Custom Trip</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
