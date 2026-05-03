'use client';

import { useState } from 'react';
import Script from 'next/script';

const FAQS = [
  {
    question: '¿Realizás servicio a domicilio para novias y quinceañeras?',
    answer:
      'Sí. Ofrezco servicio a domicilio en toda la ciudad de Rosario, Funes, Roldán y alrededores para garantizar tu mayor comodidad el día del evento.',
  },
  {
    question: '¿Con cuánto tiempo de anticipación debo reservar la fecha?',
    answer:
      'Siempre podés consultar disponibilidad, incluso para fechas cercanas. Algunas fechas se completan rápido, pero pueden surgir espacios. Si tu evento es pronto, escribime y te confirmo opciones.',
  },
  {
    question: '¿Hacés pruebas de peinado previas al evento?',
    answer:
      'Absolutamente. La prueba de peinado es fundamental para las novias. Nos reunimos semanas antes para probar diferentes opciones, evaluar texturas y definir el estilo perfecto sin apuros.',
  },
  {
    question: '¿Realizás peinados para varias personas en un mismo evento?',
    answer:
      'Sí, puedo trabajar con varias personas el mismo día. La prioridad siempre es la novia o protagonista, y los peinados para familiares o invitadas se organizan con anticipación para garantizar tiempos y calidad.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generación dinámica del Schema Markup para SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-blush w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      {/* Inyección silenciosa del Schema para Google */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header FAQ */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              09 — Preguntas Frecuentes
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,4vw,3.8rem)] mb-6">
              Aclaramos tus <br />
              <span className="italic text-rose">dudas.</span>
            </h2>
            <p className="font-body text-charcoal font-light leading-relaxed text-[0.95rem] max-w-sm">
              Todo lo que necesitás saber sobre reservas, disponibilidad y el
              proceso de trabajo para tu gran día.
            </p>
          </div>

          {/* Acordeón de Preguntas */}
          <div className="lg:col-span-7 flex flex-col justify-center border-t border-rose/20 mt-4 lg:mt-0">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-rose/20 group">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 lg:py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:pl-2 transition-all duration-300"
                  >
                    <h3
                      className={`font-display text-[clamp(1.2rem,2vw,1.5rem)] transition-colors duration-300 pr-8 ${isOpen ? 'text-rose italic' : 'text-noir group-hover:text-charcoal'}`}
                    >
                      {faq.question}
                    </h3>
                    <span className="shrink-0 relative w-4 h-4 flex items-center justify-center ml-4">
                      <span
                        className={`absolute w-full h-[1px] bg-rose transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                      <span
                        className={`absolute w-full h-[1px] bg-rose transition-transform duration-300 ${isOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
                      />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}
                  >
                    <p className="font-body text-charcoal font-light leading-[1.8] text-[0.95rem] pl-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
