import Hero from '../components/Hero';
import AskChatGPT from '../components/AskChatGPT';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import HowWeWork from '../components/HowWeWork';
import About from '../components/About';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AskChatGPT />
      <Services />
      <Portfolio />
      <HowWeWork />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
