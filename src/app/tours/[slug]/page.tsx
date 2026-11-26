import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS, getTourBySlug } from "@/data/tours";
import { CONTACT_INFO } from "@/data/contact";
import { Navbar } from "@/Components/Navbar";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import {
  Clock,
  MapPin,
  Users,
  Check,
  X,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Star,
  Sparkles,
  Calendar,
  Compass,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOURS.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found | Dewata Tour Bali",
    };
  }

  return {
    title: `${tour.title} | Dewata Tour Bali`,
    description: tour.tagline,
    openGraph: {
      title: `${tour.title} - Private Bali Day Tour`,
      description: tour.tagline,
      images: [{ url: tour.image, width: 1200, height: 630, alt: tour.title }],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const WHATSAPP_NUMBER = CONTACT_INFO.whatsappNumber;
  const waBookingMessage = encodeURIComponent(
    `Hello Dewata Tour! I would like to book the "${tour.title}" private journey (${tour.duration}). Could you please advise availability and pickup timing?`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waBookingMessage}`;

  const relatedTours = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />

      {/* Breadcrumb & Navigation Top Bar */}
      <div className="pt-24 sm:pt-28 pb-4 border-b border-[#1A1D1A]/10 bg-white/70 backdrop-blur-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <Link
            href="/#tours"
            className="inline-flex items-center gap-1.5 font-medium text-[#181A18]/70 hover:text-[#E86338] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Journeys</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#181A18]/50">
            <Link href="/" className="hover:text-[#181A18]">Home</Link>
            <span>/</span>
            <Link href="/#tours" className="hover:text-[#181A18]">Journeys</Link>
            <span>/</span>
            <span className="text-[#181A18] font-medium truncate max-w-[200px]">{tour.title}</span>
          </div>
        </div>
      </div>

      {/* Main Tour Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E86338]/10 px-3.5 py-1 text-xs font-semibold text-[#E86338]">
            <Sparkles className="h-3.5 w-3.5" />
            {tour.vibeLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#181A18]/5 px-3 py-1 text-xs font-medium text-[#181A18]/80">
            <Clock className="h-3.5 w-3.5 text-[#E86338]" />
            {tour.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#181A18]/5 px-3 py-1 text-xs font-medium text-[#181A18]/80">
            <MapPin className="h-3.5 w-3.5 text-[#E86338]" />
            {tour.location}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2D4F3E]/10 px-3 py-1 text-xs font-medium text-[#2D4F3E]">
            <Users className="h-3.5 w-3.5" />
            {tour.capacity}
          </span>
        </div>

        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181A18] leading-[1.12]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {tour.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base sm:text-lg text-[#181A18]/75 leading-relaxed font-normal">
          {tour.tagline}
        </p>

        {/* Photo Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#E5DFD5] shadow-sm">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            {tour.gallery.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] sm:aspect-auto sm:flex-1 w-full overflow-hidden rounded-2xl bg-[#E5DFD5] shadow-xs"
              >
                <Image
                  src={imgUrl}
                  alt={`${tour.title} detail photo ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Booking Card Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Details, Timeline, Inclusions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-8 shadow-xs">
              <h2
                className="text-2xl sm:text-3xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The Experience
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#181A18]/80 font-normal">
                {tour.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 border-t border-[#1A1D1A]/10 pt-6">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#181A18]/60 mb-3">
                  Journey Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-[#FAF8F5] p-3 border border-[#1A1D1A]/5 text-xs sm:text-sm font-medium text-[#181A18]"
                    >
                      <Check className="h-4 w-4 text-[#2D4F3E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hour-by-Hour Itinerary */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#1A1D1A]/10 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E86338]">
                    Planned Flow
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl text-[#181A18] mt-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Hour-by-Hour Itinerary
                  </h2>
                </div>
                <span className="text-xs text-[#181A18]/60 hidden sm:inline">
                  *Pace is 100% customizable
                </span>
              </div>

              <div className="mt-8 relative border-l-2 border-[#E86338]/30 ml-3.5 space-y-8 pl-6 sm:pl-8">
                {tour.itinerary.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-[#E86338] text-[11px] font-bold text-[#E86338] shadow-xs">
                      {index + 1}
                    </div>

                    <div>
                      <span className="inline-block rounded-md bg-[#FAF8F5] px-2.5 py-1 text-xs font-bold text-[#E86338] border border-[#1A1D1A]/5 mb-1.5">
                        {item.time}
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold text-[#181A18]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#181A18]/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              <div className="rounded-2xl border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 text-[#2D4F3E]">
                  <Check className="h-5 w-5" />
                  <h3 className="text-base sm:text-lg font-bold">What is Included</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#181A18]/85">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2D4F3E] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 text-[#181A18]/60">
                  <X className="h-5 w-5" />
                  <h3 className="text-base sm:text-lg font-bold text-[#181A18]">What is Excluded</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#181A18]/75">
                  {tour.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What to Bring */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-8 shadow-xs">
              <h3
                className="text-xl sm:text-2xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What to Bring & Dress Code
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#181A18]/80">
                {tour.whatToBring.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#E86338]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-7 shadow-lg">
              <div className="border-b border-[#1A1D1A]/10 pb-5">
                <span className="text-xs uppercase font-medium tracking-wider text-[#181A18]/60 block">
                  Private Car & Driver Package
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#181A18]">
                    ${tour.priceUSD}
                  </span>
                  <span className="text-sm text-[#181A18]/60 font-medium">
                    / Rp {(tour.priceIDR / 1000).toLocaleString("id-ID")}.000
                  </span>
                </div>
                <p className="text-xs text-[#2D4F3E] font-medium mt-1">
                  Flat-rate per vehicle (Up to 5 passengers, not per person!)
                </p>
              </div>

              {/* Inclusions summary */}
              <div className="py-4 space-y-2 text-xs text-[#181A18]/80 border-b border-[#1A1D1A]/10">
                <div className="flex items-center justify-between">
                  <span className="text-[#181A18]/60">Vehicle:</span>
                  <span className="font-semibold">Private Toyota Innova</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#181A18]/60">Duration:</span>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#181A18]/60">Hotel Pickup:</span>
                  <span className="font-semibold">Anywhere in Bali</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#181A18]/60">Cancellation:</span>
                  <span className="font-semibold text-[#2D4F3E]">Free up to 24h</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#20BD5A] transition-all active:scale-98"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book via WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#1A1D1A]/20 bg-white px-5 py-3 text-sm font-semibold text-[#181A18] hover:border-[#E86338] hover:text-[#E86338] transition-colors"
                >
                  <span>Send In-Depth Inquiry</span>
                </Link>
              </div>

              <div className="mt-5 rounded-xl bg-[#FAF8F5] p-3 text-[11px] text-[#181A18]/70 leading-normal border border-[#1A1D1A]/5 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-[#2D4F3E] shrink-0 mt-0.5" />
                <span>No credit card required upfront. Pay comfortably in cash or card directly to your driver.</span>
              </div>
            </div>

            {/* Need Customization? */}
            <div className="rounded-2xl border border-dashed border-[#E86338]/40 bg-[#FAF8F5] p-5 text-center">
              <h4 className="text-sm font-semibold text-[#181A18]">Want to tweak this itinerary?</h4>
              <p className="mt-1 text-xs text-[#181A18]/70">
                You can easily add, skip, or swap stops with our concierge.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-bold text-[#E86338] hover:underline"
              >
                Chat on WhatsApp to customize →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Journeys */}
      <section className="border-t border-[#1A1D1A]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[#181A18]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Other Curated Journeys You May Love
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedTours.map((t) => (
              <Link
                key={t.slug}
                href={`/tours/${t.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1A1D1A]/10 bg-[#FAF8F5] hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-[#181A18]">
                    {t.vibeLabel}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3
                    className="text-lg font-medium text-[#181A18] group-hover:text-[#E86338] transition-colors line-clamp-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#181A18]/70 line-clamp-2">
                    {t.tagline}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-[#1A1D1A]/10 pt-2 text-xs">
                    <span className="text-[#181A18]/60">{t.duration}</span>
                    <span className="font-bold text-[#E86338]">From ${t.priceUSD}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
