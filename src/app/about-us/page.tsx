import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tentang Kami | Rajawali Lelang Indonesia',
  description: 'Profil dan sejarah Rajawali Lelang Indonesia - Platform lelang properti terpercaya',
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-manrope font-bold text-4xl text-primary-700 mb-8">
          Tentang Kami
        </h1>
        <p className="font-manrope text-neutral-700 text-lg leading-relaxed">
          Selamat datang di halaman Tentang Kami. Ini adalah contoh page dengan navbar background primary-600.
        </p>
        
        {/* Konten lainnya */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-manrope font-bold text-2xl text-primary-600 mb-4">
              Visi Kami
            </h2>
            <p className="font-manrope text-neutral-600">
              Menjadi platform lelang properti terpercaya dan terdepan di Indonesia.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-manrope font-bold text-2xl text-primary-600 mb-4">
              Misi Kami
            </h2>
            <p className="font-manrope text-neutral-600">
              Memberikan layanan lelang yang transparan, aman, dan menguntungkan untuk semua pihak.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}