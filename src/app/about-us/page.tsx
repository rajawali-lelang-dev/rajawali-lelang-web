import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import ServiceCard from '@/components/about-us/service-card'
import TataCaraCard from '@/components/about-us/TataCaraCard'
import DasarHukumCard from '@/components/about-us/DasarHukumCard'
import { FadeInUp, FadeInLeft, FadeInRight, FadeInScale } from '@/components/common/ScrollAnimation'

export const metadata: Metadata = {
  title: 'Tentang Kami | Rajawali Lelang Indonesia',
  description: 'Profil dan sejarah Rajawali Lelang Indonesia - Platform lelang properti terpercaya z-0',
}

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 relative z-10 max-w-7xl">
         <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none hidden lg:block rotate-180 opacity-30 overflow-hidden">
          <div className="relative w-full h-full">
             <Image
                src="/images/about-us/elipsis.png"
                alt="Decorator"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>
        {/* Header Section */}
        <FadeInUp delay={0}>
          <div className="mb-16">
            <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-4">
              Tentang Rajawali Lelang Indonesia
            </h1>
            <p className="font-manrope text-primary-600 text-lg md:text-xl leading-relaxed max-w-4xl">
              Mitra terpercaya dalam dunia lelang modern — profesional, transparan, dan inovatif.
            </p>
          </div>
        </FadeInUp>
        
        {/* Siapa Kami Section - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16 items-center">
          <FadeInLeft delay={0}>
            <div className="relative h-[400px] md:h-[450px]">
              <Image
                src="/images/about-us/background.jpg"
                alt="About Us Image"
                fill
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </FadeInLeft>
          <FadeInRight delay={200}>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <p className="font-manrope text-neutral-700 text-base md:text-lg leading-relaxed">
                  PT Rajawali Lelang Indonesia merupakan perusahaan lelang yang bergerak di bidang penjualan berbagai aset bernilai — mulai dari kendaraan bermotor, properti, mesin industri, hingga barang koleksi.
                </p>
                <p className="font-manrope text-neutral-700 text-base md:text-lg leading-relaxed">
                  Dengan pengalaman dan kepercayaan klien yang luas, kami hadir sebagai mitra terpercaya yang menjembatani penjual dan pembeli untuk mendapatkan nilai terbaik dari setiap transaksi.
                </p>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
         {/* Visi & Misi Section - Full Width */}
      <div id="visi-misi" className="relative py-16 overflow-hidden bg-primary-50 w-full">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 pointer-events-none hidden lg:block opacity-30">
          <div className="relative w-full h-full">
             <Image
                src="/images/about-us/elipsis.png"
                alt="Decorator"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <FadeInUp delay={0}>
            <h2 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-12">
              Visi & Misi
            </h2>
          </FadeInUp>
          
          <div className="grid lg:grid-cols-[30%_70%] gap-8">
            {/* Visi Card */}
            <FadeInLeft delay={100}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg w-full h-full">
                <h3 className="font-manrope font-bold text-3xl text-primary-600 mb-6">Visi</h3>
                <p className="font-manrope text-neutral-700 text-base leading-relaxed">
                  Menjadi balai lelang terdepan di Indonesia yang mengedepankan profesionalisme, inovasi, dan kepercayaan, serta mampu memberikan kontribusi nyata bagi perkembangan industri lelang nasional
                </p>
              </div>
            </FadeInLeft>

            {/* Misi Card */}
            <FadeInRight delay={200}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="font-manrope font-bold text-3xl text-primary-600 mb-6">Misi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Misi Item 1 */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 mb-3">
                    <Image
                      src="/images/about-us/misi_1.png"
                      alt="Menyediakan layanan lelang yang transparan"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
                    Menyediakan layanan lelang yang transparan, akurat, dan sesuai regulasi
                  </p>
                </div>

                {/* Misi Item 2 */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 mb-3">
                    <Image
                      src="/images/about-us/misi_2.png"
                      alt="Mengintegrasikan teknologi digital"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
                    Mengintegrasikan teknologi digital untuk memperluas akses pasar lelang
                  </p>
                </div>

                {/* Misi Item 3 */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 mb-3">
                    <Image
                      src="/images/about-us/misi_3.png"
                      alt="Memaksimalkan nilai aset klien"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
                    Memaksimalkan nilai aset klien melalui strategi pemasaran yang efektif
                  </p>
                </div>

                {/* Misi Item 4 */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 mb-3">
                    <Image
                      src="/images/about-us/misi_4.png"
                      alt="Meningkatkan kepercayaan publik"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
                    Meningkatkan kepercayaan publik terhadap industri lelang di Indonesia
                  </p>
                </div>
              </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>
        {/* Layanan Kami Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 relative z-10 max-w-7xl">
        <div className="absolute -left-48 top-[400px] -translate-y-1/2 w-64 h-64 pointer-events-none hidden lg:block rotate-180 opacity-30 overflow-x-hidden">
          <div className="relative w-full h-full">
             <Image
                src="/images/about-us/elipsis.png"
                alt="Decorator"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>
         <div className="absolute -right-32 top-3/4 -translate-y-1/2 w-32 h-64 pointer-events-none hidden lg:block opacity-30 overflow-x-hidden">
          <div className="relative w-full h-full">
             <Image
                src="/images/about-us/elipsis.png"
                alt="Decorator"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>
        <div className="mb-16">
          <FadeInUp delay={0}>
            <h2 className="font-manrope font-bold text-4xl text-primary-600 mb-4">
              Layanan Kami
            </h2>
            <p className="font-manrope text-neutral-700 text-lg mb-8">
              Rajawali Lelang Indo action menawarkan berbagai layanan meliputi:
            </p>
          </FadeInUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeInScale delay={100}>
              <ServiceCard
                title="Lelang Properti"
                iconSrc="/images/about-us/house.png"
                imageSrc="/images/about-us/house_card.jpg"
              />
            </FadeInScale>
            <FadeInScale delay={200}>
              <ServiceCard
                title="Lelang Kendaraan"
                iconSrc="/images/about-us/car.png"
                imageSrc="/images/about-us/car_card.jpg"
              />
            </FadeInScale>
            <FadeInScale delay={300}>
              <ServiceCard
                title="Lelang Perhiasan"
                iconSrc="/images/about-us/diamond.png"
                imageSrc="/images/about-us/jewerly_card.jpg"
              />
            </FadeInScale>
            <FadeInScale delay={400}>
              <ServiceCard
                title="Lelang Peralatan dan Mesin"
                iconSrc="/images/about-us/factory.png"
                imageSrc="/images/about-us/machine_card.jpg"
              />
            </FadeInScale>
          </div>
        </div>

        {/* Keunggulan Kami Section */}
        <FadeInUp delay={0}>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="font-manrope font-bold text-4xl text-primary-600 mb-8 text-center">
            Mengapa Memilih Kami?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Keunggulan 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-3">
                Terpercaya & Legal
              </h3>
              <p className="font-manrope text-neutral-600 leading-relaxed">
                Proses lelang yang transparan dan sesuai dengan regulasi pemerintah
              </p>
            </div>

            {/* Keunggulan 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-3">
                Harga Kompetitif
              </h3>
              <p className="font-manrope text-neutral-600 leading-relaxed">
                Dapatkan aset dengan harga terbaik melalui sistem lelang yang fair
              </p>
            </div>

            {/* Keunggulan 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-3">
                Pendampingan Profesional
              </h3>
              <p className="font-manrope text-neutral-600 leading-relaxed">
                Tim ahli siap membantu Anda di setiap tahap proses lelang
              </p>
            </div>
          </div>
        </div>
        </FadeInUp>

        {/* Tata Cara Lelang Section */}
        <div id="tata-cara" className="mb-16">
          <FadeInUp delay={0}>
            <h2 className="font-manrope font-bold text-4xl text-primary-600 mb-4">
              Tata Cara Lelang
            </h2>
            <p className="font-manrope text-neutral-700 text-lg mb-8">
              Dua metode untuk mendapatkan properti dengan harga terbaik
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FadeInLeft delay={100}>
              <TataCaraCard
                number="1"
                title="Pra-Lelang"
                description="Proses mediasi untuk mencari solusi terbaik melalui kesepakatan antara kreditur dan debitur. Dalam tahap ini, kami memfasilitasi diskusi mengenai kemampuan debitur untuk buyback (tebus) atau menyerahkan aset secara sukarela (AKTA/AJB) dengan nilai kompensasi yang disepakati bersama melalui musyawarah."
              />
            </FadeInLeft>
            <FadeInRight delay={200}>
              <TataCaraCard
                number="2"
                title="Lelang"
                description="Apabila mediasi pada tahap pra-lelang tidak mencapai kesepakatan yang menguntungkan kedua belah pihak, maka proses lelang akan dilaksanakan oleh KPKNL. Lelang dilakukan setelah debitur tidak memenuhi kewajiban pembayaran dan tidak merespons Surat Peringatan ke-3 (SP-3), sehingga aset dinyatakan layak untuk dilelang."
              />
            </FadeInRight>
          </div>

          <FadeInUp delay={300}>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-manrope font-bold text-2xl mb-3">
                  Manajemen & Pendampingan
                </h3>
                <p className="font-manrope leading-relaxed">
                  Kami menyediakan pengelolaan administrasi aset yang efisien melalui proses teknis, keuangan, dan praktik manajemen profesional. Berkolaborasi dengan lembaga penyedia kredit seperti bank dan koperasi, kami fokus pada penyelesaian kredit bermasalah untuk mencapai solusi yang saling menguntungkan. Pendampingan dan pemahaman mendalam tentang hukum kredit kami berikan untuk memberikan dukungan maksimal bagi semua pihak terkait.
                </p>
              </div>
            </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Dasar Hukum Lelang Section */}
      <div id="dasar-hukum" className="py-16 bg-primary-50 w-full">
        <div className="absolute -left-20 top-7/8 -translate-y-1/2 w-64 h-64 pointer-events-none hidden lg:block opacity-30 overflow-x-hidden rotate-180">
          <div className="relative w-full h-full">
             <Image
                src="/images/about-us/elipsis.png"
                alt="Decorator"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeInUp delay={0}>
            <h2 className="font-manrope font-bold text-4xl text-primary-900 mb-4">
              Dasar Hukum Lelang
            </h2>
            <p className="font-manrope text-primary-700 text-lg mb-12">
              Landasan hukum yang mengatur pelaksanaan lelang di Indonesia
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInScale delay={100}>
              <DasarHukumCard
                title="Lelang Eksekusi"
                description="Lelang yang dilaksanakan untuk melaksanakan putusan pengadilan atau dokumen yang dipersamakan dengan itu."
                items={[
                  "Lelang Eksekusi Pengadilan",
                  "Lelang Eksekusi Pajak",
                  "Lelang Eksekusi PUPN (Piutang Negara)",
                  "Lelang Eksekusi Panitia Urusan Piutang Negara",
                  "Lelang Eksekusi Hak Tanggungan (UUHT)"
                ]}
                icon="Scale"
              />
            </FadeInScale>

            <FadeInScale delay={200}>
              <DasarHukumCard
                title="Lelang Non-Eksekusi Wajib"
                description="Lelang yang dilaksanakan berdasarkan ketentuan peraturan perundang-undangan."
                items={[
                  "Lelang barang temuan, sitaan, dan rampasan pemerintah",
                  "Lelang kayu sitaan hasil hutan",
                  "Lelang barang yang dikuasai negara",
                  "Lelang dalam rangka privatisasi BUMN",
                  "Lelang atas barang milik/kekayaan negara"
                ]}
                icon="Building"
              />
            </FadeInScale>

            <FadeInScale delay={300}>
              <DasarHukumCard
                title="Lelang Non-Eksekusi Sukarela"
                description="Lelang yang dilaksanakan atas kehendak pemilik barang atau pemegang hak atas barang."
                items={[
                  "Lelang harta kekayaan perusahaan pailit",
                  "Lelang barang milik perusahaan swasta",
                  "Lelang barang milik perorangan",
                  "Lelang atas kehendak sendiri untuk keperluan tertentu"
                ]}
                icon="Handshake"
              />
            </FadeInScale>

            <FadeInScale delay={400}>
              <DasarHukumCard
                title="Cara Eksekusi UUHT"
                description="Metode pelaksanaan eksekusi hak tanggungan berdasarkan UU No. 4 Tahun 1996."
                items={[
                  "Parate Eksekusi: Penjualan atas kekuasaan sendiri melalui pelelangan umum",
                  "Titel Eksekutorial: Eksekusi melalui Ketua Pengadilan Negeri",
                  "Penjualan di Bawah Tangan: Kesepakatan antara pemberi dan pemegang hak tanggungan"
                ]}
                icon="FileText"
              />
            </FadeInScale>
          </div>
        </div>
      </div>
    </div>
  )
}
