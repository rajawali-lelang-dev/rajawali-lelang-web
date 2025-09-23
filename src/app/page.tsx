import Image from "next/image";
import Link from "next/link";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar';

// ...existing code...
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

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <h1 className="mb-4 text-5xl font-extrabold leading-tight sm:text-6xl">
              Rajawali Lelang — Temukan Aset Terbaik
            </h1>
            <p className="mb-8 text-lg text-white/90">
              Jelajahi properti, aset bank, dan lelang terverifikasi. Mulai penawaran Anda sekarang.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="#get-started" className="inline-flex items-center rounded-md bg-[#133D5E] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0f2e4a] transition">
                Mulai Sekarang
              </Link>
              <Link href="#sellables" className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
                Lihat Properti
              </Link>
            </div>
          </div>
        </div>

        {/* Search card overlapping bottom of hero */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4">
          <div className="rounded-xl bg-white/95 p-6 shadow-xl">
            <h3 className="text-center text-lg font-semibold text-rose-600">Lelang Properti? Mulai Di Sini</h3>
            <div className="mt-4">
              <input
                placeholder="Lokasi, keyword, area, project, developer"
                className="w-full rounded-lg border px-4 py-3 text-sm shadow-sm focus:outline-none"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button className="rounded-md bg-[#133D5E] px-5 py-2 text-white">Cari</button>
              <div className="text-sm text-gray-500">Filter • Urutkan • Harga</div>
            </div>
          </div>
        </div>
      </section>

      {/* rest of page... */}
    </main>
  );
}