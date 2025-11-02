import { Metadata } from "next";
import React from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { perhiasans } from "@/lib/perhiasan";

export const metadata: Metadata = {
  title: "Perhiasan Lelang | Rajawali Lelang Indonesia",
  description:
    "Ikuti lelang perhiasan - Cincin, Kalung, Gelang, Anting, Bros, dan Liontin dengan harga lelang terbaik.",
};

const filterConfig = {
  placeholder: "Cari brand, material, atau jenis perhiasan...",
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
        label: "Jenis Perhiasan",
        name: "type",
        options: [
          { value: "cincin", label: "Cincin" },
          { value: "kalung", label: "Kalung" },
          { value: "gelang", label: "Gelang" },
          { value: "anting", label: "Anting" },
          { value: "bros", label: "Bros" },
        ],
      },
      {
        label: "Material",
        name: "material",
        options: [
          { value: "emas", label: "Emas" },
          { value: "perak", label: "Perak" },
          { value: "platinum", label: "Platinum" },
          { value: "berlian", label: "Berlian" },
        ],
      },
      {
        label: "Berat",
        name: "weight",
        options: [
          { value: "0-10", label: "< 10 gram" },
          { value: "10-50", label: "10 - 50 gram" },
          { value: "50-100", label: "50 - 100 gram" },
          { value: "100+", label: "> 100 gram" },
        ],
      },
    ],
  ],
};

export default function PerhiasanLelangPage() {
  return (
    <AsetLayout
      title="Perhiasan Lelang"
      description="Ikuti lelang perhiasan terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perhiasans.map((perhiasan) => (
          <AsetCard
            key={perhiasan.id}
            id={perhiasan.id}
            title={perhiasan.title}
            location={perhiasan.location}
            price={perhiasan.price}
            image={perhiasan.image}
            status={perhiasan.status}
            type="perhiasan"
            mode="lelang"
            additionalInfo={[
              { label: "Material", value: perhiasan.material },
              { label: "Berat", value: `${perhiasan.weight} gram` },
              ...(perhiasan.karat ? [{ label: "Karat", value: `${perhiasan.karat}K` }] : []),
            ]}
          />
        ))}
      </div>
    </AsetLayout>
  );
}
