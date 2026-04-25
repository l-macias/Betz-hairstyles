import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/Portfolio/PortfolioGrid";
import Services from "@/components/sections/Services";
import YouTubeSection from "@/components/sections/YouTubeSection";
import Testimonials from "@/components/sections/Testimonials";
import AcademyWaitlist from "@/components/sections/AcademyWaitlist";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import TheArtist from "@/components/sections/TheArtist";
import FAQ from "@/components/sections/FAQ";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
export default function Home() {
  return (
    <>
      <CustomCursor />

      <main>
        {/* Navegación fija */}
        <Navbar />

        {/* 01 — Hero: quién es Betz, split layout */}
        <Hero />

        {/* 02 — Portfolio: grilla asimétrica de trabajos */}
        <PortfolioGrid />

        {/* 03 — The Artist: historia y foto de la artista */}
        <TheArtist/>

        {/* 04 — Servicios: bodas, quinceañeras, eventos, editorial */}
        <Services />

        {/* 05 — Antes y despues: slider */}
        <BeforeAfterSlider />

        {/* 06 — Videos: canal de YouTube */}
        <YouTubeSection />

        {/* 07 — Testimonios */}
        <Testimonials />

        {/* 08 — FAQ */}
        <FAQ />

        {/* 09 — Academia (waitlist) */}
        <AcademyWaitlist />

        {/* 10 — Contacto por Instagram */}
          <Contact />

        {/* Footer modular */}
        <Footer />
      </main>
    </>
  );
}