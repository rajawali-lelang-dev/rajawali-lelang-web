'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 12L20 12" className="origin-center -translate-y-[7px] transition-all duration-300" />
    <path d="M4 12H20" className="origin-center transition-all duration-300" />
    <path d="M4 12H20" className="origin-center translate-y-[7px] transition-all duration-300" />
  </svg>
);

// Types
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logoHref?: string;
  logoSrc?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: '#', label: 'Beranda'},
  { href: '#sellables', label: 'Dijual' },
  { href: '#rentables', label: 'Disewa' },
  { href: '#newPrperties', label: 'Properti Baru' },
  { href: '#bankAssets', label: 'Aset Bank' },
  { href: '#kpr', label: 'KPR' },
];

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logoHref = '/',
      logoSrc = '/images/logo.png',
      navigationLinks = defaultNavigationLinks,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSignInClick,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };

      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') ref(node);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      else if (ref) (ref as any).current = node;
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'fixed top-0 left-0 z-50 w-full h-24 border-b border-transparent bg-transparent px-4 md:px-6',
          className
        )}
        {...props}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-2 flex h-full items-center gap-4">
          <div className="flex items-center gap-4">
            {/* logo */}
            <Link href={logoHref} className="flex items-center">
              <Image src={logoSrc} alt="Logo" width={68} height={60} className="object-contain" />
            </Link>
          </div>

            <nav className="ml-auto flex items-center gap-2">
            {!isMobile ? (
              <ul className="hidden md:flex items-center gap-4">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        'px-3 py-2 rounded-lg text-lg transition-colors',
                        link.active ? 'bg-accent text-white' : 'text-white/90 hover:bg-[#133D5E] hover:text-white'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <button className="p-2 rounded-md text-white/90 hover:bg-[#133D5E]">
                <HamburgerIcon />
              </button>
            )}
          </nav>
        </div>
      </header>
    );
  }
);

Navbar01.displayName = 'Navbar01';

export { HamburgerIcon };