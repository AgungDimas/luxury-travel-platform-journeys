export type Vibe = "all" | "spiritual" | "adventure" | "culinary" | "sunset";

export interface Tour {
  slug: string;
  title: string;
  tagline: string;
  vibe: Exclude<Vibe, "all">;
  vibeLabel: string;
  duration: string;
  location: string;
  priceIDR: number;
  priceUSD: number;
  image: string;
  featured?: boolean;
  highlights: string[];
  capacity: string;
}

export const TOURS: Tour[] = [
  {
    slug: "ubud-spiritual-escape",
    title: "Mist & Mantras: Hidden Ubud Sanctuaries",
    tagline: "Sacred Tirta Empul water purification, secluded jungle ravine waterfalls, and artisan coffee plantations.",
    vibe: "spiritual",
    vibeLabel: "Slow & Spiritual",
    duration: "9 Hours",
    location: "Tampaksiring & Ubud",
    priceIDR: 850000,
    priceUSD: 55,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["Tirta Empul Holy Spring", "Tibumana Waterfall", "Tegalalang Rice Terraces", "Coffee Tasting"],
    capacity: "Up to 5 guests",
  },
  {
    slug: "nusa-penida-west-private",
    title: "Cliffs & Coves: Private West Nusa Penida",
    tagline: "Experience Kelingking cliff edge, Angel's Billabong, and Broken Beach with your dedicated island captain.",
    vibe: "adventure",
    vibeLabel: "Wild & Adrenaline",
    duration: "11 Hours",
    location: "Nusa Penida Island",
    priceIDR: 1450000,
    priceUSD: 92,
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    highlights: ["Speedboat Return Tickets", "Kelingking T-Rex View", "Angel's Billabong", "Crystal Bay Swim"],
    capacity: "Up to 5 guests",
  },
  {
    slug: "uluwatu-sunset-culinary",
    title: "Golden Cliffside: Uluwatu & Jimbaran Feast",
    tagline: "Sea-cliff Kecak fire dance at sunset followed by a candlelit seafood dinner on the white sands of Jimbaran.",
    vibe: "sunset",
    vibeLabel: "Golden Hour",
    duration: "8 Hours",
    location: "Uluwatu & Jimbaran Bay",
    priceIDR: 750000,
    priceUSD: 48,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    highlights: ["Uluwatu Cliff Temple", "Sunset Kecak Fire Dance", "Jimbaran Beach Dinner", "Padang Padang Beach"],
    capacity: "Up to 5 guests",
  },
  {
    slug: "sidemen-culinary-trail",
    title: "Backroads & Spices: Sidemen Valley Table",
    tagline: "Wind through unspoiled emerald valleys of East Bali, visiting organic farms and heritage weaving villages.",
    vibe: "culinary",
    vibeLabel: "Hidden Culinary",
    duration: "10 Hours",
    location: "Sidemen, Karangasem",
    priceIDR: 950000,
    priceUSD: 62,
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["Sidemen Organic Farm Lunch", "Traditional Songket Weaving", "Gembleng Natural Rock Pools", "Mount Agung Lookout"],
    capacity: "Up to 5 guests",
  },
  {
    slug: "batur-sunrise-jeep",
    title: "Volcano Dawn: Mount Batur 4WD Black Lava",
    tagline: "Witness sunrise over the volcanic caldera in an open-air 4x4 classic jeep, avoiding the exhausting midnight hike.",
    vibe: "adventure",
    vibeLabel: "Wild & Adrenaline",
    duration: "7 Hours",
    location: "Kintamani Highlands",
    priceIDR: 1100000,
    priceUSD: 72,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    highlights: ["4WD Classic Jeep Sunrise", "Black Lava Field Drive", "Floating Lake Temple", "Caldera Coffee Breakfast"],
    capacity: "Up to 4 guests / jeep",
  },
  {
    slug: "north-bali-waterfalls",
    title: "Highland Eden: Ulun Danu & Sekumpul Falls",
    tagline: "Journey to the misty northern rim of Bali, exploring iconic lake temples and the most powerful waterfall complex.",
    vibe: "spiritual",
    vibeLabel: "Slow & Spiritual",
    duration: "10 Hours",
    location: "Bedugul & Singaraja",
    priceIDR: 1050000,
    priceUSD: 68,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    highlights: ["Ulun Danu Beratan Lake Temple", "Sekumpul Twin Falls", "Wanagiri Hidden Hill", "Handara Iconic Gate"],
    capacity: "Up to 5 guests",
  },
];
