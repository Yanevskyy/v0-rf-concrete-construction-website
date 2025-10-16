import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"
import GalleryClient from "./GalleryClient"

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

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <GalleryClient />
    </>
  )
}
