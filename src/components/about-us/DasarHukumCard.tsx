import React from 'react'
import { Scale, Building, Handshake, FileText, Check } from 'lucide-react'

interface DasarHukumCardProps {
  title: string
  description: string
  items: string[]
  icon: 'Scale' | 'Building' | 'Handshake' | 'FileText'
}

const iconMap = {
  Scale: Scale,
  Building: Building,
  Handshake: Handshake,
  FileText: FileText,
}

export default function DasarHukumCard({ title, description, items, icon }: DasarHukumCardProps) {
  const IconComponent = iconMap[icon]
  
  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-primary-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="font-manrope font-bold text-xl text-primary-700 mb-2">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="font-manrope text-neutral-700 mb-4 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="font-manrope text-neutral-700 text-sm leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
