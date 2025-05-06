"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "AI-Powered Analytics",
      category: "AI & Machine Learning",
      image: "/placeholder.svg?height=400&width=600",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary"> Portfolio </span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-white/80">{project.category}</p>
                <Link href="/portfolio" className="text-white font-medium mt-2 inline-flex items-center">
                  View Project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
