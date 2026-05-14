import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/5493413276428"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-noir hover:bg-rose text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-noir text-white text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
        ¿Hablamos?
      </span>
      <FaWhatsapp size={26} />
    </a>
  );
}
