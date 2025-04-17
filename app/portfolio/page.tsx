import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import PortfolioGallery from "@/components/portfolio-gallery"
import ProjectsGrid from "@/components/projects-grid"
import CaseStudiesSection from "@/components/case-studies-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Portfolio - Viral Nomad",
  description: "Explore our successful projects and case studies",
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="Explore our successful projects and see how we've helped businesses achieve their goals."
      />
      <PortfolioGallery />
      <ProjectsGrid />
      <CaseStudiesSection />
      <CtaSection />
    </>
  )
}
