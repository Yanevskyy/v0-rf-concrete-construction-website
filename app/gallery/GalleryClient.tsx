"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import galleryData from "@/data/gallery.json"

const categories = [
  "All",
  "Preparation Stage",
  "Underfloor Heating Installation",
  "Mixing & Pumping",
  "Screeding in Progress",
  "Finished Floors",
  "External Projects",
  "Testing & Quality Control",
]

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Our Work</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Explore our portfolio showcasing the complete process of liquid floor screed installation — from
              preparation and underfloor heating to finished floors across Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="py-6 mb-12 border-b">
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full min-w-[140px] transition-all duration-200 hover:scale-105"
                  size="lg"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <GalleryGrid items={galleryData} selectedCategory={selectedCategory} />
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
    </main>
  )
}
