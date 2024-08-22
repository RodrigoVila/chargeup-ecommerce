import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

type LazyImageProps = {
  alt: string
  height: string
  src: string
  width: string
  caption?: string
}

export const LazyImage = ({ alt, height, src, width, caption }: LazyImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`@packages/assets/images/${imgSrc}.jpg`)
        setImgSrc(image.default || image)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [imgSrc])

  return (
    <div>
      <LazyLoadImage alt={alt} height={height} src={imgSrc} width={width} effect='blur' />
      {caption ? <span>{caption}</span> : null}
    </div>
  )
}
