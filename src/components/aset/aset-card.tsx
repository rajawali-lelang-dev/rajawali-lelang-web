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
  
  // FITUR PASSWORD: Ganti 'rajawali2024' dengan password pilihan Anda
  const ADMIN_PASSWORD = "rajawali2024"; 
  const isAdminMode = searchParams.get('admin') === 'true' && searchParams.get('pass') === ADMIN_PASSWORD;

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";

  useEffect(() => {
    const checkTakedown = async () => {
      try {
        // Anti-Cache: Memaksa browser mengambil data terbaru setiap detik
        const response = await fetch(`${SHEET_URL}&nocache=${new Date().getTime()}`, {
          cache: 'no-store'
        });
        const csvText = await response.text();
        
        // Logika scan ID yang lebih kuat (memeriksa semua kolom dan baris)
        const rows = csvText.split(/\r?\n/);
        let found = false;

        for (const row of rows) {
          const columns = row.split(',').map(c => c.replace(/['"]+/g, '').trim());
          if (columns.includes(id.trim())) {
            found = true;
            break;
          }
        }
        
        setIsSheetHidden(found);
      } catch (error) {
        console.error("Gagal sinkronisasi Sheet:", error);
      }
    };

    checkTakedown();
    // Re-check setiap 30 detik jika halaman tidak di-refresh
    const interval = setInterval(checkTakedown, 30000);
    return () => clearInterval(interval);
  }, [id]);

  const finalIsHidden = isHidden || isSheetHidden;

  // Filter Publik: Jika hidden, langsung hilang
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
    <div className={`relative group/card h-full transition-all duration-500 ${finalIsHidden ? 'opacity-40 grayscale-[0.8]' : 'opacity-100'}`}>
      
      {/* LABEL ADMIN (Hanya muncul jika Password Benar) */}
      {isAdminMode && (
        <div className="absolute top-3 left-3 z-30 flex flex-col gap-1.5 pointer-events-none">
          <span className="bg-black/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md font-mono shadow-xl border border-white/20 w-fit">
            ID: {id}
          </span>
          {finalIsHidden && (
            <span className="bg-red-600 text-white text-[9px] px-2 py-1 rounded-md font-bold uppercase shadow-lg animate-pulse border border-red-400">
              OFFLINE (Sheet)
            </span>
          )}
        </div>
      )}

      {/* TAMPILAN KARTU */}
      <Link href={`/aset/${mode}/${type}/${id}`} className="block h-full shadow-sm hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
        <div className="flex flex-col h-full">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={image[currentImageIndex] || "/images/placeholder.jpg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-110"
              unoptimized
            />
            {status && (
              <div className={`absolute top-3 right-3 ${getStatusColor()} px-3 py-1 rounded-full text-[10px] font-bold z-10 shadow-md uppercase tracking-wider`}>
                {status}
              </div>
            )}
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-manrope font-extrabold text-base text-neutral-800 mb-3 line-clamp-2 uppercase leading-tight group-hover/card:text-[#800000] transition-colors">
              {title}
            </h3>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="text-[10px] text-gray-400 font-semibold block mb-1">HARGA ASSET</span>
              <p className="font-manrope font-black text-xl text-green-700">
                {formatPrice(price)}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* TOMBOL LONCENG (FLOATING ACTION BUTTON) */}
      <div className="absolute bottom-5 right-5 z-40 group/btn">
        {/* Tooltip sederhana */}
        <span className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ingatkan Saya
        </span>
        
        <a
          href="https://forms.gle/W6kgkHx5hPU4YpKt6"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} 
          className="bg-[#800000] hover:bg-red-700 text-white p-3.5 rounded-2xl shadow-[0_10px_20px_rgba(128,0,0,0.3)] transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center border-2 border-white/20"
        >
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover/btn:animate-bounce"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </a>
      </div>

    </div>
  );
}