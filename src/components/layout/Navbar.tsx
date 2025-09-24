"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '/', active: true },
    { label: 'Dijual', href: '/dijual' },
    { label: 'Disewa', href: '/disewa' },
    { label: 'Properti Baru', href: '/properti-baru' },
    { label: 'Aset Bank', href: '/aset-bank' },
    { label: 'KPR', href: '/kpr' }
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
              <Link
                key={item.label}
                href={item.href}
                className={`font-manrope font-medium text-sm xl:text-base transition-colors duration-200 ${
                  item.active
                    ? 'text-red-500 border-b-2 border-red-500 pb-1'
                    : 'text-neutral-400 hover:text-red-400'
                }`}
              >
                {item.label}
              </Link>
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-blue-700/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block font-manrope font-medium text-base transition-colors duration-200 ${
                    item.active
                      ? 'text-red-500'
                      : 'text-white hover:text-red-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar