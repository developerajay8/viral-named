"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Award, Clock } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { icon: <Users className="h-6 w-6 text-primary" />, value: "100+", label: "Happy Clients" },
    { icon: <Target className="h-6 w-6 text-primary" />, value: "250+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6 text-primary" />, value: "15+", label: "Awards Won" },
    { icon: <Clock className="h-6 w-6 text-primary" />, value: "10+", label: "Years Experience" },
  ]

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Viral Nomad</span>
            </h2>
            <p className="text-muted-foreground">
              Viral Nomad is a leading tech and marketing agency dedicated to helping businesses thrive in the digital
              landscape. We combine technical expertise with marketing prowess to deliver comprehensive solutions that
              drive results.
            </p>
            <p className="text-muted-foreground">
              Our mission is to empower businesses with innovative technology and strategic marketing to achieve
              sustainable growth and competitive advantage.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-card rounded-lg border border-border"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-6">
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl blur-xl opacity-70"></div>
              <div className="relative bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/image 1 (6).png"
                  alt="About Viral Nomad"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
