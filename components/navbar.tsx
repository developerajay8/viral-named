"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image src="/logo.png" alt="Viral Nomad" width={160} height={60} className="" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.dropdown ? (
                  <button
                    className="px-4 py-2 text-foreground/80 hover:text-primary font-medium flex items-center"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.name}{" "}
                    <span className="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                ) : (
                  <Link href={link.href} className="px-4 py-2 text-foreground/80 hover:text-primary font-medium">
                    {link.name}
                  </Link>
                )}
              </motion.div>

              {link.dropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border overflow-hidden z-50"
                    >
                      <div className="py-1">
                        <Link
                          href="/services#tech"
                          className="block px-4 py-2 text-sm hover:bg-muted"
                          onClick={() => setServicesOpen(false)}
                        >
                          Tech Services
                        </Link>
                        <Link
                          href="/services#marketing"
                          className="block px-4 py-2 text-sm hover:bg-muted"
                          onClick={() => setServicesOpen(false)}
                        >
                          Marketing Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        className="w-full text-left py-2 font-medium flex justify-between items-center"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {link.name}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l border-border">
                          <Link
                            href="/services#tech"
                            className="block py-1"
                            onClick={() => {
                              setServicesOpen(false)
                              setIsOpen(false)
                            }}
                          >
                            Tech Services
                          </Link>
                          <Link
                            href="/services#marketing"
                            className="block py-1"
                            onClick={() => {
                              setServicesOpen(false)
                              setIsOpen(false)
                            }}
                          >
                            Marketing Services
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href} className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full mt-4" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
