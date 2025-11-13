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
  {
    id: "P1",
    title: "Cincin Berlian Solitaire 0.5 Karat",
    type: "Cincin",
    material: "Berlian",
    weight: 3.5,
    karat: 18,
    gemstone: "Berlian 0.5 ct",
    brand: "Tiffany & Co",
    condition: "Baru",
    location: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    price: 85000000,
    description:
      "Cincin berlian solitaire 0.5 karat dari Tiffany & Co, setting platinum, sertifikat GIA, cocok untuk tunangan atau hadiah spesial.",
    status: "Featured",
    image: ["/images/products/perhiasan/perhiasan1.jpg"],
  },
 
];

// Mock Data - Perhiasan Lelang
export const lelangPerhiasans: PerhiasanLelang[] = [
  {
    id: "LP1",
    title: "Kalung Berlian Cartier Love",
    type: "Kalung",
    material: "Berlian",
    weight: 5,
    karat: 18,
    gemstone: "Berlian 1.2 ct",
    brand: "Cartier",
    condition: "Bekas - Sangat Baik",
    location: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    description:
      "Kalung Cartier Love dengan berlian total 1.2 karat, emas putih 18k, kondisi 95% seperti baru, box dan sertifikat lengkap.",
    status: "Lelang Aktif",
    image: ["/images/products/perhiasan/perhiasan1.jpg"],
    startPrice: 120000000,
    endPrice: 180000000,
    tanggalLelang: "2025-11-13T13:00:00+07:00",
    batasWaktuLelang: "2025-11-12T17:00:00+07:00",
  },

];

// Helper functions
export const getPerhiasanTypes = (): PerhiasanType[] => {
  return ["Cincin", "Kalung", "Gelang", "Anting", "Bros", "Liontin"];
};

export const getMaterialTypes = (): MaterialType[] => {
  return ["Emas", "Perak", "Platinum", "Berlian", "Mutiara", "Batu Permata"];
};