import { Metadata } from 'next'
import { FadeInUp } from '@/components/common/ScrollAnimation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jadwal Lelang Terdekat | Rajawali Lelang Indonesia',
  description: 'Jangan lewatkan kesempatan untuk mendapatkan properti impian Anda. Tandai kalender Anda!',
}

interface AuctionSchedule {
  id: string
  date: string
  time: string
  title: string
  location: string
  type: string
}

const upcomingAuctions: AuctionSchedule[] = [
  {
    id: '1',
    date: '25 Okt 2025',
    time: '10:00 WIB',
    title: 'Rumah Tinggal, Jakarta Utara',
    location: 'Jakarta Utara',
    type: 'Lelang Eksekusi Hak Tanggungan'
  },
  {
    id: '2',
    date: '12 Nov 2025',
    time: '14:00 WIB',
    title: 'Tanah Kavling, Bali',
    location: 'Bali',
    type: 'Lelang Sukarela'
  },
  {
    id: '3',
    date: '15 Nov 2025',
    time: '09:00 WIB',
    title: 'Ruko 3 Lantai, Tangerang',
    location: 'Tangerang Selatan',
    type: 'Lelang Eksekusi Hak Tanggungan'
  },
  {
    id: '4',
    date: '20 Nov 2025',
    time: '11:00 WIB',
    title: 'Apartemen 2BR, Jakarta Selatan',
    location: 'Jakarta Selatan',
    type: 'Lelang Sukarela'
  },
  {
    id: '5',
    date: '25 Nov 2025',
    time: '13:00 WIB',
    title: 'Villa View Gunung, Bogor',
    location: 'Puncak, Bogor',
    type: 'Lelang Eksekusi'
  },
  {
    id: '6',
    date: '01 Des 2025',
    time: '10:00 WIB',
    title: 'Gudang Industri, Bekasi',
    location: 'Bekasi Timur',
    type: 'Lelang Sukarela'
  }
]

export default function NearestLelangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 max-w-6xl">
        {/* Header Section */}
        <FadeInUp delay={0}>
          <div className="text-center mb-12">
            <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-4">
              Jadwal Lelang Terdekat
            </h1>
            <p className="font-manrope text-neutral-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Jangan lewatkan kesempatan untuk mendapatkan properti impian Anda. Tandai kalender Anda!
            </p>
          </div>
        </FadeInUp>

        {/* Auction Schedule List */}
        <div className="space-y-6">
          {upcomingAuctions.map((auction, index) => (
            <FadeInUp key={auction.id} >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Section - Date & Time */}
                  <div className="flex items-start gap-6">
                    {/* Calendar Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>

                    {/* Date, Time & Property Info */}
                    <div>
                      <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-1">
                        {auction.date}
                      </h3>
                      <p className="font-manrope text-sm text-neutral-600 mb-3">
                        {auction.time}
                      </p>
                      <h4 className="font-manrope font-semibold text-lg text-primary-600 mb-1">
                        {auction.title}
                      </h4>
                      <p className="font-manrope text-sm text-neutral-700">
                        {auction.type}
                      </p>
                    </div>
                  </div>

                  {/* Right Section - Action Button */}
                  <div className="flex-shrink-0">
                    <Link href={`/lelang-terdekat/${auction.id}`}>
                      <button className="w-full md:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                        Lihat Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA Section */}
        <FadeInUp delay={500}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="font-manrope font-bold text-2xl md:text-3xl text-white mb-4">
                Butuh Informasi Lebih Lanjut?
              </h2>
              <p className="font-manrope text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Tim kami siap membantu Anda dengan informasi lengkap tentang jadwal lelang dan prosedur pendaftaran
              </p>
              <Link href="https://wa.me/6281234567890?text=Halo, saya ingin informasi tentang jadwal lelang" target="_blank">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami Sekarang
                </button>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}