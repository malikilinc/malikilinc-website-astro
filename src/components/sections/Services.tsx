"use client";

// mAli v1.0 — Services (Hizmetler) Section
// Masaüstü: 3x2 grid + sıralı animasyon | Mobil: tek sütun akış
// Kart tasarımı: radius ~10px, top-right & bottom-left köşe border renkleri card'a özgü

import { motion, type Variants, type Transition } from "framer-motion";
import { Globe, Server, MapPin, ShoppingCart, Key } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { SectionWrapper } from "@/components/shared";

type ServiceIcon = React.ComponentType<{
  className?: string;
  "aria-label"?: string;
  role?: string;
  title?: string;
}>;

interface Service {
  id: string;
  title: string;
  description: string;
  Icon: ServiceIcon;
  rawColor: string;    // hex border rengi (gradient border için)
  iconColor: string;   // tailwind text rengi
  bgColor: string;     // ikon arka planı
  borderColor: string; // ikon border
}

const services: Service[] = [
  {
    id: "domain",
    title: "Domain",
    description:
      "Alan adı (domain) kayıt, transfer ve yenileme işlemleri ICANN ve Trabis akreditasyonuna sahip güvenilir sağlayıcılar üzerinden gerçekleştirilir. Alan adınızın güvenli yönetimi, DNS yapılandırmaları ve teknik yönlendirmeleri profesyonel olarak yapılır. Ayrıca performans ve güvenlik artırımı için Cloudflare entegrasyonu ve yapılandırma desteği sağlanır.",
    Icon: Globe,
    rawColor: "#c084fc",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
  },

  {
    id: "hosting",
    title: "Hosting",
    description:
      "Web siteleri ve dijital projeler için Türkiye, Almanya ve ABD lokasyonlarında yüksek performanslı SSD ve bulut tabanlı hosting çözümleri sunulmaktadır. Proje ihtiyaçlarına göre ölçeklenebilir altyapı, yüksek erişilebilirlik ve hızlı veri erişimi sağlayan sunucu yapılandırmaları hazırlanır. Güvenlik, yedekleme ve performans optimizasyonlarıyla kesintisiz ve stabil bir hosting altyapısı sağlanır.",
    Icon: Server,
    rawColor: "#4ade80",
    iconColor: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
  },

  {
    id: "wordpress",
    title: "WordPress",
    description:
      "Wordpress tabanlı web siteleri için kurulum, tema ve eklenti yapılandırması, performans optimizasyonu ve güvenlik ayarları profesyonel olarak gerçekleştirilir. Mevcut WordPress sitelerinin güncellenmesi, hızlandırılması ve teknik bakım süreçleri düzenli olarak yönetilir. Ayrıca ihtiyaçlara özel tasarım, geliştirme ve SEO uyumlu yapılandırma hizmetleri sunulur.",
    Icon: FaWordpress,
    rawColor: "#fb7185",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
  },

   {
    id: "ecommerce",
    title: "E-Ticaret",
    description:
      "E-ticaret alanında, WooCommerce, İkas, Ticimax ve İdesoft gibi altyapılara yönelik profesyonel çözümler sunulmaktadır. Mağaza kurulumu, kullanıcı dostu arayüzleri, ürün/kategori yönetimi, ödeme/kargo entegrasyonları gibi işletmelerin çevrimiçi varlıklarını güçlendirmeyi hedeflemektedir.",
    Icon: ShoppingCart,
    rawColor: "#60a5fa",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  }, 
  
  {
    id: "maps",
    title: "Harita Hizmetleri",
    description:
      "İşletmenizin Google, Yandex, Apple Haritalar ve OpenStreetMap platformlarında işletme kaydı oluşturma, mevcut kayıtların düzenlenmesi ve doğrulanması işlemleri profesyonel olarak gerçekleştirilir. Adres, kategori, hizmet bilgileri ve görseller optimize edilerek işletmenizin harita aramalarında daha görünür, güvenilir ve kolay bulunabilir olması sağlanır.",
    Icon: MapPin,
    rawColor: "#fbbf24",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },

  {
    id: "license",
    title: "Lisans Hizmetleri",
    description:
      "Çeşitli yazılım ve araçlar, Microsoft Windows, Microsoft Office, Adobe ürünleri, AutoDesk yazılımları ve WordPress eklentileri ile temaları gibi, orijinal lisans desteği ile sunulmaktadır. Bu lisanslar, kullanıcıların ürünleri yasal ve güvenilir bir şekilde kullanmalarını sağlarken, güncellemeler ve teknik destek gibi ek avantajlardan da yararlanmalarını mümkün kılar.",
    Icon: Key,
    rawColor: "#2dd4bf",
    iconColor: "text-teal-400",
    bgColor: "bg-teal-400/10",
    borderColor: "border-teal-400/20",
  },
];

/* ─── Kart bileşeni ────────────────────────────────────────────── */
function ServiceCard({ service }: { service: Service }) {
  const { title, description, Icon, rawColor, iconColor, bgColor, borderColor } = service;
  return (
    <div
      className="service-border-wrap h-full group"
      style={{ '--border-color': rawColor } as React.CSSProperties}
    >
      {/* 4 kenar — top-right köşeden & bottom-left köşeden başlayıp %50'de fade olur */}
      <span className="svc-edge svc-edge-top" />
      <span className="svc-edge svc-edge-right" />
      <span className="svc-edge svc-edge-bottom" />
      <span className="svc-edge svc-edge-left" />
      {/* Köşe yuvarlamaları */}
      <span className="svc-corner-tr" />
      <span className="svc-corner-bl" />

      {/* İçerik */}
      <div className="relative h-full rounded-[10px] bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col gap-4 transition-colors duration-300 group-hover:bg-white/[0.06]">
        {/* İkon */}
        <div className={`w-10 h-10 rounded-lg ${bgColor} border ${borderColor} flex items-center justify-center flex-shrink-0`}>
          <Icon
            className={`w-5 h-5 ${iconColor}`}
            aria-label={title}
            title={title}
            role="img"
          />
        </div>

        {/* Başlık */}
        <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>

        {/* Açıklama */}
        <p className="text-white/60 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}

/* ─── Stagger varyantları ──────────────────────────────────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } as Transition,
  }),
};

/* ─── Ana bileşen ─────────────────────────────────────────────── */
export default function Services() {
  return (
    <SectionWrapper id="services">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Hizmetler</h2>
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
          Dijital varlığınızı güçlendirmeye yönelik end-to-end çözümler.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
