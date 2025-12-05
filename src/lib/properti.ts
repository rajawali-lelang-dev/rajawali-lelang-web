import { BaseItemDijual, BaseItemLelang } from './data';
import { getDriveImageUrl } from './drive-utils';

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
  jamLelang? : string;
  
}

// Mock Data - Properties (NON-LELANG)
export const properties: Property[] = [

 
];

// Mock Data - PROPERTI LELANG
export const lelangProperties: PropertiDilelang[] = [
  {
    id: "L13",
    title: "SEGERA LELANG TANAH PEKARANGAN",
    type: "Tanah",
    location: "Desa Sukodadi, Kecamatan Wagir, Kabupaten Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 1346,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 2 menit dari Kolam Renang Lembah Wagir
      - 15 menit dari Universitas PGRI Kanjuruhan
      - 20 menit dari Bonderland Waterpark
      - 25 menit dari Rumah Sakit Panti Nirmala
      - 30 menit dari Mall Sarinah Malang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1AOed3A9fjfmN1KrWcNdUslz6Ob_YLpkF"),
      getDriveImageUrl("https://drive.google.com/open?id=1QVI3RaLgW8nu3MCIDsmotyQY13dqEmRF"),
      getDriveImageUrl("https://drive.google.com/open?id=10BBdVSewEDCxPHZqfQYF4aHlYhvqg7dW"),
      getDriveImageUrl("https://drive.google.com/open?id=17RVM1f4l7p4-UUz4Nyh2pWQpA1v7R817")
    ],
    endPrice: 995000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L7",
    title: "SEGERA LELANG RUMAH 2 LANTAI",
    type: "Rumah",
    location: "Perumahan Puncak Buring Indah Blok B7 No. 06, Kelurahan Buring, Kecamatan Kedungkandang, Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 202,
    buildingArea: 204,
    certificateType: "HGB",
    description:
    `- 4 menit dari GOR Ken Arok
      - 5 menit dari Alun-Alun Kedungkandang
      - 11 menit dari Stadion Gelora Tlogowaru
      - 10 menit dari RSUD Kota Malang
      - 30 menit dari Mall Olympic Garden (MOG)`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=18grkZC6d61ztj699nzYMjDh6r54tQAUS"),
      getDriveImageUrl("https://drive.google.com/open?id=1Lj19rpbqYwIUY-Rsjb-KDQqFrVowMeEn"),
      getDriveImageUrl("https://drive.google.com/open?id=1ArJpaS146I4q4rDf7dnegOx8ziwDzmJr"),
      getDriveImageUrl("https://drive.google.com/open?id=1HkH42v74D7c2mysvKOFkUqmSxtiqjN1u")
    ],
    endPrice: 700000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L3",
    title: "SEGERA LELANG GUDANG",
    type: "Gudang",
    location: "Dusun Robyong RT. 005/ RW. 001, Desa Pakisjajar, Kec. Pakis, Kabupaten Malang ",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 978,
    buildingArea: 42,
    certificateType: "SHM",
    description:
    `
    - 14 menit dari Wendit Recreational Park
    - 14 menit dari Pintu Tol Kota Malang
    - 17 menit dari RS. TNI AU Lanud Andulrachman Saleh
    - 19 menit dari Kampus Binus Malang
    - 19 Menit dari Bandara Abdul Rachman Saleh`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1R5s52yfdP1e5vpfdZz8WIjxVN7yvoLen"),
      getDriveImageUrl("https://drive.google.com/open?id=1soba2SUIajRhXWH6wsS0nsXm-deu83Gl"),
      getDriveImageUrl("https://drive.google.com/open?id=1NC4LbXRp2zGMiv2sb_gu-4sQmCYy4OVY"),
      getDriveImageUrl("https://drive.google.com/open?id=1Ut996Ab2DUnBVl63ySGp28OLg93r7CmH")
    ],
    endPrice: 730000000,
    tanggalLelang: "2026-12-24",
    batasWaktuLelang: "-",
    jamLelang: "10:00 WIB",
  },
  {
    id: "L4",
    title: "SEGERA LELANG RUKO 2 LANTAI",
    type: "Ruko",
    location: "Jl. Gajayana, Kelurahan Ketawanggede, Kecamatan Lowokwaru, Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 140,
    buildingArea: 276,
    certificateType: "SHM",
    description:
    `- 10 Menit dari Malang Town Square
      - 10 menit dari Universitas Negeri Malang
      - 20 menit dari RSUD Dr. Saiful Anwar
      - 20 menit dari Alun-Alun Malang
      - 30 menit dari Hawai Waterpark`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1gz2DuYu8vOVvALumPJmseRfOs04WPWf1"),
      getDriveImageUrl("https://drive.google.com/open?id=1iAglJSkpx6Y-BW723tOHPWkWfcl-9feU"),
      getDriveImageUrl("https://drive.google.com/open?id=1rnGTuAXB_ouDZMGKo0i5-5C60C8W1a1T"),
      getDriveImageUrl("https://drive.google.com/open?id=1nFPE1rB-Eujf-po34-gMNB3Z_UJarOpk")
    ],
    endPrice: 1532000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L5",
    title: "SEGERA LELANG TANAH DAN BANGUNAN",
    type: "Tanah",
    location: "Jl. Mertojoyo Barat, Kelurahan Merjosari Kecamatan Lowokwaru Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 554,
    buildingArea: 25.5,
    certificateType: "SHM",
    description:
    `- 15 menit dari Universitas Brawijaya
      - 10 menit dari RS UMM
      - 10 menit dari Taman Rekreasi Sengkaling
      - 25 menit Alun-Alun Malang
      - 30 menit dari Stasiun Malang Kota`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1JXLtC0E0FPzNExyWyyGNeun6F2tbRTz-"),
      getDriveImageUrl("https://drive.google.com/open?id=1OjNJa-W-wvTBHigHEkSqrFiPBdZqo1tW"),
      getDriveImageUrl("https://drive.google.com/open?id=1rQGwtD1dcjGV3u0H7vy-ZxdahGO5a4rI"),
      getDriveImageUrl("https://drive.google.com/open?id=1_xGE7uYxxOOi1qe1yrHeD-XyABRnK5Ay"),
      getDriveImageUrl("https://drive.google.com/open?id=1PRBY8G17Dd0ZEKcYz1rlXpFp3yfkZ1D0")
    ],
    endPrice: 1000000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L6",
    title: "SEGERA LELANG RUMAH 2 LANTAI",
    type: "Rumah",
    location: "Perumahan Puncak Buring Indah Blok B7 No. 18, Kelurahan Buring, Kecamatan Kedungkandang, Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 200,
    buildingArea: 255,
    certificateType: "HGB",
    description:
    `- 4 menit dari GOR Ken Arok
      - 5 menit dari Alun-Alun Kedungkandang
      - 11 menit dari Stadion Gelora Tlogowaru
      - 10 menit dari RSUD Kota Malang
      - 30 menit dari Mall Olympic Garden (MOG)`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1okomRFfRM4rJkfy8B4Ewcau6hG8-dkqU"),
      getDriveImageUrl("https://drive.google.com/open?id=1ZlRPsTvepRGvn3BfCcHGQVIDXslT30Nh"),
      getDriveImageUrl("https://drive.google.com/open?id=1PKVPY9FjBhGyQZE53c9W2RQLx1I2qD6t")
    ],
    endPrice: 850000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  
  {
    id: "L8",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 150,
    buildingArea: 93,
    certificateType: "HGB",
    description:
    `- 5 menit dari Universitas Muhammadiyah Malang III
      - 16 menit dari Jatim Park III
      - 17 menit dari Mall Dinoyo City
      - 17 menit dari Malang Skyland
      - 20 menit dari Pintu Tol Singosari`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=18sA0rzUsUBVeKhLgLzJxteGlUACiBC70"),
      getDriveImageUrl("https://drive.google.com/open?id=14b5WfCRkio_o7s9SL4L5T0GIHHxIawPs"),
      getDriveImageUrl("https://drive.google.com/open?id=1I8CqC8y3nBFJexDH0AXo9hnHEIp0ClLg")
    ],
    endPrice: 728100000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L9",
    title: "SEGERA LELANG TANAH DAN BANGUNAN",
    type: "Tanah",
    location: "Jalan Raya Asrikaton Gang Anggrek 2 RT 10 RW 03, Desa Asrikaton, Kec. Pakis, Kab. Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 2098,
    buildingArea: 714,
    certificateType: "SHM",
    description:
    `- 8 menit dari Pintu Tol Kota Malang
      - 10 menit dari Bandara Abdul Rachman Saleh
      - 14 menit dari Universitas Negeri Malang
      - 15 menit dari Terminal Arjosari Malang
      - 20 menit dari Rumah Sakit Lavalette`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1EmLGbxODWt1228-tGnGJmRfe3qXSP_g7"),
      getDriveImageUrl("https://drive.google.com/open?id=1IEsHpYPVqLMd365TKoaKzH8JUGtha07v"),
      getDriveImageUrl("https://drive.google.com/open?id=1YRU5MeaZcJcKe_hXZ0wfaD3eTkPoNahB"),
      getDriveImageUrl("https://drive.google.com/open?id=1u_vEuWbtQUbHib0hEfJ6p7no0URmMh54")
    ],
    endPrice: 3265020000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L10",
    title: "SEGERA LELANG RUMAH KOS",
    type: "Rumah",
    location: "Perumahan Mutiara Kampus Blok A-11, Desa Tegalgondo, Kec. Karangploso, Kab. Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 103,
    buildingArea: 162,
    certificateType: "HGB",
    description:
    `- 5 menit dari Universitas Muhammadiyah Malang III
      - 10 menit dari Malang Dinoyo City
      - 10 menit dari Taman Rekreasi Sengkaling
      - 10 menit dari Rumah Sakit UMM
      - 30 menit dari Gerbang tol Singosari`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1MXHxN73N9dk8yrzXuPdao9jNRvS3EBzB"),
      getDriveImageUrl("https://drive.google.com/open?id=1NI1RzCDilSyObDclwv-z8cRijisAgG9g"),
      getDriveImageUrl("https://drive.google.com/open?id=1HKlWKZ8Eq9qDhoxBJYRNc-L1kSFfiFfe")
    ],
    endPrice: 900900000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L20",
    title: "SEGERA LELANG TANAH",
    type: "Tanah",
    location: " Perumahan Mutiara Kampus Blok B-11,  Desa Tegalgondo, Kec. Karangploso, Kab. Malang",
    provinsi: "Jawa Tengah",
    kota: "Pati",
    landArea: 1007,
    buildingArea: 0,
    certificateType: "HGB",
    description:
    `- 5 menit dari Universitas Muhammadiyah Malang III
      - 10 menit dari Malang Dinoyo City
      - 10 menit dari Taman Rekreasi Sengkaling
      - 10 menit dari Rumah Sakit UMM
      - 30 menit dari Gerbang tol Singosari`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1r4rfXomcp7CoAlG0jv-9MV0tsvzd4WOw"),
      getDriveImageUrl("https://drive.google.com/open?id=1rXNqLRUBYV_g2TEz4eJWqi814kUEfQlB"),
      getDriveImageUrl("https://drive.google.com/open?id=1we9gxGCu0MEWAt9UJ61xOiURiHXkcfMi")
    ],
    endPrice: 413100000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L12",
    title: "AGUNAN LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Jl. Komplek RSPP, Jalan Intan Kavling No. 8 Kel. Cilandak Barat Kec. Cilandak, Jakarta Selatan, DKI Jakarta",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 871,
    buildingArea: 608,
    certificateType: "SHM",
    description:
    `- 10 Menit ke RS Fatmawati
      - 10 Menit ke MRT Fatmawati
      - 10 Menit ke Cilandak Town Square
      - 15 Menit ke Halte Fatmawati
      - 20 Menit ke Urban Forest Cipete`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1IRn_v1LvIj6x0cKYXQycBBUN7HzeVfCa"),
      getDriveImageUrl("https://drive.google.com/open?id=1zXgfS549ahPkfq6quba-McNtOdQSjJZY"),
      getDriveImageUrl("https://drive.google.com/open?id=1YlgldiulKBSjbTWYLg6O4bVs1UTjz8q7"),
      getDriveImageUrl("https://drive.google.com/open?id=1q68qVfrdhw9tOPDy_Mc3_dmrwEAQgfoj")
    ],
    endPrice: 10301214000,
    tanggalLelang: "2026-01-22",
    batasWaktuLelang: "-",
    jamLelang: "14:15 WIB",
  },
  {
    id: "L14",
    title: "AGUNAN LELANG KANTOR 4 LANTAI",
    type: "Ruko",
    location: "Jl. Kemang Utara No. 43, Kelurahan Bangka, Kecamatan Mampang Prapatan, Jakarta Selatan, DKI Jakarta",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 326,
    buildingArea: 900,
    certificateType: "SHM",
    description:
    `- 5 menit dari RS Siloam Mampang
      - 6 menit dari Halte Busway Warung Jati
      - 13 menit dari MRT Haji Nawi
      - 13 menit dari Lippo Mall Kemang
      - 20 menit dari Pintu Tol Cawang
      - 35 menit dari Taman Kota GBK`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=17GnYJtTVX6gavSOYmaugWviV_9mip3-3"),
      getDriveImageUrl("https://drive.google.com/open?id=1AIU9dpFV5NFBo_iJmGQUmB9yr3KS5157"),
      getDriveImageUrl("https://drive.google.com/open?id=1ZCohstX3fLeko0zu4Y9G545r1b-9w3ku")
    ],
    endPrice: 8671000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L22",
    title: "SEGERA LELANG TANAH",
    type: "Tanah",
    location: "Desa Bogotanjung, Kec. Gabus, Kab. Pati, Prov. Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Pati",
    landArea: 1007,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `  
      - 6 menit dari SMK Taruna Bangsa Pati
      - 11 menit dari Kolam Renang Selulop
      - 15 menit dari Alun-alun Kayen
      - 16 menit dari Luwes Pati Mall
      - 21 menit dari Rumah Sakit Keluarga Sehat
    `,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1UaF56w87cVfpvWCysCKefXCPC2TT6O7q"),
      getDriveImageUrl("https://drive.google.com/open?id=1pOQh184CdbfziqRrXrdWgmX3b7fc6W3y"),
      getDriveImageUrl("https://drive.google.com/open?id=1bVWmRKpIdGOm9gD09N7-_gnJqaAjHR_H")
    ],
    endPrice: 340000000,
    tanggalLelang: "",
    batasWaktuLelang: "-",
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