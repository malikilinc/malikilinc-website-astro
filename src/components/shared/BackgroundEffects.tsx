"use client";

// mAli v1.0 — Ambient arka plan efektleri
// Hero sonrası section'lar için gradient orb'lar ve mesh efektleri
// Fixed positioned, z-index: 0 — tüm içerik bunun üzerinde

export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Üst kısım: Hero geçişi — koyu gradient */}
      <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-transparent to-background" />

      {/* Orb 1 — Sol üst, mavi tonları */}
      <div className="ambient-orb ambient-orb-1" />

      {/* Orb 2 — Sağ orta, mor tonları */}
      <div className="ambient-orb ambient-orb-2" />

      {/* Orb 3 — Sol alt, camgöbeği tonları */}
      <div className="ambient-orb ambient-orb-3" />

      {/* Orb 4 — Sağ alt, mavi-mor */}
      <div className="ambient-orb ambient-orb-4" />

      {/* Mesh gradient overlay — ince grain/noise dokusu */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </div>
  );
}
