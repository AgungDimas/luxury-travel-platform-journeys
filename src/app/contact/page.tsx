"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/Components/Navbar";
import { FloatingWhatsApp } from "@/Components/FloatingWhatsApp";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "6281234567890";

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    travelDates: "",
    guests: "2",
    destination: "Ubud & Sacred Waterfalls",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Dewata Tour!\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Contact:* ${formData.contact}\n` +
      `*Estimated Date:* ${formData.travelDates}\n` +
      `*Number of Guests:* ${formData.guests}\n` +
      `*Interested In:* ${formData.destination}\n` +
      `*Special Requests / Notes:* ${formData.notes || "None"}\n\n` +
      `Could you please share your recommendation and quote? Thank you!`
    );

    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181A18] relative">
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />

      {/* Hero Header */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-[#1A1D1A]/10 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2D4F3E]/20 bg-[#2D4F3E]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D4F3E] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E86338]" />
            Personal Concierge Support
          </span>

          <h1
            className="text-4xl sm:text-6xl text-[#181A18] tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s design your <span className="italic text-[#E86338]">Bali journey</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#181A18]/75 leading-relaxed font-normal">
            Whether you want to book a signature route, tweak an existing itinerary, or reserve a private driver for a customized day, we are here to help.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#1A1D1A]/10 bg-white p-6 sm:p-10 shadow-sm">
            <div className="border-b border-[#1A1D1A]/10 pb-4 mb-6">
              <h2
                className="text-2xl sm:text-3xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Send an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#181A18]/70 mt-1">
                Fill in your details below and we will connect you directly with our WhatsApp concierge.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl bg-[#2D4F3E]/10 p-6 text-center text-[#2D4F3E]">
                <CheckCircle className="h-10 w-10 mx-auto text-[#2D4F3E] mb-3" />
                <h3 className="text-lg font-bold">Thank you, {formData.name}!</h3>
                <p className="text-xs sm:text-sm mt-1 text-[#181A18]/80">
                  Your inquiry has been generated and WhatsApp was opened in a new tab. If it did not open automatically, click below:
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                      Email or WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+61 400 123 456"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                      Estimated Travel Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15-20 October"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="1">1 Solo Traveler</option>
                      <option value="2">2 Guests (Couple / Friends)</option>
                      <option value="3-4">3 - 4 Guests (Small Family)</option>
                      <option value="5">5 Guests (Standard Car Max)</option>
                      <option value="6+">6+ Guests (Requires HiAce Van)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                    Journey of Interest
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Ubud & Sacred Waterfalls">Mist & Mantras: Hidden Ubud Sanctuaries</option>
                    <option value="Nusa Penida Private Tour">Cliffs & Coves: Private West Nusa Penida</option>
                    <option value="Uluwatu Sunset & Seafood">Golden Cliffside: Uluwatu & Jimbaran Feast</option>
                    <option value="Sidemen Culinary Backroads">Backroads & Spices: Sidemen Valley Table</option>
                    <option value="Mount Batur 4WD Jeep Sunrise">Volcano Dawn: Mount Batur 4WD Black Lava</option>
                    <option value="North Bali Waterfalls & Lakes">Highland Eden: Ulun Danu & Sekumpul Falls</option>
                    <option value="Custom Bespoke Itinerary">I have my own custom list of places!</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#181A18]/70 mb-1.5">
                    Special Requests or Pickup Location
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Staying at villa in Seminyak, traveling with a toddler, would love to see a quiet waterfall with easy walking..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-[#1A1D1A]/20 bg-[#FAF8F5]/60 p-4 text-sm text-[#181A18] focus:border-[#E86338] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#E86338] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#D45229] transition-all cursor-pointer active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Base Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Action Box */}
            <div className="rounded-2xl border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-transparent p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#181A18]">Need an instant answer?</h3>
                  <span className="text-xs text-[#2D4F3E] font-medium flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    Concierge Online Now
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#181A18]/75 leading-relaxed">
                WhatsApp is our quickest channel. We answer within minutes regarding driver availability, rates, and pickup timings.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-sm hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>

            {/* Contact Information Card */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-white p-7 shadow-xs space-y-4">
              <h3
                className="text-xl text-[#181A18]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Direct Contacts & Bases
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#181A18]/80 pt-2">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[#E86338] mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#181A18]">Direct Phone & WhatsApp</span>
                    <span>+62 812-3456-7890</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#E86338] mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#181A18]">Email Inquiries</span>
                    <span>concierge@dewatatour.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#E86338] mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#181A18]">Bali Operating Hubs</span>
                    <span>Sanur Beach Hub & Ubud Village Base, Bali, Indonesia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#E86338] mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#181A18]">Operational Hours</span>
                    <span>Daily: 06:00 AM – 11:00 PM WITA (Bali Time)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last-Minute Booking FAQ */}
            <div className="rounded-2xl border border-[#1A1D1A]/10 bg-[#FAF8F5] p-6 text-xs sm:text-sm text-[#181A18]/75 leading-relaxed">
              <span className="font-bold text-[#181A18] block mb-1">
                Booking for tomorrow or today?
              </span>
              Yes! We accept next-day and same-day bookings if vehicles are available. Please text us directly on WhatsApp instead of email for immediate driver assignment.
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
