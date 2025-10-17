"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryImageProps {
  src: string
  fallback: string
  alt: string
  title: string
  width: number
  height: number
  priority?: boolean
  onClick?: () => void
}

export function GalleryImage({
  src,
  fallback,
  alt,
  title,
  width,
  height,
  priority = false,
  onClick,
}: GalleryImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted transition-all duration-300 hover:shadow-2xl"
      onClick={onClick}
    >
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        title={title}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`w-full h-full object-cover transition-all duration-500 hover:scale-110 ${
          isLoading ? "blur-sm" : "blur-0"
        }`}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        priority={priority}
        quality={80}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          // Fallback to original Vercel Blob URL if WebP fails
          setImgSrc(fallback)
        }}
      />
    </div>
  )
}
