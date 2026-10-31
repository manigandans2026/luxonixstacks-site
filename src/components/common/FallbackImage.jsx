import React, { useState } from 'react';

/**
 * FallbackImage component ensures that missing or broken images render
 * a clean, brand-consistent visual placeholder rather than a broken image icon.
 */
export default function FallbackImage({
  src,
  alt,
  className = '',
  fallbackText = '',
  type = 'card', // 'card' | 'avatar'
}) {
  const [error, setError] = useState(!src);

  if (error || !src) {
    if (type === 'avatar') {
      const initial = (fallbackText || alt || 'U').charAt(0).toUpperCase();
      return (
        <div
          className={`flex items-center justify-center bg-gray-200 text-gray-700 font-bold ${className}`}
          title={alt}
        >
          {initial}
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500 p-4 border border-gray-200 ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold mb-2">
          {(fallbackText || alt || 'C').charAt(0).toUpperCase()}
        </div>
        <span className="text-xs font-semibold text-gray-600 text-center line-clamp-1">
          {fallbackText || alt || 'Project Showcase'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

