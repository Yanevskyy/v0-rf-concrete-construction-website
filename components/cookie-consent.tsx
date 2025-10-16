"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    } else if (consent === "accepted") {
      loadAnalytics()
    }
  }, [])

  const loadAnalytics = () => {
    console.log("[v0] Analytics loaded after user consent")
  }

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    loadAnalytics()
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">Cookie Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
              clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" asChild size="sm">
              <Link href="/privacy-policy">Learn More</Link>
            </Button>
            <Button onClick={acceptCookies} size="sm">
              Accept
            </Button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
