"use client";

import React, { useState, useMemo, useEffect } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { mobils } from "@/lib/mobil";
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
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          mobil.title.toLowerCase().includes(searchLower) ||
          mobil.location.toLowerCase().includes(searchLower) ||
          mobil.brand.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      if (filters.provinsi) {
        if (mobil.provinsi !== filters.provinsi) return false;
      }
      if (filters.status) {
        if (mobil.status.toLowerCase() !== filters.status.toLowerCase())
          return false;
      }
      if (filters.brand) {
        if (mobil.brand.toLowerCase() !== filters.brand.toLowerCase())
          return false;
      }
      if (filters.transmission) {
        if (mobil.transmission.toLowerCase() !== filters.transmission.toLowerCase())
          return false;
      }
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
      title="Mobil Lelang"
      description="Ikuti lelang mobil terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((mobil) => (
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
        Menampilkan {filteredVehicles.length} dari {mobils.length} mobil
      </div>
    </AsetLayout>
  );
}
