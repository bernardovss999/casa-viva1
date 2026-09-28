import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkle } from "@/components/brand";

export const WHATSAPP = "https://wa.me/5521991776108";
export const INSTAGRAM = "https://www.instagram.com/casavivaitacoa/";
export const f = (n: string) => `/fotos/${n}`;
export const ease = [0.16, 1, 0.3, 1] as const;


export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, n, className = "" }: { children: React.ReactNode; n?: string; className?: string }) => (
  <div className={`flex items-center gap-3 font-round text-xs font-bold uppercase tracking-[0.35em] ${className}`}>
    {n && <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current tracking-normal">{n}</span>}
    <span className="h-px w-10 bg-current" />
    <Sparkle className="h-3 w-3" />
    {children}
  </div>
);

/* Image that un-masks (clip-path) and parallaxes as it enters */
export const ParallaxImg = ({ src, alt, className = "", strength = 12, pos = "center" }: { src: string; alt: string; className?: string; strength?: number; pos?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(18% 12% 18% 12% round 2rem)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.3, ease }}
      className={`relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <motion.img style={{ y, scale: 1 + strength / 50, objectPosition: pos }} src={src} alt={alt} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover" />
    </motion.div>
  );
};
