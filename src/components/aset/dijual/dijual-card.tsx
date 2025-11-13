import Image from "next/image";
import Link from "next/link";
import React from "react";

// Union type untuk semua item yang bisa dijual
import type { Property } from "@/lib/properti";
import type { Mobil } from "@/lib/mobil";
import type { Perhiasan } from "@/lib/perhiasan";
import type { Mesin } from "@/lib/mesin";

export type DijualItem = Property | Mobil | Perhiasan | Mesin;

export interface DijualCardProps {
  item: DijualItem;
  className?: string;
  href?: string;
}

/**
 * DijualCard - Universal card component untuk semua jenis item dijual
 * Automatically adapts to show relevant fields based on item type
 */
export default function DijualCard({
  item,
  className = "",
  href,
}: DijualCardProps) {
  const formatPrice = (v?: number) =>
    typeof v === "number"
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(v)
      : "";

  const statusColor = (() => {
    if (!item.status) return "bg-gray-400";
    if (/lelang/i.test(item.status)) return "bg-red-500";
    if (/featured/i.test(item.status)) return "bg-yellow-500";
    if (/sold/i.test(item.status)) return "bg-gray-500";
    return "bg-green-500";
  })();

  // Type guards untuk menentukan jenis item
  const isProperty = (item: DijualItem): item is Property =>
    "landArea" in item && "buildingArea" in item;
  const isMobil = (item: DijualItem): item is Mobil =>
    "brand" in item && "mileage" in item && "transmission" in item;
  const isPerhiasan = (item: DijualItem): item is Perhiasan =>
    "material" in item && "weight" in item;
  const isMesin = (item: DijualItem): item is Mesin =>
    "brand" in item && "condition" in item && "year" in item && !("mileage" in item);

  const renderDetails = () => {
    if (isProperty(item)) {
      return (
        <>
          <div className="flex items-center gap-4 mb-3 text-xs text-neutral-600 flex-wrap">
            {item.landArea > 0 && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
                <span className="whitespace-nowrap">LT: {item.landArea} m²</span>
              </div>
            )}
            {item.buildingArea > 0 && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>LB: {item.buildingArea} m²</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>{item.certificateType}</span>
            </div>
          </div>
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {item.type}
            </span>
          </div>
        </>
      );
    }

    if (isMobil(item)) {
      return (
        <>
          <div className="flex items-center gap-4 mb-3 text-xs text-neutral-600 flex-wrap">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{item.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <span>{item.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>{item.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
              <span>{item.fuelType}</span>
            </div>
          </div>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {item.brand} {item.model}
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {item.engineCapacity} cc
            </span>
          </div>
        </>
      );
    }

    if (isPerhiasan(item)) {
      return (
        <>
          <div className="flex items-center gap-4 mb-3 text-xs text-neutral-600 flex-wrap">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>{item.material}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span>{item.weight} gram</span>
            </div>
            {item.karat && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                <span>{item.karat}K</span>
              </div>
            )}
            {item.gemstone && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{item.gemstone}</span>
              </div>
            )}
          </div>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
              {item.type}
            </span>
            {item.brand && (
              <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
                {item.brand}
              </span>
            )}
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {item.condition}
            </span>
          </div>
        </>
      );
    }

    if (isMesin(item)) {
      return (
        <>
          <div className="flex items-center gap-4 mb-3 text-xs text-neutral-600 flex-wrap">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
              <span>{item.brand}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{item.year}</span>
            </div>
            {item.capacity && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <span>{item.capacity}</span>
              </div>
            )}
            {item.hoursUsed && (
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{item.hoursUsed.toLocaleString()} jam</span>
              </div>
            )}
          </div>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
              {item.type}
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {item.model}
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {item.condition}
            </span>
          </div>
        </>
      );
    }

    return null;
  };

  const card = (
    <article
      className={[
        "bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden",
        "flex-shrink-0",
        className,
      ].join(" ")}
    >
      <div className="relative h-52 w-full">
        <Image
          src={
            Array.isArray(item.image)
              ? item.image[0] ?? "/placeholder.png"
              : item.image ?? "/placeholder.png"
          }
          alt={item.title}
          fill
          className="object-cover"
        />
        {item.status && (
          <div
            className={`absolute top-3 right-3 ${statusColor} text-white px-3 py-1 rounded-md text-xs font-semibold`}
          >
            {item.status}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-1 line-clamp-1">
          {item.title}
        </h3>

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
          {item.location}
        </p>

        <p className="font-manrope font-bold text-xl text-primary-600 mb-3">
          {formatPrice(item.price)}
        </p>

        {renderDetails()}

        <p className="font-manrope text-xs text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <div className="grid md:grid-cols-[80%_20%] gap-2">
          <Link
            href={href ?? `#${item.id}`}
            target={href ? "_blank" : undefined}
            className="w-full"
          >
            <button className="w-full text-primary-600 hover:bg-neutral-100 bg-white  border-1 border-primary-600 font-semibold py-2.5 rounded-lg transition-colors">
              Lihat Detail
            </button>
          </Link>
            <Link
            href={`https://wa.me/6281234567890?text=Saya tertarik dengan ${item.title}`}
            target="_blank"
            className="w-full"
          >
            <button className="w-full h-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
  return card;
}