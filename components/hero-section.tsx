"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, TrendingUp, LineChart } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animations";
import BackgroundAnimation from "./background-animations";
import Local from "./local";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden animated-background">
      <BackgroundAnimation />
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
  <ScrollAnimation animation="fadeInLeft" delay={0.2}>
    <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm backdrop-blur-sm">
      Tech & Marketing Solutions
    </div>
  </ScrollAnimation>

  <ScrollAnimation animation="fadeInLeft" delay={0.3}>
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in mt-4">
  Elevate Your  <span className="text-primary">Business</span> with Innovative Solutions.
                  <div className="relative">
                    <div className="absolute -bottom-3 left-0 w-3/5 h-3">
                      <svg viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path
                          d="M1 17C71 5 142 -1 299 9"
                          stroke="#1aa89c"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </h1>
    {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
      Elevate Your 
      <span className="relative inline-block mx-2">
        <span className="relative z-10">Business</span>
        <span className="absolute left-0 top-14 w-full h-2  bg-gradient-to-r from-primary to-primary/60 z-0 rounded-sm rotate-[-2deg]"></span>
      </span>
      with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Innovative</span> Solutions
      <span className="text-primary text-6xl leading-none">.</span>
    </h1> */}
  </ScrollAnimation>

  <ScrollAnimation animation="fadeInLeft" delay={0.4}>
    <p className="text-lg text-muted-foreground max-w-lg text-gray-600">
      We combine cutting-edge technology with strategic marketing to help your business grow, scale, and
      dominate in the digital landscape.
    </p>
  </ScrollAnimation>

  <ScrollAnimation animation="fadeInLeft" delay={0.5}>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg" className="group backdrop-blur-sm">
        <Link href="/contact">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="backdrop-blur-sm">
        <Link href="/services">Explore Services</Link>
      </Button>
    </div>
  </ScrollAnimation>
</div>


<div className="w-full ">
              <div className=" relative animate-fade-in-delay-3">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* <img
                  src="/hero-right-section-image.png"
                  alt="Legal consultation"
                  className="w-full h-[354px] object-cover"
                /> */}
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/tech.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="md:block hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-medium">Book a Strategy Call</p>
                        <p className="text-sm opacity-80">Get personalized insights from our experts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                          <img
                            src={`/hero-right-section-image.png`}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">250+ AI Audits</p>
                      <p className="text-gray-500">this month</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className=" mt-[30px]"><Local /></div>
            </div>
        </div>
      </div>
    </section>
  );
}