"use client"

import { useState } from "react"
import { GalleryImage } from "./GalleryImage"
import { Lightbox } from "@/components/lightbox"

interface GalleryItem {
  id: string
  src: string
  fallback: string
  width: number
  height: number
  alt: string
  title: string
  caption: string
  category: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  selectedCategory?: string
}

export function GalleryGrid({ items, selectedCategory = "All" }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Convert to lightbox format
  const lightboxImages = filteredItems.map((item) => ({
    src: item.fallback, // Use fallback URL for lightbox
    alt: item.alt,
    category: item.category,
  }))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item, index) => (
          <figure key={item.id} className="m-0">
            <GalleryImage
              src={item.src}
              fallback={item.fallback}
              alt={item.alt}
              title={item.title}
              width={item.width}
              height={item.height}
              priority={index === 0} // First image gets priority for LCP
              onClick={() => openLightbox(index)}
            />
            <figcaption className="sr-only">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No projects found in this category.</p>
        </div>
      )}

      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
