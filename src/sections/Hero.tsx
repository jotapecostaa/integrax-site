import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-20 pb-16">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Text — narrower column */}
          <div>
            <AnimatedSection>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.04] tracking-tight">
                Menos trabalho manual.
                <br />
                <span className="gradient-text">Mais resultados.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-brand-muted text-base md:text-lg leading-relaxed">
                A Integrax cria sites, sistemas e automações para empresas que desejam vender mais, economizar tempo e crescer com tecnologia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Solicitar orçamento gratuito
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#solucoes" className="btn-secondary">
                  Conhecer soluções
                </a>
              </div>
              <p className="mt-4 text-xs text-brand-muted/70">
                Diagnóstico inicial sem compromisso.
              </p>
            </AnimatedSection>
          </div>

          {/* Hero image — larger column (60% width) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="image-container">
              <img
                src="/hero_site.png"
                alt="Integrax — Sites, sistemas e automações para empresas"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
