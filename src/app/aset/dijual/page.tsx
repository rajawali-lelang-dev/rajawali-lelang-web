"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AsetCard from "@/components/aset/aset-card";
import AsetLayout from "@/components/aset/aset-layout";
import { properties } from "@/lib/properti";
import { mobils } from "@/lib/mobil";
import { perhiasans } from "@/lib/perhiasan";
import { mesins } from "@/lib/mesin";
import { getAllProvinces } from "@/lib/province";

const filterConfig = {
  placeholder: "Cari semua aset dijual...",
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
        label: "Status",
        name: "status",
        options: [
          { value: "available", label: "Available" },
          { value: "featured", label: "Featured" },
          { value: "sold", label: "Sold" },
        ],
      },
    ],
  ],
};

function AllDijualContent() {
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

  // Combine all dijual assets with normalized structure
  const allAssets = useMemo(() => {
    return [
      ...properties.map(p => ({ 
        ...p, 
        category: 'properti' as const,
        type: 'properti' as const,
        mode: 'dijual' as const
      })),
      ...mobils.map(m => ({ 
        ...m, 
        category: 'mobil' as const,
        type: 'mobil' as const,
        mode: 'dijual' as const
      })),
      ...perhiasans.map(p => ({ 
        ...p, 
        category: 'perhiasan' as const,
        type: 'perhiasan' as const,
        mode: 'dijual' as const
      })),
      ...mesins.map(m => ({ 
        ...m, 
        category: 'mesin' as const,
        type: 'mesin' as const,
        mode: 'dijual' as const
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
      title="Semua Aset Dijual"
      description={
        filters.provinsi
          ? `Menampilkan ${filteredAssets.length} aset dijual di ${filters.provinsi}`
          : `Temukan berbagai aset dijual dari seluruh Indonesia. Total ${filteredAssets.length} aset tersedia.`
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

export default function AllDijualPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllDijualContent />
    </Suspense>
  );
}

