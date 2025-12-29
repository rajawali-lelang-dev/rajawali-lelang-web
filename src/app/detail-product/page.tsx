'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProductDetailPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to lelang properti page since detail-product is deprecated
    router.replace('/aset/lelang/properti')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Mengalihkan...</h1>
        <p className="text-gray-600">Anda akan dialihkan ke halaman properti lelang</p>
      </div>
    </div>
  )
}
