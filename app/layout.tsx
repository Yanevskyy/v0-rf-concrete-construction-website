import type React from "react"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SkipToContent } from "@/components/skip-to-content"
import { StructuredData } from "@/components/structured-data"
import { generateLocalBusinessSchema } from "@/lib/metadata"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData data={localBusinessSchema} />
      </head>
      <body className="font-sans">
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
