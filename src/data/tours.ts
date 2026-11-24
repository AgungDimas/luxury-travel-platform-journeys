export type Vibe = "all" | "spiritual" | "adventure" | "culinary" | "sunset";

export interface ItineraryItem {
  time: string;
  title: string;
  desc: string;
}

export interface Tour {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  vibe: Exclude<Vibe, "all">;
  vibeLabel: string;
  duration: string;
  location: string;
  priceIDR: number;
  priceUSD: number;
  image: string;
  gallery: string[];
  featured?: boolean;
  highlights: string[];
  capacity: string;
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
  whatToBring: string[];
}

export const TOURS: Tour[] = [
  {
    slug: "ubud-spiritual-escape",
    title: "Mist & Mantras: Hidden Ubud Sanctuaries",
    tagline: "Sacred Tirta Empul water purification, secluded jungle ravine waterfalls, and artisan coffee plantations.",
    description:
      "Escape the tourist buses and step into the serene soul of Bali. This carefully paced journey begins with an early-morning water purification ceremony (Melukat) at the ancient spring of Tirta Empul before the mid-day heat. Follow secluded backroads through verdant emerald valleys to Tibumana Waterfall, hidden deep within a jungle ravine. Savor an organic lunch overlooking terraced rice paddies and finish with freshly roasted Balinese coffee at a boutique hill plantation.",
    vibe: "spiritual",
    vibeLabel: "Slow & Spiritual",
    duration: "9 Hours",
    location: "Tampaksiring & Ubud",
    priceIDR: 850000,
    priceUSD: 55,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    highlights: ["Tirta Empul Holy Spring", "Tibumana Waterfall", "Tegalalang Rice Terraces", "Artisan Coffee Tasting"],
    capacity: "Up to 5 guests",
    itinerary: [
      {
        time: "08:00 AM",
        title: "Private Hotel Pickup",
        desc: "Your dedicated English-speaking driver meets you at your villa/hotel lobby in a clean, chilled private AC vehicle.",
      },
      {
        time: "09:15 AM",
        title: "Tirta Empul Temple & Melukat Cleansing",
        desc: "Participate in a centuries-old Balinese spiritual purification ceremony amidst sacred bubbling natural springs.",
      },
      {
        time: "11:30 AM",
        title: "Tibumana Waterfall Jungle Walk",
        desc: "A gentle 10-minute bamboo path leads to this hidden, misty jungle waterfall with a calm natural swimming pool.",
      },
      {
        time: "01:00 PM",
        title: "Organic Valley View Lunch (Optional)",
        desc: "Dine at an open-air pavilion overlooking the serene Tegalalang terraces with fresh Balinese and Western options.",
      },
      {
        time: "02:45 PM",
        title: "Heritage Coffee & Herbal Plantation",
        desc: "Walk through shaded spice gardens and taste organic Balinese coffee, lemongrass tea, and cocoa.",
      },
      {
        time: "05:00 PM",
        title: "Comfortable Return Transfer",
        desc: "Relax with chilled towels and cold mineral water as your driver drops you right back at your accommodation.",
      },
    ],
    included: [
      "Private air-conditioned vehicle (Toyota Innova)",
      "Dedicated licensed English-speaking Balinese driver-guide",
      "All vehicle fuel, road tolls, and parking fees",
      "Complimentary chilled bottled water and cold towels",
      "Traditional sarong & sash loan for temple entry",
      "Flexible stop durations (no rushed departures)",
    ],
    excluded: [
      "Temple and attraction admission tickets (approx. $5 - $8 per person)",
      "Lunch and personal cafe expenses",
      "Gratuities for driver (optional)",
    ],
    whatToBring: [
      "Comfortable walking sandals or sneakers",
      "Swimwear and dry towel for waterfall swim",
      "Change of dry clothes after water blessing",
      "Sun protection (sunglasses, eco-friendly sunscreen)",
      "Cash (IDR) for local temple entry tickets & artisan snacks",
    ],
  },
  {
    slug: "nusa-penida-west-private",
    title: "Cliffs & Coves: Private West Nusa Penida",
    tagline: "Experience Kelingking cliff edge, Angel's Billabong, and Broken Beach with your dedicated island captain.",
    description:
      "Cross the Badung Strait on a high-speed catamaran and explore the dramatic limestone cliffs of West Nusa Penida. Marvel at the world-famous T-Rex cliff of Kelingking Beach from pristine viewpoints, photograph the natural infinity arch of Broken Beach, and cool off with a swim at Crystal Bay.",
    vibe: "adventure",
    vibeLabel: "Wild & Adrenaline",
    duration: "11 Hours",
    location: "Nusa Penida Island",
    priceIDR: 1450000,
    priceUSD: 92,
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    highlights: ["Speedboat Return Tickets", "Kelingking T-Rex View", "Angel's Billabong", "Crystal Bay Swim"],
    capacity: "Up to 5 guests",
    itinerary: [
      {
        time: "06:30 AM",
        title: "Sanur Harbor Transfer",
        desc: "Morning pickup from your hotel and swift boarding for the 35-minute express speedboat ride.",
      },
      {
        time: "08:45 AM",
        title: "Kelingking Beach T-Rex Cliff Edge",
        desc: "Stand above the iconic turquoise waters and white sand cove of Bali's most dramatic sea cliff.",
      },
      {
        time: "11:30 AM",
        title: "Broken Beach & Angel's Billabong",
        desc: "Walk along the natural limestone bridge and view the emerald green tidal pool carved by the ocean.",
      },
      {
        time: "01:30 PM",
        title: "Island Cliffside Lunch",
        desc: "Enjoy fresh local dishes and fresh coconut with a panoramic ocean breeze.",
      },
      {
        time: "03:00 PM",
        title: "Crystal Bay Coastal Relaxation",
        desc: "Swim or unwind beneath palm groves on one of Nusa Penida's gentlest calm beaches.",
      },
      {
        time: "04:30 PM",
        title: "Return Speedboat to Bali Mainland",
        desc: "Board the return speedboat back to Sanur and private transfer to your hotel.",
      },
    ],
    included: [
      "Return express speedboat tickets (Sanur - Nusa Penida)",
      "Private AC vehicle on the island with local island driver",
      "Mainland hotel pickup and drop-off in South Bali",
      "All island entrance fees and parking",
      "Chilled bottled water throughout the day",
    ],
    excluded: ["Lunch and beverages", "Snorkeling equipment rental", "Personal souvenirs"],
    whatToBring: ["Sun hat, sunglasses, and high-SPF sunscreen", "Beach towel and swimwear", "Motion sickness pills if sensitive to boats", "Comfortable footwear for walking"],
  },
  {
    slug: "uluwatu-sunset-culinary",
    title: "Golden Cliffside: Uluwatu & Jimbaran Feast",
    tagline: "Sea-cliff Kecak fire dance at sunset followed by a candlelit seafood dinner on the white sands of Jimbaran.",
    description:
      "A quintessential Bali evening on the southern Bukit Peninsula. Visit secluded Padang Padang surf cove in the afternoon, explore Uluwatu Temple perched 70 meters above churning ocean waves, and watch the hypnotic Kecak Fire Dance as the sun melts into the Indian Ocean.",
    vibe: "sunset",
    vibeLabel: "Golden Hour",
    duration: "8 Hours",
    location: "Uluwatu & Jimbaran Bay",
    priceIDR: 750000,
    priceUSD: 48,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: false,
    highlights: ["Uluwatu Cliff Temple", "Sunset Kecak Fire Dance", "Jimbaran Beach Dinner", "Padang Padang Beach"],
    capacity: "Up to 5 guests",
    itinerary: [
      {
        time: "01:30 PM",
        title: "Mid-day Hotel Pickup",
        desc: "Relaxed afternoon departure heading south towards the dramatic limestone cliffs of Uluwatu.",
      },
      {
        time: "03:00 PM",
        title: "Padang Padang Surf Beach",
        desc: "Descend through a natural rock fissure into a pristine cove famous for world-class surf breaks.",
      },
      {
        time: "04:45 PM",
        title: "Uluwatu Sea Temple Walk",
        desc: "Stroll along the cliff-edge pathway with endless Indian Ocean views as resident monkeys play in the canopy.",
      },
      {
        time: "06:00 PM",
        title: "Kecak Fire & Trance Dance",
        desc: "Experience the electrifying chanting of 50+ performers as the sunset casts fiery red hues across the sky.",
      },
      {
        time: "07:45 PM",
        title: "Candlelit Jimbaran Seafood Dinner",
        desc: "Feast on grilled red snapper, calamari, and prawns with your feet in the warm sand by the sea.",
      },
      {
        time: "09:30 PM",
        title: "Return Transfer",
        desc: "Smooth drive back to your hotel or villa.",
      },
    ],
    included: [
      "Private AC vehicle & English-speaking driver",
      "All vehicle fuel, parking, and toll fees",
      "Chilled bottled water throughout the trip",
      "Sarong for temple entrance",
    ],
    excluded: [
      "Uluwatu Temple entry ticket ($3) & Kecak Dance ticket ($10)",
      "Dinner bill at Jimbaran seafood restaurant",
    ],
    whatToBring: ["Light airy clothing", "Camera or smartphone for sunset shots", "Sunglasses"],
  },
  {
    slug: "sidemen-culinary-trail",
    title: "Backroads & Spices: Sidemen Valley Table",
    tagline: "Wind through unspoiled emerald valleys of East Bali, visiting organic farms and heritage weaving villages.",
    description:
      "Step back in time to the authentic, quiet Bali of decades ago. Sidemen is a lush agricultural valley flanked by Mount Agung, where traditional Songket textile weavers still work on wooden looms and quiet natural rock pools offer refreshing crystal-clear mountain water.",
    vibe: "culinary",
    vibeLabel: "Hidden Culinary",
    duration: "10 Hours",
    location: "Sidemen, Karangasem",
    priceIDR: 950000,
    priceUSD: 62,
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    highlights: ["Sidemen Organic Farm Lunch", "Traditional Songket Weaving", "Gembleng Natural Rock Pools", "Mount Agung Lookout"],
    capacity: "Up to 5 guests",
    itinerary: [
      {
        time: "08:00 AM",
        title: "Scenic East Bali Drive",
        desc: "Depart through rural villages with Mount Agung looming dramatically on the eastern horizon.",
      },
      {
        time: "09:45 AM",
        title: "Gembleng Waterfall Rock Pools",
        desc: "Soak in a natural infinity rock pool high above the forest canopy with sweeping valley views.",
      },
      {
        time: "11:45 AM",
        title: "Traditional Songket Weaving Atelier",
        desc: "Meet local Balinese craftswomen weaving gold and silk ceremonial textiles by hand.",
      },
      {
        time: "01:00 PM",
        title: "Farm-to-Table Balinese Feast",
        desc: "Dine on organic heirloom recipes cooked with hand-ground spices and organic produce grown on the valley slopes.",
      },
      {
        time: "03:30 PM",
        title: "Tukad Unda River & Bamboo Bridge",
        desc: "A peaceful walk along the riverbanks surrounded by rice terraces with zero commercial tour buses.",
      },
      {
        time: "06:00 PM",
        title: "Return to Hotel",
        desc: "Chilled water and relaxing drive back to your resort.",
      },
    ],
    included: ["Private dedicated AC vehicle & driver", "All fuel, road tolls, and parking", "Bottled mineral water", "Cultural weaving atelier visit"],
    excluded: ["Lunch at farm-to-table restaurant", "Waterfall entry donation ($2)", "Personal shopping"],
    whatToBring: ["Light walking footwear", "Swimwear for natural rock pools", "Dry towel", "Camera"],
  },
  {
    slug: "batur-sunrise-jeep",
    title: "Volcano Dawn: Mount Batur 4WD Black Lava",
    tagline: "Witness sunrise over the volcanic caldera in an open-air 4x4 classic jeep, avoiding the exhausting midnight hike.",
    description:
      "Skip the steep 3-hour midnight hike and experience Mount Batur's sunrise in style. Ride a classic 4WD Jeep through rugged volcanic terrain to a private caldera viewpoint at 1,365m above sea level, followed by an exhilarating drive across the 1968 black lava fields.",
    vibe: "adventure",
    vibeLabel: "Wild & Adrenaline",
    duration: "7 Hours",
    location: "Kintamani Highlands",
    priceIDR: 1100000,
    priceUSD: 72,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    highlights: ["4WD Classic Jeep Sunrise", "Black Lava Field Drive", "Floating Lake Temple", "Caldera Coffee Breakfast"],
    capacity: "Up to 4 guests / jeep",
    itinerary: [
      {
        time: "03:30 AM",
        title: "Early Morning Hotel Pickup",
        desc: "Travel comfortably in a private AC car to the basecamp at Kintamani caldera.",
      },
      {
        time: "05:00 AM",
        title: "4x4 Custom Jeep Departure",
        desc: "Transfer into your dedicated open-roof 4WD jeep and navigate volcanic trails to the sunrise point.",
      },
      {
        time: "05:45 AM",
        title: "Volcano Sunrise & Breakfast",
        desc: "Watch golden rays illuminate Mount Abang and Mount Rinjani with hot coffee, tea, and warm pastries.",
      },
      {
        time: "07:15 AM",
        title: "Black Lava Field Exploration",
        desc: "Drive through surreal, jagged black lava flows formed by historic volcanic eruptions.",
      },
      {
        time: "09:30 AM",
        title: "Kintamani Panoramic Cafe Stop",
        desc: "Enjoy specialty Arabica coffee overlooking the entire crater lake before returning.",
      },
      {
        time: "11:30 AM",
        title: "Hotel Return",
        desc: "Arrive back in time for lunch and afternoon relaxation by your pool.",
      },
    ],
    included: [
      "Private return transfer from your hotel to Kintamani",
      "4WD Classic Jeep & licensed local mountain driver",
      "Kintamani volcanic caldera entry fees",
      "Light breakfast and hot coffee/tea at sunrise point",
      "Bottled mineral water",
    ],
    excluded: ["Additional cafe orders", "Hot spring entry (optional add-on $10)"],
    whatToBring: ["Warm jacket or hoodie (it is 15°C at dawn!)", "Comfortable closed shoes", "Camera / phone with full battery"],
  },
  {
    slug: "north-bali-waterfalls",
    title: "Highland Eden: Ulun Danu & Sekumpul Falls",
    tagline: "Journey to the misty northern rim of Bali, exploring iconic lake temples and the most powerful waterfall complex.",
    description:
      "Traverse the scenic northern mountain spine of Bali. Visit the iconic Ulun Danu Beratan water temple floating on misty Lake Beratan, pause at the Wanagiri viewpoint overlooking twin crater lakes, and trek through lush clove groves to witness Sekumpul—widely heralded as the grandest waterfall on the island.",
    vibe: "spiritual",
    vibeLabel: "Slow & Spiritual",
    duration: "10 Hours",
    location: "Bedugul & Singaraja",
    priceIDR: 1050000,
    priceUSD: 68,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    highlights: ["Ulun Danu Beratan Lake Temple", "Sekumpul Twin Falls", "Wanagiri Hidden Hill", "Handara Iconic Gate"],
    capacity: "Up to 5 guests",
    itinerary: [
      {
        time: "07:30 AM",
        title: "Northward Mountain Drive",
        desc: "Ascend past fruit orchards and strawberry farms into the cool highlands of Bedugul.",
      },
      {
        time: "09:00 AM",
        title: "Ulun Danu Beratan Water Temple",
        desc: "Admire the 17th-century 11-tiered meru shrine seemingly floating on the surface of Lake Beratan.",
      },
      {
        time: "10:30 AM",
        title: "Twin Lakes Viewpoint & Handara Gate",
        desc: "Quick photo stops at the dramatic misty Handara gate and the panoramic ridge overlooking Buyan & Tamblingan lakes.",
      },
      {
        time: "12:00 PM",
        title: "Sekumpul Majestic Falls Trek",
        desc: "Guided walk down through clove plantations to stand before the thunderous 80-meter dual cascades.",
      },
      {
        time: "02:30 PM",
        title: "Highland Lunch Pavilion",
        desc: "Relax with local Balinese specialties and cool mountain air.",
      },
      {
        time: "05:30 PM",
        title: "Comfortable Evening Return",
        desc: "Smooth journey back to South Bali or Ubud.",
      },
    ],
    included: ["Private dedicated AC vehicle & driver", "All fuel, parking, and toll fees", "Bottled mineral water", "Temple sarong loan"],
    excluded: ["Sekumpul local trek guide & entry ticket ($10)", "Ulun Danu temple ticket ($5)", "Lunch & personal expenses"],
    whatToBring: ["Good trekking sandals or sneakers with grip", "Swimsuit & towel if swimming under falls", "Light windbreaker jacket", "Waterproof pouch for phone"],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}
