import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"
import GalleryClient from "./GalleryClient"
import galleryData from "@/data/gallery.json"

export const metadata = generateMeta({
  title: "Project Gallery – RF Concrete Construction | Liquid Floor Screed Ireland",
  description:
    "Browse our extensive portfolio of liquid floor screed installations across Ireland. View completed residential homes, commercial offices, retail spaces, industrial warehouses, and underfloor heating projects. See real examples of our quality workmanship.",
  keywords:
    "floor screed gallery Ireland, liquid screed projects, residential flooring portfolio, commercial screed examples, underfloor heating installations, screed project photos Ireland",
  path: "/gallery",
})

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ])

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "RF Concrete Construction Project Gallery",
    description: "Professional liquid floor screed and underfloor heating installation projects across Ireland",
    image: galleryData.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `https://rfconcreteconstruction.ie${item.src}`,
      url: `https://rfconcreteconstruction.ie${item.src}`,
      name: item.title,
      description: item.caption,
      caption: item.caption,
      width: item.width,
      height: item.height,
      encodingFormat: "image/webp",
      thumbnailUrl: item.fallback,
    })),
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Project Gallery - RF Concrete Construction",
    description: "Browse our portfolio of liquid floor screed and underfloor heating installations across Ireland",
    url: "https://rfconcreteconstruction.ie/gallery",
    breadcrumb: breadcrumbSchema,
    image: galleryData.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `https://rfconcreteconstruction.ie${item.src}`,
      url: `https://rfconcreteconstruction.ie${item.src}`,
      name: item.title,
      description: item.caption,
      width: item.width,
      height: item.height,
    })),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: galleryData.length,
      itemListElement: galleryData.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ImageObject",
          contentUrl: `https://rfconcreteconstruction.ie${item.src}`,
          name: item.title,
          description: item.caption,
        },
      })),
    },
  }

  const firstImage = galleryData[0]

  return (
    <>
      <head>
        <link
          rel="preload"
          as="image"
          href={firstImage.fallback}
          imageSrcSet={`${firstImage.src} 1600w`}
          imageSizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          fetchPriority="high"
        />
      </head>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={imageGallerySchema} />
      <StructuredData data={webPageSchema} />
      <GalleryClient />
    </>
  )
}
