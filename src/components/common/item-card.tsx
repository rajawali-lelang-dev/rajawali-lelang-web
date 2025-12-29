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
  className = '',
}) => {
  const card = (
    <article
      className={[
        'rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden',
        'flex-shrink-0 flex flex-col h-full',
        className,
      ].join(' ')}
    >
      <div className="w-full h-44 md:h-48 relative bg-slate-100 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm md:text-base font-semibold text-slate-800 line-clamp-2 min-h-[2.5rem]">{title}</h3>
        <div className='flex items-center mt-1 gap-2 min-h-[1.75rem]'>
          <Image src='/images/assets/item-card/location.svg' alt='' width={0} height={0} className="object-contain w-1/20" />
          <span className="text-sm text-slate-500 line-clamp-1">{location}</span>
        </div>

        {/* <div className="mt-auto pt-3 flex justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center">
            <Image src='/images/assets/item-card/target.svg' alt='' width={14} height={14} className="object-contain w-1/4" />
            <span>{area ?? 0}</span>
          </div>
        </div> */}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
};

export default ItemCard;