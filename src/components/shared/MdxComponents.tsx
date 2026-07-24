// mAli v1.0 — MDX özel bileşen eşlemeleri
// Blog yazılarında kullanılan HTML elementlerinin özelleştirilmiş versiyonları

export function getMdxComponents() {
  return components;
}

export const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="block my-6">
      <img
        src={props.src || ""}
        alt={props.alt || "Yazı görseli"}
        loading="lazy"
        decoding="async"
        className="rounded-xl w-full max-w-[720px] h-auto mx-auto object-cover"
      />
    </span>
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-white scroll-mt-24"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-white scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-lg md:text-xl font-semibold mt-5 mb-2 text-white scroll-mt-24"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base md:text-lg leading-relaxed text-white/80 mb-4"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-xl bg-white/5 border border-white/10 p-4 overflow-x-auto my-6 text-sm md:text-base"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-white/90"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-white/20 pl-4 my-6 italic text-white/70"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-white/80" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-white/80" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-base md:text-lg leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-white/90" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 -mx-4 px-4">
      <table className="min-w-full text-sm text-white/80" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-white/20 px-4 py-2 text-left font-semibold text-white"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-white/10 px-4 py-2" {...props} />
  ),
};
