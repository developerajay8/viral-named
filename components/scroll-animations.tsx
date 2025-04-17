"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "bounce"
}

export default function ScrollAnimation({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  animation = "fadeInUp",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "fadeInDown":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "bounce":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay,
              duration,
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
