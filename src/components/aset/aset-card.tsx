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

  // Link CSV Google Sheets Anda
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";

  useEffect(() => {
    const checkTakedown = async () => {
      try {
        // Menambahkan parameter timestamp agar browser tidak mengambil data lama (cache)
        const response = await fetch(`${SHEET_URL}&t=${new Date().getTime()}`);
        const csvText = await response.text();
        
        // Membersihkan data: pecah baris, hapus spasi, hapus tanda kutip, buang baris kosong
        const hiddenIds = csvText
          .split(/\r?\n/)
          .map(row => row.split(',')[0].replace(/['"]+/g, '').trim())
          .filter(row => row !== "");

        // Cek apakah ID aset ini ada di daftar (Case Sensitive: pastikan sama persis)
        if (hiddenIds.includes(id.trim())) {
          setIsSheetHidden(true);
        }
      } catch (error) {
        console.error("Gagal sinkronisasi Sheet:", error);
      }
    };

    checkTakedown();
  }, [id]);

  const finalIsHidden = isHidden || isSheetHidden;

  // Sembunyikan sepenuhnya dari publik jika masuk daftar hide
  if (finalIsHidden && !isAdminMode) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = () => {
    if (!status) return "bg-gray-500 text-white";
    const s = status.toLowerCase();
    if (s.includes("aktif") || s === "available") return "bg-green-200 text-green-900";
    if (s.includes("segera") || s === "coming soon") return "bg-red-100 text-red-900";
    return "bg-gray-500 text-white";
  };

  return (
    <div className={`relative group/card h-full transition-all duration-300 ${finalIsHidden ? 'opacity-40 grayscale-[0.8]' : ''}`}>
      
      {/* LABEL ADMIN */}
      {isAdminMode && (
        <div className="absolute top-2 left-2 z-30 flex flex-col gap-1 pointer-events-none">
          <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-mono shadow-md w-fit">
            ID: {id}
          </span>
          {finalIsHidden && (
            <span className="bg-red-600 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase shadow-md animate-pulse">
              HIDDEN ON SHEET
            </span>
          )}
        </div>
      )}

      <Link href={`/aset/${mode}/${type}/${id}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col cursor-pointer ring-1 ring-black/5">
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
            <div className="mt-auto">
              <p className="font-manrope font-bold text-xl text-green-600">
                {formatPrice(price)}
              </p>
            </div>
          </div>
        </div>
      </Link>
            {/* Tombol Lonceng (Ditaruh di luar Link Utama) */}
      <a
        href="https://forms.gle/W6kgkHx5hPU4YpKt6"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} 
        className="absolute bottom-4 right-4 bg-[#800000] hover:bg-[#600000] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 z-20 flex items-center justify-center"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </a>
    </div>
  );
}