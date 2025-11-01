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
    image: "/images/products/villa.png",
  },
  {
    id: "2",
    title: "Ruko 3 Lantai Tepi Jalan Raya",
    type: "Ruko",
    location: "Kelapa Gading, Jakarta Utara",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Utara",
    price: 4200000000,
    landArea: 120,
    buildingArea: 300,
    certificateType: "HGB",
    description:
      "Ruko strategis di jalan utama dengan lalu lintas tinggi, cocok untuk usaha retail atau kantor. Kondisi bangunan terawat dengan 4 kamar mandi.",
    status: "Available",
    image: "/images/products/villa.png",
  },
  {
    id: "3",
    title: "Villa View Gunung di Puncak",
    type: "Villa",
    location: "Cisarua, Puncak, Bogor",
    provinsi: "Jawa Barat",
    kota: "Bogor",
    price: 3500000000,
    landArea: 600,
    buildingArea: 250,
    certificateType: "SHM",
    description:
      "Villa asri dengan pemandangan gunung dan udara sejuk. Dilengkapi 4 kamar tidur, gazebo, dan taman yang luas. Akses jalan mudah.",
    status: "Available",
    image: "/images/products/villa.png",
  },
  {
    id: "4",
    title: "Apartemen Premium 2BR Tower A",
    type: "Apartemen",
    location: "Sudirman, Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    price: 2800000000,
    landArea: 0,
    buildingArea: 95,
    certificateType: "HGB",
    description:
      "Apartemen premium dengan view kota, furnished lengkap, fasilitas kolam renang, gym, dan keamanan 24 jam. Lokasi dekat MRT dan pusat bisnis.",
    status: "Featured",
    image: "/images/products/villa.png",
  },
  {
    id: "5",
    title: "Tanah Kavling Siap Bangun",
    type: "Tanah",
    location: "BSD City, Tangerang Selatan",
    provinsi: "Banten",
    kota: "Tangerang Selatan",
    price: 1500000000,
    landArea: 300,
    buildingArea: 0,
    certificateType: "SHM",
    description:
      "Tanah kavling hook dalam cluster premium BSD, sudah ada IMB untuk pembangunan rumah 2 lantai. Lingkungan asri dan aman dengan fasilitas lengkap.",
    status: "Available",
    image: "/images/products/villa.png",
  },
  {
    id: "6",
    title: "Gudang Industri Strategis",
    type: "Gudang",
    location: "Cakung, Jakarta Timur",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Timur",
    price: 6200000000,
    landArea: 800,
    buildingArea: 600,
    certificateType: "HGB",
    description:
      "Gudang dengan tinggi 8 meter, loading dock untuk container, akses kontainer 40ft, dan kantor 2 lantai. Dekat dengan tol dan pelabuhan.",
    status: "Available",
    image: "/images/products/villa.png",
  },
];

// Mock Data - PROPERTI LELANG
export const lelangProperties: PropertiDilelang[] = [
  {
    id: "L1",
    title: "Rumah Mewah 2 Lantai di Menteng",
    type: "Rumah",
    location: "Menteng, Jakarta Pusat",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    landArea: 450,
    buildingArea: 380,
    certificateType: "SHM",
    description:
      "Rumah mewah dengan desain modern minimalis, dilengkapi kolam renang, taman luas, dan garasi untuk 3 mobil. Lokasi strategis dekat dengan pusat kota.",
    status: "Lelang Aktif",
    image: "/images/products/villa.png",
    startPrice: 6800000000,
    endPrice: 8500000000,
    tanggalLelang: "2025-11-15T10:00:00+07:00",
    batasWaktuLelang: "2025-11-14T17:00:00+07:00",
  },
  {
    id: "L2",
    title: "Ruko 3 Lantai Tepi Jalan Raya",
    type: "Ruko",
    location: "Kelapa Gading, Jakarta Utara",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Utara",
    landArea: 120,
    buildingArea: 300,
    certificateType: "HGB",
    description:
      "Ruko strategis di jalan utama dengan lalu lintas tinggi, cocok untuk usaha retail atau kantor. Kondisi bangunan terawat dengan 4 kamar mandi.",
    status: "Lelang Aktif",
    image: "/images/products/villa.png",
    startPrice: 3000000000,
    endPrice: 4200000000,
    tanggalLelang: "2025-11-08T14:00:00+07:00",
    batasWaktuLelang: "2025-11-07T17:00:00+07:00",
  },
  {
    id: "L3",
    title: "Villa View Gunung di Puncak",
    type: "Villa",
    location: "Cisarua, Puncak, Bogor",
    provinsi: "Jawa Barat",
    kota: "Bogor",
    landArea: 600,
    buildingArea: 250,
    certificateType: "SHM",
    description:
      "Villa asri dengan pemandangan gunung dan udara sejuk. Dilengkapi 4 kamar tidur, gazebo, dan taman yang luas. Akses jalan mudah.",
    status: "Lelang Segera",
    image: "/images/products/villa.png",
    startPrice: 2800000000,
    endPrice: 3500000000,
    tanggalLelang: "2025-11-05T09:00:00+07:00",
    batasWaktuLelang: "2025-11-04T17:00:00+07:00",
  },
  {
    id: "L4",
    title: "Apartemen Premium 2BR Tower A",
    type: "Apartemen",
    location: "Sudirman, Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 0,
    buildingArea: 95,
    certificateType: "HGB",
    description:
      "Apartemen premium dengan view kota, furnished lengkap, fasilitas kolam renang, gym, dan keamanan 24 jam. Lokasi dekat MRT dan pusat bisnis.",
    status: "Lelang Aktif",
    image: "/images/products/villa.png",
    startPrice: 2200000000,
    endPrice: 2800000000,
    tanggalLelang: "2025-11-22T11:00:00+07:00",
    batasWaktuLelang: "2025-11-21T17:00:00+07:00",
  },
  {
    id: "L5",
    title: "Tanah Kavling Siap Bangun",
    type: "Tanah",
    location: "BSD City, Tangerang Selatan",
    provinsi: "Banten",
    kota: "Tangerang Selatan",
    landArea: 300,
    buildingArea: 0,
    certificateType: "SHM",
    description:
      "Tanah kavling hook dalam cluster premium BSD, sudah ada IMB untuk pembangunan rumah 2 lantai. Lingkungan asri dan aman dengan fasilitas lengkap.",
    status: "Lelang Aktif",
    image: "/images/products/villa.png",
    startPrice: 1200000000,
    endPrice: 1500000000,
    tanggalLelang: "2025-11-12T13:00:00+07:00",
    batasWaktuLelang: "2025-11-11T17:00:00+07:00",
  },
  {
    id: "L6",
    title: "Gudang Industri Strategis",
    type: "Gudang",
    location: "Cakung, Jakarta Timur",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Timur",
    landArea: 800,
    buildingArea: 600,
    certificateType: "HGB",
    description:
      "Gudang dengan tinggi 8 meter, loading dock untuk container, akses kontainer 40ft, dan kantor 2 lantai. Dekat dengan tol dan pelabuhan.",
    status: "Lelang Segera",
    image: "/images/products/villa.png",
    startPrice: 5000000000,
    endPrice: 6200000000,
    tanggalLelang: "2025-11-03T10:00:00+07:00",
    batasWaktuLelang: "2025-11-02T17:00:00+07:00",
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