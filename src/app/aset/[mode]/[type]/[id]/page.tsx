'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { properties, Property, lelangProperties, PropertiDilelang } from '@/lib/properti'
import { mobils, Mobil, lelangMobils, MobilLelang } from '@/lib/mobil'
import { perhiasans, Perhiasan, lelangPerhiasans, PerhiasanLelang } from '@/lib/perhiasan'
import { mesins, Mesin, lelangMesins, MesinLelang } from '@/lib/mesin'
import AsetCard from '@/components/aset/aset-card'
import ImageGallery from '@/components/aset/ImageGallery'
import { useEffect } from 'react'

// Union type for all items (both dijual and lelang)
type AsetItem = Property | PropertiDilelang | Mobil | MobilLelang | Perhiasan | PerhiasanLelang | Mesin | MesinLelang
type AsetItemLelang = PropertiDilelang | MobilLelang | PerhiasanLelang | MesinLelang
type AsetItemDijual = Property | Mobil | Perhiasan | Mesin



function getItemById(type: string, id: string, mode: string): AsetItem | undefined {
  if (mode === 'lelang') {
    // Get lelang items
    switch (type) {
      case 'properti':
        return lelangProperties.find(p => p.id === id)
      case 'mobil':
        return lelangMobils.find(m => m.id === id)
      case 'perhiasan':
        return lelangPerhiasans.find(p => p.id === id)
      case 'mesin':
        return lelangMesins.find(m => m.id === id)
      default:
        return undefined
    }
  } else {
    // Get dijual items
    switch (type) {
      case 'properti':
        return properties.find(p => p.id === id)
      case 'mobil':
        return mobils.find(m => m.id === id)
      case 'perhiasan':
        return perhiasans.find(p => p.id === id)
      case 'mesin':
        return mesins.find(m => m.id === id)
      default:
        return undefined
    }
  }
}

function getAllItems(type: string, mode: string): AsetItem[] {
  if (mode === 'lelang') {
    switch (type) {
      case 'properti':
        return lelangProperties
      case 'mobil':
        return lelangMobils
      case 'perhiasan':
        return lelangPerhiasans
      case 'mesin':
        return lelangMesins
      default:
        return []
    }
  } else {
    switch (type) {
      case 'properti':
        return properties
      case 'mobil':
        return mobils
      case 'perhiasan':
        return perhiasans
      case 'mesin':
        return mesins
      default:
        return []
    }
  }
}

export default function AsetDetailPage() {
  const params = useParams<{
    mode: 'dijual' | 'lelang'
    type: 'properti' | 'mobil' | 'perhiasan' | 'mesin'
    id: string
  }>()
  const { mode, type, id } = params

  // Update document title
  useEffect(() => {
    const item = getItemById(type, id, mode)
    if (item) {
      document.title = `${item.title} | Rajawali Lelang Indonesia`
    } else {
      document.title = 'Item Tidak Ditemukan | Rajawali Lelang Indonesia'
    }
  }, [type, id, mode])
  const item = getItemById(type, id, mode)

  if (!item) {
    notFound()
  }

  // Helper to check if item is lelang
  const isLelang = (item: AsetItem): item is AsetItemLelang => {
    return 'startPrice' in item && 'endPrice' in item
  }

  // Helper to check if item is dijual
  const isDijual = (item: AsetItem): item is AsetItemDijual => {
    return 'price' in item && !('startPrice' in item)
  }

  // Helper to get price
  const getPrice = () => {
    if (isLelang(item)) {
      return item.startPrice
    }
    if (isDijual(item)) {
      return item.price
    }
    return 0
  }

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

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Get other items for recommendation
  const allItems = getAllItems(type, mode)
  const otherItems = allItems.filter(i => i.id !== item.id).slice(0, 3)

  // Type-specific additional info
  const getAdditionalInfo = () => {
    if (type === 'properti' && 'landArea' in item) {
      return [
        ...(item.landArea > 0 ? [{ label: 'Tanah', value: `${item.landArea} m²` }] : []),
        ...(item.buildingArea > 0 ? [{ label: 'Bangunan', value: `${item.buildingArea} m²` }] : []),
        { label: 'Sertifikat', value: item.certificateType ?? '' },
      ]
    }
    if (type === 'mobil' && 'brand' in item) {
      return [
        { label: 'Brand', value: item.brand ?? '' },
      ]
    }
    if (type === 'perhiasan' && 'material' in item) {
      return [
        { label: 'Material', value: item.material ?? '' },
        { label: 'Berat', value: `${item.weight} gram` },
        ...(item.karat ? [{ label: 'Karat', value: `${item.karat}K` }] : []),
      ]
    }
    if (type === 'mesin' && 'brand' in item) {
      return [
        { label: 'Brand', value: item.brand ?? '' },
      ]
    }
    return []
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section with Background */}
      <div className="relative pt-20 pb-32 bg-primary-100 ">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Badges */}
          <div className="flex gap-2 mb-4">
            <span className="bg-white text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
              {mode === 'dijual' ? 'Dijual' : 'Lelang'}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              item.status === 'Featured' ? 'bg-yellow-400 text-slate-900' :
              item.status === 'Available' ? 'bg-red-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {item.status}
            </span>
          </div>

          {/* Title and Location */}
          <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-700 mb-3">
            {item.title}
          </h1>
          {item.location && (
            <p className="text-primary-600 text-lg mb-6 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {item.location}
            </p>
          )}

          {/* Price */}
          <div className="text-primary-700 mb-2">
            {isLelang(item) ? (
              <>
              </>
            ) : (
              <>
                <p className="text-5xl font-bold mb-2">{formatPrice(getPrice())}</p>
                <p className="text-primary-600 text-sm">Harga Tetap</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <ImageGallery
              images={item.image && item.image.length > 0 ? item.image : [`/images/${type}/${item.id}.jpg`]}
              title={item.title}
            />

            {/* Item Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-6">
                Ringkasan {type.charAt(0).toUpperCase() + type.slice(1)}
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {getAdditionalInfo().map((info, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-slate-600 text-sm mb-1">{info.label}</p>
                    <p className="font-bold text-xl text-slate-800">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-manrope font-bold text-2xl text-slate-800 mb-4">
                Deskripsi
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 text-center">
              <h2 className="font-manrope font-bold text-2xl text-white mb-3">
                Tertarik dengan {type} ini?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih lanjut
              </p>
              <Link href={`https://wa.me/6285168611131?text=Saya tertarik dengan ${item.title}`} target="_blank">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="font-manrope font-bold text-xl text-slate-800 mb-6">
                Detail {mode === 'dijual' ? 'Penjualan' : 'Lelang'}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Harga</span>
                  <span className="font-semibold text-primary-600">{formatPrice(getPrice())}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Status</span>
                  <span className="font-semibold text-green-600">{item.status}</span>
                </div>
                {isLelang(item) && (
                  <>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href={`https://wa.me/6281234567890?text=Saya tertarik dengan ${item.title}`} target="_blank">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    {mode === 'dijual' ? 'Hubungi Kami' : 'Hubungi Kami'}
                  </button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-800 mb-4">Butuh Bantuan?</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-slate-600">6285168611131</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-slate-600 break-all">rajawalilelang@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Items Section */}
        <div className="mt-16 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-manrope font-bold text-3xl text-slate-800">
              {type.charAt(0).toUpperCase() + type.slice(1)} Lainnya
            </h2>
            <Link href={`/aset/${mode}/${type}`} className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
              Lihat Semua
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherItems.map((otherItem) => {
              const otherPrice = isLelang(otherItem) 
                ? otherItem.startPrice 
                : isDijual(otherItem) 
                  ? otherItem.price 
                  : 0;
              return (
                <AsetCard
                  key={otherItem.id}
                  id={otherItem.id}
                  title={otherItem.title}
                  location={'location' in otherItem ? otherItem.location : ''}
                  price={otherPrice}
                  image={otherItem.image || [`/images/${type}/${otherItem.id}.jpg`]}
                  status={otherItem.status}
                  type={type}
                  mode={mode}
                  additionalInfo={getAdditionalInfo()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}