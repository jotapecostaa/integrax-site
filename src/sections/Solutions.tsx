import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.';

interface Solution {
  label: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  imageRight: boolean;
  lightBg: boolean;
  imageSrc: string;
  imageAlt: string;
}

const solutions: Solution[] = [
  {
    label: 'Serviço 01',
    title: 'Criação de Sites Profissionais',
    description: 'Sites modernos, rápidos e pensados para transmitir confiança e gerar oportunidades para seu negócio.',
    features: [
      'Design exclusivo e responsivo',
      'Otimizado para buscadores',
      'Integração com WhatsApp',
      'Páginas de alta conversão',
    ],
    cta: 'Criar meu site',
    imageRight: true,
    lightBg: false,
    imageSrc: '/imagem_site_card_1.png',
    imageAlt: 'Criação de sites profissionais — Integrax',
  },
  {
    label: 'Serviço 02',
    title: 'Agentes IA e Automações',
    description: 'Respostas automáticas, qualificação de leads e processos inteligentes que funcionam 24 horas por dia.',
    features: [
      'Chatbots inteligentes',
      'Automação de WhatsApp',
      'Qualificação automática de leads',
      'Integração entre plataformas',
    ],
    cta: 'Automatizar processos',
    imageRight: false,
    lightBg: true,
    imageSrc: '/imagem_celular_site.png',
    imageAlt: 'Agentes IA e automações — Integrax',
  },
  {
    label: 'Serviço 03',
    title: 'Sistemas Personalizados',
    description: 'Soluções sob medida para organizar operações, clientes e processos internos da sua empresa.',
    features: [
      'Painel administrativo',
      'Controle de usuários',
      'Relatórios em tempo real',
      'Gestão completa do negócio',
    ],
    cta: 'Criar meu sistema',
    imageRight: true,
    lightBg: false,
    imageSrc: '/imagem_final_site.png',
    imageAlt: 'Sistemas personalizados com painel administrativo — Integrax',
  },
];

export function Solutions() {
  return (
    <div id="solucoes">
      {solutions.map((s) => {
        const isDark = !s.lightBg;

        return (
          <section
            key={s.label}
            className={isDark ? 'bg-brand-bg' : 'bg-[#f5f7fa]'}
          >
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 section-pad">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <div className={s.imageRight ? '' : 'lg:order-2'}>
                  <AnimatedSection>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest mb-5 ${
                        isDark ? 'text-brand-muted/60' : 'text-gray-400'
                      }`}
                    >
                      {s.label}
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.05}>
                    <h2
                      className={`font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight ${
                        isDark ? 'text-brand-white' : 'text-[#0f172a]'
                      }`}
                    >
                      {s.title}
                    </h2>
                  </AnimatedSection>

                  <AnimatedSection delay={0.1}>
                    <p
                      className={`mt-5 text-base md:text-lg leading-relaxed max-w-md ${
                        isDark ? 'text-brand-muted' : 'text-gray-500'
                      }`}
                    >
                      {s.description}
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.15}>
                    <ul className="mt-8 space-y-3">
                      {s.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-3 text-sm ${
                            isDark ? 'text-brand-muted' : 'text-gray-500'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/8'
                            }`}
                          >
                            <Check size={11} className="text-brand-blue" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex mt-10 ${
                        isDark ? 'btn-primary' : 'btn-primary-light'
                      }`}
                    >
                      {s.cta}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </AnimatedSection>
                </div>

                {/* Image */}
                <AnimatedSection
                  delay={0.1}
                  className={s.imageRight ? '' : 'lg:order-1'}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={isDark ? 'img-frame-dark' : 'img-frame-light'}
                  >
                    <img
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
