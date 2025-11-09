"use client";

import React, { useState, useMemo, useEffect } from "react";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { lelangProperties } from "@/lib/properti";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari lokasi, area, atau nama properti...",
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
          { value: "Lelang Aktif", label: "Lelang Aktif" },
          { value: "Lelang Segera", label: "Lelang Segera" },
          { value: "Lelang Selesai", label: "Lelang Selesai" },
        ],
      },
    ],
  ],
};

export default function PropertiLelangPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Check for province from navbar on mount
  useEffect(() => {
    const selectedProvince = sessionStorage.getItem('selectedProvince');
    const selectedKota = sessionStorage.getItem('selectedKota');
    
    if (selectedProvince || selectedKota) {
      setFilters(prev => ({
        ...prev,
        ...(selectedProvince && { provinsi: selectedProvince }),
        ...(selectedKota && { kota: selectedKota })
      }));
      sessionStorage.removeItem('selectedProvince');
      sessionStorage.removeItem('selectedKota');
    }
  }, []);

  const filteredProperties = useMemo(() => {
    return lelangProperties.filter((property) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Province filter
      if (filters.provinsi) {
        if (property.provinsi !== filters.provinsi) return false;
      }

      // Kota filter
      if (filters.kota) {
        if (property.kota !== filters.kota) return false;
      }

      // Price filter
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (max) {
          if (property.startPrice < min || property.endPrice > max) return false;
        } else {
          if (property.startPrice < min) return false;
        }
      }

      // Land area filter
      if (filters.landArea) {
        const [min, max] = filters.landArea.split("-").map(Number);
        if (max) {
          if (property.landArea < min || property.landArea > max) return false;
        } else {
          if (property.landArea < min) return false;
        }
      }

      // Type filter
      if (filters.type) {
        if (property.type.toLowerCase() !== filters.type.toLowerCase())
          return false;
      }

      // Status filter
      if (filters.status) {
        if (property.status !== filters.status)
          return false;
      }

      return true;
    });
  }, [searchTerm, filters]);

  return (
    <AsetLayout
      title="Properti Lelang"
      description="Ikuti lelang properti terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <AsetCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              price={property.startPrice}
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada properti yang sesuai dengan filter Anda
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-600">
        Menampilkan {filteredProperties.length} dari {lelangProperties.length} properti
      </div>
    </AsetLayout>
  );
}