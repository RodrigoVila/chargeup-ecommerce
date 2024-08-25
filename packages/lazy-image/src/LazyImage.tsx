import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

type LazyImageProps = {
  src: string
  alt: string
  height?: string | number
  width?: string | number
  caption?: string
  className?: string
}

export const LazyImage = ({ src, alt, height, width, caption, className }: LazyImageProps) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        width={width}
        effect='blur'
        className={className}
      />
      {caption ? <span>{caption}</span> : null}
    </div>
  )
}
