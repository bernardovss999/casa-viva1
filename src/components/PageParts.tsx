import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Emblem, Sparkle } from "@/components/brand";
import { WHATSAPP, ease, f } from "@/sections/shared";

/* Official WhatsApp glyph */
export const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
    <path d="M16.04 3C9.02 3 3.3 8.7 3.3 15.72c0 2.24.59 4.43 1.7 6.36L3.2 28.8l6.9-1.8a12.7 12.7 0 0 0 5.94 1.5h.01c7.02 0 12.73-5.7 12.74-12.72A12.66 12.66 0 0 0 16.04 3Zm0 23.35h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.1 1.07 1.1-3.99-.25-.41a10.56 10.56 0 0 1-1.62-5.63c0-5.84 4.76-10.6 10.61-10.6a10.6 10.6 0 0 1 10.6 10.61c0 5.85-4.76 10.66-10.54 10.66Zm5.8-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.76-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

export const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP}
    target="_blank"
    rel="noreferrer"
    aria-label="Fale conosco no WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.5 }}
    style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    className="group fixed right-4 z-50 flex h-14 w-14 md:right-5 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.45)] transition-transform hover:scale-110"
  >
    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
    <WhatsAppIcon className="relative h-8 w-8 md:h-9 md:w-9" />
    <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream opacity-0 transition-opacity group-hover:opacity-100">
      Reservas: (21) 99177-6108
    </span>
  </motion.a>
);

/* Header block for inner pages */
export const PageHero = ({ n, title, italic, text, img, pos = "center" }: { n: string; title: string; italic: string; text: string; img: string; pos?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  return (
    <section ref={ref} className="px-0 pt-0 md:px-3 md:pt-3">
      <div className="relative flex min-h-[78svh] items-end overflow-hidden bg-terra text-cream md:rounded-[2rem]">
        <motion.img style={{ y, scale, objectPosition: pos }} src={f(img)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-terra via-terra/60 to-terra/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 text-cream/10"><Emblem className="h-[30rem] w-[30rem]" strokeWidth={1.2} /></div>
        <div className="relative w-full px-5 pb-14 pt-36 md:px-10 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3 font-round text-xs font-bold uppercase tracking-[0.35em] text-sun">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current tracking-normal">{n}</span>
            <span className="h-px w-10 bg-current" /><Sparkle className="h-3 w-3" /> Casa Viva Itacoá
          </motion.div>
          <h1 className="mt-6 font-display text-[15vw] leading-[0.85] tracking-tight md:text-[9vw]">
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.1, ease }}>{title}</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block italic text-sun" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25, ease }}>{italic}</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-8 max-w-xl text-lg text-cream/85">{text}</motion.p>
        </div>
      </div>
    </section>
  );
};

/* Cards linking to each page */
const cards = [
  { to: "/a-casa", n: "01", label: "A Casa", text: "Nossa história e os quatro pilares", img: "Db4HDXUiSnB_07.jpg", pos: "center" },
  { to: "/gastronomia", n: "02", label: "Gastronomia", text: "Do café da manhã ao BBQ da noite", img: "Db4HDXUiSnB_01.jpg", pos: "center" },
  { to: "/programacao", n: "03", label: "Programação", text: "Música, yoga, dança e cultura", img: "Da7g3OPFd5c_03.webp", pos: "center" },
  { to: "/aniversarios", n: "04", label: "Aniversários", text: "Sua festa numa casa inteira", img: "DbbNioXFfEp_03.webp", pos: "center" },
  { to: "/visite", n: "05", label: "Visite", text: "Endereço, contato e mapa", img: "DcRFflGlaYF_03.jpg", pos: "center" },
];

export const Explore = ({ exclude, title = "Explore a casa" }: { exclude?: string; title?: string }) => {
  const list = cards.filter((c) => c.to !== exclude);
  return (
    <section className="bg-cream px-3 py-20 md:px-6 md:py-28">
      <div className="mx-auto mb-10 max-w-6xl px-2">
        <h2 className="font-display text-5xl leading-none md:text-7xl">{title.split(" ").slice(0, -1).join(" ")} <span className="italic text-terra">{title.split(" ").slice(-1)}</span></h2>
      </div>
      <div className={`mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 ${list.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
        {list.map((c, i) => (
          <motion.div key={c.to} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease }}>
            <Link to={c.to} className="group relative block h-[24rem] overflow-hidden rounded-[2rem]">
              <img src={f(c.img)} alt={c.label} loading="lazy" style={{ objectPosition: c.pos }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute left-5 top-5 font-round text-xs font-bold tracking-[0.3em] text-cream/80">{c.n}</span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-cream">
                <div>
                  <h3 className="font-display text-3xl">{c.label}</h3>
                  <p className="mt-1 text-sm text-cream/75">{c.text}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-terra transition-transform duration-500 group-hover:-rotate-45 group-hover:bg-sun">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
