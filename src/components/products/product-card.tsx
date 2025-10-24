import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  landArea: number;
  buildingArea: number;
  certificateType: "SHM" | "HGB";
  description: string;
  status: "Lelang Aktif" | "Featured" | "Segera" | "Default" | "Available" | "Sold";
  image: string;
}

export default function ProductCard({
  id,
  title,
  location,
  price,
  landArea,
  buildingArea,
  certificateType,
  description,
  status,
  image,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = () => {
    switch (status) {
      case "Lelang Aktif":
        return "bg-red-500";
      case "Featured":
        return "bg-yellow-500";
      case "Segera":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Image Section */}
      <div className="relative h-52 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        {/* Status Badge */}
        <div
          className={`absolute top-3 right-3 ${getStatusColor()} text-white px-3 py-1 rounded-md text-xs font-semibold`}
        >
          {status}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-manrope font-bold text-lg text-neutral-800 mb-1 line-clamp-1">
          {title}
        </h3>

        {/* Location */}
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

        {/* Price */}
        <p className="font-manrope font-bold text-xl text-red-600 mb-3">
          {formatPrice(price)}
        </p>

        {/* Property Details */}
        <div className="flex items-center gap-12 mb-3 text-xs text-neutral-600">
          {landArea > 0 && (
            <div className="flex items-center gap-1">
              <Image
                src="/images/products/landArea.svg"
                alt=""
                width={20}
                height={20}
                className="object-contain w-1/4"
              />
              <span className="whitespace-nowrap">{landArea} m²</span>
            </div>
          )}
          {buildingArea > 0 && (
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
              <span>{buildingArea} m²</span>
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
            <span>{certificateType}</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-manrope text-xs text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Contact Agent Button */}
        <Link
          href={`https://wa.me/6281234567890?text=Saya tertarik dengan properti ${title}`}
          target="_blank"
        >
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Agen
          </button>
        </Link>
      </div>
    </div>
  );
}
