'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Videos', href: '#videos' },
  { name: 'Academia', href: '#academia' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = () => setIsOpen(false);

  // Lógica de Scroll Unificada (Ocultar al bajar, mostrar al subir)
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

          {/* NAVEGACIÓN DESKTOP + ICONOS */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal hover:text-rose transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Separador sutil */}
            <div className="w-px h-4 bg-rose/20" />

            {/* Iconos Redes */}
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/betzhairstyles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:text-noir transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5493413276428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:text-noir transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139l.363.214c1.552.921 3.327 1.408 5.141 1.408h.006c5.344 0 9.691-4.347 9.693-9.691.002-2.59-1.008-5.024-2.847-6.863-1.839-1.838-4.272-2.847-6.862-2.847-5.346 0-9.694 4.347-9.695 9.691-.001 2.128.546 4.2 1.588 6.005l.235.408-1.112 4.062 4.156-1.09zm11.341-7.732c-.303-.151-1.793-.884-2.071-.985-.278-.101-.48-.151-.681.151-.202.303-.778.985-.953 1.186-.177.201-.353.227-.656.075-.304-.151-1.282-.472-2.443-1.508-.903-.805-1.512-1.8-1.689-2.102-.177-.302-.019-.465.132-.615.136-.135.303-.352.455-.529.151-.176.202-.293.303-.493.101-.2.05-.373-.025-.524-.076-.151-.682-1.644-.934-2.248-.246-.588-.497-.508-.681-.518-.176-.01-.378-.012-.581-.012-.202 0-.53.076-.807.379-.278.303-1.061 1.036-1.061 2.527 0 1.491 1.086 2.929 1.238 3.131.152.202 2.136 3.261 5.173 4.574.722.312 1.286.498 1.724.637.726.231 1.386.198 1.908.121.582-.085 1.793-.733 2.046-1.439.252-.707.252-1.313.176-1.439-.075-.126-.278-.202-.581-.353z" />
                </svg>
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
        className={`md:hidden fixed inset-0 z-40 bg-petal flex flex-col transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="font-display text-[2.5rem] italic text-noir hover:text-rose transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-full px-8 pb-12 flex flex-col items-center text-center">
          <div className="w-12 h-px bg-rose/20 mb-6" />
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-rose mb-4">
            Contacto Directo
          </p>
          <div className="flex gap-8">
            <a
              href="https://wa.me/5493413276428"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal hover:text-rose transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/betzhairstyles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal hover:text-rose transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
