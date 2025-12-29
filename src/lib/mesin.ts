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
 
 
];

// Mock Data - Mesin Lelang
export const lelangMesins: MesinLelang[] = [
  
 
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