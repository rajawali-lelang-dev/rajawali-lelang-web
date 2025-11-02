"use client";

import React, { useState, useMemo, useEffect } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { jewelry } from "@/lib/perhiasan";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari brand, material, atau jenis perhiasan...",
  filters: [
    [
      {
        label: "Provinsi",
        name: "provinsi",
        options: getAllProvinces().map(p => ({ value: p, label: p })),
      },
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Check for province from navbar on mount
  useEffect(() => {
    const selectedProvince = sessionStorage.getItem('selectedProvince');
    if (selectedProvince) {
      setFilters(prev => ({ ...prev, provinsi: selectedProvince }));
      sessionStorage.removeItem('selectedProvince');
    }
  }, []);

  const filteredJewelry = useMemo(() => {
    return perhiasans.filter((perhiasan) => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          perhiasan.title.toLowerCase().includes(searchLower) ||
          perhiasan.location.toLowerCase().includes(searchLower) ||
          perhiasan.material.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      if (filters.provinsi) {
        if (perhiasan.provinsi !== filters.provinsi) return false;
      }
      if (filters.status) {
        if (perhiasan.status.toLowerCase() !== filters.status.toLowerCase())
          return false;
      }
      if (filters.type) {
        if (!perhiasan.title.toLowerCase().includes(filters.type.toLowerCase()))
          return false;
      }
      if (filters.material) {
        if (perhiasan.material.toLowerCase() !== filters.material.toLowerCase())
          return false;
      }
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
      title="Perhiasan Lelang"
      description="Ikuti lelang perhiasan terbaik dengan proses yang mudah, aman, dan menguntungkan"
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
              mode="lelang"
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
