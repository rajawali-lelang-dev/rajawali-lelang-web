import { BaseItemDijual, BaseItemLelang } from './data';
import { getDriveImageUrl } from '@/lib/utils';

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
  {
    id: "RLI_ELM_3", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG MESIN-MESIN PERALATAN PRODUKSI",
    isHidden: true,
    type: "Mesin Industri",
    brand: "Berbagai Merek",
    model: "Paket Lini Produksi Tepung Tapioka",
    year: 2018,
    condition: "Bekas - Baik",
    location: "Desa Cahyou Randu, Kec. Pagar Dewa, Kab. Tulang Bawang Barat, Prov. Lampung",
    provinsi: "Lampung",
    kota: "Tulang Bawang Barat",
    description:
    `Mesin-mesin Peralatan Produksi
1. Stasiun Penerimaan Bahan Baku
- 1 Unit Root Hopper
- 2 Unit Belt Conveyor
2. Stasiun Proses Pembersihan dan Pengupasan
- 3 Unit Root Peeler
- 2 Unit Root Washer
- 1 Unit Belt Conveyor
- 1 Unit Root Peeler Sampah
3. Stasiun Proses Pemotongan dan Pencacahan
- 2 Unit Root Chooper
- 1 Unit Hopper
4. Stasiun Proses Pemarutan
- 3 Unit Hammer Crusher
- 1 Unit Root Rasper
5. Stasiun Proses Pembersihan dan Pengupasan
- 2 Unit Slury Pump
- 15 Unit Extractor Vertical
- 2 Unit Extractor Horizontal
- 1 Unit Screw Conveyor
- 8 Unit Hydro Cyclone
- 2 Unit Separator
- 4 Unit Separator
- 2 Unit Fresh Water Pump Extractor
- 3 Unit Milk Tank
- 4 Unit Milk Pump
- 1 Unit Cride Tank c/w Crude Pump
- 1 Unit Finak Tank c/w Final Pump
- 1 Unit Recovery Tank c/w Pump
- 2 Unit Fiber Tank c/w Fiber Pump
- 2 Unit Sand Cyclone
- 2 Unit Belt Press Kecil
- 1 Unit Belt Press Besar
- 3 Unit Belt Press Pump
- 2 Unit Belt Conveyor
- 2 Unit Scraper Centrifugal c/w Pump
- 2 Unit Belt Conveyor
- 5 Unit Power Sprayer
6. Stasiun Proses Pengeringan dan Pengemasan
- 1 Unit Screw Feeder
- 1 Unit Slinger
- 1 Unit Ducting Flash Dryer
- 3 Unit Rotary Hot Cyclone
- 6 Unit Hot Cyclone
- 1 Unit Hot Blower
- 1 Unit Blower Cooling Cyclone
- 4 Unit Cooling Cyclone c/w Rotary
- 1 Unit Dust Collector
- 1 Unit Cyclone Debu c/w Rotary
- 2 Unit Screw Conveyor
- 6 Unit Sifter c/w Filler
- 6 Unit Packing System
- 2 Unit Timbangan Digital
7. Heating System
- 1 Unit Burner 1
- 1 Unit Burner 2
8. Power House
- 1 Unit Instalasi Listrik
- 1 Unit Generating Set
9. Utilitas
- 1 Unit Jembatan Timbang
- 1 Unit Unloading
- 2 Unit Tower Air Produksi
- 2 Unit Pompa Air Bersih
- 2 Unit Sumur Bor c/w Pompa Sumur Bor
- 1 Unit Mesin Bubut`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1-z8hgp8NEh0Mw5L6kzKUqsWe-glGfROc"),
      getDriveImageUrl("https://drive.google.com/open?id=1JN797jMoGjCOgT7pTKcAaRHa_Q29hktK"),
      getDriveImageUrl("https://drive.google.com/open?id=1FYGf0ulDAQPcJ6skjN_8Xixy7zi5yu76"),
      getDriveImageUrl("https://drive.google.com/open?id=1bz32IVHrKyN0aAdkVrjXeEEGC_KYUYa7"),
      getDriveImageUrl("https://drive.google.com/open?id=1RJO573qgTjIdMQwFjR9ZztEEBa0H4EFb"),
      getDriveImageUrl("https://drive.google.com/open?id=1baPmMjVYlhauQTjoyYlFKcO_dZTGrOQT"),
    ],
    endPrice: 32788870000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELM_2", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG WHEEL LOADER 2020",
    isHidden: true,
    type: "Alat Berat",
    brand: "SDLG",
    model: "LG933L",
    year: 2020,
    condition: "Bekas - Baik",
    location: "Desa Cahyou Randu, Kec. Pagar Dewa, Kab. Tulang Bawang Barat, Prov. Lampung",
    provinsi: "Lampung",
    kota: "Tulang Bawang Barat",
    description:
    `Jenis : Wheel Loader
Merek : SDLG
Model : LG933L
Tahun : 2020
Akta Jaminan Fidusia`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Gdy6peQTqWXpD-EMzqJ5_m8uA5FTsChe"),
    ],
    endPrice: 292770000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELM_01", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG WHEEL LOADER 950H",
    isHidden: true,
    type: "Alat Berat",
    brand: "Caterpillar (CAT)",
    model: "950H",
    year: 2015,
    condition: "Bekas - Baik",
    capacity: "± 2,7–4,0 m³ (Bucket)",
    location: "Desa Cahyou Randu, Kec. Pagar Dewa, Kab. Tulang Bawang Barat, Prov. Lampung",
    provinsi: "Lampung",
    kota: "Tulang Bawang Barat",
    description:
    `Jenis : Wheel Loader
Merek : Caterpillar (CAT)
Model : 950H
Mesin : Cat C7 ACERT
Daya Mesin : ± 217 HP
Kapasitas Bucket : ± 2,7–4,0 m³
Berat Operasional : ± 18,3–18,5 Ton
Akta Jaminan Fidusia`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1MYGz0zRRJjLMI8OBw3Inw3kAaF1jIUSC"),
    ],
    endPrice: 320100000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
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