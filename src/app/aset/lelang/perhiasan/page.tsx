'use client';

import React, { useState, useMemo } from "react";
import ContactSection from "@/components/layout/contact";
import { lelangPerhiasans, getPerhiasanTypes, getMaterialTypes } from "@/lib/perhiasan";
import Image from "next/image";
import Link from "next/link";

export default function PerhiasanLelangPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "",
    weight: "",
    type: "",
    material: "",
    status: "",
  });

  // Get filter options
  const perhiasanTypes = getPerhiasanTypes();
  const materialTypes = getMaterialTypes();

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lelang Aktif":
        return "bg-red-500";
      case "Lelang Segera":
        return "bg-blue-500";
      case "Lelang Selesai":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  // Filter logic
  const filteredPerhiasans = useMemo(() => {
    return lelangPerhiasans.filter((item) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          (item.brand && item.brand.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (max) {
          if (item.startPrice < min || item.startPrice > max) return false;
        } else {
          if (item.startPrice < min) return false;
        }
      }

      // Weight filter (in grams)
      if (filters.weight) {
        const [min, max] = filters.weight.split("-").map(Number);
        if (max) {
          if (item.weight < min || item.weight > max) return false;
        } else {
          if (item.weight < min) return false;
        }
      }

      // Type filter
      if (filters.type && item.type !== filters.type) return false;

      // Material filter
      if (filters.material && item.material !== filters.material) return false;

      // Status filter
      if (filters.status && item.status !== filters.status) return false;

      return true;
    });
  }, [searchQuery, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilters({
      priceRange: "",
      weight: "",
      type: "",
      material: "",
      status: "",
    });
  };

  return (
    <>
      {/* Filter Section */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-4 mb-6">
          {/* Search Input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="             Cari lokasi, jenis perhiasan, atau merek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              aria-label="search"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Harga</option>
              <option value="0-50000000">&lt; 50 Juta</option>
              <option value="50000000-100000000">50 - 100 Juta</option>
              <option value="100000000-200000000">100 - 200 Juta</option>
              <option value="200000000-500000000">200 - 500 Juta</option>
              <option value="500000000+">&gt; 500 Juta</option>
            </select>

            <select
              value={filters.weight}
              onChange={(e) => handleFilterChange("weight", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Berat</option>
              <option value="0-5">&lt; 5 gram</option>
              <option value="5-10">5 - 10 gram</option>
              <option value="10-20">10 - 20 gram</option>
              <option value="20-50">20 - 50 gram</option>
              <option value="50+">&gt; 50 gram</option>
            </select>

            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Jenis Perhiasan</option>
              {perhiasanTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              value={filters.material}
              onChange={(e) => handleFilterChange("material", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Material</option>
              {materialTypes.map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>

            <select
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Status Lelang</option>
              <option value="Lelang Aktif">Lelang Aktif</option>
              <option value="Lelang Segera">Lelang Segera</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M21 21l-4.5-4.5" strokeLinecap="round" />
              </svg>
              Cari
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        {filteredPerhiasans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPerhiasans.map((perhiasan) => (
              <div key={perhiasan.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                {/* Image Section */}
                <div className="relative h-52 w-full">
                  <Image src={perhiasan.image} alt={perhiasan.title} fill className="object-cover" />
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 ${getStatusColor(perhiasan.status)} text-white px-3 py-1 rounded-md text-xs font-semibold`}>
                    {perhiasan.status}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-1 line-clamp-1">
                    {perhiasan.title}
                  </h3>

                  {/* Location */}
                  <p className="font-manrope text-sm text-neutral-600 mb-3 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {perhiasan.location}
                  </p>

                  {/* Price Range */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Harga Awal</p>
                    <p className="font-manrope font-bold text-xl text-red-600">
                      {formatPrice(perhiasan.startPrice)}
                    </p>
                  </div>

                  {/* Perhiasan Details */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-neutral-600">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>{perhiasan.weight}g</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>{perhiasan.material}</span>
                    </div>
                    {perhiasan.karat && (
                      <div className="flex items-center gap-1">
                        <span>{perhiasan.karat}K</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-manrope text-xs text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
                    {perhiasan.description}
                  </p>

                  <div className="grid md:grid-cols-[80%_20%] gap-2">
                    <Link href={`/aset/lelang/perhiasan/${perhiasan.id}`} className="w-full">
                      <button className="w-full text-primary-600 hover:bg-neutral-100 bg-white border-1 border-primary-600 font-semibold py-2.5 rounded-lg transition-colors">
                        Lihat Detail
                      </button>
                    </Link>
                    <Link
                      href={`https://wa.me/6281234567890?text=Saya tertarik dengan ${perhiasan.title}`}
                      target="_blank"
                      className="w-full"
                    >
                      <button className="w-full h-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tidak ada perhiasan ditemukan
            </h3>
            <p className="text-gray-500 mb-4">
              Coba ubah filter pencarian Anda
            </p>
            <button
              onClick={handleReset}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <ContactSection />
      </div>
    </>
  );
}
