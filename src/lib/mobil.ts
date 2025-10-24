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
    image: "/images/products/mobil-avanza.png",
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
    image: "/images/products/mobil-crv.png",
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
    image: "/images/products/mobil-pajero.png",
  },
  {
    id: "M4",
    title: "Mazda CX-5 Elite 2.5L",
    type: "SUV",
    brand: "Mazda",
    model: "CX-5",
    year: 2021,
    location: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    price: 520000000,
    mileage: 18000,
    transmission: "Automatic",
    fuelType: "Bensin",
    color: "Merah Soul",
    engineCapacity: 2500,
    description:
      "Mazda CX-5 Elite 2021 seperti baru, km rendah, full service record Mazda, interior kulit asli sangat mewah. Bonus asuransi 1 tahun.",
    status: "Featured",
    image: "/images/products/mobil-cx5.png",
  },
  {
    id: "M5",
    title: "Daihatsu Terios X MT",
    type: "SUV",
    brand: "Daihatsu",
    model: "Terios",
    year: 2017,
    location: "Depok",
    provinsi: "Jawa Barat",
    kota: "Depok",
    price: 155000000,
    mileage: 78000,
    transmission: "Manual",
    fuelType: "Bensin",
    color: "Abu-abu Metalik",
    engineCapacity: 1500,
    description:
      "Daihatsu Terios 2017 manual, cocok untuk harian atau adventure. Mesin sehat, kaki-kaki empuk, AC dingin. Harga nego.",
    status: "Available",
    image: "/images/products/mobil-terios.png",
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
    image: "/images/products/mobil-bmw.png",
    startPrice: 450000000,
    endPrice: 580000000,
    batasWaktuLelang: "2025-11-15T00:00:00Z",
  },
  {
    id: "LM2",
    title: "Mercedes-Benz C200 AMG",
    type: "Sedan",
    brand: "Mercedes-Benz",
    model: "C200",
    year: 2020,
    location: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    mileage: 28000,
    transmission: "Automatic",
    fuelType: "Bensin",
    color: "Putih",
    engineCapacity: 2000,
    description:
      "Mercedes-Benz C200 AMG Line 2020, km rendah, full original, panoramic sunroof, memory seat, burmester sound system.",
    status: "Lelang Aktif",
    image: "/images/products/mobil-mercy.png",
    startPrice: 600000000,
    endPrice: 750000000,
    batasWaktuLelang: "2025-12-01T00:00:00Z",
  },
  {
    id: "LM3",
    title: "Toyota Fortuner VRZ 4x2",
    type: "SUV",
    brand: "Toyota",
    model: "Fortuner",
    year: 2018,
    location: "Tangerang",
    provinsi: "Banten",
    kota: "Tangerang",
    mileage: 55000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Abu-abu Metalik",
    engineCapacity: 2400,
    description:
      "Toyota Fortuner VRZ 2018 diesel matic, sangat irit dan bertenaga, interior rapi, body mulus tanpa lecet.",
    status: "Lelang Segera",
    image: "/images/products/mobil-fortuner.png",
    startPrice: 350000000,
    endPrice: 420000000,
    batasWaktuLelang: "2025-10-30T00:00:00Z",
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