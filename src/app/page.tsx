import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/Components/Navbar";
import { TourShowcase } from "@/Components/TourShowcase";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import {
  Car,
  Compass,
  ShieldCheck,
  Clock,
  Star,
  MessageCircle,
  CheckCircle,
  ChevronDown,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const WHATSAPP_NUMBER = "6281234567890";
  const defaultWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Dewata Tour! I would like to inquire about private tours in Bali."
  )}`;

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      {/* 1. Dynamic Navbar with scroll transition */}
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />

      {/* 2. Hero Section - Matching the Reference Design (Centered Cinematic Architecture/Landscape) */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2400&q=85"
            alt="Majestic Balinese heritage temple sanctuary at Ulun Danu Beratan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Dark Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        </div>

        {/* Hero Content (Centered) */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center text-white">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-[#E86338]" />
            Curated Bali Private Journeys
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.12]">
            Discover Bali With Local Experts Who Know Every Hidden Gem
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal">
            From mist-veiled highland water temples and sacred ravine waterfalls to secluded cliffside beaches and traditional artisan villages—Dewata Tour helps you explore Bali with licensed local guides, flexible private itineraries, and journeys designed around your travel style.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tours"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#E86338] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-xl transition-all duration-200 hover:bg-[#D45229] hover:shadow-2xl active:scale-98"
            >
              <span>Explore Packages</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-[#181A18] hover:border-white shadow-md"
            >
              <MessageCircle className="h-4 w-4 text-[#4ADE80]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights Pill */}
          <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/15 bg-black/30 px-6 py-3 text-xs sm:text-sm text-white/90 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5</span>
              <span className="text-white/60">(340+ reviews)</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <Car className="h-4 w-4 text-[#E86338]" />
              <span>100% Private AC Vehicles</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#E86338]" />
              <span>Zero Rushed Schedules</span>
            </div>
          </div>
        </div>

        {/* Bottom subtle gradient curve */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FAF8F5] to-transparent z-10" />
      </section>

      {/* 3. Interactive Catalog (TourShowcase) */}
      <TourShowcase />

      {/* 4. Why Travelers Choose Dewata ("The Difference") */}
      <section id="why-us" className="border-y border-[#1A1D1A]/10 bg-[#F4EFE6]/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
              The Dewata Promise
            </span>
            <h2
              className="mt-3 text-3xl sm:text-5xl text-[#1A1D1A] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why discerning travelers <span className="italic text-[#E86338]">skip the bus</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#1A1D1A]/70">
              We focus on comfort, deep local culture, and giving you back complete control of your precious holiday hours.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs hover:border-[#E86338]/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D4F3E]/10 text-[#2D4F3E]">
                <Car className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-xl font-medium text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                100% Private Comfort
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/70">
                A pristine, air-conditioned vehicle exclusively reserved for your party with chilled mineral water and phone chargers ready.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs hover:border-[#E86338]/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E86338]/10 text-[#E86338]">
                <Compass className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-xl font-medium text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Native Balinese Guides
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/70">
                Fluent English drivers who share genuine folklore, teach respectful temple etiquette, and take you to uncrowded photo spots.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs hover:border-[#E86338]/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D4F3E]/10 text-[#2D4F3E]">
                <Clock className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-xl font-medium text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Zero-Rush Flexibility
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/70">
                Linger an extra hour at that quiet jungle cafe or head early to the beach. You decide how long to stay at every stop.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs hover:border-[#E86338]/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E86338]/10 text-[#E86338]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-xl font-medium text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Transparent Flat Rates
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1A1D1A]/70">
                Fuel, road tolls, parking fees, and vehicle costs are fully included. No shopping commission stops or surprise upcharges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Guest Stories / Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#1A1D1A]/10 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
              Guest Experiences
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl md:text-5xl text-[#1A1D1A] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Words from <span className="italic text-[#E86338]">fellow travelers</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-[#1A1D1A]/70">
            <span className="font-semibold text-[#1A1D1A]">Rated 4.9/5</span> on TripAdvisor & Google Reviews
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#1A1D1A]/80 italic">
                &ldquo;Booking Dewata was hands down the best decision of our Bali honeymoon. Our driver Ketut was so polite, punctual, and knew the quietest corners of Ubud before any tour buses arrived.&rdquo;
              </p>
            </div>
            <div className="mt-6 border-t border-[#1A1D1A]/10 pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1A1D1A]">Liam & Chloe M.</p>
                <p className="text-xs text-[#1A1D1A]/60">Melbourne, Australia</p>
              </div>
              <span className="text-xs font-medium text-[#2D4F3E] bg-[#2D4F3E]/10 px-2.5 py-0.5 rounded-full">
                Ubud Sanctuary
              </span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#1A1D1A]/80 italic">
                &ldquo;As a solo female traveler, safety and comfort were my top priorities. My driver was extremely respectful, helpful with photography, and always waited right outside each spot. 10/10 service.&rdquo;
              </p>
            </div>
            <div className="mt-6 border-t border-[#1A1D1A]/10 pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1A1D1A]">Sophie Laurent</p>
                <p className="text-xs text-[#1A1D1A]/60">Paris, France</p>
              </div>
              <span className="text-xs font-medium text-[#2D4F3E] bg-[#2D4F3E]/10 px-2.5 py-0.5 rounded-full">
                Nusa Penida & Uluwatu
              </span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#1A1D1A]/80 italic">
                &ldquo;We traveled with two kids and a grandparent. Having our own clean private car meant we could pause whenever the kids were tired. The Mount Batur jeep sunrise was breathtaking!&rdquo;
              </p>
            </div>
            <div className="mt-6 border-t border-[#1A1D1A]/10 pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1A1D1A]">David & Amanda K.</p>
                <p className="text-xs text-[#1A1D1A]/60">London, United Kingdom</p>
              </div>
              <span className="text-xs font-medium text-[#2D4F3E] bg-[#2D4F3E]/10 px-2.5 py-0.5 rounded-full">
                Batur Jeep & Sidemen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="border-t border-[#1A1D1A]/10 bg-[#F4EFE6]/40 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E]">
              Clear & Transparent
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl text-[#1A1D1A] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            <details className="group rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[#1A1D1A]">
                <span>How does booking and payment work?</span>
                <span className="transition duration-300 group-open:-rotate-180 text-[#E86338]">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1A1D1A]/75">
                Booking is simple via WhatsApp or inquiry form. No large upfront deposits are required for standard day tours. You can settle payment in cash (IDR, USD, AUD, EUR) or via credit card / Wise transfer directly with your driver at the end of your journey.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[#1A1D1A]">
                <span>Which areas are included for hotel pickup and drop-off?</span>
                <span className="transition duration-300 group-open:-rotate-180 text-[#E86338]">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1A1D1A]/75">
                We provide door-to-door hotel and villa pickup anywhere in South and Central Bali, including Seminyak, Canggu, Ubud, Sanur, Kuta, Legian, Nusa Dua, and Jimbaran. Pickup from North/East Bali (Amed, Lovina) can also be arranged with minimal notice.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[#1A1D1A]">
                <span>Can we customize or adjust stops during the tour?</span>
                <span className="transition duration-300 group-open:-rotate-180 text-[#E86338]">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1A1D1A]/75">
                Absolutely! Because each tour is 100% private to you, you can add a cafe stop, skip a temple if you feel like relaxing, or adjust pickup times to avoid peak heat or traffic. Your driver will advise you on optimal route flow.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[#1A1D1A]">
                <span>What is included in the tour price?</span>
                <span className="transition duration-300 group-open:-rotate-180 text-[#E86338]">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1A1D1A]/75">
                Our base pricing includes the private air-conditioned vehicle, fuel, parking fees, highway tolls, and your dedicated English-speaking Balinese driver. Entrance tickets and meals can be included in an all-inclusive package upon request.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. Bottom Call To Action Banner */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#181A18] px-6 py-14 sm:px-16 sm:py-20 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#E86338_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

          <div className="relative max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E86338]/20 px-3.5 py-1 text-xs font-semibold text-[#E86338]">
              Start Your Bali Journey
            </span>
            <h2
              className="mt-4 text-3xl sm:text-5xl font-normal tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ready to experience Bali <span className="italic text-[#E86338]">at your own pace?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              Message us on WhatsApp with your travel dates or preferred destinations. We respond within minutes with tailored suggestions and flat rates.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#E86338] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#D45229] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Concierge</span>
              </a>

              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span>Browse All Journeys</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Editorial Footer */}
      <footer className="border-t border-[#1A1D1A]/10 bg-[#FAF8F5] py-14 text-sm text-[#1A1D1A]/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1A1D1A]/10">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-2xl tracking-tight text-[#1A1D1A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Dewata <span className="italic text-[#E86338]">Tour</span>
              </Link>
              <p className="mt-3 max-w-sm text-xs sm:text-sm text-[#1A1D1A]/70 leading-relaxed">
                Curated Bali private tours and chauffeur service. Connecting unhurried travelers with authentic culture, pristine landscapes, and native Balinese storytellers.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#2D4F3E] font-medium">
                <CheckCircle className="h-4 w-4 text-[#2D4F3E]" />
                Licensed Tourism Operator (NIB: 9120302910)
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D1A]">
                Experiences
              </h4>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#tours" className="transition hover:text-[#E86338]">
                    Ubud Spiritual Sanctuary
                  </a>
                </li>
                <li>
                  <a href="#tours" className="transition hover:text-[#E86338]">
                    Nusa Penida Private Tour
                  </a>
                </li>
                <li>
                  <a href="#tours" className="transition hover:text-[#E86338]">
                    Uluwatu Sunset & Seafood
                  </a>
                </li>
                <li>
                  <a href="#tours" className="transition hover:text-[#E86338]">
                    Mount Batur 4WD Safari
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D1A]">
                Concierge Contact
              </h4>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#E86338]" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#E86338]" />
                  <span>Sanur & Ubud, Bali - Indonesia</span>
                </li>
                <li className="text-xs text-[#1A1D1A]/60 pt-2">
                  Daily Service: 06:00 - 23:00 WITA
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1A1D1A]/60 gap-4">
            <p>© {new Date().getFullYear()} Dewata Tour Bali. All rights reserved.</p>
            <p>Crafted for unhurried travelers & authentic island discovery.</p>
          </div>
        </div>
      </footer>

      {/* 9. Floating WhatsApp Icon (Bottom Right) */}
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
