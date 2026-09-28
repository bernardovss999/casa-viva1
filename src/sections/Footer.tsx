import { motion } from "framer-motion";
import { Emblem } from "@/components/brand";
import { ease } from "./shared";

export const Footer = () => (
  <footer className="overflow-hidden bg-cream px-5 pt-16 md:px-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-b border-terra/15 pb-10 md:flex-row">
      <div className="flex items-center gap-3 text-terra"><Emblem className="h-14 w-14" /><span className="font-round text-sm font-bold tracking-[0.3em]">CASA VIVA · ITACOÁ</span></div>
      <p className="text-center text-sm text-ink/60">Casa de encontro em Itacoatiara · Gastronomia + Arte + Música + Bem-estar</p>
    </div>
    <motion.p
      initial={{ y: "60%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 1.4, ease }}
      className="select-none text-center font-display text-[22vw] leading-[0.8] tracking-tighter text-terra">
      Itacoá
    </motion.p>
  </footer>
);
