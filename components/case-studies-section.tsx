"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Transforming E-Commerce with AI",
      client: "TechRetail Inc.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "40% increase in conversion rate",
        "25% reduction in cart abandonment",
        "60% increase in average order value",
      ],
    },
    {
      title: "Scaling a SaaS Platform",
      client: "CloudSolutions Ltd.",
      image: "/placeholder.svg?height=600&width=800",
      results: ["300% increase in user base", "50% reduction in infrastructure costs", "99.9% uptime achieved"],
    },
  ]

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our detailed case studies to see how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-primary font-medium mb-4">Client: {caseStudy.client}</p>
                <div className="space-y-4 mb-6">
                  <h4 className="font-bold">Results:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild>
                  <Link href={`/portfolio/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    Read Full Case Study
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
