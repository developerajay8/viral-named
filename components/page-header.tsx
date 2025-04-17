"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
