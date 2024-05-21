// src/components/RMGImage.tsx
import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt }) => {
  return <img className="rounded-lg shadow-lg mb-4" src={src} alt={alt} />;
};

export default RMGImage;
