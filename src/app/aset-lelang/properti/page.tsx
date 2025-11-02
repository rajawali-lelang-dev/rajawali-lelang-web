"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "@/components/products/product-card";
import ContactSection from "@/components/layout/contact";
import { lelangProperties } from "@/lib/properti";

export default function PropertiPage() {
  const [filters, setFilters] = useState({
    search: "",
    priceRange: "",
    area: "",
    type: "",
    status: "",
  });

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    return lelangProperties.filter((property) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.provinsi.toLowerCase().includes(searchLower) ||
          property.kota.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const price = property.endPrice;
        if (filters.priceRange === "0-1000000000" && price >= 1000000000)
          return false;
        if (
          filters.priceRange === "1000000000-5000000000" &&
          (price < 1000000000 || price >= 5000000000)
        )
          return false;
        if (
          filters.priceRange === "5000000000-10000000000" &&
          (price < 5000000000 || price >= 10000000000)
        )
          return false;
        if (filters.priceRange === "10000000000+" && price < 10000000000)
          return false;
      }

      // Land area filter
      if (filters.area) {
        const area = property.landArea;
        if (filters.area === "0-100" && area >= 100) return false;
        if (filters.area === "100-300" && (area < 100 || area >= 300))
          return false;
        if (filters.area === "300-500" && (area < 300 || area >= 500))
          return false;
        if (filters.area === "500+" && area < 500) return false;
      }

      // Property type filter
      if (filters.type && property.type !== filters.type) return false;

      // Status filter
      if (filters.status && property.status !== filters.status) return false;

      return true;
    });
  }, [filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSearch = () => {
    // Search is already handled by useMemo 
    console.log("Searching with filters:", filters);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      priceRange: "",
      area: "",
      type: "",
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
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="             Cari lokasi, area, atau nama properti..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              onClick={handleSearch}
              aria-label="search"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
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

          {/* Filter Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Harga</option>
              <option value="0-1000000000">&lt; 1 Miliar</option>
              <option value="1000000000-5000000000">1 - 5 Miliar</option>
              <option value="5000000000-10000000000">5 - 10 Miliar</option>
              <option value="10000000000+">&gt; 10 Miliar</option>
            </select>

            <select
              value={filters.area}
              onChange={(e) => handleFilterChange("area", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Luas Tanah</option>
              <option value="0-100">&lt; 100 m²</option>
              <option value="100-300">100 - 300 m²</option>
              <option value="300-500">300 - 500 m²</option>
              <option value="500+">&gt; 500 m²</option>
            </select>

            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Jenis Properti</option>
              <option value="Rumah">Rumah</option>
              <option value="Ruko">Ruko</option>
              <option value="Villa">Villa</option>
              <option value="Apartemen">Apartemen</option>
              <option value="Tanah">Tanah</option>
              <option value="Gudang">Gudang</option>
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

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSearch}
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
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProperties.map((property) => (
              <ProductCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.endPrice}
                landArea={property.landArea}
                buildingArea={property.buildingArea}
                certificateType={property.certificateType}
                description={property.description}
                status={property.status}
                image={property.image}
                href={`/aset-lelang/properti/${property.id}`}
              />
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
              Tidak ada properti ditemukan
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
