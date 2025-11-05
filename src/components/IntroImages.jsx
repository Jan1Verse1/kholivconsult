import React from 'react';

const IntroImages = ({ 
  src, 
  alt = '', 
  title = '',
  subtitle = '',
  className = '',
  objectFit = 'cover',
  height = '400px',
  overlay = true,
  overlayOpacity = 60,
  textAlign = 'center'
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${
          objectFit === 'cover' ? 'object-cover' :
          objectFit === 'contain' ? 'object-contain' :
          objectFit === 'fill' ? 'object-fill' :
          'object-center'
        }`}
      />
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
        <div className={`max-w-4xl w-full text-${textAlign}`}>
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroImages;
