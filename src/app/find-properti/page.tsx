import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInLeft, FadeInRight, FadeInScale } from "@/components/common/ScrollAnimation";

export const metadata: Metadata = {
  title: 'Temukan Properti Impian Anda | Rajawali Lelang Indonesia',
  description: 'Konsultasi gratis dengan tim profesional kami untuk menemukan properti yang sempurna sesuai kebutuhan Anda',
};

export default function FindPropertiPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white py-24 md:py-32 overflow-hidden">        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <FadeInUp delay={0}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-manrope font-bold text-4xl md:text-6xl mb-6">
                Temukan Properti Impian Anda
              </h1>
              <p className="font-manrope text-xl md:text-2xl mb-8 text-neutral-200">
                Konsultasi gratis dengan tim profesional kami untuk menemukan properti yang sempurna
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact-form">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Cari Properti
                  </button>
                </Link>
                <Link href="https://wa.me/6281234567890?text=Halo, saya ingin berkonsultasi tentang properti lelang" target="_blank">
                  <button className="bg-green-400 backdrop-blur-sm hover:bg-green-500 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat WhatsApp
                  </button>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Mengapa Memilih RLI Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20 max-w-7xl">
        <FadeInUp delay={0}>
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              Mengapa Memilih Rajawali Lelang Indonesia?
            </h2>
            <p className="font-manrope text-neutral-600 text-lg max-w-3xl mx-auto">
              Kami menyediakan solusi terlengkap untuk kebutuhan properti Anda
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FadeInScale delay={100}>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-2">
                Pencarian Mudah
              </h3>
              <p className="font-manrope text-neutral-600 text-sm leading-relaxed">
                Cari properti dengan filter lengkap sesuai kebutuhan Anda
              </p>
            </div>
          </FadeInScale>

          <FadeInScale delay={200}>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-2">
                Iklan Gratis
              </h3>
              <p className="font-manrope text-neutral-600 text-sm leading-relaxed">
                Iklankan properti Anda tanpa biaya dan jangkau pembeli potensial
              </p>
            </div>
          </FadeInScale>

          <FadeInScale delay={300}>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-2">
                Hubungi Langsung
              </h3>
              <p className="font-manrope text-neutral-600 text-sm leading-relaxed">
                Kontak penjual atau pembeli melalui WhatsApp dengan mudah
              </p>
            </div>
          </FadeInScale>

          <FadeInScale delay={400}>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-2">
                Harga Terpercaya
              </h3>
              <p className="font-manrope text-neutral-600 text-sm leading-relaxed">
                Data harga properti yang akurat dan transparan
              </p>
            </div>
          </FadeInScale>
        </div>
      </div>

      {/* Hubungi Kami Section - PROMINENT */}
      <div id="contact-form" className="bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <FadeInLeft delay={0}>
              <div className="text-white">
                <h2 className="font-manrope font-bold text-3xl md:text-5xl mb-6">
                  Konsultasi Gratis dengan Tim Kami
                </h2>
                <p className="font-manrope text-xl mb-8 text-white/90">
                  Tim profesional kami siap membantu Anda menemukan properti impian dengan kriteria yang sesuai
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-manrope font-bold text-xl mb-2">Konsultasi Personal</h3>
                      <p className="font-manrope text-white/80">Dapatkan rekomendasi properti yang sesuai dengan budget dan kebutuhan Anda</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-manrope font-bold text-xl mb-2">Respon Cepat</h3>
                      <p className="font-manrope text-white/80">Tim kami akan merespons pertanyaan Anda dalam waktu singkat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-manrope font-bold text-xl mb-2">Tanpa Biaya</h3>
                      <p className="font-manrope text-white/80">Layanan konsultasi kami 100% gratis untuk Anda</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="font-manrope text-sm text-white/80 mb-3">Atau hubungi kami langsung:</p>
                  <div className="space-y-2">
                    <a href="tel:+6281234567890" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold">+62 812-3456-7890</span>
                    </a>
                    <a href="mailto:info@rajawalilelang.co.id" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">info@rajawalilelang.co.id</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Right Side - Contact Form */}
            <FadeInRight delay={200}>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="font-manrope font-bold text-2xl text-neutral-800 mb-6">
                  Ceritakan Kebutuhan Properti Anda
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Jenis Properti yang Dicari
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                      <option value="">Pilih jenis properti</option>
                      <option value="rumah">Rumah</option>
                      <option value="ruko">Ruko</option>
                      <option value="villa">Villa</option>
                      <option value="apartemen">Apartemen</option>
                      <option value="tanah">Tanah</option>
                      <option value="gudang">Gudang</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                        Budget Min
                      </label>
                      <input
                        type="text"
                        placeholder="Rp 500.000.000"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                        Budget Max
                      </label>
                      <input
                        type="text"
                        placeholder="Rp 1.000.000.000"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Lokasi yang Diinginkan
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jakarta Selatan, Tangerang"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-sm font-semibold text-neutral-700 mb-2 block">
                      Pesan / Kriteria Tambahan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan lebih detail tentang properti yang Anda cari..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Kirim Permintaan
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    * Tim kami akan menghubungi Anda dalam 1x24 jam
                  </p>
                </form>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>
    </div>
  );
}
