import { AnimatedSection } from '../components/AnimatedSection';

const steps = [
  { number: '01', title: 'Entendemos seu negócio' },
  { number: '02', title: 'Planejamos a solução' },
  { number: '03', title: 'Desenvolvemos' },
  { number: '04', title: 'Sua empresa ganha tempo e escala' },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12 section-pad">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Processo
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#0f172a]">
              Como funciona
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.07}>
              <div className="text-center md:text-left">
                <div className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none mb-4 text-[#e8edf5]">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-base text-[#334155] leading-snug">
                  {step.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
