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
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Software Architecture",
    description: "Scalable and maintainable software architecture for your business.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "API Integration",
    description: "Seamless integration with third-party APIs and services.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "DevOps & Cloud Services",
    description: "Automated deployment, scaling, and management of applications.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that learn and adapt to your business needs.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights for better decision-making.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your business from cyber threats and ensure data privacy.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure your software is bug-free and reliable.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Blockchain Development",
    description: "Secure and transparent blockchain solutions for your business.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Custom Software",
    description: "Tailor-made software solutions designed specifically for your business needs.",
  },
]

const marketingServices = [
  {
    icon: <Instagram className="h-10 w-10 text-primary" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to boost your brand presence and engagement.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
  },
  {
    icon: <MousePointer className="h-10 w-10 text-primary" />,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns to drive immediate traffic and conversions.",
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: "Email Marketing",
    description: "Personalized email campaigns to nurture leads and boost customer retention.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Content Marketing",
    description: "Compelling content that resonates with your audience and drives engagement.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Brand Strategy",
    description: "Comprehensive brand strategy to differentiate your business in the market.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Influencer Marketing",
    description: "Leverage influencers to expand your reach and build brand credibility.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Marketing Automation",
    description: "Streamline your marketing processes and improve efficiency.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies focused on measurable results.",
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "Video Marketing",
    description: "Engaging video content to capture attention and drive conversions.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Conversion Optimization",
    description: "Optimize your website and marketing funnels to increase conversion rates.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: "Affiliate Marketing",
    description: "Build partnerships to expand your reach and drive more sales.",
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("tech")

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of tech and marketing services to help your business thrive in the digital
              landscape.
            </p>
          </div>
        </ScrollAnimation>

        <Tabs defaultValue="tech" className="w-full" onValueChange={setActiveTab}>
          <ScrollAnimation animation="fadeInUp" delay={0.1}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="tech">Tech Services</TabsTrigger>
                <TabsTrigger value="marketing">Marketing Services</TabsTrigger>
              </TabsList>
            </div>
          </ScrollAnimation>

          <TabsContent value="tech">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techServices.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.05}>
                  <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary font-medium hover:underline inline-flex items-center"
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
                  <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary font-medium hover:underline inline-flex items-center"
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
