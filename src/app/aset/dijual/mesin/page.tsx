"use client";

import React, { useState, useMemo, useEffect } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { machines } from "@/lib/mesin";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari merek, model, atau tipe mesin...",
  filters: [
    [
      {
        label: "Provinsi",
        name: "provinsi",
        options: getAllProvinces().map(p => ({ value: p, label: p })),
      },
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

  const filteredMachines = useMemo(() => {
    return mesins.filter((mesin) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          mesin.title.toLowerCase().includes(searchLower) ||
          mesin.location.toLowerCase().includes(searchLower) ||
          mesin.brand.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Province filter
      if (filters.provinsi) {
        if (mesin.provinsi !== filters.provinsi) return false;
      }

      // Price filter
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (max) {
          if (mesin.price < min || mesin.price > max) return false;
        } else {
          if (mesin.price < min) return false;
        }
      }

      // Type filter
      if (filters.type) {
        if (!mesin.title.toLowerCase().includes(filters.type.toLowerCase()))
          return false;
      }

      // Brand filter
      if (filters.brand) {
        if (mesin.brand.toLowerCase() !== filters.brand.toLowerCase())
          return false;
      }

      // Year filter
      if (filters.year) {
        const [min, max] = filters.year.split("-").map(Number);
        if (max) {
          if (mesin.year < min || mesin.year > max) return false;
        } else {
          if (mesin.year < min) return false;
        }
      }

      return true;
    });
  }, [searchTerm, filters]);

  return (
    <AsetLayout
      title="Mesin Dijual"
      description="Temukan mesin dan alat berat terbaik untuk dijual dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMesins.length > 0 ? (
          filteredMesins.map((mesin) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada mesin yang sesuai dengan filter Anda
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-600">
        Menampilkan {filteredMesins.length} dari {mesins.length} mesin
      </div>
    </AsetLayout>
  );
}
