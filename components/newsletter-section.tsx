"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest trends, insights, and news in tech and marketing.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input type="email" placeholder="Enter your email address" className="flex-1" required />
            <Button type="submit">Subscribe</Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-muted-foreground text-center mt-4"
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
