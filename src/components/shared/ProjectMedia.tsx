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
  const [isLongImage, setIsLongImage] = useState(false);
  const [scrollY, setScrollY] = useState<string>("-70%");
  const imgRef = useRef<HTMLImageElement>(null);

  const calculateScroll = (img: HTMLImageElement) => {
    const container = img.parentElement;
    if (!container) return;

    const containerH = container.clientHeight;
    let imgH = img.clientHeight;

    if ((!imgH || imgH <= containerH) && img.naturalWidth > 0 && container.clientWidth > 0) {
      imgH = container.clientWidth * (img.naturalHeight / img.naturalWidth);
    }

    if (img.naturalHeight > img.naturalWidth * 1.2) {
      setIsLongImage(true);
    } else {
      setIsLongImage(false);
      return;
    }

    if (imgH > containerH && containerH > 0) {
      const scrollPercent = -((imgH - containerH) / imgH) * 100;
      setScrollY(`${scrollPercent.toFixed(2)}%`);
    }
  };

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      if (img.complete && img.naturalWidth > 0) {
        calculateScroll(img);
      }
    }

    const handleResize = () => {
      if (imgRef.current && imgRef.current.complete) {
        calculateScroll(imgRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      onLoad={(e) => calculateScroll(e.currentTarget)}
      style={
        isLongImage
          ? ({ "--scroll-y": scrollY } as React.CSSProperties)
          : undefined
      }
      className={
        isLongImage
          ? "animate-project-scroll"
          : `absolute inset-0 h-full w-full object-cover ${className}`
      }
    />
  );
}


