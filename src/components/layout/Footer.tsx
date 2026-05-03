'use client';

export default function Footer() {
  return (
    <footer className="bg-noir py-8 border-t border-rose/10">
      <div className="px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Marca */}
        <span className="font-display text-white/30 text-2xl italic">Betz</span>

        {/* Copyright */}
        <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/25 text-center md:text-left">
          © 2026 Betz Peinados — Rosario, Argentina
        </p>

        {/* Social Link */}
        <a
          href="https://instagram.com/betzhairstyles"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[9px] tracking-[0.25em] uppercase text-white/25 no-underline transition-colors duration-300 hover:text-rose"
        >
          @betzhairstyles ↗
        </a>
      </div>
    </footer>
  );
}
