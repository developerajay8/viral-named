"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogGrid() {
  const posts = [
    {
      title: "10 Web Development Trends to Watch in 2023",
      excerpt: "Explore the latest trends in web development that are shaping the digital landscape in 2023.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 15, 2023",
      author: "John Smith",
      category: "Web Development",
    },
    {
      title: "The Ultimate Guide to Social Media Marketing",
      excerpt:
        "Learn how to create a successful social media marketing strategy that drives engagement and conversions.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      category: "Marketing",
    },
    {
      title: "How AI is Transforming the Marketing Landscape",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and customer experiences.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 12, 2023",
      author: "Michael Chen",
      category: "AI & Marketing",
    },
    {
      title: "Mobile App Development: Native vs. Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 5, 2023",
      author: "David Kim",
      category: "Mobile Development",
    },
    {
      title: "SEO Best Practices for 2023",
      excerpt: "Stay ahead of the competition with these SEO best practices that will boost your rankings in 2023.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 20, 2023",
      author: "Lisa Patel",
      category: "SEO",
    },
    {
      title: "The Power of Brand Storytelling",
      excerpt: "Learn how to craft compelling brand stories that resonate with your audience and drive engagement.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 10, 2023",
      author: "Emily Rodriguez",
      category: "Branding",
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
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Read More
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
