import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Solutions } from './sections/Solutions';
import { BeforeAfter } from './sections/BeforeAfter';
import { HowItWorks } from './sections/HowItWorks';
import { CTA } from './sections/CTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-white font-body antialiased">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <BeforeAfter />
        <HowItWorks />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
