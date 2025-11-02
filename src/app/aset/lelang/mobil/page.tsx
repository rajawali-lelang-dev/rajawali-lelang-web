import { Metadata } from "next";
import React from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { mobils } from "@/lib/mobil";

export const metadata: Metadata = {
  title: "Mobil Lelang | Rajawali Lelang Indonesia",
  description:
    "Ikuti lelang mobil - Sedan, SUV, MPV, Hatchback, dan Pickup dengan harga lelang terbaik.",
};

const filterConfig = {
  placeholder: "Cari merk, model, atau tipe mobil...",
  filters: [
    [
      {
        label: "Status",
        name: "status",
        options: [
          { value: "active", label: "Lelang Aktif" },
          { value: "featured", label: "Featured" },
          { value: "segera", label: "Segera" },
        ],
      },
      {
        label: "Merk",
        name: "brand",
        options: [
          { value: "toyota", label: "Toyota" },
          { value: "honda", label: "Honda" },
          { value: "suzuki", label: "Suzuki" },
          { value: "mitsubishi", label: "Mitsubishi" },
          { value: "daihatsu", label: "Daihatsu" },
        ],
      },
      {
        label: "Transmisi",
        name: "transmission",
        options: [
          { value: "manual", label: "Manual" },
          { value: "automatic", label: "Automatic" },
          { value: "cvt", label: "CVT" },
        ],
      },
      {
        label: "Tahun",
        name: "year",
        options: [
          { value: "2020-2025", label: "2020 - 2025" },
          { value: "2015-2019", label: "2015 - 2019" },
          { value: "2010-2014", label: "2010 - 2014" },
          { value: "0-2009", label: "< 2010" },
        ],
      },
    ],
  ],
};

export default function MobilLelangPage() {
  return (
    <AsetLayout
      title="Mobil Lelang"
      description="Ikuti lelang mobil terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mobils.map((mobil) => (
          <AsetCard
            key={mobil.id}
            id={mobil.id}
            title={mobil.title}
            location={mobil.location}
            price={mobil.price}
            image={mobil.image}
            status={mobil.status}
            type="mobil"
            mode="lelang"
            additionalInfo={[
              { label: "Brand", value: mobil.brand },
              { label: "Tahun", value: mobil.year.toString() },
              { label: "Transmisi", value: mobil.transmission },
            ]}
          />
        ))}
      </div>
    </AsetLayout>
  );
}
