import { Metadata } from "next";
import React from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { mobils } from "@/lib/mobil";

export const metadata: Metadata = {
  title: "Mobil Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan mobil terbaik untuk dijual - Sedan, SUV, MPV, Hatchback, dan Pickup dengan harga terjangkau.",
};

const filterConfig = {
  placeholder: "Cari merk, model, atau tipe mobil...",
  filters: [
    [
      {
        label: "Harga",
        name: "price",
        options: [
          { value: "0-100000000", label: "< 100 Juta" },
          { value: "100000000-300000000", label: "100 - 300 Juta" },
          { value: "300000000-500000000", label: "300 - 500 Juta" },
          { value: "500000000+", label: "> 500 Juta" },
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

export default function MobilDijualPage() {
  return (
    <AsetLayout
      title="Mobil Dijual"
      description="Temukan mobil terbaik untuk dijual dengan proses yang mudah, aman, dan menguntungkan"
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
            mode="dijual"
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
