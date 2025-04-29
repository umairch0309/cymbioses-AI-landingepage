import LandingNavbar from "@components/landing/LandingNavbar";
import HeroSectionContent from "@components/home/HeroSection";
import FocusedOnSection from "@components/home/FocusedSection";
import HowWorksSection from "@components/home/HowWorksSection";
import Footer from "@components/layouts/Footer";
import TestimonialSlider from "@components/home/TestimonialSlider";
export default function HomePage() {
  return (
    <div>
      <LandingNavbar />
      <HeroSectionContent />
      <FocusedOnSection />
      <HowWorksSection />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
