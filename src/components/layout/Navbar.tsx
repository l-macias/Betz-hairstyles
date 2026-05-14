'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Videos', href: '/#videos' },
  { name: 'Academia', href: '/#academia' },
  { name: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // Detectamos en qué página estamos

  const handleLinkClick = () => setIsOpen(false);

  // Lógica de Scroll Unificada
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isOpen
            ? 'bg-transparent'
            : 'bg-blush/85 backdrop-blur-md border-b border-rose/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-50">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-display text-[1.7rem] tracking-wide text-noir"
            >
              Betz
            </Link>
          </div>

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                // Si estamos en la Home, enviamos solo al ID para que SmoothScroll funcione mejor.
                // Si estamos en una subpágina, enviamos a la ruta completa /#ID.
                const targetHref =
                  pathname === '/' ? link.href.replace('/', '') : link.href;

                return (
                  <Link
                    key={link.name}
                    href={targetHref}
                    className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal hover:text-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="w-px h-4 bg-rose/20" />

            {/* Iconos Redes Desktop */}
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/betzhairstyles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:text-noir transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/5493413276428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:text-noir transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </nav>

          {/* MENÚ MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 flex flex-col justify-center items-end w-8 h-8 gap-1.5 focus:outline-none group"
            aria-label="Alternar menú"
          >
            <span
              className={`h-[1px] bg-noir transition-all duration-300 ease-out ${
                isOpen
                  ? 'w-6 rotate-45 translate-y-[7px]'
                  : 'w-6 group-hover:w-5'
              }`}
            />
            <span
              className={`h-[1px] bg-noir transition-all duration-300 ease-out ${
                isOpen
                  ? 'w-6 -rotate-45 -translate-y-[7px]'
                  : 'w-4 group-hover:w-6'
              }`}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-petal flex flex-col transition-opacity duration-300 overflow-y-auto ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12">
          {/* CONTACTO RÁPIDO MOBILE */}
          <div className="flex justify-center items-center gap-12 mb-12 pb-12 border-b border-rose/20">
            <a
              href="https://wa.me/5493413276428"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                <FaWhatsapp size={32} className="text-noir" />
              </div>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-noir/70">
                WhatsApp
              </span>
            </a>

            <a
              href="https://instagram.com/betzhairstyles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                <FaInstagram size={32} className="text-noir" />
              </div>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-noir/70">
                Instagram
              </span>
            </a>
          </div>

          {/* LINKS DE NAVEGACIÓN MOBILE */}
          <nav className="flex flex-col items-center gap-8 flex-1">
            {NAV_LINKS.map((link) => {
              const targetHref =
                pathname === '/' ? link.href.replace('/', '') : link.href;
              return (
                <Link
                  key={link.name}
                  href={targetHref}
                  onClick={handleLinkClick}
                  className="font-display text-[2.5rem] italic text-noir hover:text-rose transition-colors duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
