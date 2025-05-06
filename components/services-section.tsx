"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Share2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animations"

const techServices = [
  {
    icon: <Globe className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Code className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Software Architecture",
    description: "Scalable and maintainable software architecture for your business.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Database className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "API Integration",
    description: "Seamless integration with third-party APIs and services.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "DevOps & Cloud Services",
    description: "Automated deployment, scaling, and management of applications.",
    image: "/placeholder.svg?height=100&width=100",
  },
  // {
  //   icon: <Brain className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "AI & Machine Learning",
  //   description: "Intelligent solutions that learn and adapt to your business needs.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <BarChart className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Data Analytics",
  //   description: "Transform your data into actionable insights for better decision-making.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Shield className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Cybersecurity",
  //   description: "Protect your business from cyber threats and ensure data privacy.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <CheckCircle className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Quality Assurance",
  //   description: "Comprehensive testing to ensure your software is bug-free and reliable.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Layers className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Blockchain Development",
  //   description: "Secure and transparent blockchain solutions for your business.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Settings className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Custom Software",
  //   description: "Tailor-made software solutions designed specifically for your business needs.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
]

const marketingServices = [
  {
    icon: <Instagram className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to boost your brand presence and engagement.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Search className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <MousePointer className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns to drive immediate traffic and conversions.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Mail className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Email Marketing",
    description: "Personalized email campaigns to nurture leads and boost customer retention.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Content Marketing",
    description: "Compelling content that resonates with your audience and drives engagement.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
    title: "Brand Strategy",
    description: "Comprehensive brand strategy to differentiate your business in the market.",
    image: "/placeholder.svg?height=100&width=100",
  },
  // {
  //   icon: <Users className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Influencer Marketing",
  //   description: "Leverage influencers to expand your reach and build brand credibility.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Zap className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Marketing Automation",
  //   description: "Streamline your marketing processes and improve efficiency.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <TrendingUp className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Performance Marketing",
  //   description: "Data-driven marketing strategies focused on measurable results.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Video className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Video Marketing",
  //   description: "Engaging video content to capture attention and drive conversions.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <TrendingUp className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Conversion Optimization",
  //   description: "Optimize your website and marketing funnels to increase conversion rates.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   icon: <Share2 className="h-10 w-10 text-primary group-hover:text-white transition-colors" />,
  //   title: "Affiliate Marketing",
  //   description: "Build partnerships to expand your reach and drive more sales.",
  //   image: "/placeholder.svg?height=100&width=100",
  // },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("tech")

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We offer a comprehensive range of tech and marketing services to help your business thrive in the digital
              landscape.
            </p>
          </div>
        </ScrollAnimation>

        <Tabs defaultValue="tech" className="w-full" onValueChange={setActiveTab}>
          <ScrollAnimation animation="fadeInUp" delay={0.1}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid gap-2 w-full max-w-md text-primary grid-cols-2">
                <TabsTrigger value="tech">Tech Services</TabsTrigger>
                <TabsTrigger value="marketing" className="">Marketing Services</TabsTrigger>
              </TabsList>
            </div>
          </ScrollAnimation>

          <TabsContent value="tech">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techServices.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.05}>
                  <div className="group bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:bg-primary hover:border-primary">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-white/90 transition-colors">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary font-medium group-hover:text-white inline-flex items-center transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingServices.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.05}>
                  <div className="group bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:bg-primary hover:border-primary">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-white/90 transition-colors">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary font-medium group-hover:text-white inline-flex items-center transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
