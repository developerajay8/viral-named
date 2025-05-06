"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to deliver innovative solutions that drive business growth.",
    },
    {
      title: "Expert Team",
      description: "Our team of experts brings years of experience in tech and marketing to every project.",
    },
    {
      title: "Data-Driven Approach",
      description: "We use data and analytics to inform our strategies and optimize results.",
    },
    {
      title: "Tailored Strategies",
      description: "We create customized strategies that align with your business goals and target audience.",
    },
    {
      title: "Continuous Support",
      description: "We provide ongoing support and maintenance to ensure your solutions remain effective.",
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions are designed to scale with your business as it grows and evolves.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> <span className="text-primary">Why </span> Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with marketing prowess to deliver comprehensive solutions that drive results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-70"></div>
              <div className="relative bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/whychooseus.png"
                  alt="Features"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Elevate Your Business with Our <span className="gradient-text">Premium Features</span>
            </h3>
            <p className="text-muted-foreground">
              At Viral Nomad, we're committed to delivering exceptional value through our comprehensive suite of
              features designed to propel your business forward.
            </p>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-6">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
