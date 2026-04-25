"use client";

import { useState } from "react";
import Script from "next/script";

const FAQS = [
  {
    question: "¿Realizás servicio a domicilio para novias y quinceañeras?",
    answer: "Sí. Ofrezco servicio a domicilio en toda la ciudad de Rosario, Funes, Roldán y alrededores para garantizar tu mayor comodidad el día del evento. Consultá por viáticos según tu zona."
  },
  {
    question: "¿Con cuánto tiempo de anticipación debo reservar la fecha?",
    answer: "Para casamientos y fiestas de 15, recomiendo reservar con al menos 3 a 6 meses de anticipación, ya que las fechas de temporada alta (primavera/verano) se agotan rápidamente."
  },
  {
    question: "¿Hacés pruebas de peinado previas al evento?",
    answer: "Absolutamente. La prueba de peinado es fundamental para las novias. Nos reunimos semanas antes para probar diferentes opciones, evaluar texturas y definir el estilo perfecto sin apuros."
  },
  {
    question: "¿Trabajás sola o tenés equipo para peinar a invitadas?",
    answer: "Principalmente me dedico de forma exclusiva a la novia/quinceañera para asegurar un estándar premium. Si necesitás peinar a familiares o invitadas, lo coordinamos previamente según disponibilidad y tiempos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generación dinámica del Schema Markup para SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="bg-blush py-[clamp(4rem,10vw,7rem)]">
      {/* Inyección silenciosa del Schema para Google */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header FAQ */}
          <div className="lg:col-span-5">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              09 — Preguntas Frecuentes
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2rem,4vw,3.5rem)] mb-6">
              Aclaramos tus <br />
              <span className="italic text-rose">dudas.</span>
            </h2>
            <p className="font-body text-charcoal font-light leading-relaxed text-[0.95rem] max-w-sm">
              Todo lo que necesitás saber sobre reservas, disponibilidad y el proceso de trabajo para tu gran día.
            </p>
          </div>

          {/* Acordeón de Preguntas */}
          <div className="lg:col-span-7 flex flex-col justify-center border-t border-rose/20">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="border-b border-rose/20 group"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <h3 className={`font-display text-[clamp(1.1rem,2vw,1.4rem)] transition-colors duration-300 pr-8 ${isOpen ? 'text-rose italic' : 'text-noir group-hover:text-dusty'}`}>
                      {faq.question}
                    </h3>
                    <span className="shrink-0 relative w-4 h-4 flex items-center justify-center">
                      <span className={`absolute w-full h-[1px] bg-dusty transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                      <span className={`absolute w-full h-[1px] bg-dusty transition-transform duration-300 ${isOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`} />
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}
                  >
                    <p className="font-body text-charcoal font-light leading-[1.8] text-[0.95rem]">
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