'use client'

import { FadeInUp } from '@/components/common/ScrollAnimation'
import Image from 'next/image'
import LelangCard from '@/components/lelang-terdekat/LelangCard'
import { lelangProperties } from '@/lib/properti'
import { lelangMobils } from '@/lib/mobil'
import { lelangPerhiasans } from '@/lib/perhiasan'
import { lelangMesins } from '@/lib/mesin'
import { sortByTanggalLelang, filterLelangAktif } from '@/lib/lelang-utils'
import React, { useState, useMemo } from 'react'
import { BaseItemLelang } from '@/lib/data'

export default function NearestLelangPage() {
  // State untuk filter
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('Semua Jenis')
  const [selectedLocation, setSelectedLocation] = useState('Semua Lokasi')
  const [selectedStatus, setSelectedStatus] = useState('Semua Status')

  // Gabungkan semua data lelang
  const allLelang = useMemo(() => [
    ...lelangProperties,
    ...lelangMobils,
    ...lelangPerhiasans,
    ...lelangMesins,
  ], [])

  // Filter dan sort data lelang
  const upcomingLelang = useMemo(() => {
    let filtered = filterLelangAktif(allLelang)

    // Filter berdasarkan search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.provinsi?.toLowerCase().includes(query) ||
        item.kota?.toLowerCase().includes(query)
      )
    }

    // Filter berdasarkan type
    if (selectedType !== 'Semua Jenis') {
      filtered = filtered.filter(item => {
        const itemType = item.type.toLowerCase()
        const filterType = selectedType.toLowerCase()
        
        // Handle different type classifications
        if (filterType === 'properti') {
          return ['rumah', 'ruko', 'villa', 'apartemen', 'tanah', 'gudang'].includes(itemType)
        }
        return itemType === filterType || item.type === selectedType
      })
    }

    // Filter berdasarkan lokasi
    if (selectedLocation !== 'Semua Lokasi') {
      filtered = filtered.filter(item => 
        item.provinsi === selectedLocation || 
        item.kota === selectedLocation ||
        item.location.includes(selectedLocation)
      )
    }

    // Filter berdasarkan status
    if (selectedStatus !== 'Semua Status') {
      filtered = filtered.filter(item => item.status === selectedStatus)
    }

    return sortByTanggalLelang(filtered)
  }, [allLelang, searchQuery, selectedType, selectedLocation, selectedStatus])

  return (
    <div className="min-h-screen">
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/lelang-terdekat/hero.svg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Notification Bell SVG (kanan atas) */}
        <div className="absolute top-24 right-64 w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/images/lelang-terdekat/notification.svg"
            alt="Notification bell"
            fill
            className="object-contain"
          />
        </div>

        {/* Konten Teks */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
          <FadeInUp delay={0}>
            <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-[#103B73] leading-tight mb-4">
              Jadwal Lelang Terdekat
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8">
              Properti impian Anda menunggu di sini. Siap untuk menawarnya?
            </p>
          </FadeInUp>

          {/* Search Filter Box */}
          <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row items-center gap-3 p-4 md:p-6">
            <input
              type="text"
              placeholder="Cari lokasi atau jenis properti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:flex-1 border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500"
            >
              <option>Semua Jenis</option>
              <option>Properti</option>
              <option>Mobil</option>
              <option>Perhiasan</option>
              <option>Mesin</option>
            </select>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500"
            >
              <option>Semua Lokasi</option>
              <option>Jakarta</option>
              <option>Banten</option>
              <option>Jawa Barat</option>
            </select>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500"
            >
              <option>Semua Status</option>
              <option>Lelang Aktif</option>
              <option>Lelang Segera</option>
            </select>
          </div>
        </div>
      </section>

      <div className="py-6 max-w-6xl mx-auto px-6 md:px-12">
        {/* Tampilkan info hasil pencarian */}
        {(searchQuery || selectedType !== 'Semua Jenis' || selectedLocation !== 'Semua Lokasi' || selectedStatus !== 'Semua Status') && (
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              Menampilkan <span className="font-semibold">{upcomingLelang.length}</span> hasil lelang
              {searchQuery && ` untuk "${searchQuery}"`}
              {selectedType !== 'Semua Jenis' && ` • ${selectedType}`}
              {selectedLocation !== 'Semua Lokasi' && ` • ${selectedLocation}`}
              {selectedStatus !== 'Semua Status' && ` • ${selectedStatus}`}
            </p>
          </div>
        )}

        {upcomingLelang.length > 0 ? (
          upcomingLelang.map((item) => (
            <LelangCard
              key={item.id}
              image={item.image ?? [`/images/lelang-terdekat/${item.id}.jpg`]}
              title={item.title ?? 'Judul Tidak Tersedia'}
              tanggalLelang={item.tanggalLelang}
              location={item.location}
              type={item.type}
              status={item.status}
              jamLelang={'jamLelang' in item ? item.jamLelang : undefined}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-600">
              {searchQuery || selectedType !== 'Semua Jenis' || selectedLocation !== 'Semua Lokasi' || selectedStatus !== 'Semua Status'
                ? 'Tidak ada lelang yang cocok dengan filter Anda.'
                : 'Tidak ada lelang yang akan datang saat ini.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}