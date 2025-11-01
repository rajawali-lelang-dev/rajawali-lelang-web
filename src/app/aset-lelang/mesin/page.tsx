'use client';

import React, { useState, useMemo } from "react";
import ContactSection from "@/components/layout/contact";
import { lelangMesins, getMesinTypes, getUniqueMesinBrands } from "@/lib/mesin";
import Image from "next/image";
import Link from "next/link";

export default function MesinLelangPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "",
    year: "",
    type: "",
    brand: "",
    status: "",
  });

  // Get filter options
  const mesinTypes = getMesinTypes();
  const brands = getUniqueMesinBrands();

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
  const filteredMesins = useMemo(() => {
    return lelangMesins.filter((item) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query) ||
          item.model.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query);
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

      // Year filter
      if (filters.year) {
        if (filters.year === "2018+") {
          if (item.year < 2018) return false;
        } else {
          const [min, max] = filters.year.split("-").map(Number);
          if (item.year < min || item.year > max) return false;
        }
      }

      // Type filter
      if (filters.type && item.type !== filters.type) return false;

      // Brand filter
      if (filters.brand && item.brand !== filters.brand) return false;

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
      year: "",
      type: "",
      brand: "",
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
              placeholder="             Cari lokasi, merek, model, atau tipe mesin..."
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
              <option value="0-500000000">&lt; 500 Juta</option>
              <option value="500000000-1000000000">500 Juta - 1 Miliar</option>
              <option value="1000000000-2000000000">1 - 2 Miliar</option>
              <option value="2000000000-5000000000">2 - 5 Miliar</option>
              <option value="5000000000+">&gt; 5 Miliar</option>
            </select>

            <select
              value={filters.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Tahun</option>
              <option value="2018+">2018 ke atas</option>
              <option value="2015-2017">2015 - 2017</option>
              <option value="2012-2014">2012 - 2014</option>
              <option value="2008-2011">2008 - 2011</option>
            </select>

            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Tipe Mesin</option>
              {mesinTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              value={filters.brand}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Merek</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
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
        {filteredMesins.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredMesins.map((mesin) => (
              <div key={mesin.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                {/* Image Section */}
                <div className="relative h-52 w-full">
                  <Image src={mesin.image} alt={mesin.title} fill className="object-cover" />
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 ${getStatusColor(mesin.status)} text-white px-3 py-1 rounded-md text-xs font-semibold`}>
                    {mesin.status}
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-gray-800">
                    {mesin.year}
                  </div>
                  {/* Condition Badge */}
                  <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {mesin.condition}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Brand & Type */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary-600 uppercase">{mesin.brand}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-600">{mesin.type}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-1 line-clamp-1">
                    {mesin.title}
                  </h3>

                  {/* Location */}
                  <p className="font-manrope text-sm text-neutral-600 mb-3 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {mesin.location}
                  </p>

                  {/* Price Range */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Harga Awal</p>
                    <p className="font-manrope font-bold text-xl text-red-600">
                      {formatPrice(mesin.startPrice)}
                    </p>
                  </div>

                  {/* Mesin Details */}
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-neutral-600">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                      <span>{mesin.model}</span>
                    </div>
                    {mesin.capacity && (
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                        <span>{mesin.capacity}</span>
                      </div>
                    )}
                    {mesin.hoursUsed && (
                      <div className="flex items-center gap-1 col-span-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{mesin.hoursUsed.toLocaleString('id-ID')} jam operasi</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-manrope text-xs text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
                    {mesin.description}
                  </p>

                  <div className="grid md:grid-cols-[80%_20%] gap-2">
                    <Link href={`/aset-lelang/mesin/${mesin.id}`} className="w-full">
                      <button className="w-full text-primary-600 hover:bg-neutral-100 bg-white border-1 border-primary-600 font-semibold py-2.5 rounded-lg transition-colors">
                        Lihat Detail
                      </button>
                    </Link>
                    <Link
                      href={`https://wa.me/6281234567890?text=Saya tertarik dengan ${mesin.title}`}
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
              Tidak ada mesin ditemukan
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
