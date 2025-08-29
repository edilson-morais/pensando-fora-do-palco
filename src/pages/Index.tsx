
import Hero from "@/components/Hero";
import SixQuestions from "@/components/SixQuestions";
import CommunicationSection from "@/components/CommunicationSection";
import JottaProfile from "@/components/JottaProfile";
import PositioningImpact from "@/components/PositioningImpact";
import ServicesSection from "@/components/ServicesSection";
import FAQ from "@/components/FAQ";
import TrainingClients from "@/components/TrainingClients";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <section aria-labelledby="six-questions">
        <SixQuestions />
      </section>
      <section aria-labelledby="communication">
        <CommunicationSection />
      </section>
      <section aria-labelledby="jotta-profile">
        <JottaProfile />
      </section>
      <section aria-labelledby="positioning-impact">
        <PositioningImpact />
      </section>
      <section aria-labelledby="services">
        <ServicesSection />
      </section>
      <section aria-labelledby="faq">
        <FAQ />
      </section>
      <section aria-labelledby="training-clients">
        <TrainingClients />
      </section>
      <section aria-labelledby="final-cta">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
