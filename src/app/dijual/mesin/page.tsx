import { Metadata } from "next";
import React from "react";
import DijualCard from "@/components/dijual/dijual-card";
import { mesins } from "@/lib/mesin";

export const metadata: Metadata = {
  title: "Mesin Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan mesin dan alat berat terbaik untuk dijual - Excavator, Generator, Forklift, Crane, Kompresor, dan Mesin Industri dengan harga terjangkau.",
};

export default function MesinPage() {
  return (
    <>
      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="             Cari merek, model, atau tipe mesin..."
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
            <option value="0-200000000">&lt; 200 Juta</option>
            <option value="200000000-500000000">200 - 500 Juta</option>
            <option value="500000000-1000000000">500 Juta - 1 Miliar</option>
            <option value="1000000000-2000000000">1 - 2 Miliar</option>
            <option value="2000000000+">&gt; 2 Miliar</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Tipe Mesin</option>
            <option value="alat-berat">Alat Berat</option>
            <option value="mesin-industri">Mesin Industri</option>
            <option value="generator">Generator</option>
            <option value="kompresor">Kompresor</option>
            <option value="forklift">Forklift</option>
            <option value="crane">Crane</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Merek</option>
            <option value="komatsu">Komatsu</option>
            <option value="caterpillar">Caterpillar</option>
            <option value="volvo">Volvo</option>
            <option value="hitachi">Hitachi</option>
            <option value="cummins">Cummins</option>
            <option value="perkins">Perkins</option>
            <option value="atlas-copco">Atlas Copco</option>
            <option value="toyota">Toyota</option>
            <option value="hino">Hino</option>
            <option value="mitsubishi">Mitsubishi</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Tahun</option>
            <option value="2023-2025">2023 - 2025</option>
            <option value="2020-2022">2020 - 2022</option>
            <option value="2017-2019">2017 - 2019</option>
            <option value="2014-2016">2014 - 2016</option>
            <option value="0-2013">&lt; 2014</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Kondisi</option>
            <option value="baru">Baru</option>
            <option value="bekas-sangat-baik">Bekas - Sangat Baik</option>
            <option value="bekas-baik">Bekas - Baik</option>
            <option value="perlu-perbaikan">Perlu Perbaikan</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Kapasitas</option>
            <option value="0-50">Kecil (&lt; 50 KW/Ton)</option>
            <option value="50-200">Sedang (50 - 200 KW/Ton)</option>
            <option value="200-500">Besar (200 - 500 KW/Ton)</option>
            <option value="500+">Sangat Besar (&gt; 500 KW/Ton)</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Jam Operasi</option>
            <option value="0-2000">&lt; 2,000 jam</option>
            <option value="2000-5000">2,000 - 5,000 jam</option>
            <option value="5000-10000">5,000 - 10,000 jam</option>
            <option value="10000+">&gt; 10,000 jam</option>
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
        {mesins.map((mesin) => (
          <DijualCard
            key={mesin.id}
            item={mesin}
            href={`/dijual/mesin/${mesin.id}`}
          />
        ))}
      </div>
    </>
  );
}