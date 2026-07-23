// mAli v1.0 — Navigasyon menü öğeleri

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımda", href: "/about" },
  { label: "Projeler", href: "/projects" },
  { label: "Blog", href: "/blog" },

];

export const hizmetlerItems: NavItem[] = [
  { label: "Domain", href: "/services" },
  { label: "Hosting", href: "/services" },
  { label: "Wordpress", href: "/services" },
  { label: "E-Ticaret", href: "/services" },
  { label: "Maps", href: "/services" },
  { label: "Lisans", href: "/services" },
];

export const ctaItem: NavItem = {
  label: "İletişim",
  href: "#contact",
};

export function resolveNavHref(pathname: string, href: string) {
  if (href === "#about") {
    return "/about";
  }

  if (href === "#services") {
    return "/services";
  }

  if (pathname !== "/") {
    if (href === "#blog") {
      return "/blog";
    }

    if (href === "#portfolio") {
      return "/projects";
    }
  }

  return href;
}
