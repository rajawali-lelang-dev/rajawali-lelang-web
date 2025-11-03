"use client";

import React, { useState, useMemo, useEffect } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { vehicles } from "@/lib/mobil";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari merk, model, atau tipe mobil...",
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

  const filteredVehicles = useMemo(() => {
    return mobils.filter((mobil) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          mobil.title.toLowerCase().includes(searchLower) ||
          mobil.location.toLowerCase().includes(searchLower) ||
          mobil.brand.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Province filter
      if (filters.provinsi) {
        if (mobil.provinsi !== filters.provinsi) return false;
      }

      // Price filter
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (max) {
          if (mobil.price < min || mobil.price > max) return false;
        } else {
          if (mobil.price < min) return false;
        }
      }

      // Brand filter
      if (filters.brand) {
        if (mobil.brand.toLowerCase() !== filters.brand.toLowerCase())
          return false;
      }

      // Transmission filter
      if (filters.transmission) {
        if (mobil.transmission.toLowerCase() !== filters.transmission.toLowerCase())
          return false;
      }

      // Year filter
      if (filters.year) {
        const [min, max] = filters.year.split("-").map(Number);
        if (max) {
          if (mobil.year < min || mobil.year > max) return false;
        } else {
          if (mobil.year < min) return false;
        }
      }

      return true;
    });
  }, [searchTerm, filters]);

  return (
    <AsetLayout
      title="Mobil Dijual"
      description="Temukan mobil terbaik untuk dijual dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMobils.length > 0 ? (
          filteredMobils.map((mobil) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada mobil yang sesuai dengan filter Anda
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-600">
        Menampilkan {filteredMobils.length} dari {mobils.length} mobil
      </div>
    </AsetLayout>
  );
}
