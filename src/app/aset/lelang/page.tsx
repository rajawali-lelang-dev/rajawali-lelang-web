"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { lelangProperties } from "@/lib/properti";
import { lelangMobils } from "@/lib/mobil";
import { lelangPerhiasans } from "@/lib/perhiasan";
import { lelangMesins } from "@/lib/mesin";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari semua aset lelang...",
  filters: [
    [
      {
        label: "Provinsi",
        name: "provinsi",
        options: getAllProvinces().map(p => ({ value: p, label: p })),
      },
      {
        label: "Kategori",
        name: "category",
        options: [
          { value: "properti", label: "Properti" },
          { value: "mobil", label: "Mobil" },
          { value: "perhiasan", label: "Perhiasan" },
          { value: "mesin", label: "Mesin" },
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

export default function AllLelangPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Initialize filters from URL query params
  useEffect(() => {
    const provinsiParam = searchParams.get('provinsi');
    const kotaParam = searchParams.get('kota');
    const categoryParam = searchParams.get('category');
    const statusParam = searchParams.get('status');
    
    const urlFilters: Record<string, string> = {};
    if (provinsiParam) urlFilters.provinsi = provinsiParam;
    if (kotaParam) urlFilters.kota = kotaParam;
    if (categoryParam) urlFilters.category = categoryParam;
    if (statusParam) urlFilters.status = statusParam;
    
    if (Object.keys(urlFilters).length > 0) {
      setFilters(urlFilters);
    }
  }, [searchParams]);

  // Combine all lelang assets with normalized structure
  const allAssets = useMemo(() => {
    return [
      ...lelangProperties.map(p => ({ 
        ...p, 
        category: 'properti' as const,
        type: 'properti' as const,
        mode: 'lelang' as const,
        price: p.endPrice || 0
      })),
      ...lelangMobils.map(m => ({ 
        ...m, 
        category: 'mobil' as const,
        type: 'mobil' as const,
        mode: 'lelang' as const,
        price: m.endPrice || 0
      })),
      ...lelangPerhiasans.map(p => ({ 
        ...p, 
        category: 'perhiasan' as const,
        type: 'perhiasan' as const,
        mode: 'lelang' as const,
        price: p.endPrice || 0
      })),
      ...lelangMesins.map(m => ({ 
        ...m, 
        category: 'mesin' as const,
        type: 'mesin' as const,
        mode: 'lelang' as const,
        price: m.endPrice || 0
      })),
    ];
  }, []);

  const filteredAssets = useMemo(() => {
    return allAssets.filter((asset) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          asset.title.toLowerCase().includes(searchLower) ||
          asset.location.toLowerCase().includes(searchLower) ||
          asset.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Province filter
      if (filters.provinsi) {
        if (asset.provinsi !== filters.provinsi) return false;
      }

      // Kota filter
      if (filters.kota) {
        if (asset.kota !== filters.kota) return false;
      }

      // Category filter
      if (filters.category) {
        if (asset.category !== filters.category) return false;
      }

      // Status filter
      if (filters.status) {
        if (asset.status !== filters.status) return false;
      }

      return true;
    });
  }, [allAssets, searchTerm, filters]);

  return (
    <AsetLayout
      title="Semua Aset Lelang"
      description={
        filters.provinsi
          ? `Menampilkan ${filteredAssets.length} aset lelang di ${filters.provinsi}`
          : `Temukan berbagai aset lelang dari seluruh Indonesia. Total ${filteredAssets.length} aset tersedia.`
      }
      filterConfig={filterConfig}
      onSearch={setSearchTerm}
      onFilterChange={setFilters}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <AsetCard 
            key={asset.id} 
            id={asset.id}
            title={asset.title}
            location={asset.location}
            price={asset.price}
            image={asset.image || []}
            status={asset.status}
            type={asset.type}
            mode={asset.mode}
          />
        ))}
      </div>
    </AsetLayout>
  );
}
