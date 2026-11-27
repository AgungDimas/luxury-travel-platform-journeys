"use client";

import { useState } from "react";
import { TRANSFER_ZONES } from "@/data/transfers";
import { CONTACT_INFO } from "@/data/contact";
import { Plane, Luggage, Clock, Check, MessageCircle, ArrowRight } from "lucide-react";

export function AirportTransfer() {
  const [selectedZoneId, setSelectedZoneId] = useState(TRANSFER_ZONES[0].id);
  const [direction, setDirection] = useState<"pickup" | "dropoff">("pickup");
  const [currency, setCurrency] = useState<"USD" | "IDR">("USD");

  const activeZone =
    TRANSFER_ZONES.find((z) => z.id === selectedZoneId) ?? TRANSFER_ZONES[0];

  const formatPrice = (idr: number, usd: number) =>
    currency === "USD"
      ? `$${usd}`
      : `Rp ${(idr / 1000).toLocaleString("id-ID")}.000`;

  const directionLabel =
    direction === "pickup"
      ? "Airport Pickup (DPS → Hotel/Villa)"
      : "Airport Drop-off (Hotel/Villa → DPS)";

  const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dewata Tour! I would like to book a Private Airport Transfer:\n` +
      `• Service: ${directionLabel}\n` +
      `• Area: ${activeZone.zone}\n` +
      `• Quoted Rate: ${formatPrice(activeZone.priceIDR, activeZone.priceUSD)} (Flat rate per car)\n\n` +
      `My flight/hotel details:`
  )}`;

  return (
    <section
      id="transfers"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
    >
      <div className="overflow-hidden rounded-3xl border border-[#1A1D1A]/10 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Info & Zone List */}
          <div className="lg:col-span-7 p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1A1D1A]/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
                  <Plane className="h-3.5 w-3.5 text-[#E86338]" />
                  Ngurah Rai Airport (DPS)
                </div>
                <h2
                  className="mt-3 text-3xl sm:text-4xl text-[#1A1D1A] tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Stress-free <span className="italic text-[#E86338]">Airport Transfers</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#1A1D1A]/70 max-w-xl">
                  Skip the arrival taxi touts. Your driver tracks your flight, greets you with a name sign, and waits up to 60 minutes free if your flight is delayed.
                </p>
              </div>

              {/* Currency Switcher */}
              <div className="inline-flex rounded-full border border-[#1A1D1A]/15 bg-[#FAF8F5] p-1 text-xs font-medium">
                {(["USD", "IDR"] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`rounded-full px-3.5 py-1 transition-colors cursor-pointer ${
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

            {/* Direction Toggle */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setDirection("pickup")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  direction === "pickup"
                    ? "bg-[#E86338] text-white shadow-xs"
                    : "border border-[#1A1D1A]/15 bg-[#FAF8F5] text-[#1A1D1A]/80 hover:border-[#E86338]/50"
                }`}
              >
                Airport Pickup (DPS → Hotel)
              </button>
              <button
                type="button"
                onClick={() => setDirection("dropoff")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  direction === "dropoff"
                    ? "bg-[#E86338] text-white shadow-xs"
                    : "border border-[#1A1D1A]/15 bg-[#FAF8F5] text-[#1A1D1A]/80 hover:border-[#E86338]/50"
                }`}
              >
                Airport Drop-off (Hotel → DPS)
              </button>
            </div>

            {/* Zone Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRANSFER_ZONES.map((z) => {
                const isSelected = z.id === activeZone.id;
                return (
                  <button
                    key={z.id}
                    type="button"
                    onClick={() => setSelectedZoneId(z.id)}
                    className={`text-left rounded-2xl border p-4 transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#E86338] bg-[#FAF8F5] shadow-xs"
                        : "border-[#1A1D1A]/10 bg-white hover:border-[#E86338]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold text-[#1A1D1A]">
                        {z.zone}
                      </span>
                      <span className="text-sm font-bold text-[#E86338] shrink-0">
                        {formatPrice(z.priceIDR, z.priceUSD)}
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] text-[#1A1D1A]/60">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {z.duration}
                      </span>
                      {z.popular && (
                        <span className="rounded-full bg-[#2D4F3E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2D4F3E]">
                          Popular
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Zone Summary Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border-t lg:border-t-0 lg:border-l border-[#1A1D1A]/10 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1D1A]/60">
                Selected Route Summary
              </span>
              <h3
                className="mt-2 text-2xl sm:text-3xl text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {activeZone.zone}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#1A1D1A]/70">
                {activeZone.areas}
              </p>

              <div className="mt-6 rounded-2xl border border-[#1A1D1A]/10 bg-white p-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium text-[#1A1D1A]/60">
                    Flat Rate (Per Car)
                  </span>
                  <span className="text-3xl font-extrabold text-[#1A1D1A]">
                    {formatPrice(activeZone.priceIDR, activeZone.priceUSD)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#2D4F3E] font-medium">
                  {directionLabel} · Up to 4 guests + 4 suitcases
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#1A1D1A]/80">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#2D4F3E] shrink-0" />
                  <span>Meet & Greet at arrival gate with name sign</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#2D4F3E] shrink-0" />
                  <span>Live flight tracking + 60 mins free waiting time</span>
                </li>
                <li className="flex items-center gap-2">
                  <Luggage className="h-4 w-4 text-[#2D4F3E] shrink-0" />
                  <span>Spacious AC Innova, fuel & airport parking included</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1D1A] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#E86338] active:scale-[0.99]"
              >
                <MessageCircle className="h-4 w-4 text-[#4ADE80]" />
                <span>Reserve Transfer via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2.5 text-center text-[11px] text-[#1A1D1A]/60">
                24/7 airport service · Pay cash or card upon arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
