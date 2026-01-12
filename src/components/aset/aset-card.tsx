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
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const searchParams = useSearchParams();
  const isAdminParam = searchParams.get('admin') === 'true';

  // URL Google Sheets (CSV untuk cek & Link Edit untuk Admin)
  const SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";
  const SHEET_EDIT_LINK = "https://docs.google.com/spreadsheets/d/1oZ_zh6W6JIJIC0jnbeUujw2Sm0_v2LskfRZFsnNq10E/edit";

  // 1. Logika Password (Selalu tanya setiap akses/refresh)
  useEffect(() => {
    if (isAdminParam && !isAuthorized) {
      const password = prompt("PERTANYAAN KEAMANAN:\n\nSiapakah Patriot kita?");
      if (password === "LaLiLuLeLo") {
        setIsAuthorized(true);
      } else {
        alert("Akses Ditolak.");
        window.location.href = window.location.pathname;
      }
    }
  }, [isAdminParam, isAuthorized]);

  // 2. Cek Status Takedown
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`${SHEET_CSV}&t=${new Date().getTime()}`);
        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/);
        const found = rows.some(row => 
          row.split(',').map(c => c.replace(/['"]+/g, '').trim()).includes(id.trim())
        );
        setIsSheetHidden(found);
      } catch (e) { console.error(e); }
    };
    checkStatus();
  }, [id]);

  const finalIsHidden = isHidden || isSheetHidden;
  const showAdminUI = isAdminParam && isAuthorized;

  // Jika hidden dan bukan admin, jangan render apa pun
  if (finalIsHidden && !showAdminUI) return null;

  // Fungsi Copy ID
  const copyId = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    alert(`ID ${id} berhasil disalin!`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className={`relative group/card h-full transition-all duration-500 ${finalIsHidden ? 'opacity-40 grayscale-[0.9]' : 'opacity-100'}`}>
      
      {/* --- ADMIN TOOLS PANEL --- */}
      {showAdminUI && (
        <div className="absolute top-3 left-3 z-[60] flex flex-col gap-2">
          {/* Label ID (Klik untuk Copy) */}
          <button 
            onClick={copyId}
            className="bg-black text-white text-[10px] px-3 py-1.5 rounded-lg font-mono shadow-xl border border-white/20 hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <span>ID: {id}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
          </button>

          {/* Tombol ke Sheet */}
          <a 
            href={SHEET_EDIT_LINK} 
            target="_blank" 
            className="bg-green-700 text-white text-[9px] px-3 py-1.5 rounded-lg font-bold shadow-xl border border-white/20 hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            EDIT SHEET
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>

          {/* Status Taken Down */}
          {finalIsHidden && (
            <div className="bg-red-600 text-white text-[10px] px-3 py-1.5 rounded-lg font-black uppercase shadow-2xl animate-pulse border-2 border-white flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              TAKEN DOWN
            </div>
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