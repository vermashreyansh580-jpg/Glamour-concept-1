import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1d1713] via-[#130e0b] to-[#0e0b09] text-center p-6 ${className}`}
      >
        <div className="w-10 h-10 border border-[#d4b475]/40 flex items-center justify-center mb-3 text-[#d4b475]">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
        </div>
        <span className="font-serif text-lg text-[#f6f0e6] tracking-wide">
          {fallbackLabel || 'Glamour Hub'}
        </span>
        <span className="text-xs text-[#8f8373] mt-1 max-w-[24ch]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
