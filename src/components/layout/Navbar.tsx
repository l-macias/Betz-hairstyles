"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Videos", href: "#videos" },
  { label: "Academia", href: "#academia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevenir scroll cuando menú abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blush/92 backdrop-blur-md border-b border-rose/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-noir hover:text-rose transition-colors duration-300 text-[1.6rem] tracking-[0.05em] no-underline"
          >
            Betz
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-muted hover:text-rose transition-colors duration-300 font-normal no-underline"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Instagram */}
            <a
              href="https://instagram.com/betzhairstyles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body transition-all duration-300 bg-rose text-white px-[18px] py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-dusty no-underline font-normal rounded-sm"
            >
              Instagram ↗
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer border-none bg-transparent"
          >
            <span
              className={`block h-px bg-noir transition-all duration-300 origin-center ${
                menuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-noir transition-all duration-300 ${
                menuOpen ? "w-4 opacity-0" : "w-4 opacity-100"
              }`}
            />
            <span
              className={`block h-px bg-noir transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-blush transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-rose/30" />

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-noir hover:text-rose transition-all duration-300 text-[clamp(2rem,8vw,3rem)] no-underline ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://instagram.com/betzhairstyles"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-10 font-body text-[11px] tracking-[0.3em] uppercase text-muted hover:text-rose transition-colors duration-300 no-underline"
        >
          @betzhairstyles ↗
        </a>
      </div>
    </>
  );
}