import { BaseItemDijual, BaseItemLelang } from './data';

// Mesin Type
export type MesinType = "Alat Berat" | "Mesin Industri" | "Generator" | "Kompresor" | "Forklift" | "Crane";
export type ConditionType = "Baru" | "Bekas - Sangat Baik" | "Bekas - Baik" | "Perlu Perbaikan";

// Mesin Interface - extends BaseItemDijual
export interface Mesin extends BaseItemDijual {
  type: MesinType;
  brand: string;
  model: string;
  year: number;
  condition: ConditionType;
  capacity?: string; // e.g., "5 Ton", "100 KVA"
  hoursUsed?: number; // jam operasi
  status: "Available" | "Featured" | "Sold";
}

// MesinLelang Interface - extends BaseItemLelang
export interface MesinLelang extends BaseItemLelang {
  type: MesinType;
  brand: string;
  model: string;
  year: number;
  condition: ConditionType;
  capacity?: string;
  hoursUsed?: number;
}

// Mock Data - Mesin (NON-LELANG)
export const mesins: Mesin[] = [
  {
    id: "MS1",
    title: "Excavator Komatsu PC200-8",
    type: "Alat Berat",
    brand: "Komatsu",
    model: "PC200-8",
    year: 2018,
    condition: "Bekas - Sangat Baik",
    capacity: "20 Ton",
    hoursUsed: 5200,
    location: "Bekasi",
    provinsi: "Jawa Barat",
    kota: "Bekasi",
    price: 850000000,
    description:
      "Excavator Komatsu PC200-8 tahun 2018, kondisi sangat terawat, service record lengkap, cocok untuk proyek konstruksi besar.",
    status: "Featured",
    image: ["/images/products/mesin/mesin1.jpg"],
  },
 
];

// Mock Data - Mesin Lelang
export const lelangMesins: MesinLelang[] = [
  {
    id: "LMS1",
    title: "Bulldozer Caterpillar D6R",
    type: "Alat Berat",
    brand: "Caterpillar",
    model: "D6R",
    year: 2015,
    condition: "Bekas - Sangat Baik",
    capacity: "18 Ton",
    hoursUsed: 8200,
    location: "Karawang",
    provinsi: "Jawa Barat",
    kota: "Karawang",
    description:
      "Bulldozer Caterpillar D6R tahun 2015, blade VPAT, ripper, undercarriage 70%, cocok untuk land clearing atau mining.",
    status: "Lelang Aktif",
    image: ["/images/products/bulldozer.png"],
    startPrice: 950000000,
    endPrice: 1200000000,
    tanggalLelang: "2025-11-17T09:00:00+07:00",
    batasWaktuLelang: "2025-11-16T17:00:00+07:00",
  },
 
];

// Helper functions
export const getMesinTypes = (): MesinType[] => {
  return ["Alat Berat", "Mesin Industri", "Generator", "Kompresor", "Forklift", "Crane"];
};

export const getUniqueMesinBrands = (): string[] => {
  const allBrands = [
    ...mesins.map(m => m.brand),
    ...lelangMesins.map(m => m.brand)
  ];
  return Array.from(new Set(allBrands)).sort();
};