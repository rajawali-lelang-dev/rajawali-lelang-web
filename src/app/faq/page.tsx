"use client";

import { Metadata } from 'next'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeInUp, FadeInScale } from '@/components/common/ScrollAnimation'


const faqs = [
  {
    question: 'Apa itu lelang properti?',
    answer: 'Lelang properti adalah penjualan aset (rumah, tanah, ruko, apartemen) melalui mekanisme penawaran harga, dilakukan oleh KPKNL atau balai lelang resmi atas permintaan pemilik atau pihak bank.'
  },
  {
    question: 'Apakah properti lelang aman?',
    answer: 'Aman jika melalui balai lelang resmi dan memiliki dokumen lengkap. Pastikan:\n• Lelang tercatat di KPKNL / DJKN\n• Ada nomor risalah lelang\n• Terdapat surat dari bank / pemilik sah\n• Penjelasan kondisi fisik & legal tersedia'
  },
  {
    question: 'Apa itu limit dan apa itu uang jaminan?',
    answer: '• Limit: harga minimum pembukaan penawaran.\n• Uang jaminan: deposit (biasanya 20–30%) yang harus dibayar peserta untuk bisa ikut lelang.\n\nJika kalah → dikembalikan 100%.'
  },
  {
    question: 'Bagaimana cara mengikuti lelang?',
    answer: '1. Registrasi akun di situs lelang (misalnya lelang.go.id)\n2. Bayar uang jaminan\n3. Ikut penawaran pada jadwal lelang\n4. Menang → bayar pelunasan\n5. Lunasi semua pajak dan biaya\n6. Ambil risalah lelang ke KPKNL untuk balik nama di BPN'
  },
  {
    question: 'Apakah bisa melihat kondisi properti sebelum lelang?',
    answer: 'Ya. Peserta berhak melakukan open house / inspeksi pada waktu yang ditentukan.\nJika properti ditempati, biasanya inspeksi hanya dari luar.'
  },
  {
    question: 'Apakah properti lelang selalu murah?',
    answer: 'Umumnya lebih murah 10–50% dari harga pasar, tapi tergantung:\n• Kondisi properti\n• Lokasi\n• Apakah ada penghuni / tidak'
  },
  {
    question: 'Bagaimana jika properti masih ditempati?',
    answer: 'Jika menang, pembeli wajib mengurus pengosongan secara mandiri, namun dibantu legitimasi oleh risalah lelang. Biasanya:\n• Bisa diselesaikan secara kekeluargaan\n• Jika sulit → melalui pengadilan (penetapan eksekusi)'
  },
  {
    question: 'Bagaimana status sertifikat properti lelang?',
    answer: 'Dijelaskan dalam pengumuman lelang:\n• SHM / HGB / SHSRS\n• Atas nama siapa\n• Ada/tiada beban (hak tanggungan, sita, blokir)\n\nRisalah lelang digunakan untuk menghapus hak tanggungan.'
  },
  {
    question: 'Apa yang terjadi jika menang tapi tidak melunasi?',
    answer: 'Uang jaminan hangus, properti akan dilelang ulang.'
  },
  {
    question: 'Apakah bisa KPR untuk properti lelang?',
    answer: 'Bisa, khusus untuk:\n• Lelang bank\n• Dokumen lengkap\n• Penilaian bank disetujui\n\nTapi prosesnya lebih ketat dan harus cepat karena ada batas pelunasan 5 hari kerja.'
  },
  {
    question: 'Berapa lama balik nama sertifikat setelah lelang?',
    answer: 'Umumnya:\n• 2–6 minggu untuk balik nama\n• 1–4 minggu untuk proses roya (hapus HT)\n\nTergantung kecepatan BPN.'
  },
  {
    question: 'Apa yang harus diperhatikan sebelum ikut lelang?',
    answer: '• Baca risalah dan pengumuman dengan teliti\n• Cek lokasi\n• Cek sertifikat di BPN\n• Siapkan dana cukup\n• Pertimbangkan biaya tambahan untuk pajak / notaris'
  },
  {
    question: 'Jika kalah lelang, uang jaminan kapan kembali?',
    answer: 'Biasanya 1–3 hari kerja dikembalikan ke rekening peserta.'
  },
  {
    question: 'Apakah bisa membatalkan setelah menang?',
    answer: 'Tidak bisa. Menang lelang bersifat final, dan pembatalan membuat jaminan hangus.'
  },
  {
    question: 'Apa yang dimaksud "apa adanya (as is)" dalam properti lelang?',
    answer: 'Artinya: Kondisi fisik properti dijual sesuai keadaan saat ini tanpa perbaikan atau jaminan dari penjual.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r white pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 pt-20 md:pt-24 relative z-10 max-w-7xl">
          <FadeInUp delay={0}>
            <div className="text-center mb-8">
              <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-800 mb-4">
                FAQ Properti Lelang
              </h1>
              <p className="text-primary-800 text-lg md:text-xl max-w-3xl mx-auto">
                Panduan Lengkap & Jelas - Semua yang perlu Anda ketahui tentang lelang properti
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-5xl">
          <FadeInUp delay={100}>
            <div className="mb-12 text-center">
              <p className="text-slate-600 text-lg">
                Temukan jawaban untuk pertanyaan yang sering diajukan seputar lelang properti
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInScale key={index} >
                <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <h3 className="font-manrope font-semibold text-lg text-slate-800 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6 pl-[4.5rem]">
                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInScale>
            ))}
          </div>

          {/* CTA Section */}
          <FadeInUp delay={200}>
            <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 text-center">
              <h2 className="font-manrope font-bold text-2xl text-white mb-3">
                Masih Ada Pertanyaan?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Tim kami siap membantu Anda dengan pertanyaan lebih lanjut seputar lelang properti
              </p>
              <a 
                href="https://wa.me/6281700056464?text=Halo%20Rajawali%20Lelang%20Indonesia,%20saya%20ingin%20bertanya%20tentang%20lelang%20properti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi Kami
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
