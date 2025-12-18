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
    title: "AGUNAN LELANG GUDANG",
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
      getDriveImageUrl("https://drive.google.com/open?id=1soba2SUIajRhXWH6wsS0nsXm-deu83Gl"),
      getDriveImageUrl("https://drive.google.com/open?id=1R5s52yfdP1e5vpfdZz8WIjxVN7yvoLen"),
      getDriveImageUrl("https://drive.google.com/open?id=1NC4LbXRp2zGMiv2sb_gu-4sQmCYy4OVY"),
      getDriveImageUrl("https://drive.google.com/open?id=1Ut996Ab2DUnBVl63ySGp28OLg93r7CmH")
    ],
    endPrice: 730000000,
    tanggalLelang: "2025-12-24",
    batasWaktuLelang: "-",
    jamLelang: "10:00 WIB",
  },
  {
    id: "L4",
    title: "AGUNAN LELANG RUKO 2 LANTAI",
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
    tanggalLelang: "2026-01-21",
    batasWaktuLelang: "-",
    jamLelang: "11:00 WIB",
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
      getDriveImageUrl("https://drive.google.com/open?id=1ZlRPsTvepRGvn3BfCcHGQVIDXslT30Nh"),
      getDriveImageUrl("https://drive.google.com/open?id=1okomRFfRM4rJkfy8B4Ewcau6hG8-dkqU"),
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
    title: "SEGERA LELANG GUDAN DAN PABRIK",
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
      getDriveImageUrl("https://drive.google.com/open?id=1rXNqLRUBYV_g2TEz4eJWqi814kUEfQlB"),
      getDriveImageUrl("https://drive.google.com/open?id=1r4rfXomcp7CoAlG0jv-9MV0tsvzd4WOw"),
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
    endPrice: 8000000000,
    tanggalLelang: "2025-12-23",
    batasWaktuLelang: "-",
    jamLelang: "14:20 WIB",
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
  {
    id: "L23",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Perumahan Green Living Jalan Satsui Tubun Kav. 21 Kel. Gadang, Kec, Sukun, Kota Malang, Provinsi Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 119,
    buildingArea: 90,
    certificateType: "SHM",
    description:
    `- 1 menit dari RSU Melati Satsuitubun
      - 5 menit dari Universitas PGRI Kanjuruhan
      - 12 menit dari Alun-Alun Malang
      - 16 menit dari Stasiun Malang
      - 16 menit dari Mall Olympic Garden (MOG)`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1cNW2kjVK2xc4Et3Y4dgvJZtJ_M9WjtUB"),
      getDriveImageUrl("https://drive.google.com/open?id=1HfAD51PiTAN34N8CCCiOZU0nyNt9P3fP"),
      getDriveImageUrl("https://drive.google.com/open?id=1EHJLs_ItHNpw3QFQJHmf3h8s2Ik-a7kU")
    ],
    endPrice: 770000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L24",
    title: "SEGERA LELANG TOKO",
    type: "Ruko",
    location: "Jl. Segaran No. 62 RT.03 RW.06, Desa Kendalpayak, Kec. Pakisaji, Kab. Malang, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 182,
    buildingArea: 102,
    certificateType: "SHM",
    description:
    `- 9 menit dari RSUD Kota Malang
      - 12 menit dari SMKN 10 Malang
      - 14 menit dari Alun-Alun Malang
      - 15 menit dari Stasiun Pakisaji
      - 18 menit dari Mall Olympic Garden (MOG)`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=19KXYp2EtxmxG4U_WVdYawAMSajuSTm6i"),
      getDriveImageUrl("https://drive.google.com/open?id=1a1ltrfNqvrNm4au4VpODLsGVFcnTqqY4"),
      getDriveImageUrl("https://drive.google.com/open?id=1tg3chY_xJa6Yh247l97Un6yjh0_hAiIh")
    ],
    endPrice: 625000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L25",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Perumahan Green Living Blok C No. 1, Jalan Satsui Tubun, Kel. Gadang, Kec. Sukun, Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 165,
    buildingArea: 170,
    certificateType: "SHM",
    description:
    `- 1 menit dari RSU Melati Satsuitubun
      - 6 menit dari Universitas PGRI Kanjuruhan
      - 13 menit dari Alun-Alun Malang
      - 16 menit dari Stasiun Malang
      - 17 menit dari Mall Olympic Garden (MOG)`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Vg8yqFKfZNYglcnxlQLyiFVJm3lwm57u"),
      getDriveImageUrl("https://drive.google.com/open?id=1x36j5cQ-qtVElwIQz-aommqdSXzlv7bq"),
      getDriveImageUrl("https://drive.google.com/open?id=1PGpVzmGICVPD87uLvq0kHA66pMnJhFJD")
    ],
    endPrice: 1250000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L26",
    title: "SEGERA LELANG HOTEL",
    type: "Villa",
    location: "Perumahan Pondok Asri Kencana Blok B14 dan B16, Jalan Paralayang RT. 35 RW. 7, Desa Pandesari, Kec. Pujon, Kab. Malang, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 246,
    buildingArea: 935,
    certificateType: "SHM",
    description:
    `- 1 menit dari Wisata Goa Pinus
      - 4 menit dari Wisata Paralayang
      - 5 menit dari Florawisata Santerra De Laponte
      - 14 menit dari Air Terjun Coban Rondo
      - 19 menit dari Alun-Alun Batu`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1NoNeGjlU1-n4nAdgU-X6lI_9qREpAmQ_"),
      getDriveImageUrl("https://drive.google.com/open?id=1z_TLz2b3ejYrDiFbpkBxw8B1-GglGUco"),
      getDriveImageUrl("https://drive.google.com/open?id=1fo7C4749rdgOmPXZivNV9zFetqyg3yNw"),
      getDriveImageUrl("https://drive.google.com/open?id=169KbfcxvJ3UijFNK8fXoIOiwMScJxDP1"),
      getDriveImageUrl("https://drive.google.com/open?id=1K4KgG_xIkFajs5YF-kVw0lbfoUhWaaQb"),
      getDriveImageUrl("https://drive.google.com/open?id=1MxZcIrIeriRG-zSLyHRCHnAgfXvPZqHm"),
      getDriveImageUrl("https://drive.google.com/open?id=1NqLFY4C2RaBShqntsyQUql8dM1fmGS9y"),
      getDriveImageUrl("https://drive.google.com/open?id=10zuukwRJiuqJJls4ItZ_iC4lKsWnCp-3"),
      getDriveImageUrl("https://drive.google.com/open?id=14-lVICsuufyXAXGVLnscB2L4OnLxQV3Q"),
      getDriveImageUrl("https://drive.google.com/open?id=1hWOFOsuCXCuatZ8eCrRM1qtA-4Q68klw")
    ],
    endPrice: 3250000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L27",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Jl. Setapak Desa Tlekung, Kec. Junrejo, Kota Batu",
    provinsi: "Jawa Timur",
    kota: "Batu",
    landArea: 1565,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 6 menit dari Universitas Maulana Malik Ibrahim
      - 10 menit dari Batu Night Spectacular (BNS)
      - 10 menit dari Rumah Sakit Baptis Batu
      - 13 menit dari Jatim Park 3
      - 15 menit dari Batu Secret Zoo`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1nGcaUd6uYxPlAG5FZWiZnD2bGTL3ZGbi"),
      getDriveImageUrl("https://drive.google.com/open?id=1PqJOypVTj5sPmJs-dksbFKWf1aAGQSrq"),
      getDriveImageUrl("https://drive.google.com/open?id=1newpHYXbOT7UWlSaRNV7TZuqDPusoO4d"),
      getDriveImageUrl("https://drive.google.com/open?id=1Kei9XFkJi4cbW6t7o28xWx7hAvsdPWjX")
    ],
    endPrice: 635000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L28",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Perumahan Wisma Mas Blok B-1 No. 29, Kel. Cinangka, Kec. Sawangan, Kota Depok",
    provinsi: "Jawa Barat",
    kota: "Depok",
    landArea: 72,
    buildingArea: 40,
    certificateType: "SHM",
    description:
    `- 18 menit dari UPN "Veteran" Jakarta Limo
      - 18 menit dari The Park Sawangan
      - 21 menit dari Klinik Pertamina IHC Cinere
      - 22 menit dari Gerbang Tol Pamulang
      - 23 menit dari Taman Warga Bukit Cinere Indah`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1DQcB0bGrC3B1-NfyAJEjeNICclUtiZ_F"),
      getDriveImageUrl("https://drive.google.com/open?id=1I_f_AwY7atgputuU_ZfPct_9E7yFcXQB"),
      getDriveImageUrl("https://drive.google.com/open?id=1flPH5L7cM83CUsebJ-9HSeObbQmEAicc"),
      getDriveImageUrl("https://drive.google.com/open?id=1l0XqrUBy1HSAN-hccZiggkMqoU0xlqSD")
    ],
    endPrice: 234600000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L29",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Kampung Mekarjati RT.031 RW.007 Kel. Pusakajaya, Kec. Pusakajaya, Kab. Subang, Jawa Barat",
    provinsi: "Jawa Barat",
    kota: "Subang",
    landArea: 642,
    buildingArea: 123,
    certificateType: "SHM",
    description:
    `- 2 menit dari Alun-Alun Pusakanagara
      - 3 menit dari Puskesmas Pusakanagara
      - 5 menit dari Gerbang Tol Patimban
      - 7 menit dari SMA Negeri 1 Pusakanagara
      - 15 menit dari Kolam Renang Bintang Fantasi`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Q0AUy3Een_XBZICMCP1PZFEwhqP5c9nl"),
      getDriveImageUrl("https://drive.google.com/open?id=1-WVgmH7oRTtJswsyETapOqDpstjJotSB"),
      getDriveImageUrl("https://drive.google.com/open?id=1usZo0LPBN88bzAVGZjVkUwnfBLedNvNv")
    ],
    endPrice: 340000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L30",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Jl. Danau Tempe I F3-A10 RT 05 RW 12 Kel. Sawojajar, Kec. Kedungkandang, Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 120,
    buildingArea: 96,
    certificateType: "SHM",
    description:
    `- 7 menit dari SMKN 6 Malang
      - 12 menit dari Rumah Sakit Lavalette
      - 16 menit dari Mall Olympic Garden (MOG)
      - 16 menit dari Alun-Alun Malang
      - 18 menit dari Gerbang Tol Kota Malang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=19SAp1CpCdiewqs0TCfqw54EAlJ_KTrpa"),
      getDriveImageUrl("https://drive.google.com/open?id=1mACy1IBPR9K2xMbBdbjasEPbGArltEIx"),
      getDriveImageUrl("https://drive.google.com/open?id=1aXJy3uAXfqqpxaz7nL3rPX_4bGtfoWQu")
    ],
    endPrice: 744000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L32",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Gang Amin No. 55 RT.001 RW 002 Kel. Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, DKI Jakarta",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 80,
    buildingArea: 69,
    certificateType: "SHM",
    description:
    `- 2 menit dari Univeritas Budi Luhur
      - 5 menit dari Halte Transjakarta Petukangan D'Masiv
      - 6 menit dari RS Murni Teguh Ciledug
      - 15 menit dari ITC Cipulir Mas
      - 20 menit dari Hutan Kota Srengseng`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=13SWot-f3DGpcCCBXVoIagx8jLoBYW_e4"),
      getDriveImageUrl("https://drive.google.com/open?id=1ddur4AfOoR7GWve-PHigcx43U2K-nqXi"),
      getDriveImageUrl("https://drive.google.com/open?id=1GhhemlLQiTgJlUFoJpBlKCj6bo6qk9wH")
    ],
    endPrice: 330000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L33",
    title: "SEGERA LELANG RUKO",
    type: "Ruko",
    location: "Jl. Krajan RT.008 RW.006 Kel. Bunutwetan, Kec. Pakis, Kab. Malang, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 94,
    buildingArea: 91,
    certificateType: "SHM",
    description:
    `- 2 menit dari Pintu Tol Pakis
      - 6 menit dari Rumah Sakit Enggal Dangan
      - 11 menit dari Bandara Abdul Rachman Saleh
      - 11 menit dari Universitas Negeri Malang, Kampus II
      - 28 menit dari Alun-Alun Malang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1ufRe3LUL6kLNh4bQv0hTF-9oc6rnNkPS"),
      getDriveImageUrl("https://drive.google.com/open?id=1M_yVZF8nZsfrcdwGtxrqBIMJngZ9QsMw"),
      getDriveImageUrl("https://drive.google.com/open?id=1ysZUZG6fERFEvT1WZ1HSicdW1jR78L-r"),
      getDriveImageUrl("https://drive.google.com/open?id=1kmC9f6rj5iqUSW7cgW5RYsvwu4eyh3Jc")
    ],
    endPrice: 632000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L34",
    title: "SEGERA LELANG RUMAH TINGGAL 2 LANTAI",
    type: "Rumah",
    location: "Jl. Bandara Iswahyudi II Blok BF No. 7 Perumahan Buring Satelit RT 011 RW 008 Kel. Cemorokandang, Kec. Kedungkandang, Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 60,
    buildingArea: 90,
    certificateType: "SHM",
    description:
    `- 1 menit dari SMK Negeri 9 Malang - Kampus 2
      - 17 menit dari Puskesmas Gribig
      - 22 menit dari Gerbang Tol Kota Malang
      - 25 menit dari Binus Malang
      - 26 menit dari Alun-Alun Malang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1gG1EPmvR2CaSCs5ERXAKwYJNvFzdDtfq"),
      getDriveImageUrl("https://drive.google.com/open?id=1hPPwksqqhebrH6RzTwPPgtA_BQfNmSG-"),
      getDriveImageUrl("https://drive.google.com/open?id=1rCS-18_pqwKpWRvFIFN_G9tQN2Fi88Em")
    ],
    endPrice: 454000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L35",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Kemiren, Kec. Srumbung, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 10301,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 9 menit dari SD Negeri Kaliurang 2
      - 10 menit dari Pasar Mbulu
      - 12 menit dari Taman Sabo Dam Nglumut
      - 20 menit dari Puskesmas Srumbung
      - 27 menit dari Jalan Raya Magelang-Yogya`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Ht7AooYIBMABGE2upjqL3dR7t3EKFG1-"),
      getDriveImageUrl("https://drive.google.com/open?id=13VAEUmd0XgGA1Fxuom8a-91dOCksFswF"),
      getDriveImageUrl("https://drive.google.com/open?id=1P1KCgef4513_djiYxUY3zvnqowiYG5Ie")
    ],
    endPrice: 618060000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L36",
    title: "SEGERA LELANG GUDANG",
    type: "Gudang",
    location: "Desa Kemiren, Kec. Srumbung, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 15680,
    buildingArea: 159,
    certificateType: "SHM",
    description:
    `- 9 menit dari SD Negeri Kaliurang 2
      - 10 menit dari Pasar Mbulu
      - 12 menit dari Taman Sabo Dam Nglumut
      - 20 menit dari Puskesmas Srumbung
      - 27 menit dari Jalan Raya Magelang-Yogya`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1DX9_OoyNUchu8SbY0qLI5EiVtKpQQ_pb"),
      getDriveImageUrl("https://drive.google.com/open?id=1X-7jOXaa-g5dwrGkhswivktFhlAF596G"),
      getDriveImageUrl("https://drive.google.com/open?id=1_e_zxTtHTVtVoJTlLsOo6IsAxz7CuTmG"),
      getDriveImageUrl("https://drive.google.com/open?id=1FX1-qMs5iOvP0Xa2jRmCMAUWVLqalWoT")
    ],
    endPrice: 1038244000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L37",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 868,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 10 menit dari Taman Sabo Dam Nglumut
      - 11 menit dari Puskesmas Salam Magelang
      - 11 menit dari Jalan Raya Magelang-Yogya
      - 14 menit dari Pasar Tempel Sleman
      - 14 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Gi-43PTqQVpE8UvJAIbq24QLwYgUeKIu"),
      getDriveImageUrl("https://drive.google.com/open?id=1CySdE_r8MkuKVvSwB1S9pHBlIEA9edg_"),
      getDriveImageUrl("https://drive.google.com/open?id=1emxleX7PBYwfNco-Ia3SwfWyAe0-crAX")
    ],
    endPrice: 112840000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L38",
    title: "SEGERA LELANG KANDANG AYAM",
    type: "Gudang",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2904,
    buildingArea: 1890,
    certificateType: "SHM",
    description:
    `- 11 menit dari Taman Sabo Dam Nglumut
      - 13 menit dari Puskesmas Salam Magelang
      - 13 menit dari Jalan Raya Magelang-Yogya
      - 15 menit dari Pasar Tempel Sleman
      - 16 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1_mfqTEkVvIPJy9u8vyqCRXSJ76uhySdc"),
      getDriveImageUrl("https://drive.google.com/open?id=1pSiViRT_wmECcZzQQvmToD89MfU31DCt"),
      getDriveImageUrl("https://drive.google.com/open?id=1osCM5ZRvTbV8ArnzVsq5AOqdk_fvNX-8"),
      getDriveImageUrl("https://drive.google.com/open?id=1tZSv7tH5kaqpP9LkUVlD_-cZ4HLyRDRg")
    ],
    endPrice: 675960000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L39",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2630,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 10 menit dari Taman Sabo Dam Nglumut
      - 12 menit dari Puskesmas Salam Magelang
      - 14 menit dari Jalan Raya Magelang-Yogya
      - 15 menit dari Pasar Tempel Sleman
      - 15 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1xHUAaMIiQRmtM3OZuICLSUwY6b6vPaTj"),
      getDriveImageUrl("https://drive.google.com/open?id=1TdGcOMXdgOhnOcA7q68j2a7EIfVI_xj8"),
      getDriveImageUrl("https://drive.google.com/open?id=1CGr_n8-CAWezsSY9fjIS4IOGrSX3J5Uv")
    ],
    endPrice: 631200000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L40",
    title: "SEGERA LELANG RUMAH TINGGAL, KANTOR DAN GARASI",
    type: "Rumah",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2120,
    buildingArea: 1372,
    certificateType: "SHM",
    description:
    `- 9 menit dari Puskesmas Salam Magelang
      - 10 menit dari Taman Sabo Dam Nglumut
      - 10 menit dari Jalan Raya Magelang-Yogya
      - 12 menit dari Pasar Tempel Sleman
      - 14 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1HJ7IEsGFOF3Nf8n7vgDsB8dmrXhkK4Fo"),
      getDriveImageUrl("https://drive.google.com/open?id=1WH3WdetgXjaYocOv9C_erLEwAsbPzqNs"),
      getDriveImageUrl("https://drive.google.com/open?id=1ApQC9_uC4SK0_6MwwHfgyteVRvhSDOxI"),
      getDriveImageUrl("https://drive.google.com/open?id=1-TCvgWXDyF91Nav1JgT_oxsRokrtMDTG"),
      getDriveImageUrl("https://drive.google.com/open?id=138nXkgPjAy-kuOMa370YKrtX6csgQ52U"),
      getDriveImageUrl("https://drive.google.com/open?id=1JtDAyoe6wMij2hq6w1oZQ9nhyv7N5tQr"),
      getDriveImageUrl("https://drive.google.com/open?id=1qk7WWztPQ-ZdK6XuA4hszKF5hNR3OAEk"),
      getDriveImageUrl("https://drive.google.com/open?id=1mjoPUAip2UOTMSXoQjHyX8NVKhxz0vlC"),
      getDriveImageUrl("https://drive.google.com/open?id=1GkYER7wRWbzFrslx5djBph6T5tutfmy1"),
      getDriveImageUrl("https://drive.google.com/open?id=1hSifpvk_DmJu2-MAC49Ap8Wo4nlXwjT-")
    ],
    endPrice: 1971151000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L41",
    title: "SEGERA LELANG KANDANG AYAM",
    type: "Gudang",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 5550,
    buildingArea: 2850,
    certificateType: "SHM",
    description:
    `- 9 menit dari Taman Sabo Dam Nglumut
      - 12 menit dari Puskesmas Salam Magelang
      - 12 menit dari Jalan Raya Magelang-Yogya
      - 14 menit dari Pasar Tempel Sleman
      - 15 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1r6cQQ_HbqxgxXSOlYleaKl4rkLJvgeSU"),
      getDriveImageUrl("https://drive.google.com/open?id=1rZWkpIECvILNvgApKIswdgA0I5u4o48L"),
      getDriveImageUrl("https://drive.google.com/open?id=1Xb1SJ2q-7bGjoL8l3hKRL8MMGvFmZQht")
    ],
    endPrice: 1372650000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L42",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2105,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 12 menit dari Jl. Magelang-Yogyakarta
      - 15 menit dari Pasar Tempel
      - 16 menit dari SMKN 1 Tempel
      - 20 menit ke RSUD Sleman, Yogyakarta
      - 24 menit ke Terminal Drs. Prajitno Muntilan`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1qaiCbCwOY4IDg5JgLg0a6KpGKfJ_aGKZ"),
      getDriveImageUrl("https://drive.google.com/open?id=1LvcQ86CVx6K3ISZPg_f0hF7DnEScWHj1"),
      getDriveImageUrl("https://drive.google.com/open?id=1VpmYo6yeTJ24PklZolHm2nIHka5P42cy"),
      getDriveImageUrl("https://drive.google.com/open?id=176aatkKGfHWlLO8-jrippuUc-RSVqKuL"),
      getDriveImageUrl("https://drive.google.com/open?id=1GMpQWM0Tot7hELgSruxZhBS_KB88fWKT"),
      getDriveImageUrl("https://drive.google.com/open?id=131ZW4wiNq6lEz9jiiuoRn0QClqXO81to")
    ],
    endPrice: 294700000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L43",
    title: "SEGERA LELANG KANDANG AYAM",
    type: "Gudang",
    location: "Desa Jerukagung, Kec. Srumbung, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 4300,
    buildingArea: 25,
    certificateType: "SHM",
    description:
    `- 7 menit dari Puskesmas Srumbung
      - 9 menit dari Jalan Raya Magelang-Yogya
      - 10 menit dari Embung Mranggen
      - 14 menit dari SD Islam Muhammadiyah
      - 15 menit dari Grojogan Watu Purbo`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1aiOxL7o-zyPyoTcJFud6ncFj-PFuZW__"),
      getDriveImageUrl("https://drive.google.com/open?id=1N8e_tf6CAPM0K5EQtogT0DWuTXPSNyIC"),
      getDriveImageUrl("https://drive.google.com/open?id=1wrKJVJAHmVu6VNDaDOe4Wca0pVRag_hr"),
      getDriveImageUrl("https://drive.google.com/open?id=1tMlgASCcLuKqLBULMP4ar7-wt5yo064J")
    ],
    endPrice: 1132937000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L44",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    type: "Gudang",
    location: "Desa Jerukagung, Kec. Srumbung, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 4880,
    buildingArea: 2603,
    certificateType: "SHM",
    description:
    `- 7 menit dari Puskesmas Srumbung
      - 10 menit dari Embung Mranggen
      - 13 menit dari Jalan Raya Magelang-Yogya
      - 15 menit dari Grojogan Watu Purbo
      - 19 menit dari SMK Negeri 1 Salam`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=13471UWwBN58mJrxC4K88SYxQIEP7eRG2"),
      getDriveImageUrl("https://drive.google.com/open?id=1Kettsz661lrxtlL8klArKu8AlcO5nc8T"),
      getDriveImageUrl("https://drive.google.com/open?id=1lntsoF5HWPyzEXhI61-ObcljBrQBxW7U"),
      getDriveImageUrl("https://drive.google.com/open?id=1hrWmni2r1AdOkWpB4PgLaybVufkXjOIB")
    ],
    endPrice: 1537813000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L45",
    title: "SEGERA LELANG RUMAH TINGGAL",
    type: "Rumah",
    location: "Desa Salam, Kec. Salam, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1470,
    buildingArea: 90,
    certificateType: "SHM",
    description:
    `- 5 menit dari Klinik Pratama H.M. Sosromiharjo
      - 7 menit dari SD Negeri Klegung 3
      - 14 menit dari Gerbang Tol Banyurejo
      - 14 menit dari Desa Wisata Kelor
      - 25 menit dari Universitas Teknologi Yogyakarta`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1VmWwl9QlPHys_GPWjt0k11QicuoLWM1c"),
      getDriveImageUrl("https://drive.google.com/open?id=1jfxES4TUsqxhyn_ovnI546H_bhN1bqdB"),
      getDriveImageUrl("https://drive.google.com/open?id=19IdpDgjlSyhmoyXicezv7AuRv53hSflu")
    ],
    endPrice: 587941000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L46",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Salam, Kec. Salam, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1780,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 5 menit dari Klinik Pratama H.M. Sosromiharjo
      - 7 menit dari SD Negeri Klegung 3
      - 14 menit dari Gerbang Tol Banyurejo
      - 15 menit dari Desa Wisata Kelor
      - 27 menit dari Universitas Teknologi Yogyakarta`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1vUDoIxcK10OykkP38-aqn1viTD2Y2Jud"),
      getDriveImageUrl("https://drive.google.com/open?id=1dgInw1cLT7UgMQjzf69ac81kcf_9MLQo")
    ],
    endPrice: 373800000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L47",
    title: "SEGERA LELANG GUDANG",
    type: "Gudang",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1983,
    buildingArea: 1277,
    certificateType: "SHM",
    description:
    `- 10 menit dari Taman Sabo Dam Nglumut
      - 11 menit dari Puskesmas Salam Magelang
      - 12 menit dari Jl. Raya Magelang-Yogyakarta
      - 14 menit dari Pasar Tempel Sleman
      - 14 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1am5SLf8LaowWMXR_XCmJ0ClVwlQHPlS8"),
      getDriveImageUrl("https://drive.google.com/open?id=1K-nkRdhrxEFlcrSIem2cCdatCfWWOW0N"),
      getDriveImageUrl("https://drive.google.com/open?id=1-8OMsYtYakbMlkHNvaKeaCUcImftq2aK"),
      getDriveImageUrl("https://drive.google.com/open?id=1f9uGRr_iXu-JRzkYQgG5xogJBBSx6CFA"),
      getDriveImageUrl("https://drive.google.com/open?id=19YmMdWA7-KkSN6SKmCl9sIpHpjyQy0vH")
    ],
    endPrice: 1077991000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L48",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 9990,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 4 menit dari Jalan Raya Magelang-Yogya
      - 5 menit dari Stadion Gondowangi
      - 5 menit dari SDN Gondowangi 1
      - 8 menit dari Puskesmas Mungkid
      - 16 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1OyvLU5ufNWctNa6_iZyLJ32Pb3ohDr9P"),
      getDriveImageUrl("https://drive.google.com/open?id=1gQqVCNv5P68YLqKLlXtaq46mbd2t8L4u"),
      getDriveImageUrl("https://drive.google.com/open?id=1QkgJKSPkYDrzfdjDFytUyHAVCza_AlVE")
    ],
    endPrice: 1298700000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L49",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 8745,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 5 menit dari Jalan Raya Magelang-Yogya
      - 5 menit dari Stadion Gondowangi
      - 5 menit dari SDN Gondowangi 1
      - 8 menit dari Puskesmas Mungkid
      - 17 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1v-X6hz1QblV2p8zWZ_a02X30P6llP6Cq"),
      getDriveImageUrl("https://drive.google.com/open?id=14F9FDdf4sLHDKsCzGu2A1FJpNHV3dyTd"),
      getDriveImageUrl("https://drive.google.com/open?id=1x0Uq-_pxOdJL22nCT10iO8xUmMxP4pjN"),
      getDriveImageUrl("https://drive.google.com/open?id=1Bn4FpUqCbk2rCgSeR9JGBR130L44JrjF"),
      getDriveImageUrl("https://drive.google.com/open?id=12FLFx_FrH7LT8v2AYYDdeUxV69kC_1rw")
    ],
    endPrice: 961950000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L50",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1670,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 1 menit dari Stadion Gondowangi
      - 1 menit dari SDN Gondowangi 1
      - 8 menit dari Jalan Raya Magelang-Yogya
      - 9 menit dari Puskesmas Mungkid
      - 17 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=14CxEtdWR47v8TkTcPAf0yvfMm4xlZNLY"),
      getDriveImageUrl("https://drive.google.com/open?id=1FoOFKw9ZOk7HF5ZQ6MHMroc19dnj3sbI"),
      getDriveImageUrl("https://drive.google.com/open?id=1zwuDQ5U30TGrwofGKmZZlS7OYeu9GkD_"),
      getDriveImageUrl("https://drive.google.com/open?id=10T55vHa2CI7LGO1Sl5Yl2Qiv7Zr74cnH")
    ],
    endPrice: 233800000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L51",
    title: "SEGERA LELANG GUDANG",
    type: "Gudang",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1983,
    buildingArea: 1277,
    certificateType: "SHM",
    description:
    `⦁ 10 menit dari Taman Sabo Dam Nglumut 
      ⦁ 11 menit dari Puskesmas Salam Magelang
      ⦁ 12 menit dari Jl. Raya Magelang-Yogyakarta
      ⦁ 14 menit dari Pasar Tempel Sleman
      ⦁ 14 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1am5SLf8LaowWMXR_XCmJ0ClVwlQHPlS8"),
      getDriveImageUrl("https://drive.google.com/open?id=1K-nkRdhrxEFlcrSIem2cCdatCfWWOW0N"),
      getDriveImageUrl("https://drive.google.com/open?id=1-8OMsYtYakbMlkHNvaKeaCUcImftq2aK"),
      getDriveImageUrl("https://drive.google.com/open?id=1f9uGRr_iXu-JRzkYQgG5xogJBBSx6CFA"),
      getDriveImageUrl("https://drive.google.com/open?id=19YmMdWA7-KkSN6SKmCl9sIpHpjyQy0vH")
    ],
    endPrice: 1077991000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L52",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 9990,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 4 menit dari Jalan Raya Magelang-Yogya
      ⦁ 5 menit dari Stadion Gondowangi
      ⦁ 5 menit dari SDN Gondowangi 1
      ⦁ 8 menit dari Puskesmas Mungkid
      ⦁ 16 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1OyvLU5ufNWctNa6_iZyLJ32Pb3ohDr9P"),
      getDriveImageUrl("https://drive.google.com/open?id=1gQqVCNv5P68YLqKLlXtaq46mbd2t8L4u"),
      getDriveImageUrl("https://drive.google.com/open?id=1QkgJKSPkYDrzfdjDFytUyHAVCza_AlVE")
    ],
    endPrice: 1298700000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L53",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 8745,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 5 menit dari Jalan Raya Magelang-Yogya
      ⦁ 5 menit dari Stadion Gondowangi
      ⦁ 5 menit dari SDN Gondowangi 1
      ⦁ 8 menit dari Puskesmas Mungkid
      ⦁ 17 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1v-X6hz1QblV2p8zWZ_a02X30P6llP6Cq"),
      getDriveImageUrl("https://drive.google.com/open?id=14F9FDdf4sLHDKsCzGu2A1FJpNHV3dyTd"),
      getDriveImageUrl("https://drive.google.com/open?id=1x0Uq-_pxOdJL22nCT10iO8xUmMxP4pjN"),
      getDriveImageUrl("https://drive.google.com/open?id=1Bn4FpUqCbk2rCgSeR9JGBR130L44JrjF"),
      getDriveImageUrl("https://drive.google.com/open?id=12FLFx_FrH7LT8v2AYYDdeUxV69kC_1rw")
    ],
    endPrice: 961950000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L54",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1670,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 1 menit dari Stadion Gondowangi
      ⦁ 1 menit dari SDN Gondowangi 1
      ⦁ 8 menit dari Jalan Raya Magelang-Yogya
      ⦁ 9 menit dari Puskesmas Mungkid
      ⦁ 17 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=14CxEtdWR47v8TkTcPAf0yvfMm4xlZNLY"),
      getDriveImageUrl("https://drive.google.com/open?id=1FoOFKw9ZOk7HF5ZQ6MHMroc19dnj3sbI"),
      getDriveImageUrl("https://drive.google.com/open?id=1zwuDQ5U30TGrwofGKmZZlS7OYeu9GkD_"),
      getDriveImageUrl("https://drive.google.com/open?id=10T55vHa2CI7LGO1Sl5Yl2Qiv7Zr74cnH")
    ],
    endPrice: 233800000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L55",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    type: "Gudang",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 27261,
    buildingArea: 9935,
    certificateType: "SHM",
    description:
    `⦁ 10 menit dari Taman Sabo Dam Nglumut 
      ⦁ 12 menit dari Jl. Raya Magelang-Yogyakarta
      ⦁ 12 menit dari Puskesmas Salam Magelang
      ⦁ 14 menit dari Pasar Tempel Sleman
      ⦁ 15 menit dari SMKN 1 Tempel`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=17nONxHgw8UW3bhKpY-6XKuj2uT7LedwV"),
      getDriveImageUrl("https://drive.google.com/open?id=1qWGcacQKBc_Zy9NyrGbYGwr-qxXkqdia"),
      getDriveImageUrl("https://drive.google.com/open?id=15H04BRKLtBrzBt5ye99D4SWzmLKOC_R1"),
      getDriveImageUrl("https://drive.google.com/open?id=1LHULPmX21fjwxDNK7SWg9KANIeTiCYqx"),
      getDriveImageUrl("https://drive.google.com/open?id=1At0hedFJy1VHFtN3-ONqKdoX0N_wR_9n"),
      getDriveImageUrl("https://drive.google.com/open?id=1ALgiUrpy02qGPjfC267Si-FnwbdI91Bi"),
      getDriveImageUrl("https://drive.google.com/open?id=1AdKaNOI4nDrxaq7hO-F-T6LnUDkRBPi3"),
      getDriveImageUrl("https://drive.google.com/open?id=1wFnMu_GG8Au3dsYziXddxQHcZ_cz6oIh")
    ],
    endPrice: 3808840000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L56",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sidoagung, Kec. Tempuran Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 9790,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 9 menit dari RSUD Bukit Menoreh
      ⦁ 11 mnt SMP Negeri 1 Salaman
      ⦁ 22 mnt Kampus 2 Universitas Muhammadiyah Magelang
      ⦁ 22 mnt Salut Magelang Raya
      ⦁ 24 mnt Wisata Punthuk Setumbu`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1xoNvfKSglVRC7doLzEhzb6eQXpUCYjvX"),
      getDriveImageUrl("https://drive.google.com/open?id=13BwpjNGX4tBfkZtsleLPe2W6U-Eg7gYo"),
      getDriveImageUrl("https://drive.google.com/open?id=1IJnpDRTR13MA1IA9llMHlxe2ndqL82Ks")
    ],
    endPrice: 881100000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L57",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sidoagung, Kec. Tempuran Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2277,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 2 menit dari Jl. Raya Magelang-Purworejo
      ⦁ 4 menit dari Pasar Kalangan
      ⦁ 6 menit dari RSUD Bukit Menoreh
      ⦁ 8 menit dari SMA Negeri 1 Salaman
      ⦁ 9 menit dari Terminal Salaman
      ⦁ 21 menit dari Candi Borobudur Magelang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1gpECisLzSoUoecPv9D44XNVtjRdr0gfN"),
      getDriveImageUrl("https://drive.google.com/open?id=1BDYyegdR64XcPvxH5TY4ZV4NLWMQME2M"),
      getDriveImageUrl("https://drive.google.com/open?id=1Z76BmQ9dbQjezu0EATROg_GbAatGtBcS")
    ],
    endPrice: 352935000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L58",
    title: "SEGERA LELANG TANAH KOSONG",
    type: "Tanah",
    location: "Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 8658,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 10 menit dari Jl. Magelang-Yogyakarta
      ⦁ 12 menit dari Pasar Tempel
      ⦁ 15 menit dari SMKN 1 Tempel
      ⦁ 19 menit ke RSUD Sleman, Yogyakarta
      ⦁ 21 menit ke Terminal Drs. Prajitno Muntilan`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1yw-EXkeqHr95zvQBU9LQHxAfWvLKe99E"),
      getDriveImageUrl("https://drive.google.com/open?id=1WJgYNQBPB6IBrcd2EbJLqoNcY5nFI-mt"),
      getDriveImageUrl("https://drive.google.com/open?id=19SmvFHJaFEInfKKEX_2JbzKjWBi5WOOq")
    ],
    endPrice: 1645020000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L59",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Tanggulrejo, Kec. Tempuran, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 12127,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 6 menit dari Jl. Raya Magelang-Salaman
      ⦁ 7 menit dari SD Negeri Jambu
      ⦁ 10 menit dari Pasar Tempuran
      ⦁ 12 menit dari RSUD Bukit Menoreh
      ⦁ 15 menit dari GOR Dhananjaya Magelang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Alg7RM-jrKUMZ7eXhNOEciXMJh9FgONC"),
      getDriveImageUrl("https://drive.google.com/open?id=1qA1ERPRPgV2I0cRYf_rkb86sOrcXgVHq"),
      getDriveImageUrl("https://drive.google.com/open?id=1DteFGhsorcwdIkd5BbyohMQHCcyTUXIc"),
      getDriveImageUrl("https://drive.google.com/open?id=1wPVz-ZXc6hxaOySEVyqmc2IfcBJU4mzf")
    ],
    endPrice: 1091430000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L60",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Jalan Lingkungan, Desa Sudimoro, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1780,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 10 menit dari Jl. Magelang-Yogyakarta
      ⦁ 12 menit dari Pasar Tempel
      ⦁ 13 menit dari SMKN 1 Tempel
      ⦁ 18 menit ke RSUD Sleman, Yogyakarta
      ⦁ 20 menit ke Terminal Drs. Prajitno Muntilan`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1EJ-opTi7wa2cCi7m4bULVeKrievVMUFq"),
      getDriveImageUrl("https://drive.google.com/open?id=1lAlITBNzwcHl3mZfod_p98jqOPmXv_Bw"),
      getDriveImageUrl("https://drive.google.com/open?id=1_bWAn8xUJ-Eis3LjZQX8QH3501ZGeKmD")
    ],
    endPrice: 427200000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L61",
    title: "SEGERA LELANG RUMAH TINGGAL DAN KANDANG AYAM",
    type: "Rumah",
    location: "Jalan Bulu, Desa Jerukagung, Kec. Srumbung Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 1330,
    buildingArea: 826,
    certificateType: "SHM",
    description:
    `⦁ 7 menit dari Puskesmas Srumbung
      ⦁ 10 menit dari Embung Mranggen
      ⦁ 12 menit dari Jalan Raya Magelang-Yogya
      ⦁ 15 menit dari SMKN 1 Tempel
      ⦁ 15 menit dari Grojogan Watu Purbo`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=180JJZ47Dm0i4F30zTLqK97l2dmT4vcF9"),
      getDriveImageUrl("https://drive.google.com/open?id=1rj7IBlvA64w1EVZ2ALPpS4jL69IDV8sm"),
      getDriveImageUrl("https://drive.google.com/open?id=15KGFzOESMFps2fw3jR-N7y8C7mkmxQVe")
    ],
    endPrice: 818948000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L62",
    title: "SEGERA LELANG TANAH DAN POS JAGA",
    type: "Tanah",
    location: "Desa Sidoagung, Kec. Tempuran Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 34730,
    buildingArea: 43,
    certificateType: "SHM",
    description:
    `⦁ 2 menit dari Jl. Raya Magelang-Purworejo
      ⦁ 5 menit dari Pasar Kalangan
      ⦁ 6 menit dari SD Negeri Kalisari 1
      ⦁ 6 menit dari RSUD Bukit Menoreh
      ⦁ 9 menit dari Terminal Salaman
      ⦁ 15 menit dari Candi Borobudur Magelang`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1a4qeQmyW9FFh41ipjqjMr6Q23hqwVil_"),
      getDriveImageUrl("https://drive.google.com/open?id=19u1isvcIrW839awX8Xoj50KU3hcS3ql_"),
      getDriveImageUrl("https://drive.google.com/open?id=1KF3SGqSRTfGZ60h2wWpjVlbpfBFFiM7L"),
      getDriveImageUrl("https://drive.google.com/open?id=1WFfRTijfud9N3iDRC-t4yBwREuo-3Asg")
    ],
    endPrice: 5567919000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L63",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    type: "Gudang",
    location: "Desa Jerukagung, Kec. Srumbung, Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 6450,
    buildingArea: 1958,
    certificateType: "SHM",
    description:
    `⦁ 14 mnt Pertamina Gas Station 44.564.04 Baledono
      ⦁ 18 mnt Desa Wisata Pulesari
      ⦁ 20 mnt RS Umum 'Aisyiyah Muntilan
      ⦁ 23 mnt SMA Negeri 1 Muntilan
      ⦁ 25 mnt Gerbang Tol Banyurejo`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1I3EgdBj5NS-vuz0qcJ0wkrj88OuI27RZ"),
      getDriveImageUrl("https://drive.google.com/open?id=1qfuMbJf_0msEykXi5sEzkB4CFZF_I8no"),
      getDriveImageUrl("https://drive.google.com/open?id=1Wc8wHHiJBkyfsO44uWleOSk_r-TRC3vm"),
      getDriveImageUrl("https://drive.google.com/open?id=12bgqax2JvRJ8WDJxQxvjQ3X8KY6Fn-Zr")
    ],
    endPrice: 1609156000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "L64",
    title: "SEGERA LELANG TANAH SAWAH",
    type: "Tanah",
    location: "Desa Gondowangi, Kec. Sawangan Kab. Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    kota: "Magelang",
    landArea: 2440,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `⦁ 1 menit dari Stadion Gondowangi
      ⦁ 1 menit dari SDN Gondowangi 1
      ⦁ 8 menit dari Jalan Raya Magelang-Yogya
      ⦁ 9 menit dari Puskesmas Mungkid
      ⦁ 17 menit dari Armada Town Square Mall`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=14zkVMYlarW9QPqK_-FqchJyozLyfzO_-"),
      getDriveImageUrl("https://drive.google.com/open?id=1Fpnvs_HHnu-XROzn_b1u5ZyBu-DQdMJ2"),
      getDriveImageUrl("https://drive.google.com/open?id=1DeOmZsUDk_u7Ay7lebQXnzHGfMQCQ8Lu")
    ],
    endPrice: 317200000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
];// Helper: Get unique provinces from all properties
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