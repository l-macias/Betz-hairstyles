"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Inicialización con la nueva API de Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva para scroll pesado/suave
      wheelMultiplier: 1,
      touchMultiplier: 2, // Mejora la respuesta en táctil sin romper la inercia
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpieza al desmontar para evitar memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}