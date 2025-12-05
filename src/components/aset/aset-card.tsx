"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface AsetCardProps {
  id: string;
  title: string;
  location?: string;
  price: number;
  image: string[] | [];
  status?: string;
  type: 'properti' | 'mobil' | 'perhiasan' | 'mesin';
  mode: 'dijual' | 'lelang';
  additionalInfo?: {
    label: string;
    value: string;
  }[];
}

export default function AsetCard({
  id,
  title,
  location,
  price,
  image,
  status,
  type,
  mode,
  additionalInfo = []
}: AsetCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = image.length > 1;

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, image.length]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = () => {
    if (!status) return "bg-gray-500";
    
    switch (status.toLowerCase()) {
      case "lelang aktif":
      case "available":
        return "bg-red-500";
      case "featured":
        return "bg-yellow-500";
      case "segera":
      case "coming soon":
        return "bg-blue-500";
      case "sold":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const detailUrl = `/aset/${mode}/${type}/${id}`;

  return (
    <Link href={detailUrl}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-52 w-full group">
          <Image
            src={image[currentImageIndex]}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Status Badge */}
          {status && (
            <div
              className={`absolute top-3 right-3 ${getStatusColor()} text-white px-3 py-1 rounded-md text-xs font-semibold z-10`}
            >
              {status}
            </div>
          )}

          {/* Navigation Arrows - Show only if multiple images */}
          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {image.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Location */}
          {location && (
            <p className="font-manrope text-sm text-neutral-600 mb-3 flex items-center gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </p>
          )}

          {/* Additional Info */}
          {additionalInfo.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 text-xs text-neutral-600">
              {additionalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className="font-semibold">{info.label}:</span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-auto">
            <p className="font-manrope font-bold text-xl text-green-600">
              {formatPrice(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}