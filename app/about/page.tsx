import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import TeamSection from "@/components/team-section"
import MissionSection from "@/components/mission-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - Viral Nomad",
  description: "Learn about our mission, vision, and the team behind Viral Nomad",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Viral Nomad"
        description="We're a team of passionate tech and marketing experts dedicated to helping businesses grow."
      />
      <MissionSection />
      <TeamSection />
      <CtaSection />
    </>
  )
}
