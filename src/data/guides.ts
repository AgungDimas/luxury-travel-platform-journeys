export interface GuideSection {
  heading: string;
  body: string[];
  tip?: string;
}

export interface TravelGuide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  relatedTourSlug: string;
  sections: GuideSection[];
}

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    slug: "bali-temple-etiquette-dress-code",
    title: "Bali Temple Etiquette: What to Wear & Respectful Customs",
    excerpt:
      "Planning to visit Tirta Empul, Uluwatu, or Ulun Danu? Learn the simple dress code, sarong traditions, and unspoken temple manners every respectful traveler should know.",
    category: "Culture & Etiquette",
    readTime: "4 min read",
    publishedAt: "2026-11-10",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    relatedTourSlug: "ubud-spiritual-escape",
    sections: [
      {
        heading: "1. The Essential Sarong & Sash Rule",
        body: [
          "Every sacred Balinese Hindu temple (Pura) requires visitors—regardless of gender—to cover their legs below the knee with a traditional kain sarong and tie a sash (selendang) around the waist.",
          "Don't worry if you forget to pack one: when you travel with Dewata Tour, your driver keeps freshly laundered sarongs and sashes in the car for complimentary use.",
        ],
        tip: "Wear breathable cotton tops that cover your shoulders; tank tops or swimwear are not permitted inside active prayer courtyards.",
      },
      {
        heading: "2. Mindful Behaviour Around Offerings & Ceremonies",
        body: [
          "You will notice small woven palm-leaf baskets filled with flowers and incense—called Canang Sari—placed on steps, doorways, and shrines. Always step around them rather than over them.",
          "If a ceremony or Melukat water purification is taking place, keep your voice soft, avoid using camera flash, and never stand higher than the priest (Pemangku) leading the blessing.",
        ],
      },
      {
        heading: "3. Best Hours to Visit Sacred Sites",
        body: [
          "Arrive between 07:30 AM and 09:00 AM for highland temples like Tirta Empul and Ulun Danu Beratan. You will experience cool morning mist, peaceful prayer chants, and soft natural light without tour-bus crowds.",
        ],
      },
    ],
  },
  {
    slug: "best-time-to-visit-bali-ubud-nusa-penida",
    title: "When to Visit Bali: Avoiding Crowds in Ubud & Nusa Penida",
    excerpt:
      "Dry season vs. lush green season, plus the exact hour-by-hour timing tricks local drivers use to beat traffic at Bali's iconic waterfalls and cliff viewpoints.",
    category: "Trip Planning",
    readTime: "5 min read",
    publishedAt: "2026-11-15",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
    relatedTourSlug: "nusa-penida-west-private",
    sections: [
      {
        heading: "1. Dry Season vs. Shoulder Months",
        body: [
          "May, June, and September are the sweet spots for Bali: sunny skies, low humidity, and noticeably calmer roads than July–August peak holiday weeks.",
          "During the wet season (November–March), mornings are usually bright and clear, with brief tropical showers arriving late afternoon—making rice terraces in Ubud and Sidemen extraordinarily vibrant.",
        ],
        tip: "Book early-morning pickups (07:00–08:00 AM) during any month to enjoy Bali's top landmarks before midday heat and traffic build up.",
      },
      {
        heading: "2. Timing Nusa Penida Without the Rush",
        body: [
          "Most group boats land in Nusa Penida around 09:30 AM and rush straight to Kelingking Beach at the same time. Taking an early 07:30 AM express speedboat with a private island driver puts you ahead of the wave.",
        ],
      },
      {
        heading: "3. Escaping to East & North Bali",
        body: [
          "If you crave untouched valleys, swap half a day in busy South Bali for Sidemen or Bedugul. Cool mountain air, terraced hills, and quiet village warungs offer the authentic rhythm Bali is famous for.",
        ],
      },
    ],
  },
  {
    slug: "ngurah-rai-airport-arrival-guide",
    title: "Landing in Bali (DPS): Smooth Arrival, SIM Cards & Private Transfers",
    excerpt:
      "Step off the plane without stress. A practical checklist covering e-VOA, customs QR, currency exchange, and how to meet your private driver outside the arrivals hall.",
    category: "Arrival & Logistics",
    readTime: "4 min read",
    publishedAt: "2026-11-20",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
    relatedTourSlug: "uluwatu-sunset-culinary",
    sections: [
      {
        heading: "1. Complete Your e-VOA & Customs QR Before Boarding",
        body: [
          "To breeze through Ngurah Rai International Airport (DPS), complete Indonesia's official Electronic Visa on Arrival (e-VOA) and Electronic Customs Declaration (e-CD) online 48 hours before departure.",
          "Keep a screenshot of your QR codes saved offline on your phone so you don't depend on airport Wi-Fi.",
        ],
        tip: "Never hand your passport to unofficial porters offering 'fast track' outside the terminal—only use official immigration lanes.",
      },
      {
        heading: "2. Skip the Crowded Arrival Taxi Touts",
        body: [
          "Exiting the international arrivals corridor in Bali can feel overwhelming with dozens of taxi touts calling out. Having a pre-booked private driver waiting with a clear name sign means you walk straight into an air-conditioned Toyota Innova with chilled water.",
        ],
      },
      {
        heading: "3. Currency & eSIM Tips",
        body: [
          "Install a travel eSIM before landing or ask your Dewata driver to stop briefly at an official Telkomsel outlet or authorized money changer / BCA ATM on the way to your hotel—zero stress and fair local rates.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): TravelGuide | undefined {
  return TRAVEL_GUIDES.find((g) => g.slug === slug);
}
