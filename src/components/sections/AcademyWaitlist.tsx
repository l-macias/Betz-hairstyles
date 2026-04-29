'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AcademyWaitlist() {
  const [instagram, setInstagram] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // Validación rápida del frontend
    const cleanHandle = instagram.trim().replace('@', '');
    if (!cleanHandle || cleanHandle.length < 2) {
      setError('Ingresá un usuario válido.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Conexión directa a tu tabla de Supabase
      const { error: supaError } = await supabase
        .from('waitlist')
        .insert([{ instagram: cleanHandle }]);

      if (supaError) {
        console.error('Error guardando waitlist:', supaError);
        setError('Hubo un error. Intentá de nuevo más tarde.');
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error de conexión:', err);
      setError('Error de red. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="academia"
      className="bg-rose w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ─── Columna Izquierda: Texto ─── */}
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/60 mb-3">
              06 — Próximamente
            </p>
            <h2 className="font-display text-white leading-tight mb-5 text-[clamp(2.5rem,5vw,3.8rem)]">
              Betz Academy
            </h2>
            <p className="font-body leading-relaxed mb-4 text-[clamp(0.95rem,1.5vw,1.1rem)] text-white/85 font-light max-w-md">
              Cursos online para quienes quieren aprender el arte del peinado
              profesional. Técnicas de salón, peinados para eventos y cómo
              construir tu propio negocio.
            </p>
            <p className="font-display text-[1.2rem] italic text-white/70">
              Todo lo que aprendí en 8 años — en tu pantalla.
            </p>
          </div>

          {/* ─── Columna Derecha: Formulario ─── */}
          <div className="lg:pl-8 xl:pl-16">
            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-sm backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              {submitted ? (
                <div className="animate-[fadeIn_0.5s_ease]">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 text-[20px] text-white">
                    ✓
                  </div>
                  <p className="font-display text-white text-[1.8rem] italic mb-2">
                    ¡Estás en la lista!
                  </p>
                  <p className="font-body text-[0.95rem] text-white/80 font-light leading-relaxed">
                    Te vamos a escribir un mensaje directo por Instagram ni bien
                    abramos los primeros cupos.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-body mb-6 text-[0.95rem] text-white/80 font-light leading-relaxed">
                    Dejá tu usuario de Instagram para sumarte a la lista de
                    espera prioritaria.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-white/40 text-[13px]">
                        @
                      </span>
                      <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder="tu.usuario"
                        className="w-full font-body bg-transparent outline-none placeholder:text-white/30 transition-all duration-300 border border-white/30 sm:border-r-0 pl-9 pr-4 py-4 text-[13px] text-white font-light focus:border-white/80"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="font-body transition-all duration-300 bg-white text-rose border border-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase whitespace-nowrap shrink-0 hover:bg-transparent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? 'Enviando...' : 'Anotarme'}
                    </button>
                  </div>

                  {error && (
                    <p className="font-body mt-4 text-[11px] tracking-wide text-white/90 bg-white/10 px-3 py-2 rounded-sm border border-white/20 inline-block animate-[fadeIn_0.3s_ease]">
                      {error}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
