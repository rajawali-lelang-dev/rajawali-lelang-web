import { BaseItemDijual, BaseItemLelang } from './data';
import { getDriveImageUrl } from '@/lib/drive-utils';

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
  id: "RLI_ELM_8", // <-- PT. BAHTERA DINGGA JAYA (Hot Press 15 Layer)
  title: "SEGERA LELANG 1 UNIT MESIN HOT PRESS 15 LAYER",
  type: "Mesin Industri",
  brand: "Green Forest",
  model: "HP 4x8/5-15 ZIID",
  year: "-",
  condition: "Bekas - Baik",
  location: "Jl. Raya Pangleseran Km. 15, Desa Parakanlim, Kec. Cikembar, Sukabumi, Prov. Jawa Barat",
  provinsi: "Jawa Barat",
  kota: "Sukabumi",
  description:
  `- 3 menit dari Klinik Harapan Hidup
- 4 menit dari Wisata Kebun Pinus CMV
- 5 menit dari Pasar Pangleseran
- 6 menit dari Penggilingan Padi Cikiray
- 8 menit dari Gerbang Tol Lambu Kibang
Jenis: Hot Press
Merek: Green Forest
Model: HP 4x8/5-15 ZIID`,
  status: "Lelang Segera",
  image: [
    getDriveImageUrl("https://drive.google.com/open?id=1BuDzv25iNbUfRpj_mtgWNkQy1XGvuWta"),
    getDriveImageUrl("https://drive.google.com/open?id=16-Fx--XUVhZHSVsOjV458iYoLhN1cZ5F"),
    getDriveImageUrl("https://drive.google.com/open?id=1M_AQoiTgObeNbzGxMqOKw8vHenMMQAyT"),
  ],
  endPrice: 458000000,
  tanggalLelang: "-",
  batasWaktuLelang: "-",
},
{
  id: "RLI_ELM_7", // <-- PT. BAHTERA DINGGA JAYA (Short Core Press Dryer)
  title: "SEGERA LELANG 2 UNIT MESIN SHORT CORE PRESS DRYER",
  type: "Mesin Industri",
  brand: "Green Forest",
  model: "Solid Platen HPD 4x8/100-15IIC",
  year: "-",
  condition: "Bekas - Baik",
  location: "Jl. Raya Pangleseran Km. 17, Desa Parakanlim, Kec. Cikembar, Sukabumi, Prov. Jawa Barat",
  provinsi: "Jawa Barat",
  kota: "Sukabumi",
  description:
  `- 3 menit dari Klinik Harapan Hidup
- 4 menit dari Wisata Kebun Pinus CMV
- 5 menit dari Pasar Pangleseran
- 6 menit dari Penggilingan Padi Cikiray
- 8 menit dari Gerbang Tol Lambu Kibang
Jenis: Short Core Press Dryer (Model Solid Platen HPD 4x8/100-15IIC)
Penggunaan: Alat Produksi Pembuatan Kayu Lapis
Kepemilikan: Invoice PT. Selaras Indo Technology No. 009-08/X/2021`,
  status: "Lelang Segera",
  image: [
    getDriveImageUrl("https://drive.google.com/open?id=17o_gQbTB8rw2ZCSbVkf58no6WeNYKYWN"),
    getDriveImageUrl("https://drive.google.com/open?id=1b7Yx5zmtnRCb1KBQHu3KQcHfLdrscMKE"),
    getDriveImageUrl("https://drive.google.com/open?id=1W7Hnmib-wU1yLfLJI-YzUSlgsIUzc5Kg"),
  ],
  endPrice: 279000000,
  tanggalLelang: "-",
  batasWaktuLelang: "-",
},
{
  id: "RLI_ELM_6", // <-- PT. BAHTERA DINGGA JAYA (Automatic Calibrating Sanding)
  title: "SEGERA LELANG 1 UNIT MESIN AUTOMATIC CALIBRATING SANDING",
  type: "Mesin Industri",
  brand: "-",
  model: "Model TSINTAO ISO9001 2000",
  year: "-",
  condition: "Bekas - Baik",
  location: "Jl. Raya Pangleseran Km. 15, Desa Parakanlim, Kec. Cikembar, Sukabumi, Prov. Jawa Barat",
  provinsi: "Jawa Barat",
  kota: "Sukabumi",
  description:
  `- 3 menit dari Klinik Harapan Hidup
- 4 menit dari Wisata Kebun Pinus CMV
- 5 menit dari Pasar Pangleseran
- 6 menit dari Penggilingan Padi Cikiray
- 8 menit dari Gerbang Tol Lambu Kibang
Jenis: Automatic Calibrating Sanding
Model: TSINTAO ISO9001 2000`,
  status: "Lelang Segera",
  image: [
    getDriveImageUrl("https://drive.google.com/open?id=1NuSy6UV9Jp9szgaQwnLoko7PCUDFkols"),
    getDriveImageUrl("https://drive.google.com/open?id=13JsB1GU963gfY8OWKiZiQLeb1NVmmefW"),
    getDriveImageUrl("https://drive.google.com/open?id=1KKl8mqdsiYHn0wl9HaGFG33DOm69OSCF"),
  ],
  endPrice: 277000000,
  tanggalLelang: "-",
  batasWaktuLelang: "-",
},
{
  id: "RLI_ELM_5", // <-- PT. BAHTERA DINGGA JAYA (Glue Speader 9 FT)
  title: "SEGERA LELANG 1 UNIT MESIN GLUE SPEADER 9 FT",
  type: "Mesin Industri",
  brand: "Sanji",
  model: "Mod Rubber 418mm",
  year: "-",
  condition: "Bekas - Baik",
  location: "Jl. Raya Pangleseran Km. 17, Desa Parakanlim, Kec. Cikembar, Sukabumi, Prov. Jawa Barat",
  provinsi: "Jawa Barat",
  kota: "Sukabumi",
  description:
  `- 3 menit dari Klinik Harapan Hidup
- 4 menit dari Wisata Kebun Pinus CMV
- 5 menit dari Pasar Pangleseran
- 6 menit dari Penggilingan Padi Cikiray
- 8 menit dari Gerbang Tol Lambu Kibang
Jenis: Glue Speader 9 FT
Merek: Sanji
Model: Mod Rubber 418mm`,
  status: "Lelang Segera",
  image: [
    getDriveImageUrl("https://drive.google.com/open?id=1XS1Z4le2m1_pUR4_XUlPDN-XB7K7keBR"),
    getDriveImageUrl("https://drive.google.com/open?id=1mHgr_xrbvb7WuZo3npBNn4MZQUBQEU7I"),
  ],
  endPrice: 143000000,
  tanggalLelang: "-",
  batasWaktuLelang: "-",
},
{
  id: "RLI_ELM_4", // <-- PT. BAHTERA DINGGA JAYA (Cold (Pre) Press 15 Layer)
  title: "SEGERA LELANG 1 UNIT MESIN COLD (PRE) PRESS 15 LAYER",
  type: "Mesin Industri",
  brand: "Green Forest",
  model: "Model CPT 4x8/5 Automatic",
  year: "-",
  condition: "Bekas - Baik",
  location: "Jl. Raya Pangleseran Km. 15, Desa Parakanlim, Kec. Cikembar, Sukabumi, Prov. Jawa Barat",
  provinsi: "Jawa Barat",
  kota: "Sukabumi",
  description:
  `- 3 menit dari Klinik Harapan Hidup
- 4 menit dari Wisata Kebun Pinus CMV
- 5 menit dari Pasar Pangleseran
- 6 menit dari Penggilingan Padi Cikiray
- 8 menit dari Gerbang Tol Lambu Kibang
Jenis: Cold (Pre) Press 15 Layer
Merek: Green Forest
Model: CPT 4x8/5 Automatic`,
  status: "Lelang Segera",
  image: [
    getDriveImageUrl("https://drive.google.com/open?id=1WiCJ_r9y1ftBepgzoLnE9EsU_NDF0_9F"),
    getDriveImageUrl("https://drive.google.com/open?id=1QRDjYb-dHZ1Gci8bdbF70DxBkq4yM535"),
  ],
  endPrice: 118000000,
  tanggalLelang: "-",
  batasWaktuLelang: "-",
},
  {
    id: "RLI_ELM_3", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG MESIN-MESIN PERALATAN PRODUKSI",
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
    endPrice: 27870539500,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELM_2", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG WHEEL LOADER 2020",
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
    endPrice: 612870000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELM_01", // <-- PT. BERKAH SATU DELAPAN
    title: "SEGERA LELANG WHEEL LOADER 950H",
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