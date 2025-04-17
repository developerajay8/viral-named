import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
