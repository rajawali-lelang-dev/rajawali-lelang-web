'use client'

import { FadeInUp } from '@/components/common/ScrollAnimation'
import React from 'react'

export default function CalculatorPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 max-w-7xl">
        <FadeInUp delay={0}>
          <div className="text-center mb-12">
            <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-4">
              Kalkulator KPR
            </h1>
            <p className="font-manrope text-neutral-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Hitung estimasi cicilan KPR Anda dengan mudah dan akurat menggunakan kalkulator kami
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <KPRCalculator />
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}

function KPRCalculator() {
  const [pokokPinjaman, setPokokPinjaman] = React.useState<string>('500000000')
  const [bungaTahunan, setBungaTahunan] = React.useState<string>('8')
  const [tenorTahun, setTenorTahun] = React.useState<string>('15')
  const [cicilanBulanan, setCicilanBulanan] = React.useState<number>(0)

  const calculateKPR = () => {
    const P = parseFloat(pokokPinjaman) || 0
    const annualRate = parseFloat(bungaTahunan) || 0
    const years = parseFloat(tenorTahun) || 0

    if (P === 0 || annualRate === 0 || years === 0) {
      setCicilanBulanan(0)
      return
    }

    // Convert annual interest rate to monthly (decimal)
    const i = (annualRate / 100) / 12
    // Convert years to months
    const n = years * 12

    // Monthly payment formula: P × [i(1 + i)^n] / [(1 + i)^n - 1]
    const numerator = i * Math.pow(1 + i, n)
    const denominator = Math.pow(1 + i, n) - 1
    const cicilan = P * (numerator / denominator)

    setCicilanBulanan(cicilan)
  }

  React.useEffect(() => {
    calculateKPR()
  }, [pokokPinjaman, bungaTahunan, tenorTahun])

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Formula Section */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 mb-8">
        <h3 className="font-manrope font-bold text-xl text-primary-600 mb-4">
          1. Rumus Dasar Perhitungan KPR
        </h3>
        <p className="font-manrope text-neutral-700 mb-4">
          KPR biasanya memakai <strong>sistem bunga efektif/anuitas</strong>. Rumus cicilan per bulan:
        </p>
        
        {/* Formula Display */}
        <div className="bg-white rounded-lg p-6 mb-4 text-center">
          <div className="font-mono text-lg mb-2">
            <span className="italic">Cicilan</span> = P × 
            <span className="inline-block mx-2">
              <div className="border-b-2 border-neutral-800 pb-1">
                <span className="italic">i</span>(1 + <span className="italic">i</span>)<sup className="italic">n</sup>
              </div>
              <div className="pt-1">
                (1 + <span className="italic">i</span>)<sup className="italic">n</sup> - 1
              </div>
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-neutral-800">P =</span>
            <span className="text-neutral-700">Pokok pinjaman</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-neutral-800">i =</span>
            <span className="text-neutral-700">Bunga per bulan (bunga tahunan ÷ 12)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-neutral-800">n =</span>
            <span className="text-neutral-700">Total bulan (tahun × 12)</span>
          </div>
        </div>
      </div>

      {/* Calculator Input Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div>
          <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-6">
            Masukkan Data
          </h3>
          
          <div className="space-y-6">
            {/* Pokok Pinjaman */}
            <div>
              <label className="block font-manrope font-semibold text-neutral-700 mb-2">
                Pokok Pinjaman (P)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">Rp</span>
                <input
                  type="text"
                  value={pokokPinjaman}
                  onChange={(e) => setPokokPinjaman(e.target.value.replace(/\D/g, ''))}
                  className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none font-manrope"
                  placeholder="500000000"
                />
              </div>
              <p className="text-sm text-neutral-500 mt-1">
                {formatRupiah(parseFloat(pokokPinjaman) || 0)}
              </p>
            </div>

            {/* Bunga Tahunan */}
            <div>
              <label className="block font-manrope font-semibold text-neutral-700 mb-2">
                Bunga Tahunan
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bungaTahunan}
                  onChange={(e) => setBungaTahunan(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none font-manrope"
                  placeholder="8"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500">%</span>
              </div>
              <p className="text-sm text-neutral-500 mt-1">
                Bunga per bulan: {((parseFloat(bungaTahunan) || 0) / 12).toFixed(4)}%
              </p>
            </div>

            {/* Tenor */}
            <div>
              <label className="block font-manrope font-semibold text-neutral-700 mb-2">
                Tenor (Jangka Waktu)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={tenorTahun}
                  onChange={(e) => setTenorTahun(e.target.value)}
                  className="w-full pr-16 pl-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none font-manrope"
                  placeholder="15"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500">Tahun</span>
              </div>
              <p className="text-sm text-neutral-500 mt-1">
                Total: {(parseFloat(tenorTahun) || 0) * 12} bulan
              </p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div>
          <h3 className="font-manrope font-bold text-xl text-neutral-800 mb-6">
            Hasil Perhitungan
          </h3>
          
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <p className="font-manrope text-primary-100 text-sm mb-2">Cicilan Per Bulan</p>
              <p className="font-manrope font-bold text-4xl">
                {formatRupiah(cicilanBulanan)}
              </p>
            </div>

            <div className="border-t border-primary-400 pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-manrope text-primary-100">Total Pinjaman:</span>
                <span className="font-manrope font-semibold">{formatRupiah(parseFloat(pokokPinjaman) || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-manrope text-primary-100">Total Cicilan:</span>
                <span className="font-manrope font-semibold">
                  {formatRupiah(cicilanBulanan * (parseFloat(tenorTahun) || 0) * 12)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-manrope text-primary-100">Total Bunga:</span>
                <span className="font-manrope font-semibold">
                  {formatRupiah((cicilanBulanan * (parseFloat(tenorTahun) || 0) * 12) - (parseFloat(pokokPinjaman) || 0))}
                </span>
              </div>
              <div className="flex justify-between pt-4 border-t border-primary-400">
                <span className="font-manrope text-primary-100">Tenor:</span>
                <span className="font-manrope font-semibold">{tenorTahun} Tahun ({(parseFloat(tenorTahun) || 0) * 12} bulan)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-neutral-700">
              <strong>Catatan:</strong> Perhitungan ini menggunakan metode anuitas (cicilan tetap setiap bulan). 
              Hasil aktual dapat berbeda tergantung kebijakan bank dan biaya tambahan lainnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
