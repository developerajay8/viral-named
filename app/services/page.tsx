import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import TechServicesSection from "@/components/tech-services-section"
import MarketingServicesSection from "@/components/marketing-services-section"
import ProcessSection from "@/components/process-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Our Services - Viral Nomad",
  description: "Explore our comprehensive tech and marketing services",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive tech and marketing solutions to help your business thrive in the digital landscape."
      />
      <TechServicesSection />
      <MarketingServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
