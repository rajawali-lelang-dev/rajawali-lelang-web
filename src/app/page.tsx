import Image from "next/image";
import { ActionCard } from '@/components/common/action-card';
import ItemCardCarousel from '@/components/common/ItemCardCarousel';
import Wave from '@/components/vector/wave';
import ReviewCarousel from '@/components/common/ReviewCard';
import { FadeInUp, FadeInScale } from '@/components/common/ScrollAnimation';

  const featured = [
    {
      title: 'Dive Villa Thoddoo Villa', 
      href: '/property/1',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 1.250.000.000',
      area: '180 m²',
      beds: 3,
      baths: 2,
      carSpace: 2,
    },
    {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/2',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 1.350.000.000',
      area: '200 m²',
      beds: 4,
      baths: 3,
      carSpace: 3,
    },
    {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/3',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 980.000.000',
      area: '150 m²',
      beds: 2,
      baths: 1,
      carSpace: 2,
    },
     {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/3',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 980.000.000',
      area: '150 m²',
      beds: 2,
      baths: 1,
      carSpace: 2,
    },
     {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/3',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 980.000.000',
      area: '150 m²',
      beds: 2,
      baths: 1,
      carSpace: 2,
    },
     {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/3',
      imageSrc: '/images/assets/item-card.svg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 980.000.000',
      area: '150 m²',
      beds: 2,
      baths: 1,
      carSpace: 2,
    },
  ];

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
                placeholder="Lokasi, keyword, area, project, developer"
                className="w-full rounded-lg border px-4 py-3 pr-12 bg-white/95 text-sm focus:outline-none"
              />
              <button
                type="button"
                aria-label="search"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-secondary-400 flex items-center justify-center text-white shadow-sm"
              >
                {/* white magnifying glass */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21l-4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="button" className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500">Filter</button>
              <button type="button" className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500">Urutkan</button>
              <button type="button" className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500">Harga</button>
              <button type="button" className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500">Luas Tanah</button>
              <button type="button" className="rounded-lg bg-white px-3 py-1 text-xs text-gray-500">Luas Bangunan</button>
            </div>
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
            <ItemCardCarousel items={featured} />
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