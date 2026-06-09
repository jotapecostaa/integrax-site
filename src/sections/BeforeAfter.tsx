import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Minus, Check } from 'lucide-react';

const beforeItems = [
  'Atendimento manual',
  'Processos repetitivos',
  'Clientes esperando resposta',
  'Organização em planilhas',
];

const afterItems = [
  'Atendimento automatizado',
  'Mais produtividade',
  'Mais vendas',
  'Processos organizados',
];

export function BeforeAfter() {
  return (
    <section id="portfolio" className="bg-brand-dark">
      <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-12 section-pad">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted/60 mb-4">
              Transformação
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Antes / Depois da Integrax
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-0 md:divide-x md:divide-white/[0.06]">
          {/* Before */}
          <AnimatedSection delay={0.1} className="pb-10 md:pb-0 md:pr-12 lg:pr-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted/50 mb-8">
              Antes
            </p>
            <div className="space-y-5">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0">
                    <Minus size={14} className="text-brand-muted/40" />
                  </div>
                  <span className="text-base text-brand-muted/60">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection delay={0.15} className="pt-10 md:pt-0 md:pl-12 lg:pl-20 border-t border-white/[0.06] md:border-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan/70 mb-8">
              Depois
            </p>
            <div className="space-y-5">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-brand-cyan" />
                  </div>
                  <span className="text-base text-brand-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
