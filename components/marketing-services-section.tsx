"use client"

import { motion } from "framer-motion"
import {
  Instagram,
  Search,
  MousePointer,
  Mail,
  FileText,
  Briefcase,
  Users,
  Zap,
  TrendingUp,
  Video,
  BarChart2,
  Share2,
} from "lucide-react"

export default function MarketingServicesSection() {
  const services = [
    {
      icon: <Instagram className="h-12 w-12 text-primary" />,
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns to boost your brand presence, engagement, and conversions across all major platforms.",
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.",
    },
    {
      icon: <MousePointer className="h-12 w-12 text-primary" />,
      title: "PPC Advertising",
      description:
        "Targeted pay-per-click campaigns to drive immediate traffic and conversions, with a focus on ROI and performance.",
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Email Marketing",
      description:
        "Personalized email campaigns to nurture leads, boost customer retention, and drive repeat business.",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Content Marketing",
      description:
        "Compelling content that resonates with your audience, establishes your authority, and drives engagement and conversions.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Brand Strategy",
      description:
        "Comprehensive brand strategy to differentiate your business in the market and create a strong, memorable brand identity.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Influencer Marketing",
      description:
        "Leverage influencers to expand your reach, build brand credibility, and connect with new audiences.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Marketing Automation",
      description: "Streamline your marketing processes and improve efficiency with automated workflows and campaigns.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies focused on measurable results, with continuous optimization for maximum ROI.",
    },
    {
      icon: <Video className="h-12 w-12 text-primary" />,
      title: "Video Marketing",
      description:
        "Engaging video content to capture attention, tell your brand story, and drive conversions across platforms.",
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      title: "Conversion Optimization",
      description:
        "Optimize your website and marketing funnels to increase conversion rates and maximize the value of your traffic.",
    },
    {
      icon: <Share2 className="h-12 w-12 text-primary" />,
      title: "Affiliate Marketing",
      description: "Build partnerships to expand your reach and drive more sales through strategic affiliate programs.",
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
    <section id="marketing" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of marketing services to help your business grow, attract customers, and
            build a strong brand.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
