'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

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
  dropdown?: { href: string; label: string }[];
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
  { 
    href: '/about-us', 
    label: 'Tentang Kami',
    dropdown : [
      { href: '/about-us#profil', label: 'Profil Perusahaan' },
      { href: '/about-us#visi-misi', label: 'Visi & Misi' },
      { href: '/about-us#layanan', label: 'Layanan Kami' },
      { href: '/about-us#tata-cara', label: 'Tata Cara' },
      { href: '/about-us#dasar-hukum', label: 'Dasar Hukum'}
    ]
  },
  { 
    href: '/catalog', 
    label: 'Aset Jual',
    dropdown: [
      { href: '/dijual/properti', label: 'Properti' },
      { href: '/dijual/perhiasan', label: 'Perhiasan' },
      { href: '/dijual/mobil', label: 'Mobil' },
      { href: '/dijual/mesin', label: 'Mesin' },
    ]
  },
  { href: '/aset-lelang', label: 'Aset Lelang',
    dropdown : [
      { href: '/aset-lelang', label: 'Properti' },
      { href: '/aset-lelang/perhiasan', label: 'Perhiasan' },
      { href: '/aset-lelang/mobil', label: 'Mobil' },
      { href: '/aset-lelang/mesin', label: 'Mesin' },

    ]
  },
  { href: '/kpr', label: 'KPR' },
  { href: '/lelang-terdekat', label: 'Lelang Terdekat' },
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
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    // Scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') ref(node);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      else if (ref) (ref as any).current = node;
    }, [ref]);

    // Dynamic styling based on scroll - FIXED
    const headerBgClass = isScrolled
      ? 'navbar-scrolled-bg backdrop-blur-md shadow-lg border-transparent'
      : isHomePage 
        ? 'bg-transparent border-transparent' 
        : 'bg-transparent border-transparent';
    
    const textColorClass = isScrolled
      ? 'text-primary-600'
      : isHomePage
        ? 'text-white'
        : 'text-primary-500';
    
    const hoverBgClass = isScrolled
      ? 'hover:bg-primary-100/80'  // FIXED: primary-100 cocok dengan primary-600 text
      : isHomePage
        ? 'hover:bg-white/10'
        : 'hover:bg-primary-100/50';

    const activeBgClass = isScrolled
      ? 'bg-primary-200/60'  // FIXED: primary-200 untuk active state
      : isHomePage
        ? 'bg-white/15'
        : 'bg-primary-200/40';

    const handleMouseEnter = (label: string) => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
      dropdownTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
    };

    const toggleMobileDropdown = (label: string) => {
      setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
      <header
        ref={combinedRef}
        className={cn(
          'fixed top-0 left-0 z-50 w-full h-20 md:h-24 border-b px-4 md:px-6 transition-all duration-300',
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
                  <li 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          className={cn(
                            'flex items-center gap-1 px-3 py-2 rounded-lg text-sm lg:text-base font-manrope font-medium transition-colors',
                            textColorClass,
                            hoverBgClass,
                            link.active && activeBgClass
                          )}
                        >
                          {link.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            openDropdown === link.label && "rotate-180"
                          )} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {openDropdown === link.label && (
                          <div 
                            className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 text-sm font-manrope text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'px-3 py-2 rounded-lg text-sm lg:text-base font-manrope font-medium transition-colors',
                          textColorClass,
                          hoverBgClass,
                          link.active && activeBgClass
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <button 
                className={cn(
                  'p-2 rounded-md transition-colors',
                  isScrolled ? 'text-primary-600' : 'text-white/90',
                  isScrolled ? 'hover:bg-primary-100/80' : 'hover:bg-white/10'
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
            isScrolled
              ? 'navbar-mobile-scrolled-bg backdrop-blur-md border-white/10'
              : isHomePage 
                ? 'bg-primary-400/95 backdrop-blur-md border-white/10' 
                : 'bg-gradient-to-r from-primary-200 via-blue-300 to-blue-400 border-blue-700'
          )}>
            <ul className="flex flex-col py-4 px-4 gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className={cn(
                          'flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-manrope font-medium transition-colors',
                          'text-white hover:bg-white/20',
                          link.active && 'bg-white/25'
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )} />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {openDropdown === link.label && (
                        <div className="mt-1 ml-4 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 rounded-lg text-sm font-manrope transition-colors text-white/90 hover:bg-white/15"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-manrope font-medium transition-colors',
                        'text-white hover:bg-white/20',
                        link.active && 'bg-white/25'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
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