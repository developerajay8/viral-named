"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A custom e-commerce platform with advanced features like product recommendations, real-time inventory management, and seamless checkout experience.",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A secure and user-friendly mobile banking application with features like biometric authentication, transaction history, and bill payments.",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A comprehensive digital marketing campaign that increased brand awareness by 40% and drove a 25% increase in conversions.",
    },
    {
      title: "AI-Powered Analytics",
      category: "AI & Machine Learning",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "An AI-powered analytics platform that provides real-time insights and predictive analytics for business decision-making.",
    },
    {
      title: "Brand Redesign",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A complete brand redesign including logo, visual identity, and brand guidelines that resulted in increased brand recognition and customer loyalty.",
    },
    {
      title: "Social Media Strategy",
      category: "Social Media Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A strategic social media campaign that increased engagement by 60% and followers by 35% across all platforms.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link
                  href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  View Project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
