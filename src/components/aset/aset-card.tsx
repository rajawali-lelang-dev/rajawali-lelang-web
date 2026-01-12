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
}: AsetCardProps) {
  const [isSheetHidden, setIsSheetHidden] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const searchParams = useSearchParams();
  const isAdminParam = searchParams.get('admin') === 'true';

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";

  // Pastikan komponen sudah termuat di browser untuk menghindari error "Client-side Exception"
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Logika Password (Hanya jalan setelah mounted)
  useEffect(() => {
    if (mounted && isAdminParam && !isAuthorized) {
      const password = prompt("PERTANYAAN KEAMANAN:\n\nSiapakah Patriot kita?");
      if (password === "LaLiLuLeLo") {
        setIsAuthorized(true);
      } else {
        alert("Akses Ditolak.");
        window.location.href = window.location.pathname;
      }
    }
  }, [mounted, isAdminParam, isAuthorized]);

  // 2. Logika Cek Takedown
  useEffect(() => {
    const checkTakedown = async () => {
      try {
        const response = await fetch(`${SHEET_URL}&t=${Date.now()}`, { cache: 'no-store' });
        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/);
        const found = rows.some(row => 
          row.split(',').map(c => c.replace(/['"]+/g, '').trim()).includes(id.trim())
        );
        setIsSheetHidden(found);
      } catch (error) {
        console.error("Gagal sinkronisasi:", error);
      }
    };
    checkTakedown();
  }, [id]);

  if (!mounted) return null;

  const finalIsHidden = isHidden || isSheetHidden;
  const showAdminUI = isAdminParam && isAuthorized;

  // Publik: Jika hide, kartu hilang total
  if (finalIsHidden && !showAdminUI) return null;

  // Fungsi Salin ID
  const handleCopyId = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    alert(`ID Aset: ${id} berhasil disalin!`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency", currency: "IDR", minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={`relative group/card h-full transition-all duration-500 ${finalIsHidden ? 'opacity-40 grayscale-[0.8]' : 'opacity-100'}`}>
      
      {/* LABEL & TOOLS ADMIN */}
      {showAdminUI && (
        <div className="absolute top-3 left-3 z-50 flex flex-col gap-2">
          {/* Tombol Copy ID */}
          <button 
            onClick={handleCopyId}
            className="bg-black hover:bg-blue-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-mono shadow-xl border border-white/20 transition-colors flex items-center gap-2"
          >
            ID: {id}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
          </button>

          {/* Label Status Takedown */}
          {finalIsHidden && (
            <span className="bg-red-600 text-white text-[9px] px-3 py-1.5 rounded-lg font-bold uppercase shadow-lg border border-red-400 animate-pulse">
              TAKEN DOWN (HIDDEN)
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