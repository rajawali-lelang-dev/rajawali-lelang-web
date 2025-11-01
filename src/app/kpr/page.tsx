import { Metadata } from 'next'
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/common/ScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/layout/contact'

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
            <FadeInUp key={service.id} >
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
              <FadeInUp key={item.step}>
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
            <ContactSection />
        </FadeInUp>
      </div>
    </div>
  )
}