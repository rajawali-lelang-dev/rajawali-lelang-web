import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ActionCardProps {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  href,
  icon,
  imgSrc,
  imgAlt = title,
  className = '',
  onClick,
}) => {
  const content = (
    <div
      role={href ? undefined : 'button'}
      onClick={onClick}
      className={[
        'group flex flex-col items-center justify-center gap-4',
        'w-40 h-40', // ✅ Fixed width and height
        'rounded-lg bg-white shadow-md py-6 px-8 text-center transition-transform duration-200',
        'hover:scale-[1.02] hover:shadow-xl',
        className,
      ].join(' ')}
    >
      <div className="h-12 w-12 flex items-center justify-center transition-all duration-200 group-hover:scale-[1.06]">
        {imgSrc ? (
          <Image src={imgSrc} alt={imgAlt} width={48} height={48} className="object-contain" />
        ) : (
          icon ?? null
        )}
      </div>
      <div className="text-xs font-medium text-slate-700 line-clamp-2">{title}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default ActionCard;