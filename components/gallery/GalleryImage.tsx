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
    <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted" onClick={onClick}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        title={title}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
          isLoading ? "blur-sm" : "blur-0"
        }`}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        priority={priority}
        quality={78}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          // Fallback to original Vercel Blob URL if WebP fails
          setImgSrc(fallback)
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-medium text-sm line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  )
}
