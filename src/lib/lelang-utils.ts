import dayjs from 'dayjs';
import 'dayjs/locale/id';
import relativeTime from 'dayjs/plugin/relativeTime';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.locale('id');


export const getHariSampaiLelang = (tanggalLelang: string): number => {
  const now = dayjs();
  const lelangDate = dayjs(tanggalLelang);
  return lelangDate.diff(now, 'day');
};


export const getJamSampaiLelang = (tanggalLelang: string): number => {
  const now = dayjs();
  const lelangDate = dayjs(tanggalLelang);
  return lelangDate.diff(now, 'hour');
};


export const formatTanggalLelang = (tanggalLelang: string): string => {
  return dayjs(tanggalLelang).format('DD MMM YYYY');
};


export const formatWaktuLelang = (tanggalLelang: string): string => {
  return dayjs(tanggalLelang).format('HH:mm') + ' WIB';
};


export const formatDateTimeLelang = (tanggalLelang: string) => {
  return {
    date: formatTanggalLelang(tanggalLelang),
    time: formatWaktuLelang(tanggalLelang),
  };
};


export const getCountdownText = (tanggalLelang: string): string => {
  const hari = getHariSampaiLelang(tanggalLelang);
  
  if (hari < 0) return 'Sudah lewat';
  if (hari === 0) {
    const jam = getJamSampaiLelang(tanggalLelang);
    if (jam < 0) return 'Sudah lewat';
    if (jam === 0) return 'Sekarang';
    if (jam < 24) return `${jam} jam lagi`;
    return 'Hari ini';
  }
  if (hari === 1) return 'Besok';
  if (hari <= 7) return `${hari} hari lagi`;
  if (hari <= 30) {
    const minggu = Math.floor(hari / 7);
    return `${minggu} minggu lagi`;
  }
  const bulan = Math.floor(hari / 30);
  return `${bulan} bulan lagi`;
};

/**
 * Cek apakah lelang masih aktif (belum dimulai)
 * @param tanggalLelang - tanggal pelaksanaan lelang (ISO 8601)
 * @returns boolean
 */
export const isLelangAktif = (tanggalLelang: string): boolean => {
  const now = dayjs();
  const lelangDate = dayjs(tanggalLelang);
  return lelangDate.isAfter(now);
};

/**
 * Cek apakah lelang akan segera dimulai (kurang dari 7 hari)
 * @param tanggalLelang - tanggal pelaksanaan lelang (ISO 8601)
 * @returns boolean
 */
export const isLelangSegera = (tanggalLelang: string): boolean => {
  const hari = getHariSampaiLelang(tanggalLelang);
  return hari >= 0 && hari <= 7;
};

/**
 * Cek apakah lelang sudah selesai
 * @param tanggalLelang - tanggal pelaksanaan lelang (ISO 8601)
 * @returns boolean
 */
export const isLelangSelesai = (tanggalLelang: string): boolean => {
  return getHariSampaiLelang(tanggalLelang) < 0;
};

/**
 * Mendapatkan status badge color berdasarkan status lelang
 * @param status - status lelang
 * @returns tailwind class string
 */
export const getStatusBadgeColor = (status: "Lelang Aktif" | "Lelang Segera" | "Lelang Selesai"): string => {
  switch (status) {
    case "Lelang Aktif":
      return "bg-green-100 text-green-700";
    case "Lelang Segera":
      return "bg-orange-100 text-orange-700";
    case "Lelang Selesai":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-blue-100 text-blue-700";
  }
};

/**
 * Sort array lelang berdasarkan tanggal (terdekat dulu)
 * @param items - array item lelang
 * @returns sorted array
 */
export const sortByTanggalLelang = <T extends { tanggalLelang: string }>(items: T[]): T[] => {
  return [...items].sort((a, b) => {
    return dayjs(a.tanggalLelang).diff(dayjs(b.tanggalLelang));
  });
};

/**
 * Filter lelang yang masih aktif (belum selesai)
 * @param items - array item lelang
 * @returns filtered array
 */
export const filterLelangAktif = <T extends { tanggalLelang: string }>(items: T[]): T[] => {
  return items.filter(item => isLelangAktif(item.tanggalLelang));
};

/**
 * Filter lelang yang akan segera dimulai (0-7 hari)
 * @param items - array item lelang
 * @returns filtered array
 */
export const filterLelangSegera = <T extends { tanggalLelang: string }>(items: T[]): T[] => {
  return items.filter(item => isLelangSegera(item.tanggalLelang));
};
