import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IconCake, Sparkle } from "@/components/brand";
import { WHATSAPP, f, Reveal, Eyebrow, ParallaxImg } from "./shared";

export const Birthdays = () => (
  <section id="aniversarios" className="paper px-5 py-28 md:px-10 md:py-36">
    <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
      <div className="relative grid grid-cols-2 gap-3">
        <ParallaxImg src={f("DbbNioXFfEp_03.webp")} alt="Aniversário na Casa Viva" className="aspect-[3/4]" strength={8} />
        <ParallaxImg src={f("DbbNioXFfEp_01.webp")} alt="Bolo de aniversário" className="mt-16 aspect-[3/4]" strength={14} />
        <motion.div
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.3 }}
          className="absolute -top-6 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-terra text-cream shadow-xl"
        >
          <IconCake className="h-12 w-12" />
        </motion.div>
      </div>
      <div>
        <Eyebrow n="05" className="text-terra">Aniversários & eventos</Eyebrow>
        <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">Seu aniversário merece uma <span className="italic text-terra">casa inteira</span></h2>
        <Reveal>
          <p className="mt-8 text-lg text-ink/75">
            Música ao vivo, gastronomia, bons drinks e uma atmosfera única, cercada pela energia de Itacoá. Reunimos gente
            querida para comemorações do seu jeito — e também recebemos eventos privados.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {["Música ao vivo", "Cardápio especial", "Drinks & brindes", "Equipe dedicada"].map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-2xl bg-cream px-4 py-3 shadow-sm ring-1 ring-terra/10"><Sparkle className="h-3 w-3 text-terra" />{t}</li>
            ))}
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-terra py-1 pl-6 pr-1 font-semibold text-cream">
            Reservar pelo WhatsApp
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sun text-terra transition-transform group-hover:translate-x-1"><ArrowRight className="h-5 w-5" /></span>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
