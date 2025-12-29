'use client'

import Image from 'next/image'
import { CalendarDays, Clock, MapPin, Bell } from 'lucide-react'
import { getCountdownText, getStatusBadgeColor } from '@/lib/lelang-utils'

interface LelangCardProps {
  image: string[]
  title: string
  tanggalLelang: string
  location: string
  type: string
  status: "Lelang Aktif" | "Lelang Segera" | "Lelang Selesai"
  jamLelang?: string
  harga?: number
}

export default function LelangCard({
  image,
  title,
  tanggalLelang,
  location,
  type,
  status,
  jamLelang,
  harga,
}: LelangCardProps) {

  const formattedPrice = harga 
    ? new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
      }).format(harga)
    : "Hubungi Kami"

  const formattedDate = tanggalLelang === '-' 
    ? '-' 
    : new Date(tanggalLelang).toLocaleDateString('id-ID', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      })

  const countdownText = getCountdownText(tanggalLelang)
  const statusColor = getStatusBadgeColor(status)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row overflow-hidden mb-6">
      <div className="relative w-full md:w-1/3 h-56 md:min-h-[200px]">
        <Image 
          src={image[0]} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>

      <div className="flex-1 p-6 relative flex flex-col justify-between">
        {/* Badge Countdown */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
            {countdownText}
          </span>
        </div>

        <div>
          {/* Badge Status & Type */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}>
              {status}
            </span>
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              {type}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-neutral-800 mb-3 pr-20">
            {title}
          </h3>

          {/* Info Detail */}
          <div className="flex flex-col gap-1 text-sm text-neutral-600 mb-5">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-primary-600" /> {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary-600" /> {jamLelang || "-"}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-600" /> {location}
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Tombol & Harga */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-auto">
          
          {/* Tombol-tombol */}
          <div className="flex flex-wrap gap-2">
            <a 
              href={`https://wa.me/628170005646?text=Saya tertarik dengan lelang ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4C6782] hover:bg-[#3b5268] text-white font-medium rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-colors text-sm"
            >
              Hubungi Kami
            </a>

            <a 
              href="https://forms.gle/Cfug7qce6do9uPiF9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9B1C1C] hover:bg-[#7F1D1D] text-white font-medium rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <Bell size={18} />
              Notify Me
            </a>
          </div>

          {/* Harga Limit (Pojok Kanan Bawah) */}
          <div className="text-right">
            <p className="text-neutral-500 text-[10px] uppercase tracking-wider font-bold mb-0">Harga Limit</p>
            <p className="text-[#2D8A3E] text-xl md:text-2xl font-black">
              {formattedPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}