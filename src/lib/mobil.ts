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
  
  
];

// Mock Data - Mobil Lelang
export const lelangMobils: MobilLelang[] = [

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