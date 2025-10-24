// Base Interface untuk semua item
export interface BaseItem {
  id: string;
  title: string;
  type: string;
  description: string;
  status: string;
  image: string;
}

// Base Interface untuk item yang dijual (non-lelang)
export interface BaseItemDijual extends BaseItem {
  price: number;
  location: string;
  provinsi: string;
  kota: string;
}

// Base Interface untuk item yang dilelang
export interface BaseItemLelang extends Omit<BaseItem, 'status'> {
  startPrice: number;
  endPrice: number;
  batasWaktuLelang: string;
  location: string;
  provinsi: string;
  kota: string;
  status: "Lelang Aktif" | "Lelang Segera" | "Lelang Selesai";
}