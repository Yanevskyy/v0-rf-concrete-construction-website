"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"

const categories = ["All", "Residential", "Commercial", "Underfloor Heating", "Industrial"]

const galleryImages = [
  {
    src: "/gallery-residential-living-room-screed.jpg",
    alt: "Modern living room with liquid floor screed",
    category: "Residential",
  },
  {
    src: "/gallery-commercial-office-floor.jpg",
    alt: "Commercial office space floor installation",
    category: "Commercial",
  },
  {
    src: "/gallery-underfloor-heating-system.jpg",
    alt: "Underfloor heating pipes with screed",
    category: "Underfloor Heating",
  },
  {
    src: "/gallery-residential-kitchen-floor.jpg",
    alt: "Kitchen floor screed installation",
    category: "Residential",
  },
  {
    src: "/gallery-industrial-warehouse-floor.jpg",
    alt: "Industrial warehouse floor screeding",
    category: "Industrial",
  },
  {
    src: "/gallery-commercial-retail-space.jpg",
    alt: "Retail space floor installation",
    category: "Commercial",
  },
  {
    src: "/gallery-residential-bedroom-screed.jpg",
    alt: "Bedroom floor with underfloor heating",
    category: "Residential",
  },
  {
    src: "/gallery-underfloor-heating-installation.jpg",
    alt: "Underfloor heating system installation",
    category: "Underfloor Heating",
  },
  {
    src: "/gallery-commercial-restaurant-floor.jpg",
    alt: "Restaurant floor screed project",
    category: "Commercial",
  },
  {
    src: "/gallery-residential-bathroom-floor.jpg",
    alt: "Bathroom floor screed with heating",
    category: "Residential",
  },
  {
    src: "/gallery-industrial-factory-floor.jpg",
    alt: "Factory floor screeding project",
    category: "Industrial",
  },
  {
    src: "/gallery-residential-hallway-screed.jpg",
    alt: "Hallway floor screed installation",
    category: "Residential",
  },
]

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Our Work</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Explore our portfolio of completed projects across Ireland. From residential homes to large commercial
              spaces, see the quality and precision we bring to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                    <p className="text-white/70 text-xs mt-1">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground text-pretty leading-relaxed">
              Let us bring the same level of quality and professionalism to your flooring project.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary/10 hover:bg-primary/20 px-8 py-6 text-lg font-semibold shadow-lg border-2 border-primary"
            >
              <a href="/contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </main>
  )
}
