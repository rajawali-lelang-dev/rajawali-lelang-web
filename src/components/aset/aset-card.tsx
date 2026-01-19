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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (image.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(interval);
  }, [image]);

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

  const getStatusColor = () => {
    if (!status) return "bg-white/90 text-neutral-800";
    const s = status.toLowerCase();
    if (s.includes("aktif") || s === "available") {
      return "bg-green-100 text-green-800 border-green-200";
    }
    if (s.includes("segera") || s === "coming soon") {
      return "bg-red-100 text-red-800 border-red-200";
    }
    return "bg-white/90 text-neutral-800 border-gray-200";
  };

  return (
    <div className={`relative group/card h-full transition-all duration-500 ${finalIsHidden ? 'opacity-40 grayscale-[0.8]' : 'opacity-100'}`}>
      
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

      <Link href={`/aset/${mode}/${type}/${id}`} className="block h-full shadow-sm hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
        <div className="flex flex-col h-full">
          <div className="relative h-56 w-full overflow-hidden bg-gray-100">
            {image.length > 0 ? (
              image.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image src={img} alt={`${title} - ${index}`} fill className="object-cover" unoptimized />
                </div>
              ))
            ) : (
              <Image src="/images/placeholder.jpg" alt="No image" fill className="object-cover" />
            )}
            
            {status && (
              <div className={`absolute top-3 right-3 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold z-10 shadow-md border uppercase tracking-wider ${getStatusColor()}`}>
                {status}
              </div>
            )}
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-manrope font-extrabold text-base text-neutral-800 mb-3 line-clamp-2 uppercase group-hover/card:text-[#800000] transition-colors">
              {title}
            </h3>
            
            <div className="mt-auto">
              {location && (
                <div className="flex items-center gap-1.5 text-neutral-500 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span className="text-xs truncate font-medium">{location}</span>
                </div>
              )}
              
              {/* Perapihan: pt-5 untuk memberi ruang agar tidak bertabrakan dengan tombol lonceng */}
              <div className="pt-5 border-t border-gray-100 relative">
                <span className="text-[10px] text-gray-400 font-semibold block mb-0.5 uppercase tracking-wider">Harga Asset</span>
                <p className="font-manrope font-black text-xl text-green-700">
                  {formatPrice(price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* --- CSS Animasi Dering Lonceng --- */}
      <style jsx global>{`
        @keyframes bell-ringing {
          0% { transform: rotate(0); }
          15% { transform: rotate(15deg); }
          30% { transform: rotate(-15deg); }
          45% { transform: rotate(10deg); }
          60% { transform: rotate(-10deg); }
          75% { transform: rotate(5deg); }
          85% { transform: rotate(-5deg); }
          100% { transform: rotate(0); }
        }
        .animate-ring:hover svg {
          animation: bell-ringing 0.6s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      {/* FLOATING ACTION BUTTON dengan Animasi Ring */}
      <div className="absolute bottom-5 right-5 z-40">
        <a
          href="https://forms.gle/W6kgkHx5hPU4YpKt6"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-ring bg-[#800000] hover:bg-red-700 text-white p-3.5 rounded-2xl shadow-lg transition-all hover:scale-110 active:scale-90 flex items-center justify-center border-2 border-white/20"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </a>
      </div>

    </div>
  );
}