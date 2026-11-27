import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TRAVEL_GUIDES, getGuideBySlug } from "@/data/guides";
import { getTourBySlug } from "@/data/tours";
import { CONTACT_INFO } from "@/data/contact";
import { Navbar } from "@/Components/Navbar";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import { ArrowLeft, Clock, Lightbulb, ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TRAVEL_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | Dewata Tour Bali" };
  }

  return {
    title: `${guide.title} | Dewata Tour Bali`,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      images: [{ url: guide.image, width: 1200, height: 630, alt: guide.title }],
    },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedTour = getTourBySlug(guide.relatedTourSlug);
  const otherGuides = TRAVEL_GUIDES.filter((g) => g.slug !== guide.slug);

  const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Dewata Tour! I just read "${guide.title}" and would love to plan a trip.`
  )}`;

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      <Navbar whatsappNumber={CONTACT_INFO.whatsappNumber} />

      {/* Breadcrumb Bar */}
      <div className="pt-24 sm:pt-28 pb-4 border-b border-[#1A1D1A]/10 bg-white/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 font-medium text-[#181A18]/70 hover:text-[#E86338] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Travel Guides</span>
          </Link>
          <span className="text-xs font-semibold text-[#2D4F3E]">{guide.category}</span>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-center gap-3 text-xs text-[#1A1D1A]/60 mb-4">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#E86338]" />
            {guide.readTime}
          </span>
          <span>•</span>
          <span>Published {guide.publishedAt}</span>
        </div>

        <h1
          className="text-3xl sm:text-5xl font-normal tracking-tight text-[#181A18] leading-[1.15]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {guide.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#1A1D1A]/75 leading-relaxed">
          {guide.excerpt}
        </p>

        {/* Featured Image */}
        <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-[#E5DFD5] shadow-sm">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-10">
          {guide.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2
                className="text-2xl sm:text-3xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base leading-relaxed text-[#1A1D1A]/80"
                >
                  {paragraph}
                </p>
              ))}
              {section.tip && (
                <div className="rounded-2xl border border-[#E86338]/30 bg-[#E86338]/5 p-5 flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-[#E86338] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#181A18]/85 leading-relaxed">
                    <strong className="text-[#181A18]">Local Tip: </strong>
                    {section.tip}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Related Tour Callout */}
        {relatedTour && (
          <div className="mt-14 rounded-3xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D4F3E]">
                Recommended Private Journey
              </span>
              <h3
                className="mt-1 text-2xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {relatedTour.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#1A1D1A]/70 max-w-lg">
                {relatedTour.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href={`/tours/${relatedTour.slug}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#E86338] px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#D45229] transition-colors"
              >
                <span>View Itinerary</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#1A1D1A]/20 px-4 py-3 text-xs sm:text-sm font-semibold text-[#181A18] hover:border-[#E86338] hover:text-[#E86338] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Ask Us</span>
              </a>
            </div>
          </div>
        )}
      </article>

      {/* Other Guides */}
      <section className="border-t border-[#1A1D1A]/10 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[#181A18]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            More Bali Travel Guides
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-2xl border border-[#1A1D1A]/10 bg-[#FAF8F5] p-5 hover:border-[#E86338]/40 transition-colors"
              >
                <span className="text-[11px] font-semibold text-[#E86338]">{g.category}</span>
                <h3
                  className="mt-1 text-xl text-[#181A18] group-hover:text-[#E86338] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {g.title}
                </h3>
                <p className="mt-2 text-xs text-[#1A1D1A]/70 line-clamp-2">{g.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp whatsappNumber={CONTACT_INFO.whatsappNumber} />
    </main>
  );
}
