export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { BaseItemDijual, BaseItemLelang } from './data';
import { getDriveImageUrl } from './drive-utils';

// Property Type
export type PropertyType = "Rumah" | "Ruko" | "Villa" | "Apartemen" | "Tanah" | "Gudang" | "Hotel" | "Toko";

// Property Interface - extends BaseItemDijual
export interface Property extends BaseItemDijual {
  type: PropertyType;
  landArea: number;
  buildingArea: number;
  certificateType: "SHM" | "HGB";
  status: "Available" | "Featured" | "Sold";
  isHidden?: boolean; // <-- Tambahkan ini
}

// PropertiDilelang Interface - extends BaseItemLelang
export interface PropertiDilelang extends BaseItemLelang {
  type: PropertyType;
  landArea: number;
  buildingArea: number;
  certificateType: "SHM" | "HGB" | "SHMSRS" | "SHP" | "SHSRS";
  jamLelang? : string;
  isHidden?: boolean; // <-- Tambahkan ini
}

// Mock Data - PROPERTI LELANG
export const lelangProperties: PropertiDilelang[] = [
  {
    id: "RLI_ELP_0075",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Tlogowaru, Kecamatan Merakurak, Kabupaten Tuban, Propinsi Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 2325,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 2 menit dari SMKN 3 Tuban
      -	3 menit dari Pasar Temandang
      - 6 menit dari Puskesmas Temandang
      - 12 menit ke Wisata Silowo Merakurak
      - 19 menit Kampus C - IIK NU Tuban`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1RBBAf_fhUB8TPU2YrPvd_BqWmGglgGC-"),
      getDriveImageUrl("https://drive.google.com/open?id=1H-Z8Y7GuXM-o0eDtlUfRzdAWAaRqlXtx"),
      getDriveImageUrl("https://drive.google.com/open?id=166OfrYUNiIvQ-ba5VTvR-fhr4JdMKhk2"),
      getDriveImageUrl("https://drive.google.com/open?id=1plNie6h3SVIHpmfL099Dvb0f9RWwo1rT"),
      getDriveImageUrl("https://drive.google.com/open?id=1Hltvsa26CkgvnvaQXMpKVGVfODxERKav"),
      getDriveImageUrl("https://drive.google.com/open?id=11f6mtdqdZ7hAvKlsls-xuA56cY88oTv_"),
      getDriveImageUrl("https://drive.google.com/open?id=1ygvMGXJXwtozpFNRqXQ0sdlSI2nMOKVp"),
      getDriveImageUrl("https://drive.google.com/open?id=1RyBtLGNfKi4oPTTA00AQUCn1JKSBTu_9"),
      getDriveImageUrl("https://drive.google.com/open?id=1OJuUwUTTt4MFaDg5Qf8f4evWVmKvDFjU")
    ],
    endPrice: 358050000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },


      {
    id: "RLI_ELP_0074",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Tlogowaru, Kecamatan Merakurak, Kabupaten Tuban, Propinsi Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 4700,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 2 menit dari SMKN 3 Tuban
      -	4 menit dari Pasar Temandang
      - 6 menit dari Puskesmas Temandang
      - 14 menit ke Wisata Silowo Merakurak
      - 20 menit Kampus C - IIK NU Tuban`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=14yTKnc4jP3RupzNDbxBAgYW5AQtdJoS6"),
      getDriveImageUrl("https://drive.google.com/open?id=1M_rrLUsi9iF2Y5wTL8hsQNDVvI5rumoE"),
      getDriveImageUrl("https://drive.google.com/open?id=1fWr1X8kSocUlcoxwCzO_Ee3-64J5g-Ci")
    ],
    endPrice: 611000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

    {
    id: "RLI_ELP_0073",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Desa Tlogowaru, Kecamatan Merakurak, Kabupaten Tuban, Propinsi Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 332,
    buildingArea: 257,
    certificateType: "SHM",
    description:
    `- 2 menit dari SMKN 3 Tuban
      -	4 menit dari Pasar Temandang
      - 6 menit dari Puskesmas Temandang
      - 13 menit ke Wisata Silowo Merakurak
      - 19 menit Kampus C - IIK NU Tuban`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Z6orVZBuTXi6yo3snf9gdg81DpyEl6B7"),
      getDriveImageUrl("https://drive.google.com/open?id=1mUsUSZbIomMbtvJ5mx_XZwBcs0vubyqC"),
      getDriveImageUrl("https://drive.google.com/open?id=1Fnh8Up-Ry2j2QzgkTqvVmEFlxHJGSiqf"),
      getDriveImageUrl("https://drive.google.com/open?id=1uoGHkHDumCPMJbXZMlhZFj7CKQnojyt9"),
      getDriveImageUrl("https://drive.google.com/open?id=1f1ivFhMBi_YrnG-3Sdh83L7J8axtwjLE"),
      getDriveImageUrl("https://drive.google.com/open?id=1eW_ouB8c9VU6Xh48kqQYqdWrTrUBPKvL"),
      getDriveImageUrl("https://drive.google.com/open?id=1cAbJbeWJIGfjjTNb0d0LPmsEFooJnknT"),
      getDriveImageUrl("https://drive.google.com/open?id=1w7_tx4hxFsXctcEbzSqbnVlMEU0nL2XE"),
      getDriveImageUrl("https://drive.google.com/open?id=1PfyaywiK6IB9klcHS8pwj5yy7AtsN08a"),
      getDriveImageUrl("https://drive.google.com/open?id=11-cQW93CgRe_2Q3CjksjxEikIRVkdo7M"),
    ],
    endPrice: 287000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

     {
    id: "RLI_ELP_0072",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Perumahan Persada Prapen Mas, Jl. Prapen Indah Timur IV Blok AC No. 10 Kel. Panjangjiwo, Kec. Tenggilis Mejoyo, Surabaya",
    provinsi: "Jawa Timur",
    kota: "Surabaya",
    landArea: 165,
    buildingArea: 221.5,
    certificateType: "SHM",
    description:
    `- 5 menit dari RS Ubaya
      -	7 menit dari Universitas Surabaya
      - 17 menit dari Royal Plaza
      - 20 menit dari Pintu Tol Waru
      - 20 menit dari Taman Bungkul Surabaya`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1CZNGMvtM4FcJJZNEoEnvY55gTHXc6wfU"),
      getDriveImageUrl("https://drive.google.com/open?id=1c2B8xo8SxMAvdduS0Z8Yxiw_COUXWepI"),
      getDriveImageUrl("https://drive.google.com/open?id=1_CU3CVMnV1qEGp2EjBs4LM_sAfhFuZOW"),
      getDriveImageUrl("https://drive.google.com/open?id=17NAp5adK_0lTHMVWmSca7Wi9X-Y010Er")
    ],
    endPrice: 2251226225,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

     {
    id: "RLI_ELP_0071",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Desa Tasikmadu, Kec. Palang, Kab. Tuban, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 206,
    buildingArea: 179,
    certificateType: "SHM",
    description:
    `- 3 menit dari Pantai Kelapa Tuban
      -	4 menit dari Puskesmas Sumurgung
      - 7 menit dari Universitas Terbuka Tuban
      - 7 menit dari SMA Negeri 1 Tuban
      - 8 menit dari Citimall Tuban`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1jXJGnBq5M47v_dbSuCOUp0enNlmphkMz"),
      getDriveImageUrl("https://drive.google.com/open?id=1wkZ3MQADp_7gfDueO8ADyqAPVW3NGtVl"),
      getDriveImageUrl("https://drive.google.com/open?id=1yyCRUEmx7g8A4Vp33dxQGBjccKY6Cn2N"),
      getDriveImageUrl("https://drive.google.com/open?id=15SNIQLWGC_KZ60KllBdNagqI6o1Rgs9K")
    ],
    endPrice: 570220000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

     {
    id: "RLI_ELP_0070",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Desa Lajokidul, Kecamatan Singgahan, Kabupaten Tuban, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 2434,
    buildingArea: 489,
    certificateType: "SHM",
    description:
    `- 7 menit dari Pasar Ngrojo
      -	8 menit dari RS. Graha Husada Singgahan
      - 8 menit dari SMPN 1 Bangilan
      - 14 menit dari Air Terjun Nglirip
      - 17 menit dari Sumber Mata Air Krawak`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1qMq_sZaLgMqVrRa44jb2TzXSng20anKM"),
      getDriveImageUrl("https://drive.google.com/open?id=1UMi9cO0FoMY4V3JULoDPVzyh4RMR7s7k"),
      getDriveImageUrl("https://drive.google.com/open?id=1moBl6j1mrCgQXNj25XJdr-FM6KYW3Kxi"),
      getDriveImageUrl("https://drive.google.com/open?id=1Lro1Fhlbs-_3Glak1BgiP0VJCxccNgE5"),
      getDriveImageUrl("https://drive.google.com/open?id=19UKzgqiUAnh9piPrq-IyeWWSR26xP18c"),
      getDriveImageUrl("https://drive.google.com/open?id=1wlprJSFnLymXW0-vTlfDQNL43YwyZu4Q"),
      getDriveImageUrl("https://drive.google.com/open?id=1ao-A5op_aIoCl44oBhuGt7Ibb7cxXS44"),
      getDriveImageUrl("https://drive.google.com/open?id=1k7aGrOSYsIyxKYXgdxrWRBOatN1iTcfh"),
      getDriveImageUrl("https://drive.google.com/open?id=1W-qwCD4np7SfAf7po93Rqqg2J6ZTwgon"),
      getDriveImageUrl("https://drive.google.com/open?id=1JsVWpbOjhq50YT1hkmSCMWI8HIhDFqP8"),
    ],
    endPrice: 876440000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

     {
    id: "RLI_ELP_0069",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Jatisari, Kec. Senori, Kab. Tuban, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Tuban",
    landArea: 2434,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 7 menit dari Pasar Ngrojo
      -	8 menit dari RS. Graha Husada Singgahan
      - 8 menit dari SMPN 1 Bangilan
      - 14 menit dari Air Terjun Nglirip
      - 17 menit dari Sumber Mata Air Krawak`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1CWXqCqTHN5vqT3oKnDHW5MfeRXoI3bbu"),
      getDriveImageUrl("https://drive.google.com/open?id=1EhoMY7CSJksSVVAz8kNgvXvs87b7XCcU"),
      getDriveImageUrl("https://drive.google.com/open?id=1JoLUEds3CBrhm281K7q9K-d8kfJaFPJL"),
      getDriveImageUrl("https://drive.google.com/open?id=1l5KzBpnJ4xgjj2NDXMsslXqEbooVTiou"),
      getDriveImageUrl("https://drive.google.com/open?id=19PnaFPBcJ7L2PqGiZoGwFcf5X4Ag3vkj"),
      getDriveImageUrl("https://drive.google.com/open?id=1vc5so1OCJkSQ_5LyFfUbxiUdn4TphXOP")
    ],
    endPrice: 211696000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  
    {
    id: "RLI_ELP_0068",
    title: "SEGERA LELANG RUMAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Desa Tanjungharjo, Kec. Kapas, Kab. Bojonegoro, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Bojonegoro",
    landArea: 281,
    buildingArea: 162,
    certificateType: "SHM",
    description:
    `- 1 menit dari Pasar Tradisional Tanjungharjo
      -	4 menit dari Kebun Raya Wedi
      - 5 menit dari Puskesmas Tanjungharjo
      - 9 menit dari SMA Negeri Model Terpadu
      - 16 menit dari Alun-alun Bojonegoro`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1xehbAgMitL_dOFJTq_UuUWuABV5BigjO"),
      getDriveImageUrl("https://drive.google.com/open?id=1Sms8MfFudnLmOtq4MD9UGgYt4ZjLSzMT"),
      getDriveImageUrl("https://drive.google.com/open?id=1sL9fuTvdB-5VkojzvIL7ekQ3oJjvKEl8"),
      getDriveImageUrl("https://drive.google.com/open?id=1-Zo1Pg4y51SZR6y21qDbj0Tfkp6tuos_"),
      getDriveImageUrl("https://drive.google.com/open?id=1ok28rOB0b7SKiVirq8tjYHIjus-XchWo")
    ],
    endPrice: 375700000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

    {
    id: "RLI_ELP_0067",
    title: "SEGERA LELANG GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Gudang",
    location: "Desa Tanjungharjo, Kec. Kapas, Kab. Bojonegoro, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Bojonegoro",
    landArea: 3850,
    buildingArea: 590,
    certificateType: "SHM",
    description:
    `- 1 menit dari Puskesmas Tanjungharjo
      -	7 menit dari SMKN 4 Bojonegoro
      - 9 menit dari Gofun Waterpark
      - 10 menit ke RSUD Dr. R. Sosodoro Djatikoesoemo Bojonegoro
      - 11 menit Stasiun Bojonegoro`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1tIgGxUx1aaZaZRHIcaJT20ZvWMztTTzI"),
      getDriveImageUrl("https://drive.google.com/open?id=1lOMeKbzNdkxB8k76UiQac01tt1_prJUC"),
      getDriveImageUrl("https://drive.google.com/open?id=1oS1qR_jMo7u_aK8YoZ9ct4SY1nT_Tm_D"),
      getDriveImageUrl("https://drive.google.com/open?id=1I8pNTHXq393FZWRwzu3OC3KNriX0ik2a"),
      getDriveImageUrl("https://drive.google.com/open?id=1WlM4-fIm0qP3sOflx9htTmTgMULS8Reo"),
      getDriveImageUrl("https://drive.google.com/open?id=1NsvlF-tgzb1irk5xFvPpTWdrHovkMid0")
    ],
    endPrice: 2014500000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

   {
    id: "RLI_ELP_0066",
    title: "SEGERA LELANG tANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Jl. Raya Dlanggu - Pacet, Desa Kalen, Kecamatan Dlanggu, Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 2996,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 3 menit dari Puskesmas Gondang
      -	3 menit dari SMAN 1 Gondang Mojokerto
      - 4 menit dari Pasar Pohjejer
      - 5 menit dari Wisata Air Padi Park
      - 6 menit dari Wisata Air Balekambang`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1fHQF6OLOvzTmJBlg5nEvFwNdhwzrshWi"),
      getDriveImageUrl("https://drive.google.com/open?id=1z7P76YS3S1t8Pba7_AyriIKjvhd3EWCj"),
      getDriveImageUrl("https://drive.google.com/open?id=1e_OrfWTfyNjq0u4VaiRpXa0XTMQ4m1Oo"),
      getDriveImageUrl("https://drive.google.com/open?id=1UjtF7mV94mBZryhtLgPoiRwQOUyWN8BG")
    ],
    endPrice: 675000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

     {
    id: "RLI_ELP_0065",
    title: "SEGERA LELANG TOKO DAN SHOWROOM",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Jl. Raya Dlanggu - Pacet, Dusun Kalang RT 04 RW 04, Desa Kalen, Kecamatan Dlanggu, Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 7560,
    buildingArea: 684,
    certificateType: "SHM",
    description:
    `- 3 menit dari Puskesmas Gondang
      -	3 menit dari SMAN 1 Gondang Mojokerto
      - 4 menit dari Pasar Pohjejer
      - 5 menit dari Wisata Air Padi Park
      - 6 menit dari Wisata Air Balekambang`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1mm06tcFwysDT08LrQl7k7n6N0aY9dAsd"),
      getDriveImageUrl("https://drive.google.com/open?id=17dyNMx5j5R57L1z3uxOWITct6a52xfLW"),
      getDriveImageUrl("https://drive.google.com/open?id=1z7yDUBlIiQ1ntHOZmUq8dUiOxgJfFpAx"),
      getDriveImageUrl("https://drive.google.com/open?id=1423M9LyOqFCs9tUIQJF8jw7NNgh1GvwP"),
      getDriveImageUrl("https://drive.google.com/open?id=17D0d3_2Zvr7KcmLrZNNlXjhFMyuXRNWk"),
      getDriveImageUrl("https://drive.google.com/open?id=1f6oFq0U3o_vaUzPW8Hz1nsjrhcxGqhq4"),
      getDriveImageUrl("https://drive.google.com/open?id=1w9lpmtCLiCVG40k4kQ2dju7GXEUkzbFB"),
      getDriveImageUrl("https://drive.google.com/open?id=1EOwuVqY_vqm7w5j-ZUXsDhSzaT-QgT49"),
      getDriveImageUrl("https://drive.google.com/open?id=18dU2Cvgtr6u8IGb4GP0M4MN5nPcDvjAB"),
      getDriveImageUrl("https://drive.google.com/open?id=1tv6abYkp992x2WN0rmuTdzDuBbt8SqCz")
    ],
    endPrice: 3350000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

      {
    id: "RLI_ELP_0064",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Kepuhpandak, Kecamatan Kutorejo, Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 6180,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 1 menit dari Pasar Kebon
      -	5 menit dari SD Negeri Karangasem
      - 11 menit dari Rumah Sakit Sido Waras
      - 14 menit dari Stadion Gelora Gajah Mada
      - 14 menit dari Kolam Renang Vanda Tirta`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1oBgCxYHjaAypdiPugxQAAOxz9_VgTWw8"),
      getDriveImageUrl("https://drive.google.com/open?id=1Bfr9-4Vj7NVIpKWexoXYMStqJnGX18e3"),
      getDriveImageUrl("https://drive.google.com/open?id=1JwXzpNjxm9sIkiXdodMYAArlO23kFQ8x"),
      getDriveImageUrl("https://drive.google.com/open?id=1Cg0MiEltcfKwmcybJg411s7iJscMJIVr"),
      getDriveImageUrl("https://drive.google.com/open?id=1WOozfNiAG2d2Oa0m0LpL3waf9CONJcQ_"),
      getDriveImageUrl("https://drive.google.com/open?id=1t77UAnJxAp9Kdo_ob-93CLTDp8FMRmyE")
    ],
    endPrice: 923280000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

      {
    id: "RLI_ELP_0063",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Kepuhpandak, Kecamatan Kutorejo, Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 2310,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 2 menit dari Pasar Kebon
      -	5 menit dari SD Negeri Karangasem
      - 11 menit dari Rumah Sakit Sido Waras
      - 14 menit dari Stadion Gelora Gajah Mada
      - 14 menit dari Kolam Renang Vanda Tirta`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1OZ0Bad4i8DJOJ2wRZM1p4UwbxLOMEKG1"),
      getDriveImageUrl("https://drive.google.com/open?id=1zHVmcMXBrpplOm_wQBb6SL9Y0mFhmhIW"),
      getDriveImageUrl("https://drive.google.com/open?id=1WMX32BwtF_UfRcdEJtSZ4U9KORdr3lY0"),
      getDriveImageUrl("https://drive.google.com/open?id=1ijsICR1ZkVSsDPPCFJsQjZQZVQkPBUq0"),
      getDriveImageUrl("https://drive.google.com/open?id=16bn5-CZlUy5hYSUQyGM20tDqIZwOygNZ"),
      getDriveImageUrl("https://drive.google.com/open?id=1xuG-8SC-tg8buVGrZXaLLpG_yIpVuHtG"),
      getDriveImageUrl("https://drive.google.com/open?id=108cYE-_WCTco_lpqtpIU_h4xn1QIX88j"),
      getDriveImageUrl("https://drive.google.com/open?id=1Gr6YLDA3duCYTlhw0E8MZINAmBK7iWUe")
    ],
    endPrice: 360000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

      {
    id: "RLI_ELP_0062",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Tanah",
    location: "Desa Kepuhpandak, Kecamatan Kutorejo, Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 2515,
    buildingArea: 0,
    certificateType: "SHM",
    description:
    `- 1 menit dari Pasar Kebon
      -	5 menit dari SD Negeri Karangasem
      - 11 menit dari Rumah Sakit Sido Waras
      - 14 menit dari Stadion Gelora Gajah Mada
      - 14 menit dari Kolam Renang Vanda Tirta`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1eyeUURd7N67i3eFYC4vGsPvzDqOoBTmR"),
      getDriveImageUrl("https://drive.google.com/open?id=1pCKeI_UtO060t38yCwy_RrV6k-qtA6uc"),
      getDriveImageUrl("https://drive.google.com/open?id=1B_wXy3DFDycGlwtJ2sFFsp-K_IFA7Wnd")
    ],
    endPrice: 377280000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

    {
    id: "RLI_ELP_0061",
    title: "SEGERA LELANG BENGKEL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Gudang",
    location: "Jalan Kutorejo - Bangsal, Desa Kaligoro, Kec. Kutorejo, Kab. Mojokerto, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 1110,
    buildingArea: 125,
    certificateType: "SHM",
    description:
    `-  1 menit dari Pasar Kebon
      - 6 menit dari SD Negeri Karangasem
      - 9 menit dari Rumah Sakit Sido Waras
      - 12 menit dari Stadion Gelora Gajah Mada
      - 12 menit dari Kolam Renang Vanda Tirta`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1A3S4_bF_cmfAzMTy4fM-FfD5rriccqMY"),
      getDriveImageUrl("https://drive.google.com/open?id=1QW7oDM6jvmsUJqao2WWmedr12sVgjC0m"),
      getDriveImageUrl("https://drive.google.com/open?id=1FOgsC6G4pOH7AsND52KQs-tLSvF0d83D"),
      getDriveImageUrl("https://drive.google.com/open?id=1pkmMG4qTPr1-b5_XI3-33dhFPY-xmpsL"),
      getDriveImageUrl("https://drive.google.com/open?id=1MC7JdtdZy2OLi7vZI5tcB9SpwwxmApFu"),
      getDriveImageUrl("https://drive.google.com/open?id=1zU9likrUxCQeKasipEDLxZQx2ffESQ5r"),
      getDriveImageUrl("https://drive.google.com/open?id=1GANiHoA6s0AVCpXjiU5OqFWPM2YAHSP9")
    ],
    endPrice: 483600000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0000",
    title: "SEGERA LELANG TANAH PEKARANGAN",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
      getDriveImageUrl("https://drive.google.com/file/d/1AOed3A9fjfmN1KrWcNdUslz6Ob_YLpkF/view?usp=sharing"),
      getDriveImageUrl("https://drive.google.com/file/d/1QVI3RaLgW8nu3MCIDsmotyQY13dqEmRF/view?usp=sharing"),
      getDriveImageUrl("https://drive.google.com/file/d/10BBdVSewEDCxPHZqfQYF4aHlYhvqg7dW/view?usp=sharing"),
      getDriveImageUrl("https://drive.google.com/open?id=17RVM1f4l7p4-UUz4Nyh2pWQpA1v7R817/view?usp=sharing")
    ],
    endPrice: 995000000,
    tanggalLelang: "2026-02-28",
    batasWaktuLelang: "-",
    jamLelang: "10:30 WIB",
  },
  {
    id: "RLI_ELP_0001",
    title: "SEGERA LELANG RUMAH 2 LANTAI",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0002",
    title: "AGUNAN LELANG GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1soba2SUIajRhXWH6wsS0nsXm-deu83Gl"),
      getDriveImageUrl("https://drive.google.com/open?id=1R5s52yfdP1e5vpfdZz8WIjxVN7yvoLen"),
      getDriveImageUrl("https://drive.google.com/open?id=1NC4LbXRp2zGMiv2sb_gu-4sQmCYy4OVY"),
      getDriveImageUrl("https://drive.google.com/open?id=1Ut996Ab2DUnBVl63ySGp28OLg93r7CmH")
    ],
    endPrice: 730000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0003",
    title: "AGUNAN LELANG RUKO 2 LANTAI",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    id: "RLI_ELP_0004",
    title: "SEGERA LELANG TANAH DAN BANGUNAN",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0005",
    title: "SEGERA LELANG RUMAH 2 LANTAI",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0006",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Perumahan Mutiara Kampus Blok A-11, Desa Tegalgondo, Kec. Karangploso, Kab. Malang",
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0007",
    title: "SEGERA LELANG GUDANG DAN PABRIK",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0008",
    title: "SEGERA LELANG RUMAH KOS",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Perumahan Mutiara Kampus Blok A-15 - A-16, Desa Tegalgondo, Kec. Karangploso, Kab. Malang",
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0009",
    title: "SEGERA LELANG TANAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0010",
    title: "AGUNAN LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    id: "RLI_ELP_0011",
    title: "AGUNAN LELANG TANAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    tanggalLelang: "2026-02-11",
    batasWaktuLelang: "-",
    jamLelang: "11:00 WIB",
  },
  {
    id: "RLI_ELP_0012",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1EHJLs_ItHNpw3QFQJHmf3h8s2Ik-a7kU"),
      getDriveImageUrl("https://drive.google.com/open?id=1cNW2kjVK2xc4Et3Y4dgvJZtJ_M9WjtUB"),
      getDriveImageUrl("https://drive.google.com/open?id=1HfAD51PiTAN34N8CCCiOZU0nyNt9P3fP"),
    ],
    endPrice: 770000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0013",
    title: "SEGERA LELANG TOKO",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1tg3chY_xJa6Yh247l97Un6yjh0_hAiIh"),
      getDriveImageUrl("https://drive.google.com/open?id=19KXYp2EtxmxG4U_WVdYawAMSajuSTm6i"),
      getDriveImageUrl("https://drive.google.com/open?id=1a1ltrfNqvrNm4au4VpODLsGVFcnTqqY4")
    ],
    endPrice: 625000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0014",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1PGpVzmGICVPD87uLvq0kHA66pMnJhFJD"),
      getDriveImageUrl("https://drive.google.com/open?id=1Vg8yqFKfZNYglcnxlQLyiFVJm3lwm57u"),
      getDriveImageUrl("https://drive.google.com/open?id=1x36j5cQ-qtVElwIQz-aommqdSXzlv7bq")
    ],
    endPrice: 1250000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0015",
    title: "SEGERA LELANG HOTEL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0016",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1newpHYXbOT7UWlSaRNV7TZuqDPusoO4d"),
      getDriveImageUrl("https://drive.google.com/open?id=1nGcaUd6uYxPlAG5FZWiZnD2bGTL3ZGbi"),
      getDriveImageUrl("https://drive.google.com/open?id=1PqJOypVTj5sPmJs-dksbFKWf1aAGQSrq"),
      getDriveImageUrl("https://drive.google.com/open?id=1Kei9XFkJi4cbW6t7o28xWx7hAvsdPWjX")
    ],
    endPrice: 635000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0017",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0018",
    title: "AGUNAN LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    tanggalLelang: "2026-01-20",
    batasWaktuLelang: "-",
    jamLelang: "10:35 WIB",
  },
  {
    id: "RLI_ELP_0019",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1aXJy3uAXfqqpxaz7nL3rPX_4bGtfoWQu"),
      getDriveImageUrl("https://drive.google.com/open?id=19SAp1CpCdiewqs0TCfqw54EAlJ_KTrpa"),
      getDriveImageUrl("https://drive.google.com/open?id=1mACy1IBPR9K2xMbBdbjasEPbGArltEIx")
    ],
    endPrice: 744000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0020",
    title: "AGUNAN LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    tanggalLelang: "2026-02-03",
    batasWaktuLelang: "-",
    jamLelang: "10:30 WIB",
  },
  {
    id: "RLI_ELP_0021",
    title: "SEGERA LELANG RUKO",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0022",
    title: "SEGERA LELANG RUMAH TINGGAL 2 LANTAI",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0023",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0024",
    title: "SEGERA LELANG GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1X-7jOXaa-g5dwrGkhswivktFhlAF596G"),
      getDriveImageUrl("https://drive.google.com/open?id=1DX9_OoyNUchu8SbY0qLI5EiVtKpQQ_pb"),
      getDriveImageUrl("https://drive.google.com/open?id=1_e_zxTtHTVtVoJTlLsOo6IsAxz7CuTmG"),
      getDriveImageUrl("https://drive.google.com/open?id=1FX1-qMs5iOvP0Xa2jRmCMAUWVLqalWoT")
    ],
    endPrice: 1038244000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0025",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1emxleX7PBYwfNco-Ia3SwfWyAe0-crAX"),
      getDriveImageUrl("https://drive.google.com/open?id=1Gi-43PTqQVpE8UvJAIbq24QLwYgUeKIu"),
      getDriveImageUrl("https://drive.google.com/open?id=1CySdE_r8MkuKVvSwB1S9pHBlIEA9edg_")
    ],
    endPrice: 112840000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0026",
    title: "SEGERA LELANG KANDANG AYAM",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0027",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0028",
    title: "SEGERA LELANG RUMAH TINGGAL, KANTOR DAN GARASI",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0029",
    title: "SEGERA LELANG KANDANG AYAM",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0030",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0031",
    title: "SEGERA LELANG KANDANG AYAM",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1tMlgASCcLuKqLBULMP4ar7-wt5yo064J"),
      getDriveImageUrl("https://drive.google.com/open?id=1aiOxL7o-zyPyoTcJFud6ncFj-PFuZW__"),
      getDriveImageUrl("https://drive.google.com/open?id=1N8e_tf6CAPM0K5EQtogT0DWuTXPSNyIC"),
      getDriveImageUrl("https://drive.google.com/open?id=1wrKJVJAHmVu6VNDaDOe4Wca0pVRag_hr"),
    ],
    endPrice: 1132937000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0032",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1hrWmni2r1AdOkWpB4PgLaybVufkXjOIB"),
      getDriveImageUrl("https://drive.google.com/open?id=13471UWwBN58mJrxC4K88SYxQIEP7eRG2"),
      getDriveImageUrl("https://drive.google.com/open?id=1Kettsz661lrxtlL8klArKu8AlcO5nc8T"),
      getDriveImageUrl("https://drive.google.com/open?id=1lntsoF5HWPyzEXhI61-ObcljBrQBxW7U"),
    ],
    endPrice: 1537813000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0033",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=19IdpDgjlSyhmoyXicezv7AuRv53hSflu"),
      getDriveImageUrl("https://drive.google.com/open?id=1VmWwl9QlPHys_GPWjt0k11QicuoLWM1c"),
      getDriveImageUrl("https://drive.google.com/open?id=1jfxES4TUsqxhyn_ovnI546H_bhN1bqdB")
    ],
    endPrice: 587941000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0034",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1vUDoIxcK10OykkP38-aqn1viTD2Y2Jud"),
      getDriveImageUrl("https://drive.google.com/open?id=1dgInw1cLT7UgMQjzf69ac81kcf_9MLQo")
    ],
    endPrice: 373800000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0035",
    title: "SEGERA LELANG GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1-8OMsYtYakbMlkHNvaKeaCUcImftq2aK"),
      getDriveImageUrl("https://drive.google.com/open?id=1am5SLf8LaowWMXR_XCmJ0ClVwlQHPlS8"),
      getDriveImageUrl("https://drive.google.com/open?id=1K-nkRdhrxEFlcrSIem2cCdatCfWWOW0N"),
      getDriveImageUrl("https://drive.google.com/open?id=1f9uGRr_iXu-JRzkYQgG5xogJBBSx6CFA"),
      getDriveImageUrl("https://drive.google.com/open?id=19YmMdWA7-KkSN6SKmCl9sIpHpjyQy0vH")
    ],
    endPrice: 1077991000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0036",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0037",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0038",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0039",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0040",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0041",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0042",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0043",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0044",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0045",
    title: "SEGERA LELANG TANAH KOSONG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0046",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1wPVz-ZXc6hxaOySEVyqmc2IfcBJU4mzf"),
      getDriveImageUrl("https://drive.google.com/open?id=1Alg7RM-jrKUMZ7eXhNOEciXMJh9FgONC"),
      getDriveImageUrl("https://drive.google.com/open?id=1qA1ERPRPgV2I0cRYf_rkb86sOrcXgVHq"),
      getDriveImageUrl("https://drive.google.com/open?id=1DteFGhsorcwdIkd5BbyohMQHCcyTUXIc"),
    ],
    endPrice: 1091430000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0047",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
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
    id: "RLI_ELP_0048",
    title: "SEGERA LELANG TANAH DAN POS JAGA",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1KF3SGqSRTfGZ60h2wWpjVlbpfBFFiM7L"),
      getDriveImageUrl("https://drive.google.com/open?id=1a4qeQmyW9FFh41ipjqjMr6Q23hqwVil_"),
      getDriveImageUrl("https://drive.google.com/open?id=19u1isvcIrW839awX8Xoj50KU3hcS3ql_"),
      getDriveImageUrl("https://drive.google.com/open?id=1WFfRTijfud9N3iDRC-t4yBwREuo-3Asg")
    ],
    endPrice: 5567919000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0049",
    title: "SEGERA LELANG KANDANG AYAM DAN GUDANG",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=12bgqax2JvRJ8WDJxQxvjQ3X8KY6Fn-Zr"),
      getDriveImageUrl("https://drive.google.com/open?id=1I3EgdBj5NS-vuz0qcJ0wkrj88OuI27RZ"),
      getDriveImageUrl("https://drive.google.com/open?id=1qfuMbJf_0msEykXi5sEzkB4CFZF_I8no"),
      getDriveImageUrl("https://drive.google.com/open?id=1Wc8wHHiJBkyfsO44uWleOSk_r-TRC3vm")
    ],
    endPrice: 1609156000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0050",
    title: "SEGERA LELANG TANAH SAWAH",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
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
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Fpnvs_HHnu-XROzn_b1u5ZyBu-DQdMJ2"),
      getDriveImageUrl("https://drive.google.com/open?id=14zkVMYlarW9QPqK_-FqchJyozLyfzO_-"),
      getDriveImageUrl("https://drive.google.com/open?id=1DeOmZsUDk_u7Ay7lebQXnzHGfMQCQ8Lu")
    ],
    endPrice: 317200000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
    {
    id: "RLI_ELP_0051",
    title: "SEGERA LELANG KIOS APARTEMEN",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Apartemen",
    location: " Apartement Kalibata City Blok Borneo Lantai Dasar No.B/CL/15 Jalan Taman Makam Pahlawan Kalibata, Kel. Rawajati, Kec. Pancoran, Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    landArea: 6.23,
    buildingArea: 6.23,
    certificateType: "SHMSRS",
    description:
    `⦁ 5 menit dari Stasiun Duren Kalibata
      ⦁ 6 menit dari Universitas Trilogi
      ⦁ 7 menit dari Mal Kalibata City Square
      ⦁ 10 menit dari Gerbang Tol Cawang
      ⦁ 14 menit dari RSU Budhi Asih`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1-uIVC1aFkxlppz5zjwt8zD89J69bxWkN"),
      getDriveImageUrl("https://drive.google.com/open?id=1JCduHLiG1hyZvhZYTZaxhKKMWTxWIAVy"),
      getDriveImageUrl("https://drive.google.com/open?id=1wHdlD-4KwHwK6VQx-9XXjhpskwmnBzc4"),
      getDriveImageUrl("https://drive.google.com/open?id=1kRnAdD1xZzGYpw8JWufNssTisI1h__DP"),
      getDriveImageUrl("https://drive.google.com/open?id=1ehEk-7Q0oKAeg66V7I5aK_3wz20P7Lt2"),
      getDriveImageUrl("https://drive.google.com/open?id=1TTrdk-XVKAmjL3VdUUg7ECz_kpa-TLGR"),
      getDriveImageUrl("https://drive.google.com/open?id=1cGjMKO1IJLjC5lMf2JPOTn5mAmCzwSq-")
    ],
    endPrice: 390600000,
    tanggalLelang: "2026-02-13",
    batasWaktuLelang: "-",
    jamLelang: "10:40 WIB",
  },
  {
    id: "RLI_ELP_0052",
    title: "SEGERA LELANG HOTEL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Hotel",
    location: "Jalan Tlogo Indah No. 64, Kel. Tlogomas, Kec. Lowokwaru, Kota Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 318,
    buildingArea: 922,
    certificateType: "SHM",
    description:
    `- 2 menit dari Universitas Islam Malang
      - 2 menit dari Mall Dinoyo City
      - 3 menit dari RSI UNISMA
      - 10 menit dari Halte Veteran Kota Malang
      - 10 menit dari Taman Rekreasi Sengkaling`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=13fG8bethayU5SJcvK2MqrvZ_q2IIwQTI"),
      getDriveImageUrl("https://drive.google.com/open?id=1yF66lt1n4NaB-HuIZ6bmXXmnEgFVxn28"),
      getDriveImageUrl("https://drive.google.com/open?id=17ZfGXcZtjgyb7gzIOSzq5Z76SV64Rv62"),
      getDriveImageUrl("https://drive.google.com/open?id=1gZ7b4DoeELNYbLOQmz7k-z5J8JNIV_oH"),
      getDriveImageUrl("https://drive.google.com/open?id=1wbGE7udF_onObBPMvRt0QBD5lx6timOr"),
      getDriveImageUrl("https://drive.google.com/open?id=1108vTrUapr1lFWRqf5p2KB3u7nlR-o_L"),
      getDriveImageUrl("https://drive.google.com/open?id=1Oc1eswlc96Naw0U2113FrGPcEfOXwvut"),
      getDriveImageUrl("https://drive.google.com/open?id=1Anp6KJTE3VBUDatfkBXHbszlVfnEzmbU"),
      getDriveImageUrl("https://drive.google.com/open?id=1ZM3tdpZ-8JsQRakEpePVbUBP8TamZVKV")
    ],
    endPrice: 2856000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
   {
    id: "RLI_ELP_0053",
    title: "SEGERA LELANG KIOS",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Toko",
    location: "Jl. Siliwangi RT.001 RW.002, Kel. Sukasari, Kec. Bogor Timur, Kota Bogor, Jawa Barat",
    provinsi: "Jawa Barat",
    kota: "Bogor",
    landArea: 20,
    buildingArea: 20,
    certificateType: "SHM",
    description:
    `- 1 menit dari Rumah Sakit Vania
      - 12 menit dari Stasiun Batutulis
      - 14 menit dari Lippo Plaza Ekalokasari
      - 17 menit dari Universitas Pakuan
      - 20 menit dari Alun-Alun Bogor`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1qnRBp_7Ox9GiH7wYnL7Djvwy38D761Sj"),
      getDriveImageUrl("https://drive.google.com/open?id=1dapo7PTc5ib3HpYN9HCIcLGxJZxxXXb8"),
      getDriveImageUrl("https://drive.google.com/open?id=1zz_1M_s0D1fJO-baYl7qrHpigavXwrQE"),
      getDriveImageUrl("https://drive.google.com/open?id=1-38wRMuHIEK863Q_zmeeBNJNK5nnmS6q"),
      getDriveImageUrl("https://drive.google.com/open?id=12wpweOuhWeapw9OcdtbfRH8ilUT2TNNA")
    ],
    endPrice: 480000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0054",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: " Kampung Railat No. 40, 76 & 51, RT.002 RW.007, Kel. Leuwinanggung, Kec. Tapos, Kotamadya Depok, Jawa Barat",
    provinsi: "Jawa Barat",
    kota: "Depok",
    landArea: 374,
    buildingArea: 142,
    certificateType: "SHM",
    description:
    `- 3 menit dari SMA Negeri 7 Kota Depok
      - 12 menit dari Mall Ciputra Cibubur
      - 12 menit dari Gerbang Tol Cimanggis
      - 16 menit dari Puskesmas Sukatani
      - 19 menit dari Halte Transjakarta Cibubur Junction`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1K783-TyVv-Xo61LQFSTO_NCARuolsUC6"),
      getDriveImageUrl("https://drive.google.com/open?id=1dfYE8-gUQx5vLp-nrD0O__tM-ZZU8ATa"),
      getDriveImageUrl("https://drive.google.com/open?id=1fici7SDaI8N9ZWR1RaaEcSbJ9SIL6rwZ"),
      getDriveImageUrl("https://drive.google.com/open?id=1ta2jzf_S4TGOV4VM7s3DdvYtWNcCGj7V"),
      getDriveImageUrl("https://drive.google.com/open?id=1Ib2Jh5NBIElk2nQXBCO1L2fAMdbUIjuL"),
      getDriveImageUrl("https://drive.google.com/open?id=1P-TgIcqr5tNyp2ZOygJ_YFm7OmHScPuh"),
      getDriveImageUrl("https://drive.google.com/open?id=1Lg76lxMkmlJd9Vv6D5gur6nDbFcgbQuZ")
    ],
    endPrice: 1519600000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
  {
    id: "RLI_ELP_0055",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Jl. H. Nasa Syamsudin No. 48E, RT.002 RW.007 Kel. Kedaung, Kec. Pamulang Kota, Tangerang Selatan",
    provinsi: "Banten",
    kota: "Tangerang Selatan",
    landArea: 161,
    buildingArea: 110,
    certificateType: "SHM",
    description:
    `- 9 menit dari RSU Hermina Ciputat
      - 13 menit dari Living Plaza Ciputat
      - 13 menit dari Stasiun Jurangmangu
      - 13 menit dari UIN Syarif Hidayatullah
      - 15 menit dari Gerbang Tol Pamulang`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=16KwUBNpb1R6NdiAfpL7CuOobVyUBwNfc"),
      getDriveImageUrl("https://drive.google.com/open?id=19l2Y6tNhwtl9crj2qDx5XrYL0Gd7HKEz"),
      getDriveImageUrl("https://drive.google.com/open?id=17ZdQFKFnhhAcXifujEyyu_kk-68qtMbk"),
      getDriveImageUrl("https://drive.google.com/open?id=1F_IbSNwONYfncML2sBFyKLVIVk-nPOJk"),
      getDriveImageUrl("https://drive.google.com/open?id=1p8_Cxh8vKLoI1-2g6GVJlMFdHI12fOLS"),
      getDriveImageUrl("https://drive.google.com/open?id=1f1Sb8PJlKFPI7XJw9_GPt__cceLeTSZU")
    ],
    endPrice: 1377700000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
    {
    id: "RLI_ELP_0056",
    title: "AGUNAN LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Duren Panjer RT.003 RW.002, Desa Tunggalpager, Kec. Pungging, Kab. Mojokerto, Jawa Timur",
    provinsi: "Jawa Timur",
    kota: "Mojokerto",
    landArea: 1.131,
    buildingArea: 865,
    certificateType: "SHM",
    description:
    `- 4 menit dari RSUD Prof. Dr. Soekandar
      - 6 menit dari Pasar Raya Mojosari
      - 8 menit dari SMKN 1 Pungging
      - 8 menit dari Stadion Gelora Gajah Mada
      - 12 menit dari Alun Alun Ngoro Mojokerto`,
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1zMgODqhHNIp47Jt3fwbNkZhbGtE8Qi5S"),
      getDriveImageUrl("https://drive.google.com/open?id=1zfCNY1GCAE7I_cgRtInJYUE7iDGINpBP"),
      getDriveImageUrl("https://drive.google.com/open?id=13GG_5vN36OtN_6gS72VIu1Mn_uONerpk"),
      getDriveImageUrl("https://drive.google.com/open?id=1LB3tT-zm98Ib-qyu1WsrS9caJJYY31QW")
    ],
    endPrice: 1475000000,
    tanggalLelang: "2026-02-13",
    batasWaktuLelang: "-",
    jamLelang: "10:00 WIB",
  },
    {
    id: "RLI_ELP_0057",
    title: "SEGERA LELANG BENGKEL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Gudang",
    location: "Jl. KH. Romli Tamim No. 18, Kel. Jelakombo, Kec. Jombang, Kab. Jombang",
    provinsi: "Jawa Timur",
    kota: "Jombang",
    landArea: 1110,
    buildingArea: 125,
    certificateType: "SHM",
    description:
    `- 1 menit dari Pasar Kebon
      - 6 menit dari SD Negeri Karangasem
      - 9 menit dari Rumah Sakit Sido Waras
      - 12 menit dari Stadion Gelora Gajah Mada
      - 12 menit dari Kolam Renang Vanda Tirta`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1qavcAEmbR0Z1C0c6zJMSGPT2HuTneNbi"),
      getDriveImageUrl("https://drive.google.com/open?id=1BsEoX546T7pskXa0GxJTB2CkADNEqjeM"),
      getDriveImageUrl("https://drive.google.com/open?id=1Eqi_j3fu78Bjxcw15rvP4-8QJRF-qm19"),
      getDriveImageUrl("https://drive.google.com/open?id=1lAIJomju7lZFR7u2CHJMVUJhaFtb6YVL")
    ],
    endPrice: 6500000000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
      {
    id: "RLI_ELP_0058",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: " Jl. Damai Ujung (Gang H. Hamim) No. 72, RT.009 RW.003, Kel. Cipete Utara, Kec. Kebayoran Baru, Kotamdya Jakarta Selatan, DKI Jakarta",
    provinsi: "Jakarta Selatan",
    kota: "DKI Jakarta",
    landArea: 87,
    buildingArea: 58,
    certificateType: "SHM",
    description:
    `- 7 menit dari RSUD Kebayoran Baru
      - 8 menit dari MRT Haji Nawi
      - 10 menit dari Lippo Mall Kemang
      - 11 menit dari Taman Literasi Martha Tiahahu
      - 12 menit dari Blok M Square`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1Exj3gXCVG_mQ48ZcT_jh6sV1Rif4rMMd"),
      getDriveImageUrl("https://drive.google.com/open?id=1cfWGmMY4rKHZ5t9ccX8RT9DVe0qCGkZl"),
      getDriveImageUrl("https://drive.google.com/open?id=1VIOJjmXKOAhUNuLMNu-pJ1ycf4OsRzI5"),
      getDriveImageUrl("https://drive.google.com/open?id=1CCFSA2gHwkhnjGGOlZRyZtVSnWsy3AMz"),
      getDriveImageUrl("https://drive.google.com/open?id=1NlhYpwe7QfPtMSgMStJZg3nLCgkKbiWX")
    ],
    endPrice: 950040000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
      {
    id: "RLI_ELP_0059",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: " Jalan Kapuk Muara No. 25, RT.007 RW 004, Kel. Kapuk Muara, Kec. Penjaringan, Kotamadya Jakarta Utara, DKI Jakarta",
    provinsi: "Jakarta Utara",
    kota: "DKI Jakarta",
    landArea: 27,
    buildingArea: 52.5,
    certificateType: "SHM",
    description:
    `- 3 menit dari Hari Hari Pasar Swalayan Duta Harapan Indah
      - 5 menit dari SMP Negeri 112 Jakarta
      - 6 menit dari Puskesmas Penjaringan
      - 6 menit dari Halte Kampung Gusti
      - 10 menit dari Penjaringan City Forest Park`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1SuyraJ2sEqIJ5Ou20rvr-qIKcPc1IiPI"),
      getDriveImageUrl("https://drive.google.com/open?id=1PnpTu73Esed-S5WuhnQg2SWUEXT3gkvr"),
      getDriveImageUrl("https://drive.google.com/open?id=1IZ-CR4ksB3UpllvnzxU1mrT2DgGSo8NP"),
      getDriveImageUrl("https://drive.google.com/open?id=1W6K08EqxV61SPRt_0uPUwgIg4KL01RYG"),
      getDriveImageUrl("https://drive.google.com/open?id=1IEzwtFD8XlDs-Gulxp6Ab5yc5CvN1sIV")
    ],
    endPrice: 163900000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },
      {
    id: "RLI_ELP_0060",
    title: "SEGERA LELANG RUMAH TINGGAL",
    isHidden: true, // <-- Tambahkan ini untuk menyembunyikan
    type: "Rumah",
    location: "Kampung Poncol Jl. Harapan II No. 8 RT.003 RW.002 Kel. Cipadu Kec. Larangan, Kota Tangerang",
    provinsi: "Banten",
    kota: "Tangerang",
    landArea: 58,
    buildingArea: 113,
    certificateType: "SHM",
    description:
    `- 4 menit dari RS Murni Teguh Ciledug
      - 5 menit dari Universitas Budi Luhur
      - 8 menit dari Halte Puribeta 2
      - 8 menit dari Puri Beta Waterpark
      - 11 menit dari Ciplaz Ciledug`,
    status: "Lelang Segera",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=1zkBKjeupJhoCVkDrZQl4Y_tr4j6bnmrh"),
      getDriveImageUrl("https://drive.google.com/open?id=1x0TbUEC2_GIXcz86n-i1h1bt7YdPLQUA"),
      getDriveImageUrl("https://drive.google.com/open?id=1t_xZGjcRvyG27z5ustODzcW6-d79OKlZ")
    ],
    endPrice: 580200000,
    tanggalLelang: "-",
    batasWaktuLelang: "-",
  },

  // --- Baris 2234: Pastikan ada penutup array data manual Anda ---
]; 

export const getProperties = async (): Promise<Property[]> => {
  try {
    const dynamicData = await getDynamicProperties();
    // Menggunakan variabel global LelangProperties yang sudah didefinisikan di atas
    return [...dynamicData, ...LelangProperties]; 
  } catch (error) {
    console.error("Gagal menggabungkan data:", error);
    return LelangProperties; 
  }
};

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

// Tambahkan kredensial Supabase Anda di sini
const SUPABASE_URL = "https://ghwmtfwrbkuvpyhylwrw.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod210ZndyYmt1dnB5aHlsd3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxODUzNjMsImV4cCI6MjA4NDc2MTM2M30.unwlFrTRKhgj34USgeJooJTtpOa6H5I1uK1uBXzA9Z0";

export const getDynamicProperties = async (): Promise<Property[]> => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/properti?select=*`, {
      headers: {
        'apikey': ANON_KEY,
        'Authorization': `Bearer ${ANON_KEY}`
      },
      cache: 'no-store'
    });
    
    const data = await res.json();
    
    return data.map((item: any) => ({
      id: `WEB-${item.id}`,
      title: item.title,
      type: item.type,
      location: item.location,
      landArea: item.land_area,
      buildingArea: item.building_area,
      certificateType: item.certificate_type,
      description: item.description,
      status: item.status,
      image: item.image_urls || ["https://placehold.co/600x400"],
      endPrice: item.price,
      isHidden: item.is_hidden
    }));
  } catch (error) {
    console.error("Gagal menarik data dari Supabase:", error);
    return [];
  }
};
