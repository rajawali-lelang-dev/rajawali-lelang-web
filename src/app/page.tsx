import Image from "next/image";
import Link from "next/link";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar';
import { ActionCard } from '@/components/common/action-card';
import ItemCard from '@/components/common/item-card';
import Wave from '@/components/vector/wave';

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
  ];


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section dengan background image yang naik ke bawah navbar */}
      <section className="relative w-screen">
        <Image
          src="/images/hero2.png"
          alt="Hero background"
          priority
          width={1920}
          height={1080}
          sizes="100vw"
          className="w-screen h-auto"
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
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-row flex-wrap items-start justify-center gap-8">
          <ActionCard
            title="Carikan Properti"
            href="/search"
            imgSrc="/images/assets/magnifying-glass.svg"
          />

          <ActionCard
            title="Iklankan Properti"
            href="/sell"
            imgSrc="/images/assets/megaphone.svg"
          />

          <ActionCard
            title="Kalkulator KPR"
            href="/calculator"
            imgSrc="/images/assets/calculator.svg"
          />

          <ActionCard
            title="Forum Pertanyaan"
            href="/forum"
            imgSrc="/images/assets/envelope.svg"
          />
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <div className="relative w-full bg-gradient-to-b from-white to-blue-50 pb-16">
        <Wave className="w-full h-32 md:h-48 lg:h-72 -mt-1" gradientId="heroWave" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-32 md:-mt-48 lg:-mt-64 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-primary-500 text-2xl md:text-3xl font-manrope font-bold">
              Properti Unggulan
            </h2>
            <p className="mt-2 text-sm md:text-base text-neutral-600">
              Dari tanah hingga bangunan, semua ada di sini
            </p>
          </div>
          
          <div className="flex flex-row flex-wrap items-stretch justify-center gap-6">
            {featured.map((item) => (
              <div key={item.href} className="w-full sm:w-[60%] lg:w-[31%]">
                <ItemCard
                  title={item.title}
                  href={item.href}
                  imageSrc={item.imageSrc}
                  location={item.location}
                  price={item.price}
                  area={item.area}
                  beds={item.beds}
                  baths={item.baths}
                  CarSpace={item.carSpace}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}