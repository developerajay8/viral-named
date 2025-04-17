"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"></div>
          <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Ready to Grow Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 max-w-2xl mx-auto mb-8"
            >
              Let's collaborate to create innovative tech and marketing solutions that drive results. Contact us today
              to get started.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
