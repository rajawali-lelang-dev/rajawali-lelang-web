"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface AsetCardProps {
  id: string;
  title: string;
  location?: string;
  price: number;
  image: string[] | [];
  status?: string;
  type: 'properti' | 'mobil' | 'perhiasan' | 'mesin';
  mode: 'dijual' | 'lelang';
  isHidden?: boolean;
  additionalInfo?: {
    label: string;
    value: string;
  }[];
}

export default function AsetCard({
  id,
  title,
  location,
  price,
  image,
  status,
  type,
  mode,
  isHidden = false,
  additionalInfo = []
}: AsetCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const searchParams = useSearchParams();
  const isAdminMode = searchParams.get('admin') === 'true';

  // Fungsi Terminate Otomatis: Salin ID & Beri Instruksi
  const handleAdminHide = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Salin ID ke Clipboard agar admin tinggal Paste di VS Code
      await navigator.clipboard.writeText(id);
      
      const confirmHide = confirm(
        `ID ASET "${id}" BERHASIL DISALIN!\n\n` +
        `Langkah selanjutnya:\n` +
        `1. Buka VS Code & buka file properti.ts\n` +
        `2. Tekan Ctrl+F lalu Ctrl+V untuk cari ID ini\n` +
        `3. Tambahkan baris -> isHidden: true,\n` +
        `4. Jalankan file UPDATE_WEB.bat\n\n` +
        `Lanjut proses?`
      );
      
      if (confirmHide) {
        console.log(`Admin mengonfirmasi takedown untuk ID: ${id}`);
      }
    } catch (err) {
      alert("Gagal menyalin ID secara otomatis. Silakan catat manual ID: " + id);
    }
  };

  useEffect(() => {
    if (image.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [image.length]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = () => {
    if (!status) return "bg-gray-500";
    const s = status.toLowerCase();
    if (s.includes("aktif") || s === "available") return "bg-green-200 text-green-900";
    if (s.includes("segera") || s === "coming soon") return "bg-red-100 text-red-900";
    return "bg-gray-500 text-white";
  };

  const detailUrl = `/aset/${mode}/${type}/${id}`;

  return (
    <div className={`relative group/card h-full transition-all duration-300 ${isHidden ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
      
      {/* TOMBOL QUICK HIDE (Hanya Admin) */}
      {isAdminMode && !isHidden && (
        <button
          onClick={handleAdminHide}
          title="Salin ID & Takedown"
          className="absolute -top-3 -left-3 z-[60] bg-red-600 hover:bg-black text-white w-12 h-12 rounded-full shadow-2xl flex flex-col items-center justify-center border-2 border-white transition-all transform hover:scale-110 active:scale-90"
        >
          <span className="text-[9px] font-bold leading-none mb-0.5">HIDE</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      {/* INDIKATOR ID & STATUS UNTUK ADMIN */}
      {isAdminMode && (
        <div className="absolute top-2 left-10 z-30 flex gap-1 pointer-events-none">
          <span className="bg-black/80 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm font-mono shadow-md">
            ID: {id}
          </span>
          {isHidden && (
            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase shadow-md">
              OFFLINE
            </span>
          )}
        </div>
      )}

      <Link href={detailUrl} className="block h-full">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col cursor-pointer ring-1 ring-black/5">
          {/* Image Section */}
          <div className="relative h-52 w-full">
            <Image
              src={image[currentImageIndex] || "/images/placeholder.jpg"}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
            {status && (
              <div className={`absolute top-3 right-3 ${getStatusColor()} px-3 py-1 rounded-md text-xs font-semibold z-10 shadow-sm`}>
                {status}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2 line-clamp-2 uppercase">
              {title}
            </h3>

            {location && (
              <p className="font-manrope text-sm text-neutral-600 mb-3 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {location}
              </p>
            )}

            {additionalInfo.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3 text-xs text-neutral-600">
                {additionalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="font-semibold">{info.label}:</span>
                    <span>{info.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-auto">
              <p className="font-manrope font-bold text-xl text-green-600">
                {formatPrice(price)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}