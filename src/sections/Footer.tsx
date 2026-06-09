import { MessageCircle, Instagram, Music2, Mail, ArrowUpRight } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.';

const contactLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Solicitar orçamento gratuito',
    href: WA_LINK,
    iconColor: 'text-green-400',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@integrax.ofc',
    href: 'https://instagram.com/integrax.ofc',
    iconColor: 'text-pink-400',
  },
  {
    icon: Music2,
    label: 'TikTok',
    value: '@integrax.ofc',
    href: 'https://tiktok.com/@integrax.ofc',
    iconColor: 'text-white/60',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@integrax.com.br',
    href: 'mailto:contato@integrax.com.br',
    iconColor: 'text-brand-cyan',
  },
];

const navLinks = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Top: logo + brand */}
        <div className="mb-12">
          <a href="#" className="inline-block mb-5">
            <img
              src="/logo.svg"
              alt="INTEGRAX"
              className="h-8 w-auto"
            />
          </a>
          <p className="text-sm text-brand-muted leading-relaxed">
            Soluções digitais para empresas.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] mb-10" />

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-brand-muted/50 mb-0.5">
                <link.icon size={13} className={link.iconColor} />
                {link.label}
              </div>
              <div className="flex items-center gap-1 text-sm text-brand-muted group-hover:text-brand-white transition-colors duration-200">
                {link.value}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] mb-8" />

        {/* Bottom: copyright + nav */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-brand-muted/50">
            &copy; 2026 Integrax. Todos os direitos reservados.
          </p>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-brand-muted/50 hover:text-brand-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
