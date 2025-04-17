"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ImageGallery from "@/components/image-gallery"

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Marketing", "Branding"]

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "E-Commerce Website",
    width: 600,
    height: 600,
    category: "Web Development",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Mobile Banking App",
    width: 600,
    height: 600,
    category: "Mobile Apps",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Dashboard UI Design",
    width: 600,
    height: 600,
    category: "UI/UX Design",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Social Media Campaign",
    width: 600,
    height: 600,
    category: "Marketing",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Brand Identity",
    width: 600,
    height: 600,
    category: "Branding",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "E-Learning Platform",
    width: 600,
    height: 600,
    category: "Web Development",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Fitness App",
    width: 600,
    height: 600,
    category: "Mobile Apps",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Product Landing Page",
    width: 600,
    height: 600,
    category: "UI/UX Design",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Email Marketing Campaign",
    width: 600,
    height: 600,
    category: "Marketing",
  },
]

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = galleryImages.filter((image) => activeCategory === "All" || image.category === activeCategory)

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse through our projects and see how we've helped businesses achieve their goals with our tech and
            marketing solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <ImageGallery images={filteredImages} />
      </div>
    </section>
  )
}
