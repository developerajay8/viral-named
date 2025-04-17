import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import BlogGrid from "@/components/blog-grid"
import NewsletterSection from "@/components/newsletter-section"

export const metadata: Metadata = {
  title: "Blog - Viral Nomad",
  description: "Insights, tips, and trends in tech and marketing",
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Our Blog"
        description="Insights, tips, and trends in tech and marketing to help you stay ahead of the curve."
      />
      <BlogGrid />
      <NewsletterSection />
    </>
  )
}
