import React, { useState } from "react";
import type { SocialLink } from "@/data/social";

interface SafeSocialLinkProps {
  social: SocialLink;
  className?: string;
  children: React.ReactNode;
}

export const SafeSocialLink: React.FC<SafeSocialLinkProps> = ({
  social,
  className,
  children,
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (social.isEmail && social.emailUser && social.emailDomain) {
      e.preventDefault();
      const email = `${social.emailUser}@${social.emailDomain}`;

      // Panoya kopyala
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
      }

      // İsteğe bağlı mailto tetikleme
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <a
        href={social.href}
        target={social.isEmail ? undefined : "_blank"}
        rel={social.isEmail ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className={className}
        aria-label={social.isEmail ? `${social.label} (Kopyalamak veya mail atmak için tıklayın)` : social.label}
      >
        {children}
      </a>

      {/* E-posta / Kopyalandı Bildirimi - Saf SVG Check ile ikon kütüphane bağımlılığı yok */}
      {social.isEmail && copied && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-[#141416]/95 text-[#FFB800] text-xs font-medium rounded-lg shadow-xl shadow-black/40 backdrop-blur-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 z-50 border border-[#FFB800]/30 pointer-events-none">
          <svg
            className="w-3.5 h-3.5 text-[#FFB800]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-white">E-posta kopyalandı!</span>
        </div>
      )}
    </div>
  );
};
