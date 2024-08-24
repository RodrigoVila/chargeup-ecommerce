import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

type LazyImageProps = {
  alt: string
  height: string
  src: string
  width: string
  caption?: string
  className?: string
}

export const LazyImage = ({ alt, height, src, width, caption, className }: LazyImageProps) => {
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
