"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeInUp } from "@/components/common/ScrollAnimation";
import ContactSection from "@/components/layout/contact";

const categories = [
  { key: "properti", label: "Properti" },
  { key: "perhiasan", label: "Perhiasan" },
  { key: "mobil", label: "Mobil" },
  { key: "mesin", label: "Mesin" },
];

export default function DijualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/aset/dijual/properti";
  const parts = pathname.split("/").filter(Boolean);
  const category = parts[1] ?? "properti";

  // Get category label
  const categoryLabel =
    categories.find((c) => c.key === category)?.label || "Properti";

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
              Temukan {categoryLabel.toLowerCase()} terbaik dengan harga
              terjangkau — profesional, transparan, dan terpercaya.
            </p>
          </div>
        </FadeInUp>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 pb-8 relative z-10 max-w-7xl">
        {children}
        {/* CTA Section */}
        <ContactSection />
      </div>
    </div>
  );
}
