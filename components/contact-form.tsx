"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      setFormStatus(result)

      if (result.success && formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg p-6 shadow-sm border border-border"
    >
      <h3 className="text-xl font-bold mb-4">Get in Touch</h3>

      {formStatus.message && (
        <div
          className={`p-4 mb-6 rounded-lg flex items-start gap-3 ${
            formStatus.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {formStatus.success ? (
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          )}
          <div>
            <p className="font-medium">{formStatus.success ? "Success!" : "Error"}</p>
            <p>{formStatus.message}</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <Input id="email" name="email" type="email" placeholder="Your email" required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone (Optional)
          </label>
          <Input id="phone" name="phone" placeholder="Your phone number" />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject <span className="text-red-500">*</span>
          </label>
          <Select name="subject">
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="tech">Tech Services</SelectItem>
              <SelectItem value="marketing">Marketing Services</SelectItem>
              <SelectItem value="quote">Request a Quote</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  )
}
