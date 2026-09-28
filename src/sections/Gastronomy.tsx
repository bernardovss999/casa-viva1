import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { f, Eyebrow, ease } from "./shared";

const dayParts = [
  { time: "Manhã", title: "Café da manhã", text: "Toasts, ovos, frutas e um café gostoso — assinado pela chef Emili Penelope nos domingos de yoga, servido a partir das 8h.", img: "DbqVeBHFclT_04.webp", tone: "bg-sun text-ink" },
  { time: "Tarde", title: "Almoço sem pressa", text: "Comida gostosa e pratos preparados com carinho, feijoada no fim de semana e cerveja Praya gelada.", img: "Db4HDXUiSnB_01.jpg", tone: "bg-leaf text-ink" },
  { time: "Pôr do sol", title: "Pós-praia", text: "DJ, drinks e taças de vinho enquanto o céu de Itacoatiara muda de cor.", img: "Db4HDXUiSnB_05.jpg", tone: "bg-sea text-cream" },
  { time: "Noite", title: "Embrazado BBQ", text: "Hambúrgueres artesanais, sanduíches e carnes defumadas a partir das 18h, com música ao vivo.", img: "DdU1a6-N259_01.jpg", tone: "bg-terra text-cream" },
];

const Heading = () => (
  <div className="mb-8 flex items-end justify-between px-5 md:mb-10 md:px-10">
    <div>
      <Eyebrow n="03" className="text-sun">Gastronomia</Eyebrow>
      <h2 className="mt-5 font-display text-5xl leading-none md:text-8xl">Da manhã <span className="italic text-sun">à noite</span></h2>
    </div>
    <p className="hidden max-w-xs text-cream/60 md:block">Toda semana, novos sabores chegam pra combinar com o clima leve de Itacoá.</p>
  </div>
);

/* Desktop: vertical scroll drives a horizontal slide (kept short so it moves fast). */
const DesktopSlide = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative hidden h-[200vh] md:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Heading />
        <motion.div style={{ x }} className="flex gap-5 pl-10">
          {dayParts.map((d, i) => (
            <article key={d.title} className="relative flex h-[58vh] w-[62vw] shrink-0 overflow-hidden rounded-[2rem] bg-cream text-ink">
              <img src={f(d.img)} alt={d.title} loading="lazy" className="absolute inset-y-0 right-0 h-full w-3/5 object-cover" />
              <div className="relative flex w-2/5 flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-4 py-1 font-round text-xs font-bold uppercase tracking-widest ${d.tone}`}>{d.time}</span>
                  <span className="font-display text-5xl text-terra/25">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-5xl leading-none">{d.title}</h3>
                  <p className="mt-4 text-ink/75">{d.text}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
        <div className="mx-10 mt-10 h-px bg-cream/15">
          <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-sun" />
        </div>
      </div>
    </div>
  );
};

/* Mobile: native swipe carousel with snap, photo on top and text below, plus dot indicators. */
const MobileCarousel = () => {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null | undefined;
    if (el && card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
  };
  const go = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <div className="py-20 md:hidden">
      <Heading />
      <p className="-mt-3 mb-6 px-5 text-cream/60">Deslize para ver o dia inteiro →</p>
      <div
        ref={track}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {dayParts.map((d, i) => (
          <motion.article
            key={d.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="w-[84vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-cream text-ink"
          >
            <div className="relative aspect-[4/3]">
              <img src={f(d.img)} alt={d.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <span className={`absolute left-4 top-4 rounded-full px-4 py-1 font-round text-xs font-bold uppercase tracking-widest ${d.tone}`}>{d.time}</span>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl leading-none">{d.title}</h3>
                <span className="font-display text-3xl text-terra/25">0{i + 1}</span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{d.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        {dayParts.map((d, i) => (
          <button key={d.title} onClick={() => go(i)} aria-label={d.title} className="flex h-11 w-11 items-center justify-center">
            <span className={`block h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-sun" : "w-2 bg-cream/30"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export const Gastronomy = () => (
  <section id="gastronomia" className="relative bg-ink text-cream">
    <MobileCarousel />
    <DesktopSlide />
  </section>
);
