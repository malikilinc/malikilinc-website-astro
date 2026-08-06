import { Mail } from "lucide-react";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";
import { type LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: any;
  isEmail?: boolean;
  emailUser?: string;
  emailDomain?: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/malikilinc",
    icon: SiGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/malikilinccom",
    icon: SiInstagram,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/malikilinc",
    icon: SiX,
  },
  {
    label: "E-posta",
    href: "#",
    isEmail: true,
    emailUser: "mali",
    emailDomain: "mali.tr",
    icon: Mail,
  },
];
