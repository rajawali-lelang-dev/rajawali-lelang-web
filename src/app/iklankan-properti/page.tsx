'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, FadeInLeft, FadeInRight, FadeInScale } from "@/components/common/ScrollAnimation";

export default function IklankanPropertiPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Blue Background */}
      <div className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <FadeInUp delay={0}>
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h1 className="font-manrope font-bold text-4xl md:text-6xl mb-6">
                Iklankan Properti Anda Bersama RajawaliLelangIndo
              </h1>
              <p className="font-manrope text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                Jangkau ribuan calon pembeli dan penyewa dengan layanan iklan properti profesional kami
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#form-iklan">
                  <button className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Mulai Iklan Sekarang
                  </button>
                </Link>
                <Link href="https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang iklan properti" target="_blank">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Bagaimana Cara Mengiklankan Properti Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeInUp delay={0}>
            <div className="text-center mb-12">
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Bagaimana Cara Mengiklankan Properti?
              </h2>
              <p className="font-manrope text-neutral-600 text-lg max-w-3xl mx-auto">
                Proses yang mudah dan cepat untuk menjangkau calon pembeli potensial
              </p>
            </div>
          </FadeInUp>

          {/* Steps Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {/* Step 1 */}
              <FadeInScale delay={100}>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        1
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2">
                      Hubungi Tim Kami
                    </h3>
                    <p className="font-manrope text-sm text-neutral-600 leading-relaxed">
                      Kirim pesan ke WhatsApp untuk berbicara dengan tim profesional kami
                    </p>
                  </div>
                  {/* Connector Line - Hidden on mobile */}
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-blue-200"></div>
                </div>
              </FadeInScale>

              {/* Step 2 */}
              <FadeInScale delay={200}>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2">
                      Konsultasi Gratis
                    </h3>
                    <p className="font-manrope text-sm text-neutral-600 leading-relaxed">
                      Tim kami siap membantu menentukan strategi iklan terbaik untuk properti Anda
                    </p>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                </div>
              </FadeInScale>

              {/* Step 3 */}
              <FadeInScale delay={300}>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2">
                      Sediakan Detail Properti
                    </h3>
                    <p className="font-manrope text-sm text-neutral-600 leading-relaxed">
                      Berikan informasi lengkap: foto, harga, lokasi, dan spesifikasi properti
                    </p>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-green-200"></div>
                </div>
              </FadeInScale>

              {/* Step 4 */}
              <FadeInScale delay={400}>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2">
                      Iklan Live
                    </h3>
                    <p className="font-manrope text-sm text-neutral-600 leading-relaxed">
                      Properti Anda langsung ditampilkan dan siap menerima inquiries dari pembeli
                    </p>
                  </div>
                </div>
              </FadeInScale>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="form-iklan" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Side - CTA & Stats */}
            <div className="lg:col-span-2">
              <FadeInLeft delay={0}>
                <div className="lg:sticky lg:top-24">
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                      Siap Mengiklankan?
                    </span>
                    <h2 className="font-manrope font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                      Siap Mengiklankan Properti Anda?
                    </h2>
                    <p className="font-manrope text-neutral-600 text-lg leading-relaxed mb-6">
                      Hubungi tim kami sekarang melalui WhatsApp untuk konsultasi gratis dan mulai jangkau ribuan calon pembeli potensial
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                      <div className="font-manrope font-bold text-3xl text-primary-600 mb-1">1000+</div>
                      <div className="font-manrope text-sm text-neutral-600">Properti Terjual</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <div className="font-manrope font-bold text-3xl text-blue-600 mb-1">5000+</div>
                      <div className="font-manrope text-sm text-neutral-600">Member Aktif</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 col-span-2">
                      <div className="font-manrope font-bold text-3xl text-green-600 mb-1">98%</div>
                      <div className="font-manrope text-sm text-neutral-600">Tingkat Kepuasan Klien</div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-6 text-white">
                    <p className="font-manrope text-sm text-white/80 mb-3">Atau hubungi langsung:</p>
                    <div className="space-y-3">
                      <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <span className="font-manrope font-semibold">+62 812-3456-7890</span>
                      </a>
                      <a href="mailto:info@RajawaliLelangIndo.com" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-manrope font-semibold">info@RajawaliLelangIndo.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <FadeInRight delay={200}>
                <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-xl p-8 md:p-10 border border-neutral-200">
                  <h3 className="font-manrope font-bold text-2xl text-neutral-800 mb-2">
                    Detail Properti Anda
                  </h3>
                  <p className="font-manrope text-neutral-600 mb-8">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                  </p>
                  
                  <form className="space-y-6">
                    {/* Owner Information Section */}
                    <div className="pb-6 border-b border-neutral-200">
                      <h4 className="font-manrope font-semibold text-lg text-neutral-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Informasi Pemilik
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Nomor WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="08123456789"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Property Information Section */}
                    <div>
                      <h4 className="font-manrope font-semibold text-lg text-neutral-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Informasi Properti
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Jenis Properti <span className="text-red-500">*</span>
                          </label>
                          <select
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          >
                            <option value="">Pilih jenis properti</option>
                            <option value="rumah">Rumah</option>
                            <option value="apartemen">Apartemen</option>
                            <option value="ruko">Ruko</option>
                            <option value="tanah">Tanah</option>
                            <option value="villa">Villa</option>
                            <option value="gudang">Gudang</option>
                            <option value="kantor">Kantor</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Lokasi <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Kota/Kabupaten"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Harga (Rp) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            placeholder="500000000"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Luas Tanah (m²) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            placeholder="100"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Status Kepemilikan <span className="text-red-500">*</span>
                          </label>
                          <select
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            required
                          >
                            <option value="">Pilih status kepemilikan</option>
                            <option value="shm">SHM (Sertifikat Hak Milik)</option>
                            <option value="shgb">SHGB (Sertifikat Hak Guna Bangunan)</option>
                            <option value="ajb">AJB (Akta Jual Beli)</option>
                            <option value="girik">Girik/Letter C</option>
                            <option value="strata">Strata Title</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-manrope text-sm font-medium text-neutral-700 mb-2">
                            Deskripsi Properti
                          </label>
                          <textarea
                            rows={5}
                            placeholder="Deskripsikan properti Anda secara detail (fasilitas, kondisi, akses, dll)"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Chat via WhatsApp Sekarang
                      </button>
                      <p className="font-manrope text-xs text-neutral-500 text-center mt-3">
                        Respons cepat dalam 1-2 jam pada jam kerja
                      </p>
                    </div>
                  </form>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
