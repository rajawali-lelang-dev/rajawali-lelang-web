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
    image: "/images/products/perhiasan/perhiasan1.jpg",
  },
  {
    id: "P2",
    title: "Kalung Emas Kuning 24K",
    type: "Kalung",
    material: "Emas",
    weight: 15,
    karat: 24,
    condition: "Baru",
    location: "Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    price: 18500000,
    description:
      "Kalung emas 24 karat murni, berat 15 gram, design klasik dan elegan. Cocok untuk investasi atau koleksi pribadi.",
    status: "Available",
    image: "/images/products/perhiasan/perhiasan1.jpg",
  },
  {
    id: "P3",
    title: "Gelang Mutiara Air Tawar Premium",
    type: "Gelang",
    material: "Mutiara",
    weight: 8,
    condition: "Baru",
    location: "Jakarta Utara",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Utara",
    price: 12000000,
    description:
      "Gelang mutiara air tawar grade AAA, ukuran 8-9mm, warna putih natural dengan kilau sempurna. Kualitas export dengan sertifikat keaslian.",
    status: "Available",
    image: "/images/products/perhiasan/perhiasan1.jpg",
  },
  {
    id: "P4",
    title: "Anting Berlian Emas Putih",
    type: "Anting",
    material: "Berlian",
    weight: 2.5,
    karat: 18,
    gemstone: "Berlian 0.3 ct",
    condition: "Baru",
    location: "Tangerang Selatan",
    provinsi: "Banten",
    kota: "Tangerang Selatan",
    price: 28000000,
    description:
      "Anting berlian emas putih 18 karat, total berlian 0.3 karat, design modern dan elegan, cocok untuk acara formal.",
    status: "Featured",
    image: "/images/products/perhiasan/perhiasan1.jpg",
  },
  {
    id: "P5",
    title: "Bros Antik Perak dengan Batu Safir",
    type: "Bros",
    material: "Perak",
    weight: 12,
    gemstone: "Safir",
    condition: "Antik",
    location: "Bogor",
    provinsi: "Jawa Barat",
    kota: "Bogor",
    price: 15000000,
    description:
      "Bros antik dari era 1920an, perak sterling dengan batu safir natural. Kondisi sangat baik, cocok untuk kolektor atau pecinta barang antik.",
    status: "Available",
    image: "/images/products/perhiasan/perhiasan1.jpg",
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
    image: "/images/products/perhiasan/perhiasan1.jpg",
    startPrice: 120000000,
    endPrice: 180000000,
    tanggalLelang: "2025-11-13T13:00:00+07:00",
    batasWaktuLelang: "2025-11-12T17:00:00+07:00",
  },
  {
    id: "LP2",
    title: "Cincin Zamrud Colombia 2 Karat",
    type: "Cincin",
    material: "Batu Permata",
    weight: 4,
    karat: 18,
    gemstone: "Zamrud 2 ct",
    condition: "Baru",
    location: "Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    description:
      "Cincin zamrud Colombia 2 karat natural, warna hijau vivid, clarity VVS, setting emas kuning 18k dengan accent berlian.",
    status: "Lelang Aktif",
    image: "/images/products/cincin-zamrud.png",
    startPrice: 250000000,
    endPrice: 350000000,
    tanggalLelang: "2025-11-20T10:00:00+07:00",
    batasWaktuLelang: "2025-11-19T17:00:00+07:00",
  },
  {
    id: "LP3",
    title: "Set Perhiasan Bvlgari Serpenti",
    type: "Kalung",
    material: "Emas",
    weight: 25,
    karat: 18,
    brand: "Bvlgari",
    condition: "Bekas - Sangat Baik",
    location: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    description:
      "Set perhiasan Bvlgari Serpenti (kalung + gelang), emas 18k dengan detail enamel, design iconic, kondisi istimewa dengan box original.",
    status: "Lelang Segera",
    image: "/images/products/bvlgari-set.png",
    startPrice: 180000000,
    endPrice: 250000000,
    tanggalLelang: "2025-11-06T15:00:00+07:00",
    batasWaktuLelang: "2025-11-05T17:00:00+07:00",
  },
];

// Helper functions
export const getPerhiasanTypes = (): PerhiasanType[] => {
  return ["Cincin", "Kalung", "Gelang", "Anting", "Bros", "Liontin"];
};

export const getMaterialTypes = (): MaterialType[] => {
  return ["Emas", "Perak", "Platinum", "Berlian", "Mutiara", "Batu Permata"];
};