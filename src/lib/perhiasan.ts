import { BaseItemDijual, BaseItemLelang } from './data';

// Perhiasan Type
export type PerhiasanType = "Cincin" | "Kalung" | "Gelang" | "Anting" | "Bros" | "Liontin";
export type MaterialType = "Emas" | "Perak" | "Platinum" | "Berlian" | "Mutiara" | "Batu Permata";

// Perhiasan Interface - extends BaseItemDijual
export interface Perhiasan extends BaseItemDijual {
  type: PerhiasanType;
  material: MaterialType;
  weight: number; // gram
  karat?: number; // untuk emas
  gemstone?: string; // jenis batu permata
  brand?: string;
  condition: "Baru" | "Bekas - Sangat Baik" | "Bekas - Baik" | "Antik";
  status: "Available" | "Featured" | "Sold";
}

// PerhiasanLelang Interface - extends BaseItemLelang
export interface PerhiasanLelang extends BaseItemLelang {
  type: PerhiasanType;
  material: MaterialType;
  weight: number;
  karat?: number;
  gemstone?: string;
  brand?: string;
  condition: "Baru" | "Bekas - Sangat Baik" | "Bekas - Baik" | "Antik";
}

// Mock Data - Perhiasan (NON-LELANG)
export const perhiasans: Perhiasan[] = [

 
];

// Mock Data - Perhiasan Lelang
export const lelangPerhiasans: PerhiasanLelang[] = [

];

// Helper functions
export const getPerhiasanTypes = (): PerhiasanType[] => {
  return ["Cincin", "Kalung", "Gelang", "Anting", "Bros", "Liontin"];
};

export const getMaterialTypes = (): MaterialType[] => {
  return ["Emas", "Perak", "Platinum", "Berlian", "Mutiara", "Batu Permata"];
};