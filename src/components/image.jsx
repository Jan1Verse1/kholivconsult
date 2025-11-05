import React from 'react';

const ImageComponent = ({ 
  src, 
  alt = '', 
  className = '',
  objectFit = 'cover',
  width = '100%',
  height = 'auto',
  rounded = false,
  shadow = false,
  overlay = false,
  overlayOpacity = 50
}) => {
  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-lg' : ''} ${className}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${
          objectFit === 'cover' ? 'object-cover' :
          objectFit === 'contain' ? 'object-contain' :
          objectFit === 'fill' ? 'object-fill' :
          'object-center'
        } ${shadow ? 'shadow-lg' : ''}`}
      />
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}
    </div>
  );
};

export default ImageComponent;

