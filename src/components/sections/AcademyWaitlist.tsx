"use client";

import { useState } from "react";

export default function AcademyWaitlist() {
  const [instagram, setInstagram] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Validación rápida del frontend
    const cleanHandle = instagram.trim().replace("@", "");
    if (!cleanHandle || cleanHandle.length < 2) {
      setError("Ingresá un usuario válido.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instagram: cleanHandle }),
      });
      
      if (res.ok) setSubmitted(true);
      else setError("Algo salió mal. Intentá de nuevo.");
    } catch {
      setError("Algo salió mal. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="academia" className="bg-rose py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/60 mb-3">
              06 — Próximamente
            </p>
            <h2 className="font-display text-white leading-tight mb-5 text-[clamp(2rem,5vw,3.8rem)]">
              Betz Academy
            </h2>
            <p className="font-body leading-relaxed mb-3 text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/85 font-light max-w-[420px]">
              Cursos online para quienes quieren aprender el arte del peinado profesional. Técnicas de salón, peinados para eventos y cómo construir tu propio negocio.
            </p>
            <p className="font-display text-[1.1rem] italic text-white/70">
              Todo lo que aprendí en 8 años — en tu pantalla.
            </p>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="animate-[fadeIn_0.5s_ease]">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 text-[20px] text-white">
                  ✓
                </div>
                <p className="font-display text-white text-[1.8rem] italic mb-2">
                  ¡Anotada!
                </p>
                <p className="font-body text-[0.9rem] text-white/75 font-light">
                  Te escribiremos por mensaje directo cuando abramos las inscripciones.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-body mb-6 text-[0.9rem] text-white/80 font-light leading-[1.7]">
                  Dejá tu usuario de Instagram y sé la primera en enterarte cuando abramos cupos.
                </p>

                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-white/40 text-[13px]">
                      @
                    </span>
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="tu.usuario"
                      className="w-full font-body bg-transparent outline-none placeholder:text-white/40 transition-all duration-300 border border-white/40 sm:border-r-0 pl-9 pr-[18px] py-[14px] text-[13px] text-white font-light focus:border-white/90"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="font-body transition-all duration-300 bg-white text-dusty border-none px-6 py-[14px] text-[11px] tracking-[0.2em] uppercase font-normal whitespace-nowrap shrink-0 hover:bg-blush disabled:cursor-wait cursor-pointer"
                  >
                    {loading ? "..." : "Anotarme"}
                  </button>
                </div>

                {error && (
                  <p className="font-body mt-3 text-[12px] text-white/70 animate-[fadeIn_0.3s_ease]">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}