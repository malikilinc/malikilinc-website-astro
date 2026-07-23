// mAli v1.0 — Sosyal medya linkleri

import { Github, Twitter, Mail, Instagram } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/malikilinc",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/malikilinccom",
    icon: Instagram,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/malikilinc",
    icon: Twitter,
  },
  {
    label: "E-posta",
    href: "mailto:mali@mali.tr",
    icon: Mail,
  },
];
