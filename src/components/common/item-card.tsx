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
}

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  href,
  imageSrc,
  imageAlt = '',
  location,
  price,
  area,
  beds,
  baths,
  likes,
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
        {location && <p className="mt-1 text-xs text-slate-500">{location}</p>}

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-bold text-primary-600">{price ?? ''}</div>
          <div className="text-xs text-slate-500">{area ?? ''}</div>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{beds ?? 0} Beds</span>
          </div>

          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{baths ?? 0} Baths</span>
          </div>

          {likes !== undefined && (
            <div className="ml-auto flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-rose-500">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="0" />
              </svg>
              <span>{likes}</span>
            </div>
          )}
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