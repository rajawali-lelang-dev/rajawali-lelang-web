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
    image: "/images/products/mesin/mesin1.jpg",
  },
  {
    id: "MS2",
    title: "Generator Cummins 500 KVA",
    type: "Generator",
    brand: "Cummins",
    model: "C550D5",
    year: 2020,
    condition: "Bekas - Baik",
    capacity: "500 KVA",
    hoursUsed: 3800,
    location: "Tangerang",
    provinsi: "Banten",
    kota: "Tangerang",
    price: 450000000,
    description:
      "Generator Cummins 500 KVA, mesin diesel, silent type, automatic start, cocok untuk pabrik atau gedung perkantoran.",
    status: "Available",
    image: "/images/products/mesin/mesin1.jpg",
  },
  {
    id: "MS3",
    title: "Forklift Toyota 3 Ton",
    type: "Forklift",
    brand: "Toyota",
    model: "8FG30",
    year: 2019,
    condition: "Bekas - Sangat Baik",
    capacity: "3 Ton",
    hoursUsed: 2100,
    location: "Cakung, Jakarta Timur",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Timur",
    price: 185000000,
    description:
      "Forklift Toyota 3 ton diesel, lifting height 4.5m, side shift, fork positioner, kondisi sangat prima dan siap kerja.",
    status: "Available",
    image: "/images/products/mesin/mesin1.jpg",
  },
  {
    id: "MS4",
    title: "Kompresor Angin Atlas Copco",
    type: "Kompresor",
    brand: "Atlas Copco",
    model: "GA75",
    year: 2017,
    condition: "Bekas - Baik",
    capacity: "75 KW",
    hoursUsed: 8500,
    location: "Cikarang",
    provinsi: "Jawa Barat",
    kota: "Bekasi",
    price: 280000000,
    description:
      "Kompresor angin Atlas Copco GA75, screw type, oil-injected, tekanan 8 bar, cocok untuk industri manufaktur.",
    status: "Featured",
    image: "/images/products/mesin/mesin1.jpg",
  },
  {
    id: "MS5",
    title: "Crane Truck Hino Ranger 10 Ton",
    type: "Crane",
    brand: "Hino",
    model: "Ranger FM260JD",
    year: 2016,
    condition: "Bekas - Baik",
    capacity: "10 Ton",
    hoursUsed: 12000,
    location: "Jakarta Utara",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Utara",
    price: 650000000,
    description:
      "Crane truck Hino Ranger dengan kapasitas crane 10 ton, boom length 15m, kondisi mesin sehat, surat-surat lengkap.",
    status: "Available",
    image: "/images/products/mesin/mesin1.jpg",
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
    image: "/images/products/bulldozer.png",
    startPrice: 950000000,
    endPrice: 1200000000,
    batasWaktuLelang: "2025-11-25T00:00:00Z",
  },
  {
    id: "LMS2",
    title: "Wheel Loader Volvo L120G",
    type: "Alat Berat",
    brand: "Volvo",
    model: "L120G",
    year: 2017,
    condition: "Bekas - Sangat Baik",
    capacity: "5.5 m³",
    hoursUsed: 6800,
    location: "Tangerang",
    provinsi: "Banten",
    kota: "Tangerang",
    description:
      "Wheel loader Volvo L120G, bucket capacity 5.5 m³, AC cabin, joystick control, service record lengkap di Volvo.",
    status: "Lelang Aktif",
    image: "/images/products/wheel-loader.png",
    startPrice: 1100000000,
    endPrice: 1400000000,
    batasWaktuLelang: "2025-12-10T00:00:00Z",
  },
  {
    id: "LMS3",
    title: "Generator Set Perkins 1000 KVA",
    type: "Generator",
    brand: "Perkins",
    model: "4012-46TAG3A",
    year: 2019,
    condition: "Bekas - Baik",
    capacity: "1000 KVA",
    hoursUsed: 4500,
    location: "Jakarta Timur",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Timur",
    description:
      "Generator Perkins 1000 KVA, diesel engine, deep sea controller, automatic transfer switch, cocok untuk data center atau hospital.",
    status: "Lelang Segera",
    image: "/images/products/genset-perkins.png",
    startPrice: 750000000,
    endPrice: 950000000,
    batasWaktuLelang: "2025-10-28T00:00:00Z",
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