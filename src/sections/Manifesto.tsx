import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";
import { Emblem } from "@/components/brand";
import { f, ease, Reveal, Eyebrow, ParallaxImg } from "./shared";

export const Manifesto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  return (
    <section id="casa" ref={ref} className="paper relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
      <motion.div style={{ rotate }} className="pointer-events-none absolute -right-24 top-10 text-terra/10">
        <Emblem className="h-[34rem] w-[34rem]" strokeWidth={1.2} />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <Eyebrow n="01" className="text-terra">A Casa</Eyebrow>
        <h2 className="mt-8 font-display text-[11vw] leading-[0.95] tracking-tight text-ink md:text-[6.4vw]">
          <WordsPullUpMultiStyle segments={[
            { text: "Um ponto de encontro entre" },
            { text: "pessoas, sabores", className: "italic text-terra" },
            { text: "e" },
            { text: "experiências.", className: "italic text-sea" },
          ]} />
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
              Inspirada pelas montanhas e pela natureza de Itacoatiara, a Casa Viva Itacoá foi idealizada para ser o
              ponto de encontro de amigos e famílias com a cultura, a arte e a gastronomia.
            </p>
            <p className="mt-6 leading-relaxed text-ink/70">
              Um hub cultural, criativo e acolhedor na praia mais vibrante de Niterói — feito para valorizar o que é
              local, fortalecer a economia da região e revelar o potencial criativo de quem faz.
            </p>
            <p className="mt-10 font-display text-3xl italic text-terra">“Agora temos todos uma casa na nossa praia.”</p>
          </Reveal>
          <div className="relative md:col-span-6 md:col-start-7">
            <ParallaxImg src={f("DW3lxWslX3B_02.jpg")} alt="Praia de Itacoatiara e o Costão" className="aspect-[4/3]" pos="50% 100%" strength={3} />
            <motion.div
              initial={{ scale: 0, rotate: -40 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="absolute -bottom-10 -left-4 flex h-36 w-36 items-center justify-center rounded-full bg-sun text-terra md:-left-10 md:h-44 md:w-44"
            >
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
                <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
                <text className="font-round" fontSize="15" fontWeight="700" letterSpacing="5" fill="currentColor">
                  <textPath href="#circ">ENTRE O MAR E A MONTANHA · ITACOATIARA · </textPath>
                </text>
              </svg>
              <Emblem className="h-14 w-14" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
