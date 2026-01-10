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
  const [isSheetHidden, setIsSheetHidden] = useState(false);
  const searchParams = useSearchParams();
  const isAdminMode = searchParams.get('admin') === 'true';

  // Link Google Sheets Anda
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";

  useEffect(() => {
    const checkTakedown = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        
        // Memecah CSV menjadi baris dan membersihkan spasi/karakter aneh
        const hiddenIds = csvText.split(/\r?\n/).map(row => row.trim());
        
        // Jika ID aset ini ada di dalam daftar Sheet, maka sembunyikan
        if (hiddenIds.includes(id)) {
          setIsSheetHidden(true);
        }
      } catch (error) {
        console.error("Gagal sinkronisasi dengan Google Sheets:", error);
      }
    };

    checkTakedown();
  }, [id]);

  // Status Akhir: Sembunyi jika di-hide di koding ATAU ada di Google Sheets
  const finalIsHidden = isHidden || isSheetHidden;

  // Jika bukan admin dan statusnya hidden, kartu tidak akan dirender sama sekali
  if (finalIsHidden && !isAdminMode) return null;

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
    <div className={`relative group/card h-full transition-all duration-300 ${finalIsHidden ? 'opacity-40 grayscale-[0.7]' : ''}`}>
      
      {/* INDIKATOR ADMIN: Menunjukkan ID dan Status Takedown */}
      {isAdminMode && (
        <div className="absolute top-2 left-2 z-30 flex flex-col gap-1 pointer-events-none">
          <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-mono shadow-md w-fit">
            ID: {id}
          </span>
          {finalIsHidden && (
            <span className="bg-red-600 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase shadow-md animate-pulse w-fit">
              OFFLINE (Sheet)
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