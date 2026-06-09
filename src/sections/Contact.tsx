import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, Music2, ArrowUpRight } from 'lucide-react';

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Fale conosco',
    href: 'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.',
    iconColor: 'text-green-400',
    bg: 'bg-green-500/8',
    border: 'border-green-500/10',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@integrax.com.br',
    href: 'mailto:contato@integrax.com.br',
    iconColor: 'text-brand-cyan',
    bg: 'bg-brand-cyan/8',
    border: 'border-brand-cyan/10',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@integrax.ofc',
    href: 'https://instagram.com/integrax.ofc',
    iconColor: 'text-pink-400',
    bg: 'bg-pink-500/8',
    border: 'border-pink-500/10',
  },
  {
    icon: Music2,
    title: 'TikTok',
    value: '@integrax.ofc',
    href: 'https://tiktok.com/@integrax.ofc',
    iconColor: 'text-white/70',
    bg: 'bg-white/5',
    border: 'border-white/8',
  },
];

export function Contact() {
  return (
    <section id="contato" className="bg-brand-bg">
      <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-12 section-pad">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted/60 mb-4">
              Contato
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Vamos conversar
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.07}>
              <motion.a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className={`block p-6 rounded-2xl border transition-colors group ${c.border}`}
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                  <c.icon size={20} className={c.iconColor} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-muted/50 mb-1.5">
                  {c.title}
                </div>
                <div className="font-medium text-sm text-brand-white leading-snug mb-4">
                  {c.value}
                </div>
                <div className="flex items-center gap-1 text-xs text-brand-muted/50 group-hover:text-brand-cyan transition-colors">
                  <span>Acessar</span>
                  <ArrowUpRight size={11} />
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
