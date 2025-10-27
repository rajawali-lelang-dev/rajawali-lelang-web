import { Metadata } from 'next'
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/common/ScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Layanan KPR | Rajawali Lelang Indonesia',
  description: 'Solusi pembiayaan properti dengan KPR yang mudah, cepat, dan terpercaya',
}

interface KPRService {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

const kprServices: KPRService[] = [
  {
    id: '1',
    title: 'Take Over KPR',
    description: 'Cicilan KPR naik? Saatnya pindah KPR',
    icon: '🏦',
    benefits: [
      'Bunga lebih rendah',
      'Tenor lebih fleksibel',
      'Proses cepat dan mudah',
      'Tanpa biaya penalti'
    ]
  },
  {
    id: '2',
    title: 'KPR Properti Baru',
    description: 'Wujudkan rumah impian dengan KPR yang tepat',
    icon: '🏠',
    benefits: [
      'DP mulai dari 10%',
      'Bunga kompetitif',
      'Tenor hingga 25 tahun',
      'Proses approval cepat'
    ]
  },
  {
    id: '3',
    title: 'KPR Properti Lelang',
    description: 'Dapatkan properti lelang dengan pembiayaan KPR',
    icon: '⚖️',
    benefits: [
      'Harga lebih terjangkau',
      'Lokasi strategis',
      'Legalitas terjamin',
      'Bantuan proses lelang'
    ]
  }
]

const kprSteps = [
  {
    step: '1',
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan KPR Anda dengan tim kami'
  },
  {
    step: '2',
    title: 'Pengajuan',
    description: 'Lengkapi dokumen dan ajukan permohonan KPR'
  },
  {
    step: '3',
    title: 'Analisis',
    description: 'Tim kami menganalisis kelayakan kredit Anda'
  },
  {
    step: '4',
    title: 'Persetujuan',
    description: 'Dapatkan persetujuan dari bank partner kami'
  },
  {
    step: '5',
    title: 'Akad Kredit',
    description: 'Tanda tangan akad dan proses pencairan dana'
  }
]

const requiredDocuments = [
  'KTP & Kartu Keluarga',
  'NPWP',
  'Slip gaji 3 bulan terakhir',
  'Rekening koran 3 bulan terakhir',
  'Surat keterangan kerja',
  'Dokumen kepemilikan properti (untuk take over)'
]

export default function KprPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 max-w-7xl">
        <FadeInUp delay={0}>
          <div className="text-center mb-16">
            <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-4">
              Layanan KPR
            </h1>
            <p className="font-manrope text-neutral-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Solusi pembiayaan properti dengan KPR yang mudah, cepat, dan terpercaya. 
              Wujudkan impian memiliki rumah dengan cicilan yang ringan.
            </p>
          </div>
        </FadeInUp>

        {/* KPR Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {kprServices.map((service, index) => (
            <FadeInUp key={service.id} delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl mb-4">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-manrope font-bold text-xl text-primary-600 mb-2">
                  {service.title}
                </h3>
                <p className="font-manrope text-neutral-600 text-sm mb-4">
                  {service.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10" fill="#22c55e" opacity="0.2"/>
                        <path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link href={`https://wa.me/6281234567890?text=Saya tertarik dengan layanan ${service.title}`} target="_blank">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    Konsultasi Sekarang
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* About KPR Section */}
        <div className="mb-16">
          <FadeInUp delay={0}>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="font-manrope font-bold text-3xl text-primary-600 mb-6 text-center">
                Tentang KPR
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-manrope font-semibold text-xl text-neutral-800 mb-4">
                    Apa itu KPR?
                  </h3>
                  <p className="font-manrope text-neutral-700 leading-relaxed mb-4">
                    KPR (Kredit Pemilikan Rumah) adalah fasilitas kredit yang diberikan oleh bank untuk membeli properti seperti rumah, apartemen, atau ruko dengan sistem cicilan.
                  </p>
                  <p className="font-manrope text-neutral-700 leading-relaxed">
                    Dengan KPR, Anda dapat memiliki properti impian tanpa harus membayar tunai secara penuh, cukup dengan uang muka (DP) dan cicilan bulanan yang terjangkau.
                  </p>
                </div>
                <div>
                  <h3 className="font-manrope font-semibold text-xl text-neutral-800 mb-4">
                    Mengapa Pilih Kami?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#3b82f6" opacity="0.2"/>
                        <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="font-manrope text-neutral-700">Partner dengan berbagai bank terpercaya</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#3b82f6" opacity="0.2"/>
                        <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="font-manrope text-neutral-700">Proses pengajuan mudah dan cepat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#3b82f6" opacity="0.2"/>
                        <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="font-manrope text-neutral-700">Konsultasi gratis dari tim berpengalaman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#3b82f6" opacity="0.2"/>
                        <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="font-manrope text-neutral-700">Suku bunga kompetitif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <FadeInUp delay={0}>
            <h2 className="font-manrope font-bold text-3xl text-primary-600 mb-8 text-center">
              Cara Mengajukan KPR
            </h2>
          </FadeInUp>
          <div className="grid md:grid-cols-5 gap-6">
            {kprSteps.map((item, index) => (
              <FadeInUp key={item.step} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-md p-6 text-center relative">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-manrope font-semibold text-lg text-neutral-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-sm text-neutral-600">
                    {item.description}
                  </p>
                  {/* Arrow */}
                  {index < kprSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <FadeInUp delay={0}>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="font-manrope font-bold text-3xl text-primary-600 mb-6 text-center">
                Dokumen yang Diperlukan
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#3b82f6" strokeWidth="2"/>
                      <polyline points="14 2 14 8 20 8" stroke="#3b82f6" strokeWidth="2"/>
                    </svg>
                    <span className="font-manrope text-neutral-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* CTA Section */}
        <FadeInUp delay={0}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="font-manrope font-bold text-2xl md:text-3xl text-white mb-4">
                Siap Memiliki Properti Impian?
              </h2>
              <p className="font-manrope text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Konsultasikan kebutuhan KPR Anda dengan tim ahli kami. Gratis dan tanpa komitmen!
              </p>
              <Link href="https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang KPR" target="_blank">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami via WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}