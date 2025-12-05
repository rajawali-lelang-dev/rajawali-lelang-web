"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { lelangMesins } from "@/lib/mesin";
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
        label: "Status",
        name: "status",
        options: [
          { value: "Lelang Aktif", label: "Lelang Aktif" },
          { value: "Lelang Segera", label: "Lelang Segera" },
          { value: "Lelang Selesai", label: "Lelang Selesai" },
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

export default function MesinLelangPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Initialize filters from URL query params
  useEffect(() => {
    const provinsiParam = searchParams.get('provinsi');
    const kotaParam = searchParams.get('kota');
    const statusParam = searchParams.get('status');
    const typeParam = searchParams.get('type');
    const brandParam = searchParams.get('brand');
    const yearParam = searchParams.get('year');
    
    const urlFilters: Record<string, string> = {};
    if (provinsiParam) urlFilters.provinsi = provinsiParam;
    if (kotaParam) urlFilters.kota = kotaParam;
    if (statusParam) urlFilters.status = statusParam;
    if (typeParam) urlFilters.type = typeParam;
    if (brandParam) urlFilters.brand = brandParam;
    if (yearParam) urlFilters.year = yearParam;
    
    if (Object.keys(urlFilters).length > 0) {
      setFilters(urlFilters);
    }
  }, [searchParams]);

  const filteredMachines = useMemo(() => {
    return lelangMesins.filter((mesin) => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          mesin.title.toLowerCase().includes(searchLower) ||
          mesin.location.toLowerCase().includes(searchLower) ||
          mesin.brand.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      if (filters.provinsi) {
        if (mesin.provinsi !== filters.provinsi) return false;
      }
      if (filters.kota) {
        if (mesin.kota !== filters.kota) return false;
      }
      if (filters.status) {
        if (mesin.status !== filters.status)
          return false;
      }
      if (filters.type) {
        if (!mesin.title.toLowerCase().includes(filters.type.toLowerCase()))
          return false;
      }
      if (filters.brand) {
        if (mesin.brand.toLowerCase() !== filters.brand.toLowerCase())
          return false;
      }
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
      title="Mesin Lelang"
      description="Ikuti lelang mesin dan alat berat terbaik dengan proses yang mudah, aman, dan menguntungkan"
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMachines.length > 0 ? (
          filteredMachines.map((mesin) => (
            <AsetCard
              key={mesin.id}
              id={mesin.id}
              title={mesin.title}
              location={mesin.location}
              price={mesin.endPrice}
              image={mesin.image ?? []}
              status={mesin.status}
              type="mesin"
              mode="lelang"
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
        Menampilkan {filteredMachines.length} dari {lelangMesins.length} mesin
      </div>
    </AsetLayout>
  );
}
