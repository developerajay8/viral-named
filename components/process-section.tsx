"use client"

import { motion } from "framer-motion"
import { Lightbulb, Search, PenTool, CodeIcon, Zap, BarChart } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges to create a tailored strategy.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Research",
      description:
        "We conduct thorough research on your industry, competitors, and target audience to inform our approach.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Design",
      description:
        "Our designers create visually appealing and user-friendly designs that align with your brand identity.",
    },
    {
      icon: <CodeIcon className="h-10 w-10 text-primary" />,
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and scalable code.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Launch",
      description: "We ensure a smooth launch and provide support to address any issues that may arise.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Optimization",
      description: "We continuously monitor and optimize your solution to ensure it delivers the best results.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a structured process to ensure the success of your project from start to finish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary/10 w-20 h-20 rounded-bl-full"></div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="absolute top-4 right-4 text-primary/20 font-bold text-4xl">{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
