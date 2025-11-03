"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getAllProvinces } from '@/lib/province'

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDijualOpen, setIsDijualOpen] = useState(false)
  const [isLelangOpen, setIsLelangOpen] = useState(false)
  const [isProvinsiOpen, setIsProvinsiOpen] = useState(false)
  
  const provinces = getAllProvinces()

  const handleProvinceSelect = (province: string, type: 'dijual' | 'lelang') => {
    // Store the selected province in sessionStorage so the filter page can use it
    sessionStorage.setItem('selectedProvince', province)
    // Navigate to the properti page which will auto-apply the filter
    router.push(`/aset/${type}/properti`)
  }

  const navItems = [
    { label: 'Beranda', href: '/', active: true },
    { label: 'Tentang Kami', href: '/about-us', active: true },
    { 
      label: 'Dijual', 
      hasDropdown: true,
      items: [
        { label: 'Semua Aset Dijual', href: '/aset/dijual/properti' },
        { label: 'Properti', href: '/aset/dijual/properti' },
        { label: 'Mobil', href: '/aset/dijual/mobil' },
        { label: 'Perhiasan', href: '/aset/dijual/perhiasan' },
        { label: 'Mesin', href: '/aset/dijual/mesin' },
      ]
    },
    { 
      label: 'Lelang', 
      hasDropdown: true,
      items: [
        { label: 'Semua Aset Lelang', href: '/aset/lelang/properti' },
        { label: 'Properti', href: '/aset/lelang/properti' },
        { label: 'Mobil', href: '/aset/lelang/mobil' },
        { label: 'Perhiasan', href: '/aset/lelang/perhiasan' },
        { label: 'Mesin', href: '/aset/lelang/mesin' },
        { label: 'Lelang Terdekat', href: '/lelang-terdekat' },
      ]
    },
    { 
      label: 'Pilih Provinsi', 
      hasDropdown: true,
      isProvinsi: true
    },
    { label: 'KPR', href: '/kpr', active: true }
  ]

  return (
    <nav className="relative w-full bg-primary-200 shadow-md">

      {/* Navbar content */}
      <div className="relative z-20 px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/assets/logo_rli.png"
                alt="Rajawali Lelang Indonesia"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.label === 'Dijual') setIsDijualOpen(true)
                    if (item.label === 'Lelang') setIsLelangOpen(true)
                    if (item.label === 'Pilih Provinsi') setIsProvinsiOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (item.label === 'Dijual') setIsDijualOpen(false)
                    if (item.label === 'Lelang') setIsLelangOpen(false)
                    if (item.label === 'Pilih Provinsi') setIsProvinsiOpen(false)
                  }}
                >
                  <button className="font-manrope font-medium text-sm xl:text-base text-neutral-400 hover:text-red-400 transition-colors duration-200 flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu - Province Special */}
                  {item.isProvinsi ? (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                      <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                        <p className="text-xs font-semibold text-gray-600 mb-2">Pilih Provinsi untuk:</p>
                        <div className="flex gap-2">
                          <span className="text-xs text-gray-500 px-2 py-1 bg-blue-50 rounded">Aset Dijual</span>
                          <span className="text-xs text-gray-500 px-2 py-1 bg-green-50 rounded">Aset Lelang</span>
                        </div>
                      </div>
                      <div className="py-2">
                        {provinces.map((province) => (
                          <div key={province} className="px-4 py-2 hover:bg-gray-50 group/province">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-700 font-medium">{province}</span>
                              <div className="flex gap-1 opacity-0 group-hover/province:opacity-100 transition-opacity">
                                <button
                                  onClick={() => handleProvinceSelect(province, 'dijual')}
                                  className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                >
                                  Dijual
                                </button>
                                <button
                                  onClick={() => handleProvinceSelect(province, 'lelang')}
                                  className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                >
                                  Lelang
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Regular Dropdown Menu */
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className={`font-manrope font-medium text-sm xl:text-base transition-colors duration-200 ${
                    item.active
                      ? 'text-red-500 border-b-2 border-red-500 pb-1'
                      : 'text-neutral-400 hover:text-red-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-blue-700/50 z-50 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => {
                        if (item.label === 'Dijual') setIsDijualOpen(!isDijualOpen)
                        if (item.label === 'Lelang') setIsLelangOpen(!isLelangOpen)
                        if (item.label === 'Pilih Provinsi') setIsProvinsiOpen(!isProvinsiOpen)
                      }}
                      className="w-full flex items-center justify-between font-manrope font-medium text-base text-white hover:text-red-400 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (item.label === 'Dijual' && isDijualOpen) || 
                        (item.label === 'Lelang' && isLelangOpen) ||
                        (item.label === 'Pilih Provinsi' && isProvinsiOpen)
                          ? 'rotate-180'
                          : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Submenu - Province Special */}
                    {item.isProvinsi && isProvinsiOpen && (
                      <div className="mt-2 ml-4 space-y-2 max-h-60 overflow-y-auto">
                        <p className="text-xs text-white/60 mb-2">Pilih provinsi dan tipe:</p>
                        {provinces.map((province) => (
                          <div key={province} className="text-sm text-white/80 py-1">
                            <div className="font-medium mb-1">{province}</div>
                            <div className="flex gap-2 ml-2">
                              <button
                                onClick={() => {
                                  handleProvinceSelect(province, 'dijual')
                                  setIsMenuOpen(false)
                                }}
                                className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                              >
                                Dijual
                              </button>
                              <button
                                onClick={() => {
                                  handleProvinceSelect(province, 'lelang')
                                  setIsMenuOpen(false)
                                }}
                                className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                              >
                                Lelang
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Mobile Submenu - Regular */}
                    {!item.isProvinsi && ((item.label === 'Dijual' && isDijualOpen) || (item.label === 'Lelang' && isLelangOpen)) && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-sm text-white/80 hover:text-red-400 transition-colors py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || '#'}
                    className={`block font-manrope font-medium text-base transition-colors duration-200 ${
                      item.active
                        ? 'text-red-500'
                        : 'text-white hover:text-red-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar