import { MessageCircle } from 'lucide-react';

const whatsappLink =
  'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:bg-[#20BA5A] md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Orçamento no WhatsApp</span>
    </a>
  );
}
