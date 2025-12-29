// Type untuk nama provinsi
export type ProvinsiIndonesia =
  | "Aceh"
  | "Sumatra Utara"
  | "Sumatra Barat"
  | "Riau"
  | "Kepulauan Riau"
  | "Jambi"
  | "Sumatra Selatan"
  | "Kepulauan Bangka Belitung"
  | "Bengkulu"
  | "Lampung"
  | "DKI Jakarta"
  | "Banten"
  | "Jawa Barat"
  | "Jawa Tengah"
  | "DI Yogyakarta"
  | "Jawa Timur"
  | "Bali"
  | "Nusa Tenggara Barat"
  | "Nusa Tenggara Timur"
  | "Kalimantan Barat"
  | "Kalimantan Tengah"
  | "Kalimantan Selatan"
  | "Kalimantan Timur"
  | "Kalimantan Utara"
  | "Sulawesi Utara"
  | "Gorontalo"
  | "Sulawesi Tengah"
  | "Sulawesi Barat"
  | "Sulawesi Selatan"
  | "Sulawesi Tenggara"
  | "Maluku"
  | "Maluku Utara"
  | "Papua"
  | "Papua Barat";

// Interface untuk data provinsi dan kota
export interface ProvinsiData {
  provinsi: ProvinsiIndonesia;
  kota: string[];
}

// Data lengkap provinsi dan kota-kota di Indonesia
export const provinsiIndonesia: ProvinsiData[] = [
  {
    provinsi: "Aceh",
    kota: ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam"],
  },
  {
    provinsi: "Sumatra Utara",
    kota: [
      "Medan",
      "Binjai",
      "Pematang Siantar",
      "Padang Sidempuan",
      "Tanjung Balai",
      "Tebing Tinggi",
      "Sibolga",
      "Gunung Sitoli",
    ],
  },
  {
    provinsi: "Sumatra Barat",
    kota: [
      "Padang",
      "Bukittinggi",
      "Padang Panjang",
      "Payakumbuh",
      "Sawahlunto",
      "Solok",
      "Pariaman",
    ],
  },
  {
    provinsi: "Riau",
    kota: ["Pekanbaru", "Dumai"],
  },
  {
    provinsi: "Kepulauan Riau",
    kota: ["Batam", "Tanjung Pinang"],
  },
  {
    provinsi: "Jambi",
    kota: ["Jambi", "Sungai Penuh"],
  },
  {
    provinsi: "Sumatra Selatan",
    kota: ["Palembang", "Lubuklinggau", "Pagar Alam", "Prabumulih"],
  },
  {
    provinsi: "Kepulauan Bangka Belitung",
    kota: ["Pangkal Pinang"],
  },
  {
    provinsi: "Bengkulu",
    kota: ["Bengkulu"],
  },
  {
    provinsi: "Lampung",
    kota: ["Bandar Lampung", "Metro"],
  },
  {
    provinsi: "DKI Jakarta",
    kota: [
      "Jakarta Pusat",
      "Jakarta Utara",
      "Jakarta Barat",
      "Jakarta Selatan",
      "Jakarta Timur",
      "Kepulauan Seribu",
    ],
  },
  {
    provinsi: "Banten",
    kota: [
      "Serang",
      "Tangerang",
      "Tangerang Selatan",
      "Cilegon",
      "Pandeglang",
      "Lebak",
    ],
  },
  {
    provinsi: "Jawa Barat",
    kota: [
      "Bandung",
      "Bekasi",
      "Bogor",
      "Cimahi",
      "Cirebon",
      "Depok",
      "Sukabumi",
      "Tasikmalaya",
      "Banjar",
      "Karawang",
      "Purwakarta",
      "Subang",
      "Indramayu",
      "Majalengka",
      "Kuningan",
      "Ciamis",
      "Garut",
      "Sumedang",
    ],
  },
  {
    provinsi: "Jawa Tengah",
    kota: [
      "Semarang",
      "Surakarta",
      "Magelang",
      "Salatiga",
      "Pekalongan",
      "Tegal",
      "Kudus",
      "Purwokerto",
      "Cilacap",
      "Purwodadi",
      "Klaten",
      "Boyolali",
      "Wonogiri",
      "Purworejo",
      "Kebumen",
    ],
  },
  {
    provinsi: "DI Yogyakarta",
    kota: ["Yogyakarta", "Bantul", "Sleman", "Gunung Kidul", "Kulon Progo"],
  },
  {
    provinsi: "Jawa Timur",
    kota: [
      "Surabaya",
      "Malang",
      "Batu",
      "Blitar",
      "Kediri",
      "Madiun",
      "Mojokerto",
      "Pasuruan",
      "Probolinggo",
      "Sidoarjo",
      "Gresik",
      "Jember",
      "Lumajang",
      "Banyuwangi",
      "Tulungagung",
      "Nganjuk",
      "Jombang",
    ],
  },
  {
    provinsi: "Bali",
    kota: ["Denpasar", "Badung", "Gianyar", "Tabanan", "Klungkung", "Bangli", "Karangasem", "Buleleng", "Jembrana"],
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kota: ["Mataram", "Bima", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Sumbawa"],
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kota: ["Kupang", "Ende", "Maumere", "Ruteng", "Labuan Bajo"],
  },
  {
    provinsi: "Kalimantan Barat",
    kota: ["Pontianak", "Singkawang", "Mempawah", "Sambas", "Sanggau", "Sintang"],
  },
  {
    provinsi: "Kalimantan Tengah",
    kota: ["Palangkaraya", "Sampit", "Kuala Kapuas", "Pangkalan Bun"],
  },
  {
    provinsi: "Kalimantan Selatan",
    kota: ["Banjarmasin", "Banjarbaru", "Martapura", "Kandangan"],
  },
  {
    provinsi: "Kalimantan Timur",
    kota: ["Samarinda", "Balikpapan", "Bontang", "Tenggarong", "Sangata"],
  },
  {
    provinsi: "Kalimantan Utara",
    kota: ["Tarakan", "Tanjung Selor", "Nunukan", "Malinau"],
  },
  {
    provinsi: "Sulawesi Utara",
    kota: ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Tondano"],
  },
  {
    provinsi: "Gorontalo",
    kota: ["Gorontalo", "Limboto"],
  },
  {
    provinsi: "Sulawesi Tengah",
    kota: ["Palu", "Poso", "Luwuk", "Toli-Toli", "Banggai"],
  },
  {
    provinsi: "Sulawesi Barat",
    kota: ["Mamuju", "Majene", "Polewali"],
  },
  {
    provinsi: "Sulawesi Selatan",
    kota: ["Makassar", "Parepare", "Palopo", "Watampone", "Bulukumba", "Bantaeng", "Takalar", "Gowa"],
  },
  {
    provinsi: "Sulawesi Tenggara",
    kota: ["Kendari", "Baubau", "Kolaka", "Unaaha"],
  },
  {
    provinsi: "Maluku",
    kota: ["Ambon", "Tual", "Masohi"],
  },
  {
    provinsi: "Maluku Utara",
    kota: ["Ternate", "Tidore", "Sofifi"],
  },
  {
    provinsi: "Papua",
    kota: ["Jayapura", "Timika", "Merauke", "Biak", "Nabire", "Wamena"],
  },
  {
    provinsi: "Papua Barat",
    kota: ["Manokwari", "Sorong", "Fak-Fak", "Kaimana"],
  },
];

// Helper function: Get all provinces
export const getAllProvinces = (): ProvinsiIndonesia[] => {
  return provinsiIndonesia.map((p) => p.provinsi);
};

// Helper function: Get cities by province
export const getCitiesByProvince = (provinsi: ProvinsiIndonesia): string[] => {
  const data = provinsiIndonesia.find((p) => p.provinsi === provinsi);
  return data ? data.kota : [];
};

// Helper function: Search provinces by keyword
export const searchProvinces = (keyword: string): ProvinsiIndonesia[] => {
  const lowerKeyword = keyword.toLowerCase();
  return provinsiIndonesia
    .filter((p) => p.provinsi.toLowerCase().includes(lowerKeyword))
    .map((p) => p.provinsi);
};

// Helper function: Search cities by keyword across all provinces
export const searchCities = (keyword: string): { provinsi: ProvinsiIndonesia; kota: string }[] => {
  const lowerKeyword = keyword.toLowerCase();
  const results: { provinsi: ProvinsiIndonesia; kota: string }[] = [];

  provinsiIndonesia.forEach((data) => {
    const matchingCities = data.kota.filter((kota) => kota.toLowerCase().includes(lowerKeyword));
    matchingCities.forEach((kota) => {
      results.push({ provinsi: data.provinsi, kota });
    });
  });

  return results;
};