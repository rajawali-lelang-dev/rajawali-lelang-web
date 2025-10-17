'use client'

import React, { useEffect, useRef } from 'react'

interface ReviewCardProps {
  name: string
  role: string
  review: string
}

export function ReviewCard({ name, role, review }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-6 shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="font-manrope font-bold text-lg text-neutral-900">
          {name}
        </h3>
        <p className="font-manrope text-sm text-neutral-600">
          {role}
        </p>
      </div>
      <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
        {review}
      </p>
    </div>
  )
}

interface ReviewCarouselProps {
  reviews: {
    name: string
    role: string
    review: string
  }[]
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Pixels per frame
    let animationFrameId: number

    const autoScroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      
      // Reset position when reaching the end of first set
      const maxScroll = scrollContainer.scrollWidth / 2
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-center font-manrope font-bold text-3xl text-neutral-900 mb-2">
          Apa <span className="text-primary-600">Kata Mereka</span> yang Sudah Lelang Bersama Kami?
        </h2>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Duplicate reviews for infinite scroll effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            role={review.role}
            review={review.review}
          />
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
