import React, { useState } from "react";
import type { SocialLink } from "@/data/social";
import { Check, Copy } from "lucide-react";

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
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });

      // İsteğe bağlı mailto tetikleme
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <a
        href={social.isEmail ? "#" : social.href}
        target={social.isEmail ? undefined : "_blank"}
        rel={social.isEmail ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className={className}
        aria-label={social.label}
      >
        {children}
      </a>

      {/* E-posta / Kopyalandı Bildirimi */}
      {social.isEmail && copied && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-[#141416]/90 text-[#FFB800] text-xs font-medium rounded-lg shadow-xl shadow-black/40 backdrop-blur-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 z-50 border border-[#FFB800]/30 pointer-events-none">
          <Check className="w-3.5 h-3.5 text-[#FFB800]" />
          <span className="text-white">E-posta kopyalandı!</span>
        </div>
      )}
    </div>
  );
};
