"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart2, TrendingUp, LineChart } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animations"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm">
                Tech & Marketing Solutions
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your Business with <span className="gradient-text">Innovative</span> Solutions
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.4}>
              <p className="text-lg text-muted-foreground max-w-lg">
                We combine cutting-edge technology with strategic marketing to help your business grow, scale, and
                dominate in the digital landscape.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeInRight" delay={0.6}>
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white rounded-lg shadow-lg p-4"
              >
                <BarChart2 className="h-12 w-12 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 bg-white rounded-lg shadow-lg p-4"
              >
                <TrendingUp className="h-12 w-12 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                className="absolute top-1/2 right-1/4 bg-white rounded-lg shadow-lg p-4"
              >
                <LineChart className="h-12 w-12 text-primary" />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/10 rounded-2xl" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
