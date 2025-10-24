import { Metadata } from "next";
import React from "react";
import DijualCard from "@/components/dijual/dijual-card";
import { perhiasans } from "@/lib/perhiasan";

export const metadata: Metadata = {
  title: "Perhiasan Dijual | Rajawali Lelang Indonesia",
  description:
    "Temukan perhiasan terbaik untuk dijual - Cincin, Kalung, Gelang, Anting, Bros, dan Liontin dengan harga terjangkau.",
};

export default function PerhiasanPage() {
  return (
    <>
      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="             Cari brand, material, atau jenis perhiasan..."
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
            <option value="0-10000000">&lt; 10 Juta</option>
            <option value="10000000-50000000">10 - 50 Juta</option>
            <option value="50000000-100000000">50 - 100 Juta</option>
            <option value="100000000-500000000">100 - 500 Juta</option>
            <option value="500000000+">&gt; 500 Juta</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Jenis Perhiasan</option>
            <option value="cincin">Cincin</option>
            <option value="kalung">Kalung</option>
            <option value="gelang">Gelang</option>
            <option value="anting">Anting</option>
            <option value="bros">Bros</option>
            <option value="liontin">Liontin</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Material</option>
            <option value="emas">Emas</option>
            <option value="perak">Perak</option>
            <option value="platinum">Platinum</option>
            <option value="berlian">Berlian</option>
            <option value="mutiara">Mutiara</option>
            <option value="batu-permata">Batu Permata</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Kondisi</option>
            <option value="baru">Baru</option>
            <option value="bekas-sangat-baik">Bekas - Sangat Baik</option>
            <option value="bekas-baik">Bekas - Baik</option>
            <option value="antik">Antik</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Berat (gram)</option>
            <option value="0-5">&lt; 5 gram</option>
            <option value="5-10">5 - 10 gram</option>
            <option value="10-20">10 - 20 gram</option>
            <option value="20+">&gt; 20 gram</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Karat</option>
            <option value="18">18K</option>
            <option value="22">22K</option>
            <option value="24">24K</option>
          </select>

          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">Brand</option>
            <option value="tiffany">Tiffany & Co</option>
            <option value="cartier">Cartier</option>
            <option value="bvlgari">Bvlgari</option>
            <option value="other">Lainnya</option>
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
        {perhiasans.map((perhiasan) => (
          <DijualCard
            key={perhiasan.id}
            item={perhiasan}
            href={`/dijual/perhiasan/${perhiasan.id}`}
          />
        ))}
      </div>
    </>
  );
}