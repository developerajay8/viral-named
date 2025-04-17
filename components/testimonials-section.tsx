"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Viral Nomad transformed our online presence. Their team delivered a stunning website and implemented a marketing strategy that significantly increased our leads and conversions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthX",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Viral Nomad has been a game-changer for our business. Their data-driven approach to marketing has helped us achieve unprecedented growth.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoTech",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The team at Viral Nomad is exceptional. They not only built our mobile app but also helped us develop a comprehensive marketing strategy that resonated with our target audience.",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [current])

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-xl p-8 shadow-sm border border-border text-center"
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background rounded-full p-2 shadow-md border border-border hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background rounded-full p-2 shadow-md border border-border hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
