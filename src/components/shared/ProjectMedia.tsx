"use client";

import { useState, useRef, useEffect } from "react";

interface ProjectMediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

function isVideoMedia(src: string) {
  const cleanSrc = src.split("?")[0].toLowerCase();
  return [".webm", ".mp4", ".mov"].some((extension) =>
    cleanSrc.endsWith(extension)
  );
}

function getVideoMimeType(src: string) {
  const cleanSrc = src.split("?")[0].toLowerCase();

  if (cleanSrc.endsWith(".webm")) {
    return "video/webm";
  }

  if (cleanSrc.endsWith(".mov")) {
    return "video/quicktime";
  }

  return "video/mp4";
}

export function ProjectMedia({
  src,
  alt,
  className = "",
}: ProjectMediaProps) {
  const [isLongImage, setIsLongImage] = useState(() => {
    return src.split("?")[0].toLowerCase().endsWith(".webp");
  });
  const imgRef = useRef<HTMLImageElement>(null);

  const checkIsLong = (img: HTMLImageElement) => {
    if (img.naturalHeight > img.naturalWidth * 1.2) {
      setIsLongImage(true);
    }
  };

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      if (img.complete && img.naturalWidth > 0) {
        checkIsLong(img);
      }
    }
  }, [src]);

  if (isVideoMedia(src)) {
    return (
      <video
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={src} type={getVideoMimeType(src)} />
      </video>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      onLoad={(e) => checkIsLong(e.currentTarget)}
      className={
        isLongImage
          ? "animate-project-scroll"
          : `absolute inset-0 h-full w-full object-cover ${className}`
      }
    />
  );
}


