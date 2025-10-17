import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"
import GalleryClient from "./GalleryClient"
import galleryData from "@/data/gallery.json"

export const metadata = generateMeta({
  title: "Project Gallery – RF Concrete Construction | Liquid Floor Screed Ireland",
  description:
    "Browse our comprehensive portfolio showcasing the complete liquid floor screed process in Ireland — from preparation and underfloor heating installation to mixing, screeding, and finished floors. View real projects across Dublin, Cork, and nationwide.",
  keywords:
    "floor screed gallery Ireland, liquid screed projects, underfloor heating installation, screed preparation, screeding process, finished floors portfolio, screed pumping equipment, quality control testing, Dublin Cork Ireland",
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
    description:
      "Professional liquid floor screed and underfloor heating installation projects showcasing our complete workflow from preparation to finished floors across Ireland",
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
      keywords: item.category,
    })),
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Project Gallery - RF Concrete Construction",
    description:
      "Browse our portfolio of liquid floor screed and underfloor heating installations showcasing our complete process across Ireland",
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

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={imageGallerySchema} />
      <StructuredData data={webPageSchema} />
      <GalleryClient />
    </>
  )
}
