import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  iconSrc: string
  imageSrc: string
  href?: string
}



export default function ServiceCard({ title, iconSrc, imageSrc, href }: ServiceCardProps) {
  const CardContent = (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-48 sm:h-56">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Color Overlay - matching homepage blue gradient style */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/80 via-primary-500/70 to-primary-700/90 group-hover:from-primary-700/85 group-hover:via-primary-600/75 group-hover:to-primary-800/95 transition-all duration-300" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
        {/* Icon */}
        <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg"
          />
        </div>
        
        {/* Title */}
        <h3 className="font-manrope font-bold text-white text-base sm:text-lg drop-shadow-md">
          {title}
        </h3>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
