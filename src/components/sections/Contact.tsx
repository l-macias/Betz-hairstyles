'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false); // Nuevo estado de error

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false); // Reseteamos el error si vuelve a intentar

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const { error } = await supabase.from('consultas').insert([
        {
          name: data.name,
          phone: data.phone,
          date: data.date,
          service: data.service,
          message: data.message,
        },
      ]);

      if (error) {
        console.error('Error de Supabase:', error);
        setIsError(true);
        setIsSubmitting(false);
        // El botón vuelve a la normalidad después de 4 segundos
        setTimeout(() => setIsError(false), 4000);
        return;
      }

      // Si salió todo bien:
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error de red o fetch:', err);
      setIsError(true);
      setIsSubmitting(false);
      setTimeout(() => setIsError(false), 4000);
    }
  };

  return (
    <section
      id="contacto"
      className="relative bg-blush w-full overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="absolute hidden lg:block w-[600px] h-[600px] rounded-full border border-rose/10 -right-40 top-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ─── Columna Izquierda ─── */}
        <div className="flex flex-col">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-4">
            04 — Contacto
          </p>
          <h2
            className="font-display text-noir leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Hagamos tu <br />
            <span className="text-rose italic">fecha oficial.</span>
          </h2>

          <p className="font-body text-charcoal font-light leading-relaxed mb-10 max-w-md text-[clamp(0.9rem,1.5vw,1.05rem)]">
            Completá el formulario con los detalles de tu evento para consultar
            disponibilidad y recibir un presupuesto a medida. Si preferís una
            respuesta más rápida, escribime directamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12 lg:mb-0">
            <a
              href="https://wa.me/5493413276428?text=Hola%20Betz!%20Vengo%20de%20tu%20web%20y%20me%20encantaría%20consultarte%20disponibilidad."
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex justify-center items-center gap-3 bg-rose text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-dusty no-underline w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Escribime en Whatsapp
            </a>
          </div>
        </div>

        {/* ─── Columna Derecha: Formulario ─── */}
        <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(28,25,23,0.04)] rounded-sm relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-rose/20 py-3 text-charcoal font-body text-sm focus:outline-none focus:border-rose transition-colors peer placeholder-transparent"
                  placeholder="Tu nombre"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-muted font-body text-xs tracking-[0.1em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-rose peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-rose cursor-text"
                >
                  Tu nombre *
                </label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full bg-transparent border-b border-rose/20 py-3 text-charcoal font-body text-sm focus:outline-none focus:border-rose transition-colors peer placeholder-transparent"
                  placeholder="Tu WhatsApp"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-3 text-muted font-body text-xs tracking-[0.1em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-rose peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-rose cursor-text"
                >
                  Tu WhatsApp *
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="w-full bg-transparent border-b border-rose/20 py-3 text-charcoal font-body text-sm focus:outline-none focus:border-rose transition-colors peer"
                />
                <label
                  htmlFor="date"
                  className="absolute left-0 -top-4 text-rose font-body text-[10px] tracking-[0.1em] uppercase"
                >
                  Fecha del Evento *
                </label>
              </div>

              <div className="relative group">
                <select
                  name="service"
                  id="service"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-rose/20 py-3 text-charcoal font-body text-sm focus:outline-none focus:border-rose transition-colors appearance-none cursor-pointer peer"
                >
                  <option value="" disabled>
                    Seleccioná un servicio
                  </option>
                  <option value="novia">Novia</option>
                  <option value="quinceanera">Quinceañera</option>
                  <option value="social">Social / Invitada</option>
                  <option value="editorial">Editorial / Moda</option>
                </select>
                <label
                  htmlFor="service"
                  className="absolute left-0 -top-4 text-rose font-body text-[10px] tracking-[0.1em] uppercase"
                >
                  Servicio *
                </label>
                <div className="absolute right-0 top-4 pointer-events-none text-rose/50 text-xs">
                  ▼
                </div>
              </div>
            </div>

            <div className="relative group mt-2">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-rose/20 py-3 text-charcoal font-body text-sm focus:outline-none focus:border-rose transition-colors peer resize-none placeholder-transparent"
                placeholder="Detalles"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-muted font-body text-xs tracking-[0.1em] uppercase transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-rose peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-rose cursor-text"
              >
                Contame sobre tu evento, horarios, lugar...
              </label>
            </div>

            {/* Botón Dinámico (Normal, Cargando, Éxito, Error) */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess || isError}
              className={`font-body mt-4 px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border ${
                isSuccess
                  ? 'border-[#4ade80] bg-[#4ade80]/10 text-[#166534] cursor-default'
                  : isError
                    ? 'border-[#ef4444] bg-[#ef4444]/10 text-[#991b1b] cursor-default'
                    : 'border-rose/50 bg-transparent text-charcoal hover:border-rose hover:text-rose disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {isSubmitting
                ? 'Enviando...'
                : isSuccess
                  ? '✓ Consulta Enviada'
                  : isError
                    ? '✕ Error al enviar'
                    : 'Solicitar Presupuesto'}
            </button>

            {/* Mensaje extra de error sutil debajo del botón */}
            {isError && (
              <p className="text-[#ef4444] text-[10px] text-center font-body tracking-wide">
                Hubo un problema de conexión. Por favor, intentá escribiéndome
                por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
