import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'A Integrax faz apenas sites?',
    answer:
      'Não. Além de criação de sites profissionais, desenvolvemos automações, agentes inteligentes, chatbots, sistemas personalizados e integrações entre plataformas.',
  },
  {
    question: 'Preciso saber exatamente o que quero antes de pedir orçamento?',
    answer:
      'Não. Primeiro entendemos seu negócio, seus processos e seus objetivos. Depois indicamos a melhor solução: site, automação, sistema, chatbot ou integração.',
  },
  {
    question: 'Vocês atendem pequenas empresas?',
    answer:
      'Sim. A Integrax é focada em soluções digitais para pequenas e médias empresas que querem vender mais, economizar tempo e reduzir trabalho manual.',
  },
  {
    question: 'O orçamento é gratuito?',
    answer:
      'Sim. O diagnóstico inicial é gratuito e sem compromisso. Você explica sua necessidade e nós avaliamos a melhor solução para o seu negócio.',
  },
  {
    question: 'A solução fica pronta em quanto tempo?',
    answer:
      'Depende do tipo de projeto. Sites e páginas de venda costumam ser mais rápidos. Sistemas, automações e integrações exigem uma análise maior antes do prazo final.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-brand-bg px-6 py-24 text-brand-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-brand-muted">
            Dúvidas frequentes
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Perguntas antes de solicitar um orçamento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-muted">
            Entenda como a Integrax trabalha e quais soluções podem ajudar sua empresa.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-3 leading-relaxed text-brand-muted">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
