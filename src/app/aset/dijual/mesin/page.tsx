import { Metadata } from "next";
import React from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { mesins } from "@/lib/mesin";

export const metadata: Metadata = {
  title: "Mesin Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan mesin dan alat berat terbaik untuk dijual - Excavator, Generator, Forklift, Crane, Kompresor, dan Mesin Industri dengan harga terjangkau.",
};

const filterConfig = {
  placeholder: "Cari merek, model, atau tipe mesin...",
  filters: [
    [
      {
        label: "Harga",
        name: "price",
        options: [
          { value: "0-100000000", label: "< 100 Juta" },
          { value: "100000000-500000000", label: "100 - 500 Juta" },
          { value: "500000000-1000000000", label: "500 Juta - 1 Miliar" },
          { value: "1000000000+", label: "> 1 Miliar" },
        ],
      },
      {
        label: "Tipe Mesin",
        name: "type",
        options: [
          { value: "excavator", label: "Excavator" },
          { value: "generator", label: "Generator" },
          { value: "forklift", label: "Forklift" },
          { value: "crane", label: "Crane" },
          { value: "kompresor", label: "Kompresor" },
        ],
      },
      {
        label: "Merek",
        name: "brand",
        options: [
          { value: "komatsu", label: "Komatsu" },
          { value: "caterpillar", label: "Caterpillar" },
          { value: "hitachi", label: "Hitachi" },
          { value: "cummins", label: "Cummins" },
          { value: "toyota", label: "Toyota" },
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

export default function MesinDijualPage() {
  return (
    <AsetLayout
      title="Mesin Dijual"
      description="Temukan mesin dan alat berat terbaik untuk dijual dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mesins.map((mesin) => (
          <AsetCard
            key={mesin.id}
            id={mesin.id}
            title={mesin.title}
            location={mesin.location}
            price={mesin.price}
            image={mesin.image}
            status={mesin.status}
            type="mesin"
            mode="dijual"
            additionalInfo={[
              { label: "Brand", value: mesin.brand },
              { label: "Kondisi", value: mesin.condition },
              { label: "Tahun", value: mesin.year.toString() },
            ]}
          />
        ))}
      </div>
    </AsetLayout>
  );
}
