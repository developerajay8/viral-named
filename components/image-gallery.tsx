"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={images[selectedImage].width}
                height={images[selectedImage].height}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
