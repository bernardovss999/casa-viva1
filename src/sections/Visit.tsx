import { motion, useScroll, useTransform } from "framer-motion";
import { AtSign, Clock, MapPin, MessageCircle, PawPrint, Umbrella } from "lucide-react";
import { useRef } from "react";
import { WHATSAPP, INSTAGRAM, f, Eyebrow } from "./shared";

export const Visit = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [80, 32]);
  return (
    <section id="visite" ref={ref} className="px-2 pb-2 md:px-3 md:pb-3">
      <motion.div style={{ scale, borderRadius: radius }} className="relative overflow-hidden bg-terra text-cream">
        <img src={f("DW_bjfHlW2r_02.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover object-bottom opacity-25 mix-blend-luminosity" />
        <div className="relative grid gap-12 px-6 py-24 md:grid-cols-2 md:px-14 md:py-32">
          <div>
            <Eyebrow n="06" className="text-sun">Visite</Eyebrow>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] md:text-8xl">Vem que a<br /><span className="italic text-sun">Casa é nossa.</span></h2>
            <div className="mt-10 space-y-5 text-lg">
              <p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-sun" /><span>Av. Mathias Sandri, 600 — Itacoatiara, Niterói · RJ<br />na entrada da Praia de Itacoatiara</span></p>
              <p className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-sun" />Sexta, sábado e domingo · horários variam conforme a programação</p>
              <p className="flex gap-3"><Umbrella className="mt-1 h-5 w-5 shrink-0 text-sun" />Área coberta — com chuva ou sol</p>
              <p className="flex gap-3"><PawPrint className="mt-1 h-5 w-5 shrink-0 text-sun" />Pet friendly</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-semibold text-terra transition hover:bg-sun"><MessageCircle className="h-5 w-5" />(21) 99177-6108</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-6 py-3 font-semibold transition hover:bg-cream hover:text-terra"><AtSign className="h-5 w-5" />@casavivaitacoa</a>
            </div>
          </div>
          <div className="min-h-[22rem] overflow-hidden rounded-[2rem] ring-4 ring-cream/20">
            <iframe title="Mapa Casa Viva Itacoá" loading="lazy" className="h-full min-h-[22rem] w-full"
              src="https://www.google.com/maps?q=Avenida+Mathias+Sandri+600+Itacoatiara+Niteroi&output=embed" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
