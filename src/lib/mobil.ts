import { BaseItemDijual, BaseItemLelang } from './data';

// Mobil Type
export type MobilType = "Sedan" | "SUV" | "MPV" | "Hatchback" | "Pickup" | "Sport";
export type TransmissionType = "Manual" | "Automatic" | "CVT";
export type FuelType = "Bensin" | "Diesel" | "Hybrid" | "Electric";

// Mobil Interface - extends BaseItemDijual
export interface Mobil extends BaseItemDijual {
  type: MobilType;
  brand: string;
  model: string;
  year: number;
  mileage: number; // km
  transmission: TransmissionType;
  fuelType: FuelType;
  color: string;
  engineCapacity: number; // cc
  status: "Available" | "Featured" | "Sold";
}

// MobilLelang Interface - extends BaseItemLelang
export interface MobilLelang extends BaseItemLelang {
  type: MobilType;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  transmission: TransmissionType;
  fuelType: FuelType;
  color: string;
  engineCapacity: number;
}

// Mock Data - Mobil (NON-LELANG)
export const mobils: Mobil[] = [
  {
    id: "M1",
    title: "Toyota Avanza 1.3 G MT",
    type: "MPV",
    brand: "Toyota",
    model: "Avanza",
    year: 2020,
    location: "Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    price: 185000000,
    mileage: 45000,
    transmission: "Manual",
    fuelType: "Bensin",
    color: "Silver Metalik",
    engineCapacity: 1300,
    description:
      "Toyota Avanza 2020 kondisi istimewa, service record resmi Toyota, interior bersih dan terawat. Pajak panjang, siap pakai.",
    status: "Available",
    image: ["/images/products/mobil/porsche.jpeg"] ,
  },
  {
    id: "M2",
    title: "Honda CR-V 1.5 Turbo Prestige",
    type: "SUV",
    brand: "Honda",
    model: "CR-V",
    year: 2019,
    location: "Tangerang Selatan",
    provinsi: "Banten",
    kota: "Tangerang Selatan",
    price: 450000000,
    mileage: 35000,
    transmission: "CVT",
    fuelType: "Bensin",
    color: "Putih Mutiara",
    engineCapacity: 1500,
    description:
      "Honda CR-V Turbo 2019 full original, tidak bekas tabrakan, ban baru semua, interior seperti baru. Full option dengan sunroof.",
    status: "Featured",
    image: ["/images/products/mobil/porsche.jpeg"],
  },
  {
    id: "M3",
    title: "Mitsubishi Pajero Sport Dakar 4x2",
    type: "SUV",
    brand: "Mitsubishi",
    model: "Pajero Sport",
    year: 2018,
    location: "Bogor",
    provinsi: "Jawa Barat",
    kota: "Bogor",
    price: 380000000,
    mileage: 68000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Hitam",
    engineCapacity: 2400,
    description:
      "Pajero Sport Dakar 2018 matic diesel, sangat irit dan bertenaga. Service rutin di bengkel resmi, kondisi mesin prima.",
    status: "Available",
    image: ["/images/products/mobil/porsche.jpeg"],
  },
  
];

// Mock Data - Mobil Lelang
export const lelangMobils: MobilLelang[] = [
  {
    id: "LM1",
    title: "BMW 320i Sport",
    type: "Sedan",
    brand: "BMW",
    model: "320i",
    year: 2019,
    location: "Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    mileage: 42000,
    transmission: "Automatic",
    fuelType: "Bensin",
    color: "Hitam",
    engineCapacity: 2000,
    description:
      "BMW 320i Sport 2019 full spec, interior M Sport package, kondisi sangat terawat, service record lengkap di BMW Astra.",
    status: "Lelang Aktif",
    image: ["/images/products/mobil-bmw.png"],
    startPrice: 450000000,
    endPrice: 580000000,
    tanggalLelang: "2025-11-10T10:00:00+07:00",
    batasWaktuLelang: "2025-11-09T17:00:00+07:00",
  },
];

// Helper functions
export const getMobilTypes = (): MobilType[] => {
  return ["Sedan", "SUV", "MPV", "Hatchback", "Pickup", "Sport"];
};

export const getUniqueBrands = (): string[] => {
  const allBrands = [
    ...mobils.map(m => m.brand),
    ...lelangMobils.map(m => m.brand)
  ];
  return Array.from(new Set(allBrands)).sort();
};