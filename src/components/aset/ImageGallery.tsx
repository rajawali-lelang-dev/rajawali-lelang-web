'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)

  const handleThumbnailClick = (index: number): void => {
    setSelectedImageIndex(index)
  }

  const openLightbox = (): void => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = (): void => {
    setIsLightboxOpen(false)
  }

  const goToNextImage = (): void => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevImage = (): void => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goToNextImage()
      if (e.key === 'ArrowLeft') goToPrevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLightboxOpen])

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Main Image Display */}
        <div className="relative h-96">
          <button
            onClick={openLightbox}
            className="relative w-full h-full cursor-zoom-in group"
            aria-label="Lihat gambar dalam ukuran penuh"
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`${title} - Image ${selectedImageIndex + 1}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              priority={selectedImageIndex === 0}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </div>
          </button>
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm pointer-events-none">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2 p-4">
            {images.slice(0, 5).map((img: string, index: number) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedImageIndex === index
                    ? 'ring-4 ring-primary-500 scale-95'
                    : 'hover:opacity-80 hover:scale-105'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`${title} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Tutup"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg text-sm z-10">
            {selectedImageIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevImage()
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              aria-label="Gambar sebelumnya"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`${title} - Image ${selectedImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNextImage()
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              aria-label="Gambar selanjutnya"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            Tekan ESC untuk menutup {images.length > 1 && '• Gunakan ← → untuk navigasi'}
          </div>
        </div>
      )}
    </>
  )
}
