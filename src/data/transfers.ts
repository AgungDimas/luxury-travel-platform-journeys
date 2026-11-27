export interface TransferZone {
  id: string;
  zone: string;
  areas: string;
  duration: string;
  priceUSD: number;
  priceIDR: number;
  popular?: boolean;
}

export const TRANSFER_ZONES: TransferZone[] = [
  {
    id: "south-beach",
    zone: "Kuta, Legian & Seminyak",
    areas: "Ngurah Rai (DPS) ↔ Seminyak, Kerobokan, Legian, Kuta",
    duration: "25–45 mins",
    priceUSD: 18,
    priceIDR: 275000,
    popular: true,
  },
  {
    id: "nusa-dua-jimbaran",
    zone: "Jimbaran & Nusa Dua",
    areas: "Ngurah Rai (DPS) ↔ Jimbaran Bay, Tanjung Benoa, Nusa Dua",
    duration: "25–40 mins",
    priceUSD: 20,
    priceIDR: 300000,
  },
  {
    id: "canggu-pererenan",
    zone: "Canggu, Berawa & Pererenan",
    areas: "Ngurah Rai (DPS) ↔ Berawa, Batu Bolong, Pererenan, Cemagi",
    duration: "45–75 mins",
    priceUSD: 24,
    priceIDR: 375000,
    popular: true,
  },
  {
    id: "sanur-denpasar",
    zone: "Sanur & Harbor Transfer",
    areas: "Ngurah Rai (DPS) ↔ Sanur Beach Resorts & Fast Boat Harbor",
    duration: "30–45 mins",
    priceUSD: 18,
    priceIDR: 275000,
  },
  {
    id: "uluwatu-ungasan",
    zone: "Uluwatu, Bingin & Ungasan",
    areas: "Ngurah Rai (DPS) ↔ Pecatu, Bingin, Padang Padang, Uluwatu Cliffs",
    duration: "45–65 mins",
    priceUSD: 25,
    priceIDR: 390000,
  },
  {
    id: "ubud-central",
    zone: "Ubud & Tegalalang",
    areas: "Ngurah Rai (DPS) ↔ Ubud Center, Sayan, Mas, Tegalalang",
    duration: "75–100 mins",
    priceUSD: 30,
    priceIDR: 450000,
    popular: true,
  },
];
