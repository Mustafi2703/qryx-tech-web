import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ApproachSection from "@/components/ApproachSection";
import DeliverSection from "@/components/DeliverSection";
import ClientsSection from "@/components/ClientsSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <DeliverSection />
      <ClientsSection />
      <WhySection />
      <CTASection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
