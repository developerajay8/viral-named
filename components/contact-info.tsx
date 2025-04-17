"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      details: "123 Business Avenue, Tech District, City, Country",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "info@viralnomad.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 6PM",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <div className="space-y-4">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-0.5">{item.icon}</div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-muted hover:bg-primary hover:text-white transition-colors p-3 rounded-full"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6 border border-border">
        <h3 className="text-xl font-bold mb-4">Book a Free Consultation</h3>
        <p className="text-muted-foreground mb-4">
          Schedule a free 30-minute consultation to discuss your project and how we can help.
        </p>
        <Link
          href="/contact#booking"
          className="inline-block bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  )
}
