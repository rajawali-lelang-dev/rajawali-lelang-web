import React from 'react'
import Image from 'next/image'

interface TataCaraCardProps {
  number: string
  title: string
  description: string
  iconSrc?: string
}

export default function TataCaraCard({ number, title, description, iconSrc }: TataCaraCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="font-manrope font-bold text-2xl text-white">{number}</span>
        </div>
        {iconSrc && (
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src={iconSrc}
              alt={title}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      <h3 className="font-manrope font-bold text-xl text-primary-600 mb-3">
        {title}
      </h3>
      <p className="font-manrope text-neutral-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
