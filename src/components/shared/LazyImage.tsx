import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
  alt: string;
  height: string;
  src: string;
  width: string;
  caption?: string;
}

const LazyImage = ({ alt, height, src, width, caption }: Props) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        width={width}
        effect="blur"
      />
      {caption ? <span>{caption}</span> : null}
    </div>
  );
};

export default LazyImage;
