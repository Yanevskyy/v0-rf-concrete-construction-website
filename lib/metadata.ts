import type { Metadata } from "next"

const siteUrl = "https://www.rfconcrete.ie"
const siteName = "RF Concrete Construction"
const defaultImage = `${siteUrl}/logo.png`

export function generateMetadata({
  title,
  description,
  keywords,
  path,
  image = defaultImage,
}: {
  title: string
  description: string
  keywords: string
  path: string
  image?: string
}): Metadata {
  const url = `${siteUrl}${path}`
  const fullTitle = `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RF Concrete Construction",
    description:
      "Professional liquid floor screed installation for residential and commercial properties across Ireland",
    url: siteUrl,
    telephone: "+353087764251 5",
    email: "info@rfconcrete.ie",
    logo: defaultImage,
    image: defaultImage,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE",
      addressRegion: "Ireland",
    },
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
    sameAs: ["https://www.instagram.com/rf_concrete_construction_?igsh=aGUyNGJtMWR2M2Fx&utm_source=qr"],
    priceRange: "€€",
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}
