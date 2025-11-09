"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ActionCard } from '@/components/common/action-card';
import ItemCardCarousel from '@/components/common/ItemCardCarousel';
import Wave from '@/components/vector/wave';
import ReviewCarousel from '@/components/common/ReviewCard';
import { FadeInUp, FadeInScale } from '@/components/common/ScrollAnimation';
import LelangCard from '@/components/lelang-terdekat/LelangCard';
import { lelangProperties, properties } from '@/lib/properti';
import { lelangMobils } from '@/lib/mobil';
import { lelangPerhiasans } from '@/lib/perhiasan';
import { lelangMesins } from '@/lib/mesin';
import { sortByTanggalLelang, filterLelangAktif } from '@/lib/lelang-utils';

  const reviews = [
    {
      name: 'Sinta Aulia',
      role: 'Pembeli',
      review: 'Platformnya simple dan informatif! Saya bisa cari properti lelang sesuai budget tanpa ribet, bahkan ada panduan lengkap. Dalam waktu singkat, saya berhasil temukan properti impian saya!'
    },
    {
      name: 'Budi Santoso',
      role: 'Investor',
      review: 'RajawaLiLelangIndo bikin proses lelang jadi jelas dan lebih transparan dan cepat. Saya bisa bandingkan harga dan lokasi dengan mudah — sangat ideal untuk strategi investasi saya.'
    },
    {
      name: 'Maria Widjaja',
      role: 'Agen Properti',
      review: 'RajawaLiLelangIndo bantu saya menjangkau pasar yang lebih luas. Dalam waktu singkat, banyak properti saya yang dillihat calon pembeli — hasilnya closing lebih cepat!'
    },
    {
      name: 'Dimas Ramadhan',
      role: 'Pembeli',
      review: 'Awalnya saya ragu ikut lelang, tapi platform ini bikin prosesnya jelas dan gampang diikuti. Semua informasi yang saya butuhkan lengkap, jadi saya merasa aman saat bidding.'
    },
    {
      name: 'Keyla Putri',
      role: 'Investor',
      review: 'Saya suka dengan transparansi dan kemudahan yang ditawarkan. Data properti lengkap, proses lelang jelas, dan support tim sangat membantu. Investasi properti jadi lebih mudah!'
    },
  ];

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    price: "",
    landArea: "",
    buildingArea: "",
    sortBy: "",
  });

  // Get top 8 newest properties for featured section
  const featuredProperties = useMemo(() => {
    return properties
      .slice(0, 8) // Take top 8 properties
      .map(property => ({
        title: property.title,
        href: `/aset/dijual/properti/${property.id}`,
        imageSrc: property.image,
        location: property.location,
        price: `Rp ${property.price.toLocaleString('id-ID')}`,
        area: `${property.landArea} m²`,
        beds: 0, // Not available in current data structure
        baths: 0, // Not available in current data structure
        carSpace: 0, // Not available in current data structure
      }));
  }, []);

  const handleSearch = () => {
    // Build query string from search and filters
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (filters.price) params.set("price", filters.price);
    if (filters.landArea) params.set("landArea", filters.landArea);
    if (filters.buildingArea) params.set("buildingArea", filters.buildingArea);
    if (filters.sortBy) params.set("sortBy", filters.sortBy);
    
    // Navigate to properti dijual page with filters
    router.push(`/aset/dijual/properti?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section dengan background image yang naik ke bawah navbar */}
      <section className="relative w-full min-h-screen">
        <Image
          src="/images/hero.svg"
          alt="Hero background"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <div className="absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/4 w-full max-w-4xl px-4">
          <h1 className="text-white text-5xl font-manrope font-bold">Temukan Properti Lelang Terbaik
            Mudah, Aman, Untung!</h1>
          <h2 className="text-white text-xl">Kami bantu wujudkan investasi properti Anda dengan proses yang transparan</h2>
          <div className="rounded-xl bg-transparent mt-4">
            <div className="mt-4 relative">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Lokasi, keyword, area, project, developer"
                className="w-full rounded-lg border px-4 py-3 pr-12 bg-white/95 text-sm focus:outline-none"
              />
              <button
                type="button"
                aria-label="search"
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-secondary-400 flex items-center justify-center text-white shadow-sm hover:bg-secondary-500 transition-colors"
              >
                {/* white magnifying glass */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21l-4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <button 
                type="button" 
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
              >
                {showFilters ? "Sembunyikan Filter" : "Filter"}
              </button>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <option value="">Urutkan</option>
                <option value="price-asc">Harga Terendah</option>
                <option value="price-desc">Harga Tertinggi</option>
                <option value="newest">Terbaru</option>
              </select>
              <select
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <option value="">Harga</option>
                <option value="0-1000000000">&lt; 1 Miliar</option>
                <option value="1000000000-5000000000">1 - 5 Miliar</option>
                <option value="5000000000-10000000000">5 - 10 Miliar</option>
                <option value="10000000000-999999999999999999">&gt; 10 Miliar</option>
              </select>
              <select
                value={filters.landArea}
                onChange={(e) => setFilters({ ...filters, landArea: e.target.value })}
                className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <option value="">Luas Tanah</option>
                <option value="0-100">&lt; 100 m²</option>
                <option value="100-300">100 - 300 m²</option>
                <option value="300-500">300 - 500 m²</option>
                <option value="500+">&gt; 500 m²</option>
              </select>
              <select
                value={filters.buildingArea}
                onChange={(e) => setFilters({ ...filters, buildingArea: e.target.value })}
                className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <option value="">Luas Bangunan</option>
                <option value="0-100">&lt; 100 m²</option>
                <option value="100-200">100 - 200 m²</option>
                <option value="200-300">200 - 300 m²</option>
                <option value="300+">&gt; 300 m²</option>
              </select>
            </div>
          </div>
        </div>

      </section>

      {/* Lelang Terdekat Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-primary-100 to-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp delay={0}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-2">Lelang Terdekat</h2>
                <p className="text-neutral-600">Jangan lewatkan kesempatan lelang terbaik!</p>
              </div>
              <Link 
                href="/lelang-terdekat"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Lihat Semua
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 gap-6">
            {(() => {
              // Aggregate all lelang items
              const allLelang = [
                ...lelangProperties.map(item => ({ ...item, type: 'Properti' as const })),
                ...lelangMobils.map(item => ({ ...item, type: 'Mobil' as const })),
                ...lelangPerhiasans.map(item => ({ ...item, type: 'Perhiasan' as const })),
                ...lelangMesins.map(item => ({ ...item, type: 'Mesin' as const })),
              ];

              // Filter active and sort by date, take top 5
              const upcomingLelang = sortByTanggalLelang(filterLelangAktif(allLelang)).slice(0, 5);

              return upcomingLelang.map((item, index) => (
                <FadeInScale key={`${item.type}-${item.id}`} >
                  <LelangCard
                    image={item.image}
                    title={item.title}
                    tanggalLelang={item.tanggalLelang}
                    location={item.location}
                    type={item.type}
                    status={item.status}
                  />
                </FadeInScale>
              ));
            })()}
          </div>
        </div>
      </section>
      
      {/* Action Cards Section */}
      <FadeInUp delay={0}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-row flex-wrap items-start justify-center gap-8">
            <FadeInScale delay={100}>
              <ActionCard
                title="Carikan Properti"
                href="/search"
                imgSrc="/images/assets/magnifying-glass.svg"
              />
            </FadeInScale>

            <FadeInScale delay={200}>
              <ActionCard
                title="Iklankan Properti"
                href="/sell"
                imgSrc="/images/assets/megaphone.svg"
              />
            </FadeInScale>

            <FadeInScale delay={300}>
              <ActionCard
                title="Kalkulator KPR"
                href="/calculator"
                imgSrc="/images/assets/calculator.svg"
              />
            </FadeInScale>

            <FadeInScale delay={400}>
              <ActionCard
                title="Forum Pertanyaan"
                href="/forum"
                imgSrc="/images/assets/envelope.svg"
              />
            </FadeInScale>
          </div>
        </div>
      </FadeInUp>
      
      {/* Featured Properties Section */}
      <div className="relative w-full bg-gradient-to-b from-white to-blue-50 pb-16">
        <Wave className="w-full h-32 md:h-48 lg:h-72 mt-8" gradientId="heroWave" />

        <div className="w-full px-4 md:px-8 -mt-32 md:-mt-48 lg:-mt-64 relative z-10">
          <FadeInUp delay={0}>
            <div className="text-center mb-8">
              <h2 className="text-primary-500 text-2xl md:text-3xl font-manrope font-bold">
                Properti Unggulan
              </h2>
              <p className="mt-2 text-sm md:text-base text-neutral-600">
                Dari tanah hingga bangunan, semua ada di sini
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <ItemCardCarousel items={featuredProperties} />
          </FadeInUp>
        </div>
      </div>

      {/* Reviews Section */}
      <FadeInUp delay={0} className="min-h-screen">
        <ReviewCarousel reviews={reviews} />
      </FadeInUp>
    </div>
  );
}