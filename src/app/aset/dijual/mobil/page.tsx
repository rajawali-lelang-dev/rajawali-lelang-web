import { Metadata } from "next";
import React from "react";
import DijualCard from "@/components/aset/dijual/dijual-card";
import { mobils } from "@/lib/mobil";

export const metadata: Metadata = {
  title: "Mobil Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan mobil terbaik untuk dijual - Sedan, SUV, MPV, Hatchback, Pickup, dan Sport dengan harga terjangkau.",
};

export default function MobilPage() {
  return (
    <>
      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="             Cari merek, model, atau tipe mobil..."
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
            <option value="0-100000000">&lt; 100 Juta</option>
            <option value="100000000-200000000">100 - 200 Juta</option>
            <option value="200000000-400000000">200 - 400 Juta</option>
            <option value="400000000-700000000">400 - 700 Juta</option>
            <option value="700000000+">&gt; 700 Juta</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Tipe Mobil</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="mpv">MPV</option>
            <option value="hatchback">Hatchback</option>
            <option value="pickup">Pickup</option>
            <option value="sport">Sport</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Merek</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="mazda">Mazda</option>
            <option value="daihatsu">Daihatsu</option>
            <option value="suzuki">Suzuki</option>
            <option value="nissan">Nissan</option>
            <option value="bmw">BMW</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Tahun</option>
            <option value="2024-2025">2024 - 2025</option>
            <option value="2021-2023">2021 - 2023</option>
            <option value="2018-2020">2018 - 2020</option>
            <option value="2015-2017">2015 - 2017</option>
            <option value="0-2014">&lt; 2015</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Transmisi</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
            <option value="cvt">CVT</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Bahan Bakar</option>
            <option value="bensin">Bensin</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Kilometer</option>
            <option value="0-20000">&lt; 20,000 km</option>
            <option value="20000-50000">20,000 - 50,000 km</option>
            <option value="50000-100000">50,000 - 100,000 km</option>
            <option value="100000+">&gt; 100,000 km</option>
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
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
        {mobils.map((mobil) => (
          <DijualCard
            key={mobil.id}
            item={mobil}
            href={`/aset/dijual/mobil/${mobil.id}`}
          />
        ))}
      </div>
    </>
  );
}