import { Metadata } from "next";
import React from "react";
import DijualCard from "@/components/aset/dijual/dijual-card";
import { properties } from "@/lib/properti";

export const metadata: Metadata = {
  title: "Properti Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan properti terbaik untuk dijual - Rumah, Ruko, Villa, Apartemen, Tanah, dan Gudang dengan harga terjangkau.",
};

export default function PropertyPage() {
  return (
    <>
      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="             Cari lokasi, area, atau nama properti..."
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Harga</option>
            <option value="0-1000000000">&lt; 1 Miliar</option>
            <option value="1000000000-5000000000">1 - 5 Miliar</option>
            <option value="5000000000-10000000000">5 - 10 Miliar</option>
            <option value="10000000000+">&gt; 10 Miliar</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Luas Tanah</option>
            <option value="0-100">&lt; 100 m²</option>
            <option value="100-300">100 - 300 m²</option>
            <option value="300-500">300 - 500 m²</option>
            <option value="500+">&gt; 500 m²</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Jenis Properti</option>
            <option value="rumah">Rumah</option>
            <option value="ruko">Ruko</option>
            <option value="villa">Villa</option>
            <option value="apartemen">Apartemen</option>
            <option value="tanah">Tanah</option>
            <option value="gudang">Gudang</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Status</option>
            <option value="available">Available</option>
            <option value="featured">Featured</option>
            <option value="sold">Sold</option>
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
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="14" y2="18" strokeLinecap="round" />
            </svg>
            Filter Lanjutan
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6">
        {properties.map((property) => (
          <DijualCard
            key={property.id}
            item={property}
            href={`/aset/dijual/properti/${property.id}`}
          />
        ))}
      </div>
    </>
  );
}