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
  isHomePage?: boolean;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: '/', label: 'Beranda'},
  { href: '/about-us', label: 'Tentang Kami'},
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
      isHomePage = false,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSignInClick,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    // Background color berdasarkan page
    const headerBgClass = isHomePage 
      ? 'bg-transparent' 
      : 'bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500';
    
    const textColorClass = 'text-white';
    
    const hoverBgClass = isHomePage
      ? 'hover:bg-white/10'
      : 'hover:bg-blue-800/50';

    return (
      <header
        ref={combinedRef}
        className={cn(
          'fixed top-0 left-0 z-50 w-full h-20 md:h-24 border-b border-transparent px-4 md:px-6 transition-colors duration-300',
          headerBgClass,
          className
        )}
        {...props}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-2 flex h-full items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href={logoHref} className="flex items-center">
              <Image 
                src={logoSrc} 
                alt="Rajawali Lelang Indonesia" 
                width={68} 
                height={60} 
                className="object-contain h-12 md:h-14 w-auto" 
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="ml-auto flex items-center gap-2">
            {!isMobile ? (
              <ul className="hidden md:flex items-center gap-2 lg:gap-4">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'px-3 py-2 rounded-lg text-sm lg:text-base font-manrope font-medium transition-colors',
                        textColorClass,
                        hoverBgClass,
                        link.active && !isHomePage && 'bg-blue-800/60',
                        link.active && isHomePage && 'bg-white/15'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <button 
                className={cn(
                  'p-2 rounded-md transition-colors',
                  'text-white/90',
                  hoverBgClass
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <HamburgerIcon className={isMenuOpen ? '[&_path:nth-child(1)]:translate-y-0 [&_path:nth-child(1)]:rotate-45 [&_path:nth-child(2)]:opacity-0 [&_path:nth-child(3)]:-translate-y-0 [&_path:nth-child(3)]:-rotate-45' : ''} />
              </button>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className={cn(
            'absolute top-full left-0 right-0 shadow-lg border-t',
            isHomePage 
              ? 'bg-primary-400/95 backdrop-blur-md border-white/10' 
              : 'bg-gradient-to-r from-primary-200 via-blue-300 to-blue-400 border-blue-700'
          )}>
            <ul className="flex flex-col py-4 px-4 gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-manrope font-medium transition-colors',
                      'text-white',
                      isHomePage ? 'hover:bg-white/10' : 'hover:bg-blue-800/50',
                      link.active && 'bg-blue-800/60'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    );
  }
);

Navbar01.displayName = 'Navbar01';

export { HamburgerIcon };