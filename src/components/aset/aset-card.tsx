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

  // Fungsi untuk membantu admin melakukan takedown
  const handleAdminHide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const confirmHide = confirm(`Konfirmasi Takedown Aset ID: ${id}?\n\nSetelah ini, Anda harus menambahkan 'isHidden: true' pada ID ${id} di file properti.ts dan melakukan PUSH.`);
    
    if (confirmHide) {
      // Menampilkan instruksi koding yang harus di-copy
      alert(`PANDUAN TAKEDOWN:\n1. Buka file data properti.ts\n2. Cari ID: "${id}"\n3. Tambahkan baris ini: isHidden: true,\n4. Lakukan Push/Commit.`);
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
    if (s.includes("aktif") || s === "available") return "bg-green-200";
    if (s.includes("segera") || s === "coming soon") return "bg-red-100";
    return "bg-gray-500";
  };

  const detailUrl = `/aset/${mode}/${type}/${id}`;

  return (
    <div className={`relative group/card h-full transition-all duration-300 ${isHidden ? 'opacity-40 grayscale' : ''}`}>
      
      {/* TOMBOL X (Hanya muncul jika ?admin=true DAN aset TIDAK sedang hidden) */}
      {isAdminMode && !isHidden && (
        <button
          onClick={handleAdminHide}
          title="Takedown Aset ini dari Publik"
          className="absolute -top-2 -left-2 z-[50] bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full shadow-xl flex items-center justify-center border-2 border-white transition-transform hover:scale-110 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      {/* INDIKATOR ID UNTUK ADMIN */}
      {isAdminMode && (
        <div className="absolute top-2 left-8 z-30 flex gap-1 pointer-events-none">
          <span className="bg-black/80 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm font-mono">
            ID: {id}
          </span>
          {isHidden && (
            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">
              OFFLINE
            </span>
          )}
        </div>
      )}

      <Link href={detailUrl} className="block h-full">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col cursor-pointer">
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

          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2 line-clamp-2 uppercase">
              {title}
            </h3>
            {/* ... Sisa konten lokasi dan info tambahan Anda ... */}
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