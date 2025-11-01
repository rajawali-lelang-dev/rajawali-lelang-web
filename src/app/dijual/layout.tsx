'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeInUp } from "@/components/common/ScrollAnimation";

const categories = [
  { key: "properti", label: "Properti" },
  { key: "perhiasan", label: "Perhiasan" },
  { key: "mobil", label: "Mobil" },
  { key: "mesin", label: "Mesin" },
];

export default function DijualLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/dijual/properti";
  const parts = pathname.split("/").filter(Boolean);
  const category = parts[1] ?? "properti";

  // Get category label
  const categoryLabel = categories.find(c => c.key === category)?.label || "Properti";

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-6 md:px-12 py-2 pt-20 md:pt-24 relative z-10 max-w-7xl">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none hidden lg:block rotate-180 opacity-30"></div>
        
        <FadeInUp delay={0}>
          <div className="mb-2">
            <h1 className="font-manrope font-bold text-4xl md:text-4xl text-primary-600 mb-4">
              {categoryLabel} Dijual
            </h1>
            <p className="font-manrope text-primary-600 text-lg md:text-xl leading-relaxed max-w-4xl">
              Temukan {categoryLabel.toLowerCase()} terbaik dengan harga terjangkau — profesional, transparan, dan terpercaya.
            </p>
          </div>
        </FadeInUp>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 pb-8 relative z-10 max-w-7xl">
        {children}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10 max-w-7xl">
        <div className="relative py-16 px-8 overflow-hidden bg-gradient-to-r from-primary-900 via-primary-700 to-primary-600 rounded-3xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4">
              Tertarik Membeli {categoryLabel}?
            </h2>
            <p className="font-manrope text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Kami bantu wujudkan investasi Anda dengan proses yang mudah dan transparan.
            </p>
             <Link href="https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang KPR" target="_blank">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami Sekarang
                </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}