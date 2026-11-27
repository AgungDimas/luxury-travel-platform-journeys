"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MessageCircle, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

interface NavbarProps {
  whatsappNumber?: string;
}

export function Navbar({ whatsappNumber = CONTACT_INFO.whatsappNumber }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Dewata Tour! I would like to book a private Bali tour."
  )}`;

  const destinations = [
    { name: "Mist & Mantras (Ubud)", href: "/tours/ubud-spiritual-escape" },
    { name: "Cliffs & Coves (Nusa Penida)", href: "/tours/nusa-penida-west-private" },
    { name: "Golden Cliffside (Uluwatu)", href: "/tours/uluwatu-sunset-culinary" },
    { name: "Volcano Dawn (Mount Batur 4WD)", href: "/tours/batur-sunrise-jeep" },
    { name: "Backroads & Spices (Sidemen)", href: "/tours/sidemen-culinary-trail" },
    { name: "Highland Eden (North Bali)", href: "/tours/north-bali-waterfalls" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 py-3"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span
              className={`text-2xl sm:text-3xl tracking-tight transition-colors ${
                isScrolled ? "text-[#181A18]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Dewata <span className="italic text-[#E86338]">Tour</span>
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase -mt-1 font-semibold ${
                isScrolled ? "text-[#181A18]/60" : "text-white/80"
              }`}
            >
              Bali Private Journeys
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            About Us
          </Link>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDestDropdownOpen(true)}
            onMouseLeave={() => setIsDestDropdownOpen(false)}
          >
            <Link
              href="/#tours"
              className={`inline-flex items-center gap-1.5 py-1 transition-colors ${
                isScrolled
                  ? "text-[#181A18]/80 hover:text-[#E86338]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>Destinations</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDestDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* Dropdown Menu */}
            {isDestDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-black/10 bg-white p-2 shadow-2xl backdrop-blur-lg">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#181A18]/50">
                  Select a Curated Journey
                </div>
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    href={dest.href}
                    onClick={() => setIsDestDropdownOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-[#181A18]/85 hover:bg-[#FAF8F5] hover:text-[#E86338] transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#E86338] shrink-0" />
                    <span className="truncate">{dest.name}</span>
                  </Link>
                ))}
                <div className="mt-1 border-t border-[#181A18]/10 pt-1">
                  <Link
                    href="/#tours"
                    onClick={() => setIsDestDropdownOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#E86338] hover:bg-[#FAF8F5]"
                  >
                    <span>View All Packages</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#transfers"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Airport Transfer
          </Link>

          <Link
            href="/guides"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Travel Guides
          </Link>

          <Link
            href="/#reviews"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Guest Stories
          </Link>

          <Link
            href="/#faq"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              isScrolled
                ? "text-[#181A18]/80 hover:text-[#E86338]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA & Flag */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Flag Badge */}
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-md border ${
              isScrolled
                ? "border-black/10 text-[#181A18]/70 bg-[#FAF8F5]"
                : "border-white/20 text-white bg-white/10 backdrop-blur-xs"
            }`}
          >
            <span className="text-sm">🇬🇧</span>
            <span>EN</span>
            <span className="text-[10px] text-gray-400">/</span>
            <span className="text-sm">🇮🇩</span>
          </div>

          {/* Book Now Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-lg px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "border border-[#E86338] text-[#E86338] hover:bg-[#E86338] hover:text-white shadow-xs"
                : "border border-white text-white hover:bg-white hover:text-[#181A18] shadow-sm backdrop-blur-xs"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#E86338] px-3 py-1.5 text-xs font-semibold text-white shadow-xs"
          >
            Book
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1.5 rounded-md transition-colors ${
              isScrolled ? "text-[#181A18]" : "text-white"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-black/10 bg-white px-4 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#181A18]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#E86338] font-semibold"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              About Us / The Difference
            </Link>
            <Link
              href="/#tours"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              Destinations & Packages
            </Link>
            <Link
              href="/#transfers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              Airport Transfer (DPS)
            </Link>
            <Link
              href="/guides"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              Travel Guides
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              Guest Stories & Reviews
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#E86338]"
            >
              Contact Us
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#E86338] py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book via WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
