"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Palette,
  Code,
  Database,
  Cloud,
  Brain,
  BarChart,
  Shield,
  CheckCircle,
  Layers,
  Settings,
} from "lucide-react"

export default function TechServicesSection() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies, optimized for performance and user experience.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "UI/UX Design",
      description:
        "User-centered design that enhances user experience and engagement, with a focus on aesthetics and functionality.",
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Software Architecture",
      description:
        "Scalable and maintainable software architecture designed to support your business needs and growth.",
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "API Integration",
      description:
        "Seamless integration with third-party APIs and services to extend the functionality of your applications.",
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "DevOps & Cloud Services",
      description:
        "Automated deployment, scaling, and management of applications in the cloud for optimal performance and reliability.",
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that learn and adapt to your business needs, providing valuable insights and automation.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights for better decision-making and business intelligence.",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Cybersecurity",
      description:
        "Protect your business from cyber threats and ensure data privacy with comprehensive security solutions.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing to ensure your software is bug-free, reliable, and delivers a seamless user experience.",
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Blockchain Development",
      description:
        "Secure and transparent blockchain solutions for your business, from smart contracts to decentralized applications.",
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Custom Software",
      description: "Tailor-made software solutions designed specifically for your business needs and challenges.",
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
    <section id="tech" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of tech services to help your business leverage the latest technologies for
            growth and innovation.
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
