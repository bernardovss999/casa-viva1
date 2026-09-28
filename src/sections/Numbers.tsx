import { motion, useTransform, useInView, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useSpring(0, { stiffness: 40, damping: 20 });
  const txt = useTransform(mv, (v) => Math.round(v).toLocaleString("pt-BR") + suffix);
  useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
  return <motion.span ref={ref}>{txt}</motion.span>;
};
export const Numbers = () => (
  <section className="bg-cream px-5 pb-24 md:px-10">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-terra/15 md:grid-cols-4">
      {[
        { n: 600, s: "", l: "Mathias Sandri — nosso número" },
        { n: 4, s: "", l: "pilares: sabor, arte, música, bem-estar" },
        { n: 5200, s: "+", l: "amigos no Instagram" },
        { n: 3, s: "", l: "dias de casa aberta por semana" },
      ].map((x) => (
        <div key={x.l} className="bg-cream p-8">
          <p className="font-display text-5xl text-terra md:text-6xl"><Counter to={x.n} suffix={x.s} /></p>
          <p className="mt-2 text-sm text-ink/60">{x.l}</p>
        </div>
      ))}
    </div>
  </section>
);
