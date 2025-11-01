import { Metadata } from 'next'
import { FadeInUp } from '@/components/common/ScrollAnimation'
import Image from 'next/image'
import LelangCard from '@/components/lelang-terdekat/LelangCard'
import { lelangProperties } from '@/lib/properti'

export const metadata: Metadata = {
  title: 'Jadwal Lelang Terdekat | Rajawali Lelang Indonesia',
  description: 'Jangan lewatkan kesempatan untuk mendapatkan properti impian Anda. Tandai kalender Anda!',
}

// ...existing code...

const formatDateTime = (iso?: string) => {
  if (!iso) return { date: '-', time: '-' }
  const d = new Date(iso)
  const date = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
  const time = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' WIB'
  return { date, time }
}

export default function NearestLelangPage() {
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

        {/* Clock SVG (kiri bawah) */}
        <div className="absolute bottom-2 left-16 w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/images/lelang-terdekat/clock.svg"
            alt="Clock illustration"
            fill
            className="object-contain"
          />
        </div>

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
              className="w-full md:flex-1 border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <select className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500">
              <option>Semua Jenis</option>
              <option>Rumah</option>
              <option>Ruko</option>
              <option>Tanah</option>
            </select>
            <select className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500">
              <option>Semua Lokasi</option>
              <option>Jakarta</option>
              <option>Bali</option>
              <option>Bogor</option>
            </select>
            <select className="w-full md:w-auto border border-neutral-200 rounded-lg px-4 py-2 text-neutral-700 focus:ring-2 focus:ring-primary-500">
              <option>Semua Status</option>
              <option>Lelang Aktif</option>
              <option>Selesai</option>
            </select>
          </div>
        </div>
      </section>

      <div className="py-6 max-w-6xl mx-auto px-6 md:px-12">
        {lelangProperties.map((p) => {
          const { date, time } = formatDateTime(p.batasWaktuLelang)
          return (
            <LelangCard
              key={p.id}
              image={p.image ?? `/images/lelang-terdekat/${p.id}.jpg`}
              title={p.title}
              date={date}
              time={time}
              location={p.location}
              type={p.type}
              status={p.status}
            />
          )
        })}
      </div>
    </div>
  )
}