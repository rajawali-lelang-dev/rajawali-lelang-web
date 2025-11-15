import dayjs from 'dayjs';
import { BaseItemDijual, BaseItemLelang } from './data';

// Property Type
export type PropertyType = "Rumah" | "Ruko" | "Villa" | "Apartemen" | "Tanah" | "Gudang";

// Property Interface - extends BaseItemDijual
export interface Property extends BaseItemDijual {
  type: PropertyType;
  landArea: number;
  buildingArea: number;
  certificateType: "SHM" | "HGB";
  status: "Available" | "Featured" | "Sold";
}

// PropertiDilelang Interface - extends BaseItemLelang
export interface PropertiDilelang extends BaseItemLelang {
  type: PropertyType;
  landArea: number;
  buildingArea: number;
  certificateType: "SHM" | "HGB";
  
}

// Mock Data - Properties (NON-LELANG)
export const properties: Property[] = [
  {
    id: "1",
    title: "Rumah Mewah 2 Lantai di Menteng",
    type: "Rumah",
    location: "Menteng, Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    price: 8500000000,
    landArea: 450,
    buildingArea: 380,
    certificateType: "SHM",
    description:
      "Rumah mewah dengan desain modern minimalis, dilengkapi kolam renang, taman luas, dan garasi untuk 3 mobil. Lokasi strategis dekat dengan pusat kota.",
    status: "Featured",
    image: ["/images/products/villa.png"],
  },
 
];

// Mock Data - PROPERTI LELANG
export const lelangProperties: PropertiDilelang[] = [
  {
    id: "L1",
    title: "RUMAH KANTOR EKS HOTEL TANAH",
    type: "Rumah",
    location: "Kemang Utara, Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 326,
    buildingArea: 918,
    certificateType: "SHM",
    description:
    `- 5 menit ke RS Siloam Mampang\n
    - 10 menit ke MRT Haji Nawi\n
    - 20 menit ke toll cawang\n
    - 10 menit ke Lippo Mall Kemang\n
    - 5 Menit ke halte bussway`,
    status: "Lelang Aktif",
    image: [
      "/images/products/properties/lelang/PL1/image1.jpg",
      "/images/products/properties/lelang/PL1/image2.jpg",
      "/images/products/properties/lelang/PL1/image3.jpg",
      "/images/products/properties/lelang/PL1/image4.jpg"
    ],
    startPrice: 6800000000,
    endPrice: 7200000000,
    tanggalLelang: "2025-11-20",
    batasWaktuLelang: "2025-11-24",
  },
  {
    id: "L2",
    title: "RUMAH TINGGAL TANAH 871 M",
    type: "Rumah",
    location: "Jl Intan Rspp Utara No. kav 8, Cilandak Bar., Kec Cilandak, Kota Jakarta Selatan, DKI Jakarta",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 871,
    buildingArea: 608,
    certificateType: "SHM",
    description:
    `- 10 Menit ke RS Fatmawati
      - ⁠10 Menit ke MRT Fatmawati
      - ⁠10 Menit ke Cilandak Town Square
      - ⁠15 Menit ke halte Fatmawati
      - ⁠20 Menit ke Urban Forest Cipete`,
    status: "Lelang Aktif",
    image: [
      "/images/products/properties/lelang/PL2/image1.jpg",
      "/images/products/properties/lelang/PL2/image2.jpg",
      "/images/products/properties/lelang/PL2/image3.jpg"
    ],
    startPrice: 6800000000,
    endPrice: 7200000000,
    tanggalLelang: "2025-11-20",
    batasWaktuLelang: "2025-11-24",
  },
 
];

// Helper: Get unique provinces from all properties
export const getUniqueProvinces = (): string[] => {
  const allProvinces = [
    ...properties.map(p => p.provinsi),
    ...lelangProperties.map(p => p.provinsi)
  ];
  return Array.from(new Set(allProvinces)).sort();
};

// Helper: Get cities by province from all properties
export const getCitiesByProvince = (provinsi: string): string[] => {
  const allCities = [
    ...properties.filter(p => p.provinsi === provinsi).map(p => p.kota),
    ...lelangProperties.filter(p => p.provinsi === provinsi).map(p => p.kota)
  ];
  return Array.from(new Set(allCities)).sort();
};

// Helper: Get all unique property types
export const getPropertyTypes = (): PropertyType[] => {
  return ["Rumah", "Ruko", "Villa", "Apartemen", "Tanah", "Gudang"];
};