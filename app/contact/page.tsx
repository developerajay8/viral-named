import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - Viral Nomad",
  description: "Get in touch with our team for inquiries and collaborations",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for inquiries, collaborations, or to discuss your project."
      />
      <div className="container mx-auto py-12 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  )
}
