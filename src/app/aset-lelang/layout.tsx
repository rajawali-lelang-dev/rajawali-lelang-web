"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FadeInUp } from "@/components/common/ScrollAnimation";


export interface FilterState {
  search: string;
  priceRange: string;
  area: string;
  type: string;
  status: string;
}

interface AsetLelangLayoutProps {
  children: React.ReactNode;
}

export default function AsetLelangLayout({ children }: AsetLelangLayoutProps) {
  const pathname = usePathname();
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    priceRange: "",
    area: "",
    type: "",
    status: "",
  });

  // Determine category from pathname
  const getCategory = () => {
    if (pathname.includes("properti")) return "Properti";
    if (pathname.includes("mobil")) return "Mobil";
    if (pathname.includes("perhiasan")) return "Perhiasan";
    if (pathname.includes("mesin")) return "Mesin";
    return "Properti"; // default
  };

  const category = getCategory();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleFilterChange = (
    field: keyof FilterState,
    value: string
  ) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log("Searching with filters:", filters);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      priceRange: "",
      area: "",
      type: "",
      status: "",
    });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="container ml-44 px-6 md:px-12 py-2 pt-20 md:pt-24 ">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none hidden lg:block rotate-180 opacity-30"></div>
        <FadeInUp delay={0}>
          <div className="mb-2">
            <h1 className="font-manrope font-bold text-4xl md:text-4xl text-primary-600 mb-4">
              Lelang {category}
            </h1>
            <p className="font-manrope text-primary-600 text-lg md:text-xl leading-relaxed max-w-4xl">
              Mitra terpercaya dalam dunia lelang modern — profesional,
              transparan, dan inovatif.
            </p>
          </div>
        </FadeInUp>
      </div>

      {/* Content Area - Products Grid */}
      <div className="container mx-auto px-6 md:px-12 pb-8 relative z-10 max-w-7xl">
        {children}
      </div>
    </div>
  );
}