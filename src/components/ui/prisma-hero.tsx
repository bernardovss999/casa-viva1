import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Emblem } from "@/components/brand";

const MotionLink = motion.create(Link);

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Letter reveal for the giant wordmark ---------------- */
const Letters = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="inline-flex overflow-hidden">
    {text.split("").map((c, i) => (
      <motion.span
        key={i}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {c === " " ? " " : c}
      </motion.span>
    ))}
  </span>
);

/* ---------------- Hero ---------------- */
/* Gold rule with diamond ends, as in the Pommery reference */
const DiamondRule = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative my-6 h-px w-full max-w-md origin-left bg-sun/70"
  >
    <span className="absolute -left-1 -top-[5px] h-2.5 w-2.5 rotate-45 bg-sun" />
    <span className="absolute -right-1 -top-[5px] h-2.5 w-2.5 rotate-45 bg-sun" />
  </motion.div>
);

const PrismaHero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="w-full p-0">
      <div className="relative min-h-[100svh] w-full overflow-hidden bg-terra">
        {/* Emblem pattern backdrop (vector — never pixelates) */}
        <motion.div style={{ rotate }} className="pointer-events-none absolute -left-40 -top-40 text-terra-deep/70">
          <Emblem className="h-[46rem] w-[46rem]" strokeWidth={1.4} />
        </motion.div>
        <div className="pointer-events-none absolute -bottom-52 right-[-10rem] text-terra-deep/50">
          <Emblem className="h-[40rem] w-[40rem]" strokeWidth={1.4} />
        </div>
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay" />

        <div className="relative z-10 px-4 pb-6 pt-28 md:px-10 md:pt-32">
          {/* Wide caps line, like "CHAMPAGNE" */}
          <p className="text-center font-round font-bold leading-none text-cream text-[11.5vw] tracking-[0.12em] lg:text-[8.6vw]">
            <Letters text="CASA VIVA" delay={0.3} />
          </p>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <motion.div style={{ y: textY }} className="lg:col-span-6 lg:pb-52">
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-round text-2xl font-bold uppercase leading-tight tracking-[0.08em] text-sun md:text-4xl"
              >
                Entre o mar<br />e a montanha.
              </motion.p>
              <DiamondRule delay={1.1} />
              <motion.p
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md text-base text-cream/85 md:text-lg" style={{ lineHeight: 1.45 }}
              >
                Uma casa de encontro em Itacoatiara, Niterói. Gastronomia, arte, música e bem-estar — pra chegar sem
                pressa e ficar mais um pouco.
              </motion.p>
              <MotionLink
                to="/a-casa"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cream py-1 pl-5 pr-1 text-sm font-semibold uppercase tracking-wider text-terra transition-all hover:gap-4"
              >
                Conheça a casa
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terra transition-transform group-hover:-rotate-45">
                  <ArrowRight className="h-4 w-4 text-cream" />
                </span>
              </MotionLink>
            </motion.div>

            {/* Video in an arch frame at close to its native 720×1280 size — no upscaling */}
            <motion.div style={{ y: cardY }} className="relative z-20 mx-auto w-full max-w-[250px] sm:max-w-[330px] lg:col-span-4 lg:col-start-8 lg:mx-0 lg:max-w-[360px]">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[9/16] w-full overflow-hidden rounded-t-full rounded-b-[28px] border-[6px] border-cream shadow-2xl"
              >
                <video
                  autoPlay loop muted playsInline preload="metadata"
                  poster="/fotos/DcRFflGlaYF_03.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/hero.mp4"
                />
              </motion.div>
              {/* Rotating seal, like "Excellence since 1836" */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-12 top-16 flex h-24 w-24 items-center sm:-left-10 sm:top-24 sm:h-32 sm:w-32 justify-center rounded-full bg-cream text-terra shadow-xl"
              >
                <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
                  <defs><path id="seal" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" /></defs>
                  <text fontFamily="Comfortaa" fontSize="17" fontWeight="700" letterSpacing="4" fill="currentColor">
                    <textPath href="#seal">CASA DE ENCONTRO · ITACOATIARA · </textPath>
                  </text>
                </svg>
                <Emblem className="h-12 w-12" />
              </motion.div>
            </motion.div>
          </div>

          {/* Giant serif wordmark, like "POMMERY" — the video card sits over it */}
          <h1 className="pointer-events-none relative z-10 -mt-6 font-display leading-[0.78] tracking-[-0.03em] text-cream text-[27vw] lg:-mt-32 lg:text-[21vw]">
            <Letters text="Itacoá" delay={0.6} />
          </h1>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.6, delay: 1.2 }}
            className="mt-3 font-round text-xs font-bold text-cream/80 md:text-base"
          >
            ITACOATIARA — NITERÓI · RJ
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
