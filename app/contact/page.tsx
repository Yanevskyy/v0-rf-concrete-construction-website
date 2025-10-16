import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"
import ContactClient from "./ContactClient"

export const metadata = generateMeta({
  title: "Contact RF Concrete Construction – Get a Free Quote",
  description:
    "Get in touch with RF Concrete Construction, Ireland's trusted liquid floor screed specialists. Request a free quote for residential or commercial projects. Phone: +353 087 764 2515 | Email: info@rfconcrete.ie. Fast response, professional service.",
  keywords:
    "contact RF Concrete, liquid screed quote Ireland, floor screed consultation, screeding services contact, get quote floor screed, RF Concrete phone number",
  path: "/contact",
})

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ContactClient />
    </>
  )
}
