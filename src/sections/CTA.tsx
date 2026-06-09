import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5547996649644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Integrax%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.';

export function CTA() {
  return (
    <section className="bg-brand-dark">
      <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12 section-pad text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-balance">
            Vamos conversar sobre seu projeto?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex mt-10 text-base"
          >
            Solicitar orçamento gratuito
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
