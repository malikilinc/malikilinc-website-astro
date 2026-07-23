"use client";

// mAli v1.0 — Footer bileşeni
// Kero AI tarzı: Logo+açıklama+sosyal | Çoklu sütun linkler | Büyük "mAli" watermark | Copyright

import { useState, useEffect } from "react";
import { navItems, hizmetlerItems, resolveNavHref } from "@/data/navigation";
import { siteDescription } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isHome = pathname === "/";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const targetHref = resolveNavHref(pathname, href);

    if (targetHref.startsWith("#")) {
      e.preventDefault();
      if (isHome) {
        const element = document.querySelector(targetHref);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/" + targetHref;
      }

      return;
    }

    if (targetHref === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    e.preventDefault();
    window.location.href = targetHref;
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/10 section-glow-top"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Üst Alan: Logo+Açıklama+Sosyal | Link Sütunları */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Sol: Logo + Açıklama + Sosyal */}
          <div className="md:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center">
              <span className="relative inline-block font-bold text-xl tracking-tight text-white/60 hover:text-white transition-colors duration-300 group cursor-default">
                mAli
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-white transition-all duration-500 ease-out" />
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {siteDescription}
            </p>
          </div>

          {/* Sağ: Link Sütunları */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-6">
            {/* Menü */}
            <div>
              <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                Menü
              </h4>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                Hizmetler
              </h4>
              <div className="space-y-3">
                {hizmetlerItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* İletişim — İkon + hover tooltip */}
            <div>
              <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                İletişim
              </h4>
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/[0.06] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                      <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Büyük "mAli" Watermark */}
        <div className="relative mt-12 mb-4 overflow-hidden" aria-hidden="true">
          <div className="footer-watermark-container flex justify-center">
            <span className="footer-watermark text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter select-none">
              mAli
            </span>
          </div>
        </div>

        {/* Alt: Çizgi + Copyright */}
        <div className="border-t border-white/[0.06] pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {currentYear} mAli. Tüm hakları saklıdır.
            </p>
            <p className="text-white/20 text-xs">
              Made with ❤️ by mAli.
            </p>
          </div>
        </div>
      </div>

      {/* Footer en alt ışık efekti — Kero AI tarzı */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none" aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 30% 125% at 50% 100%, rgba(234,160,60,0.28) 0%, rgba(200,120,40,0.15) 30%, rgba(160,80,30,0.06) 55%, transparent 80%)",
        }}
      />
    </footer>
  );
}
