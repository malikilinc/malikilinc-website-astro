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
  className,
}: ProjectMediaProps) {
  if (isVideoMedia(src)) {
    return (
      <video
        className={`absolute inset-0 h-full w-full ${className || ""}`}
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
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className || ""}`}
    />
  );
}
