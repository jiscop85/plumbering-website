
import Header from '@/components/Header';
import ModernHeroSection from '@/components/ModernHeroSection';
import PopularServices from '@/components/PopularServices';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHeroSection />
      <PopularServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
