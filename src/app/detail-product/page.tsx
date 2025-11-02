import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { properties } from '@/lib/properti'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/products/product-card'

interface PageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Detail Properti | Rajawali Lelang Indonesia',
  description: 'Informasi lengkap properti lelang',
}

export default function ProductDetailPage({ params }: PageProps) {
const property = properties[0]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (daysFromNow: number) => {
    const date = new Date()
    date.setDate(date.getDate() + daysFromNow)
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  // Get other properties for recommendation
  const otherProperties = properties.filter(p => p.id !== property.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-[#2D446B] to-[#8D8990] pt-20 pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Badges */}
          <div className="flex gap-2 mb-4">
            <span className="bg-white text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
              Penawaran Terbuka
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.status === 'Featured' ? 'bg-yellow-400 text-slate-900' :
              property.status === 'Available' ? 'bg-red-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {property.status}
            </span>
          </div>

          {/* Title and Location */}
          <h1 className="font-manrope font-bold text-4xl md:text-5xl text-white mb-3">
            {property.title}
          </h1>
          <p className="text-white/90 text-lg mb-6 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {property.location}
          </p>

          {/* Price */}
          <div className="text-white mb-2">
            <p className="text-5xl font-bold mb-2">{formatPrice(property.price)}</p>
            <p className="text-white/80 text-sm">Penawaran Terbuka — Harga dapat berubah sesuai lelang</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                  1 / 5
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2 p-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                    <Image
                      src={property.image}
                      alt={`Thumbnail ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Summary */}
            <div className="bg-primary-50 rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-6">
                Ringkasan Properti
              </h2>
              <p className="text-slate-600 mb-6 text-sm">
                Sekilas informasi mengenai properti ini
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Land Area */}
                {property.landArea > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Image src='/images/assets/detail-product/ruler.svg' alt='' width={24} height={24} />
                      <span className="text-slate-600 text-sm">Luas Tanah</span>
                    </div>
                    <p className="font-bold text-xl text-slate-800">{property.landArea} m²</p>
                  </div>
                )}

                {/* Building Area */}
                {property.buildingArea > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Image src='/images/assets/detail-product/building.svg' alt='' width={24} height={24} />
                      <span className="text-slate-600 text-sm">Luas Bangunan</span>
                    </div>
                    <p className="font-bold text-xl text-slate-800">{property.buildingArea} m²</p>
                  </div>
                )}

                {/* Certificate */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src='/images/assets/detail-product/certificate.svg' alt='' width={24} height={24} />
                    <span className="text-slate-600 text-sm">Sertifikat</span>
                  </div>
                  <p className="font-bold text-xl text-slate-800">{property.certificateType}</p>
                  <p className="text-xs text-slate-500 mt-1">(Hak Guna Bangunan)</p>
                </div>

                {/* Auction Date */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src='/images/assets/detail-product/calendar.svg' alt='' width={24} height={24} />
                    <span className="text-slate-600 text-sm">Tanggal Lelang</span>
                  </div>
                  <p className="font-bold text-lg text-red-600">{formatDate(30)}</p>
                  <p className="text-xs text-slate-500 mt-1">10:00 WIB</p>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                <Image src='/images/assets/detail-product/red-check.svg' alt='' width={20} height={20} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">Akses mudah ke jalan utama dan kawasan industri FEB</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src='/images/assets/detail-product/red-check.svg' alt='' width={20} height={20} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">Cocok untuk investasi atau dijadikan bisnis logistik</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src='/images/assets/detail-product/red-check.svg' alt='' width={20} height={20} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">Fasilitas booking dock dan area parkir luas</p>
                </div>
              </div>
            </div>

            {/* About Property */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-4">
                Tentang Properti
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {property.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Properti ini termasuk aset lelang bermilik orang yang terkonfir secara umum di <span className="font-semibold">Rajawali Lelang Indonesia</span>. Proses lelang dilakukan secara fair dengan tanpa regulasi untuk memberikan kesempatan terbaik kepada semua peserta.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Gedung dan lokasi strategis di berberbicara lapangan, cocok bagi yang ingin berinvestasi besar. Dengan total luas tanah 2.000 m² dan tanggung gubang 1.500 m², properti dilengkapi dengan fitur modern seperti lantai, akumulasi ruang transit di zona istana area lift, serta kontrol lift untuk keamanan. Properti dikemas dengan valuasi harga awal ke pasaran, serta terbaik di lingkungan sekitar maupun pusat industri untuk logis. Properti dikelola dengan valuasi yang serasi di area maupun nilai baik pak FIR. Untuk ras itu, serta fitur.
              </p>
            </div>

            {/* Why Choose This Property */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-6">
                Kenapa Pilih Properti Ini?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Image src='/images/assets/detail-product/location.svg' alt='' width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Lokasi Strategis</h3>
                    <p className="text-sm text-slate-600">Berada di area pusat bisnis dengan akses mudah ke berbagai fasilitas perkotaan</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Image src='/images/assets/detail-product/shield.svg' alt='' width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Legalitas Jelas</h3>
                    <p className="text-sm text-slate-600">Sertifikat {property.certificateType} dan tidak terkena sengketa apapun</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Image src='/images/assets/detail-product/stonks.svg' alt='' width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Nilai Investasi Tinggi</h3>
                    <p className="text-sm text-slate-600">Area berkembang pesat dengan prospek apresiasi harga tinggi</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Image src='/images/assets/detail-product/medal.svg' alt='' width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Kondisi Siap Pakai</h3>
                    <p className="text-sm text-slate-600">Bangunan terawat baik dan fasilitas operasional lengkap</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-primary-50 rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-6">
                Fasilitas Sekitar
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Image src='/images/assets/detail-product/school.svg' alt='' width={24} height={24} />
                  <span className="text-slate-700">Sekolah dan Universitas (2 km)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Image src='/images/assets/detail-product/shopping-bag.svg' alt='' width={24} height={24} />
                  <span className="text-slate-700">Pusat Perbelanjaan (3 km)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Image src='/images/assets/detail-product/tram.svg' alt='' width={24} height={24} />
                  <span className="text-slate-700">Akses Tol (1.5 km)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Image src='/images/assets/detail-product/hospital.svg' alt='' width={24} height={24} />
                  <span className="text-slate-700">Rumah Sakit (4 km)</span>
                </div>
              </div>
            </div>

            {/* CTA Participate */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="font-manrope font-bold text-2xl text-white mb-3">
                Siap Berpartisipasi dalam Lelang Ini?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Kami menyediakan panduan lengkap untuk Anda yang ingin mengikuti proses lelang dengan mudah dan aman
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="https://wa.me/6281234567890?text=Saya ingin ikut lelang properti" target="_blank">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    Lihat Panduan Lelang
                  </button>
                </Link>
                <Link href="https://wa.me/6281234567890?text=Saya ingin konsultasi properti" target="_blank">
                  <button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi Kami
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Auction Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="font-manrope font-bold text-xl text-slate-800 mb-6">
                Detail Lelang
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Nomor Lot</span>
                  <span className="font-semibold text-slate-800">LLG.2025.10.{property.id}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Tanggal Lelang</span>
                  <span className="font-semibold text-slate-800">{formatDate(30)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Waktu</span>
                  <span className="font-semibold text-slate-800">10:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Harga Awal</span>
                  <span className="font-semibold text-red-600">Rp 4.5 Miliar</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Increment</span>
                  <span className="font-semibold text-slate-800">Rp 50 Juta</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Uang Muka</span>
                  <span className="font-semibold text-slate-800">Rp 500 Juta</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Status</span>
                  <span className="font-semibold text-green-600">Terbuka</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600 text-sm">Metode</span>
                  <span className="font-semibold text-slate-800">Online & Offline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="https://wa.me/6281234567890?text=Saya ingin ikut lelang" target="_blank">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Ikut Lelang
                  </button>
                </Link>
                <button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-3 rounded-lg transition-colors">
                  Download Dokumen
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-800 mb-4">Butuh Bantuan?</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-slate-600">0817-1005-648</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-slate-600 break-all">rajawalileland@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Properties Section */}
        <div className="mt-16 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-manrope font-bold text-3xl text-slate-800">
              Properti Lainnya yang Tersedia
            </h2>
            <Link href="/aset-lelang" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
              Lihat Semua
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <p className="text-slate-600 mb-8">Pilihan properti lelang lain yang dapat Anda minati</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProperties.map((prop) => (
              <ProductCard
                key={prop.id}
                {...prop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}