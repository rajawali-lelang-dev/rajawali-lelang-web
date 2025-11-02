"use client";

import React, { useState, useMemo } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { perhiasans } from "@/lib/perhiasan";

const filterConfig = {
  placeholder: "Cari brand, material, atau jenis perhiasan...",
  filters: [
    [
      {
        label: "Harga",
        name: "price",
        options: [
          { value: "0-10000000", label: "< 10 Juta" },
          { value: "10000000-50000000", label: "10 - 50 Juta" },
          { value: "50000000-100000000", label: "50 - 100 Juta" },
          { value: "100000000+", label: "> 100 Juta" },
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

export default function PerhiasanDijualPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredPerhiasans = useMemo(() => {
    return perhiasans.filter((perhiasan) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          perhiasan.title.toLowerCase().includes(searchLower) ||
          perhiasan.location.toLowerCase().includes(searchLower) ||
          perhiasan.material.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Price filter
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (max) {
          if (perhiasan.price < min || perhiasan.price > max) return false;
        } else {
          if (perhiasan.price < min) return false;
        }
      }

      // Type filter
      if (filters.type) {
        if (!perhiasan.title.toLowerCase().includes(filters.type.toLowerCase()))
          return false;
      }

      // Material filter
      if (filters.material) {
        if (perhiasan.material.toLowerCase() !== filters.material.toLowerCase())
          return false;
      }

      // Weight filter
      if (filters.weight) {
        const [min, max] = filters.weight.split("-").map(Number);
        if (max) {
          if (perhiasan.weight < min || perhiasan.weight > max) return false;
        } else {
          if (perhiasan.weight < min) return false;
        }
      }

      return true;
    });
  }, [searchTerm, filters]);

  return (
    <AsetLayout
      title="Perhiasan Dijual"
      description="Temukan perhiasan terbaik untuk dijual dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPerhiasans.length > 0 ? (
          filteredPerhiasans.map((perhiasan) => (
            <AsetCard
              key={perhiasan.id}
              id={perhiasan.id}
              title={perhiasan.title}
              location={perhiasan.location}
              price={perhiasan.price}
              image={perhiasan.image}
              status={perhiasan.status}
              type="perhiasan"
              mode="dijual"
              additionalInfo={[
                { label: "Material", value: perhiasan.material },
                { label: "Berat", value: `${perhiasan.weight} gram` },
                ...(perhiasan.karat ? [{ label: "Karat", value: `${perhiasan.karat}K` }] : []),
              ]}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada perhiasan yang sesuai dengan filter Anda
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-600">
        Menampilkan {filteredPerhiasans.length} dari {perhiasans.length} perhiasan
      </div>
    </AsetLayout>
  );
}
