"use client";

// mAli v1.0 — Navbar bileşeni

import { useState, useEffect, useRef } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { Menu } from "lucide-react";
import { navItems, ctaItem, resolveNavHref } from "@/data/navigation";
import { siteDescription } from "@/data/site";
import { socialLinks } from "@/data/social";
import { SafeSocialLink } from "@/components/shared/SafeSocialLink";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isHome = pathname === "/";
  const desktopNavItems = navItems.filter((item) => item.href !== "/");

  const logoRotation = useMotionValue(0);
  const totalLogoRotation = useRef(0);
  const isSpinning = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (!isSpinning.current) {
        isSpinning.current = true;
        totalLogoRotation.current += 360;
        animate(logoRotation, totalLogoRotation.current, {
          duration: 0.6,
          ease: "easeInOut",
          onComplete: () => {
            isSpinning.current = false;
          },
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoRotation]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const targetHref = resolveNavHref(pathname, href);

    if (targetHref.startsWith("#")) {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.href = targetHref;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[padding] duration-700 ease-in-out",
        scrolled ? "px-4 md:px-6 pt-3" : "px-0 pt-0"
      )}
    >
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between transition-all duration-700 ease-in-out",
          scrolled
            ? "px-6 py-3 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-lg shadow-black/10"
            : "px-4 md:px-8 py-5 bg-transparent border border-transparent rounded-none"
        )}
      >
        {/* Logo — Sol */}
        <a
          href="/"
          aria-label="mAli Ana Sayfa"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-white font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity z-10"
        >
          <motion.span
            className="text-gradient"
            style={{ rotate: logoRotation, display: "inline-block" }}
          >
            M
          </motion.span>
        </a>

        {/* Ortalanmış Menü Linkleri (>1024px) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {desktopNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-white/85 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sağ: İletişim CTA + Mobil Hamburger */}
        <div className="flex items-center gap-3 z-10">
          <a
            href={ctaItem.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(ctaItem.href);
            }}
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-white border border-white/25 hover:border-white/40 hover:bg-white/5 rounded-full transition-all duration-300"
          >
            {ctaItem.label}
          </a>

          {/* Mobil Hamburger Menü (<=1024px) */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Menüyü aç">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>
                <div className="mt-12 flex min-h-full flex-col gap-2 pb-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="text-white/80 hover:text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="mt-6 flex flex-1 flex-col border-t border-white/10 px-4 pt-5"
                  >
                    <div>
                      <h4 className="text-white/75 text-xs font-semibold uppercase tracking-widest mb-3">
                        İletişim
                      </h4>
                      <div className="flex items-center gap-1">
                        {socialLinks.map((social) => {
                          const Icon = social.icon;

                          return (
                            <SafeSocialLink
                              key={social.label}
                              social={social}
                              className="group relative text-white/80 hover:text-white p-2.5 rounded-lg hover:bg-white/[0.06] transition-all duration-300"
                            >
                              <Icon className="h-[18px] w-[18px]" />
                              <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                                {social.label}
                              </span>
                            </SafeSocialLink>
                          );
                        })}
                      </div>
                    </div>
                    <p className="mt-auto mb-20 pt-6 pr-4 pb-4 text-white/75 text-sm leading-relaxed">
                      {siteDescription}
                    </p>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
