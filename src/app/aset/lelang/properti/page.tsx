import { Metadata } from "next";
import React from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { properties } from "@/lib/properti";

export const metadata: Metadata = {
  title: "Properti Lelang | Rajawali Lelang Indonesia",
  description:
    "Ikuti lelang properti terbaik - Rumah, Apartemen, Ruko, Villa, Tanah, dan Gudang dengan harga kompetitif.",
};

const filterConfig = {
  placeholder: "Cari lokasi, area, atau nama properti...",
  filters: [
    [
      {
        label: "Harga",
        name: "price",
        options: [
          { value: "0-1000000000", label: "< 1 Miliar" },
          { value: "1000000000-5000000000", label: "1 - 5 Miliar" },
          { value: "5000000000-10000000000", label: "5 - 10 Miliar" },
          { value: "10000000000+", label: "> 10 Miliar" },
        ],
      },
      {
        label: "Luas Tanah",
        name: "landArea",
        options: [
          { value: "0-100", label: "< 100 m²" },
          { value: "100-300", label: "100 - 300 m²" },
          { value: "300-500", label: "300 - 500 m²" },
          { value: "500+", label: "> 500 m²" },
        ],
      },
      {
        label: "Jenis Properti",
        name: "type",
        options: [
          { value: "rumah", label: "Rumah" },
          { value: "ruko", label: "Ruko" },
          { value: "villa", label: "Villa" },
          { value: "apartemen", label: "Apartemen" },
          { value: "tanah", label: "Tanah" },
          { value: "gudang", label: "Gudang" },
        ],
      },
      {
        label: "Status Lelang",
        name: "status",
        options: [
          { value: "aktif", label: "Lelang Aktif" },
          { value: "featured", label: "Featured" },
          { value: "segera", label: "Segera" },
        ],
      },
    ],
  ],
};

export default function PropertiLelangPage() {
  return (
    <AsetLayout
      title="Properti Lelang"
      description="Ikuti lelang properti terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
    >
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <AsetCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            image={property.image}
            status={property.status}
            type="properti"
            mode="lelang"
            additionalInfo={[
              ...(property.landArea > 0
                ? [{ label: "Tanah", value: `${property.landArea} m²` }]
                : []),
              ...(property.buildingArea > 0
                ? [{ label: "Bangunan", value: `${property.buildingArea} m²` }]
                : []),
              { label: "Sertifikat", value: property.certificateType },
            ]}
          />
        ))}
      </div>
    </AsetLayout>
  );
}