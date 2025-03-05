"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { galleryImages } from "@/utils/gallery-helpers"

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Add useEffect to handle wheel events
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events when hovering
      if (!isHovering) return

      e.preventDefault()
      if (!carouselRef.current) return
      
      const direction = e.deltaY > 0 ? 1 : -1
      const newIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        galleryImages.length - 1
      )
      
      scrollToImage(newIndex)
    }

    // Add wheel event listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [currentIndex, isHovering])


  // Scroll to an image when indicator is clicked
  const scrollToImage = (index: number) => {
    if (!carouselRef.current) return
    const carousel = carouselRef.current
    const itemWidth = carousel.clientWidth
    carousel.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    })
    setCurrentIndex(index)
  }

  // Handle manual scroll
  const handleScroll = () => {
    if (!carouselRef.current) return
    const carousel = carouselRef.current
    const scrollLeft = carousel.scrollLeft
    const itemWidth = carousel.clientWidth
    const newIndex = Math.round(scrollLeft / itemWidth)
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryImages.length) {
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
    >
      {/* Simple Carousel */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto mb-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onScroll={handleScroll}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full justify-center snap-center">
              <div className="aspect-[1/1] mx-10 relative rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-5" : "bg-foreground hover:bg-secondary-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

