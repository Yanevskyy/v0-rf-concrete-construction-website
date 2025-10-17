import type { MetadataRoute } from "next"
import galleryData from "@/data/gallery.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rfconcreteconstruction.ie"

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: galleryData.map((item) => ({
        url: `${baseUrl}${item.src}`,
        title: item.title,
        caption: item.caption,
      })),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  return routes
}
