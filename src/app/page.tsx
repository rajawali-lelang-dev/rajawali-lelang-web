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
      imageSrc: '/images/sample-villa-1.jpg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 1.250.000.000',
      area: '180 m²',
      beds: 3,
      baths: 2,
      likes: 25,
    },
    {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/2',
      imageSrc: '/images/sample-villa-1.jpg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 1.350.000.000',
      area: '200 m²',
      beds: 4,
      baths: 3,
      likes: 18,
    },
    {
      title: 'Dive Villa Thoddoo Villa',
      href: '/property/3',
      imageSrc: '/images/sample-villa-1.jpg',
      location: 'Bintaro, Jakarta Selatan',
      price: 'Rp 980.000.000',
      area: '150 m²',
      beds: 2,
      baths: 1,
      likes: 12,
    },
  ];


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar01 />

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

        <div className="absolute inset-0 bg-transparent from-black/40 via-black/25 to-black/50" />
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
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-sm"
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
      <div>
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-row flex-wrap items-start justify-center gap-8 mt-6">
          <ActionCard
            title="Carikan Properti"
            href="/search"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose-600">
                <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21l-4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          <ActionCard
            title="Iklankan Properti"
            href="/sell"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose-600">
                <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 7v-2h6v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          <ActionCard
            title="Kalkulator KPR"
            href="/calculator"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose-600">
                <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />

          <ActionCard
            title="Forum Pertanyaan"
            href="/forum"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose-600">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            }
          />
        </div>
      </div>
      <div className="relative mt-2">
        <Wave className="w-full md:h-48 lg:h-72" gradientId="heroWave" />

        <div className="absolute inset-x-0 -top-4 z-40 px-6">
          <h2 className="text-primary-500 text-xl font-manrope font-bold">Properti Unggulan</h2>
          <p className="mt-1 text-sm text-slate-500">Dari tanah hingga bangunan, semua ada di sini</p>
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-12">
          <div className="flex flex-row flex-wrap items-stretch justify-start gap-6 z-40">
            {featured.map((item) => (
              <div key={item.href} className="w-full sm:w-[48%] md:w-1/3">
                <ItemCard
                  title={item.title}
                  href={item.href}
                  imageSrc={item.imageSrc}
                  location={item.location}
                  price={item.price}
                  area={item.area}
                  beds={item.beds}
                  baths={item.baths}
                  likes={item.likes}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}