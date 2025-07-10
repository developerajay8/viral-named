"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animations";
import BackgroundAnimation from "./background-animations";
import Local from "./local";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden animated-background">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm backdrop-blur-sm">
                Tech & Marketing Solutions
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4">
                Elevate Your <span className="text-primary">Business</span> with Innovative Solutions.
                <div className="relative">
                  <div className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-3/5 h-3">
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
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.4}>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                We combine cutting-edge technology with strategic marketing to help your business grow, scale, and dominate in the digital landscape.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="group backdrop-blur-sm w-full sm:w-auto">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="backdrop-blur-sm w-full sm:w-auto">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content */}
          <div className="w-full">
            <div className="relative animate-fade-in-delay-3 rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/tech.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay Text */}
              <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/60 to-transparent items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-medium">Book a Strategy Call</p>
                  <p className="text-sm opacity-80">Get personalized insights from our experts.</p>
                </div>
              </div>
            </div>

            {/* User Avatars and Stats */}
            <div className="hidden md:flex absolute -bottom-6 right-0 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                    >
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

            {/* Local Component */}
            <div className="mt-8 sm:mt-12">
              <Local />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
