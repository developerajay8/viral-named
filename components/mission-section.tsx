"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-card rounded-lg p-6 shadow-sm border border-border text-center hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Target className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Our Mission</h3>
            <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
              To empower businesses with innovative technology and strategic marketing to achieve sustainable growth and
              competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-card rounded-lg p-6 shadow-sm border border-border text-center hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Eye className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Our Vision</h3>
            <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
              To be the leading tech and marketing agency, known for delivering exceptional results and driving
              innovation in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-card rounded-lg p-6 shadow-sm border border-border text-center hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Award className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Our Values</h3>
            <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
              Innovation, excellence, integrity, collaboration, and client success are the core values that guide
              everything we do.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-muted rounded-lg p-8 border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-muted-foreground mb-4">
            Viral Nomad was founded with a simple yet powerful vision: to help businesses thrive in the digital
            landscape by combining technical expertise with marketing prowess. What started as a small team of
            passionate tech and marketing enthusiasts has grown into a full-service agency serving clients across
            various industries.
          </p>
          <p className="text-muted-foreground">
            Our journey has been marked by continuous learning, innovation, and a relentless focus on delivering results
            for our clients. Today, we're proud to be a trusted partner for businesses looking to leverage technology
            and marketing to achieve their goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
