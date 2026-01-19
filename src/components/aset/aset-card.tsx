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
}: AsetCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSheetHidden, setIsSheetHidden] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const searchParams = useSearchParams();
  const isAdminParam = searchParams.get('admin') === 'true';

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj5_JImr11O2Vdx0DdBo785kS9ongzSJ27MaFtH6cI5n3xb3828kGUa9oPSQm_Pt9Ztc89ZPnvQpcj/pub?output=csv";

  // Mencegah error Client-side mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. FITUR: Auto-Slide Gambar (Interval 4 detik)
  useEffect(() => {
    if (image.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, [image]);

  // 2. Logika Password Admin (Pop-up Pertanyaan)
  useEffect(() => {
    if (mounted && isAdminParam && !isAuthorized) {
      const sessionAuth = sessionStorage.getItem("admin_auth");
      
      if (sessionAuth === "true") {
        setIsAuthorized(true);
      } else {
        const password = prompt("PERTANYAAN KEAMANAN:\n\nSiapakah Patriot kita?");
        if (password === "LaLiLuLeLo") {
          sessionStorage.setItem("admin_auth", "true");
          setIsAuthorized(true);
        } else {
          alert("Jawaban Salah!");
          window.location.href = window.location.pathname;
        }
      }
    }
  }, [mounted, isAdminParam, isAuthorized]);

  // 3. Logika Cek Takedown Google Sheets
  useEffect(() => {
    const checkTakedown = async () => {
      try {
        const response = await fetch(`${SHEET_URL}&nocache=${new Date().getTime()}`, {
          cache: 'no-store'
        });
        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/);
        const found = rows.some(row => 
          row.split(',').map(c => c.replace(/['"]+/g, '').trim()).includes(id.trim())
        );
        setIsSheetHidden(found);
      } catch (error) {
        console.error("Gagal sinkronisasi Sheet:", error);
      }
    };
    checkTakedown();
  }, [id]);

  if (!mounted) return null;

  const finalIsHidden = isHidden || isSheetHidden;
  const showAdminUI = isAdminParam && isAuthorized;

  // Filter Publik: Jika disembunyikan, kartu hilang kecuali untuk Admin
  if (finalIsHidden && !showAdminUI) return null;

  const handleCopyId = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    alert(`ID Aset ${id} berhasil disalin!`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency", currency: "IDR", minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={`relative group/card h-full transition-all duration-500 ${finalIsHidden ? 'opacity-40 grayscale-[0.8]' : 'opacity-100'}`}>
      
      {/* --- ADMIN OVERLAY --- */}
      {showAdminUI && (
        <div className="absolute top-3 left-3 z-50 flex flex-col gap-2">
          <button 
            onClick={handleCopyId}
            className="bg-black/90 backdrop-blur-sm text-white text-[10px] px-3 py-1.5 rounded-lg font-mono shadow-xl border border-white/20 flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            ID: {id}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
          </button>
          {finalIsHidden && (
            <span className="bg-red-600 text-white text-[9px] px-3 py-1.5 rounded-lg font-bold uppercase animate-pulse border border-white/20 shadow-lg">
              TAKEN DOWN (Sheet)
            </span>
          )}
        </div>
      )}

      {/* --- KONTEN KARTU --- */}
      <Link href={`/aset/${mode}/${type}/${id}`} className="block h-full shadow-sm hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
        <div className="flex flex-col h-full">
          {/* Gambar Slide Otomatis */}
          <div className="relative h-56 w-full overflow-hidden bg-gray-100">
            {image.length > 0 ? (
              image.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={img}
                    alt={`${title} - ${index}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))
            ) : (
              <Image src="/images/placeholder.jpg" alt="No image" fill className="object-cover" />
            )}
            
            {status && (
              <div className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold z-10 shadow-md uppercase text-neutral-800`}>
                {status}
              </div>
            )}
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-manrope font-extrabold text-base text-neutral-800 mb-3 line-clamp-2 uppercase group-hover/card:text-[#800000] transition-colors">
              {title}
            </h3>
            
            <div className="mt-auto">
              {/* Lokasi Aset */}
              {location && (
                <div className="flex items-center gap-1.5 text-neutral-500 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span className="text-xs truncate font-medium">{location}</span>
                </div>
              )}
              
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 font-semibold block mb-0.5 uppercase tracking-wider">Harga Asset</span>
                <p className="font-manrope font-black text-xl text-green-700">
                  {formatPrice(price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* FLOATING ACTION BUTTON */}
      <div className="absolute bottom-5 right-5 z-40">
        <a
          href="https://forms.gle/W6kgkHx5hPU4YpKt6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#800000] hover:bg-red-700 text-white p-3.5 rounded-2xl shadow-lg transition-all hover:scale-110 active:scale-90 flex items-center justify-center border-2 border-white/20"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </a>
      </div>

    </div>
  );
}