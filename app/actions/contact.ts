"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // In a real application, you would send this data to your backend or email service
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return { success: false, message: `Validation error: ${errorMessages}` }
    }

    return { success: false, message: "An error occurred. Please try again later." }
  }
}
