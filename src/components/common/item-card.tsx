import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ItemCardProps {
  title: string;
  href?: string;
  imageSrc: string;
  imageAlt?: string;
  location?: string;
  price?: string;
  area?: string;
  beds?: number;
  baths?: number;
  likes?: number;
  className?: string;
  CarSpace?: number;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  href,
  imageSrc,
  imageAlt = '',
  location,
  area,
  beds,
  baths,
  className = '',
}) => {
  const card = (
    <article
      className={[
        'rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden',
        'flex-shrink-0',
        className,
      ].join(' ')}
    >
      <div className="w-full h-44 md:h-48 relative bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm md:text-base font-semibold text-slate-800">{title}</h3>
        <div className='flex items-center mt-1 gap-2'>
          <Image src='/images/assets/item-card/location.svg' alt='' width={0} height={0} className="object-contain w-1/20" />
          <span className="mt-1 text-sm text-slate-500">{location}</span>
        </div>

        <div className="mt-3 flex justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center">
            <Image src='/images/assets/item-card/target.svg' alt='' width={14} height={14} className="object-contain w-1/4" />
            <span>{area ?? 0}</span>
          </div>
          <div className="flex items-center">
            <Image src='/images/assets/item-card/bed.svg' alt='' width={0} height={0} className="object-contain w-1/4" />
            <span>{beds ?? 0} Beds</span>
          </div>

          <div className="flex items-center">
            <Image src='/images/assets/item-card/shower.svg' alt='' width={14} height={14} className="object-contain w-1/4" />
            <span>{baths ?? 0} Baths</span>
          </div>
          <div className="flex items-center">
            <Image src='/images/assets/item-card/car.svg' alt='' width={14} height={14} className="object-contain w-1/4" />
            <span>{baths ?? 0} Cars</span>
          </div>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
};

export default ItemCard;