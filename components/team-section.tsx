"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John has over 15 years of experience in tech and marketing, with a passion for helping businesses grow through innovative solutions.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah is a tech visionary with expertise in software architecture, AI, and emerging technologies.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael brings a data-driven approach to marketing, with a track record of successful campaigns across various industries.",
    },
    {
      name: "Emily Rodriguez",
      position: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily is a creative powerhouse with a keen eye for design and a passion for creating memorable brand experiences.",
    },
    {
      name: "David Kim",
      position: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David is a full-stack developer with expertise in the latest web and mobile technologies.",
    },
    {
      name: "Lisa Patel",
      position: "SEO Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Lisa is an SEO expert with a deep understanding of search algorithms and optimization strategies.",
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
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experts brings years of experience in tech and marketing to every project.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <Link href="#" className="text-white hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
