'use client'

import Image from 'next/image'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { getCountdownText, getStatusBadgeColor } from '@/lib/lelang-utils'

interface LelangCardProps {
  image: string
  title: string
  tanggalLelang: string // ISO 8601 format
  location: string
  type: string
  status: "Lelang Aktif" | "Lelang Segera" | "Lelang Selesai"
}

export default function LelangCard({
  image,
  title,
  tanggalLelang,
  location,
  type,
  status
}: LelangCardProps) {

  // Format tanggal dan waktu
  const lelangDate = new Date(tanggalLelang)
  const formattedDate = lelangDate.toLocaleDateString('id-ID', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  })
  const formattedTime = lelangDate.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  }) + ' WIB'

  // Countdown text
  const countdownText = getCountdownText(tanggalLelang)
  
  // Status badge color
  const statusColor = getStatusBadgeColor(status)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row overflow-hidden mb-6">
      {/* Gambar */}
      <div className="relative w-full md:w-1/3 h-56 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Isi Card */}
      <div className="flex-1 p-6 relative">
        {/* Badge kanan atas */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
            {countdownText}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}>
            {status}
          </span>
          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {type}
          </span>
        </div>

        {/* Judul */}
        <h3 className="text-lg md:text-xl font-semibold text-neutral-800 mb-3">
          {title}
        </h3>

        {/* Info */}
        <div className="flex flex-col gap-1 text-sm text-neutral-600 mb-5">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} /> {formattedDate}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> {formattedTime}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {location}
          </div>
        </div>

        {/* Tombol */}
        <button className="bg-[#4C6782] hover:bg-[#3b5268] text-white font-medium rounded-lg px-5 py-2 flex items-center justify-center gap-2 w-fit">
          <span>💬</span> Hubungi Kami
        </button>
      </div>
    </div>
  )
}
