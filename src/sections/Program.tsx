import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Sparkle } from "@/components/brand";
import { INSTAGRAM, ease, Reveal, Eyebrow } from "./shared";

const week = [
  { day: "Sexta", hours: "A partir das 16h", items: ["Embrazado BBQ a partir das 18h", "Música ao vivo e bailes de dança de salão", "Aulas de movimento: Retorno ao Corpo"] },
  { day: "Sábado", hours: "Manhã à noite", items: ["Aula de Charme pela manhã", "Almoço, feijoada e drinks", "Shows ao vivo à tarde"] },
  { day: "Domingo", hours: "A partir das 8h", items: ["Domingo Zen — yoga às 8h30", "Café da manhã a partir das 8h", "Viva Som: DJ no pós-praia às 17h"] },
];
const highlights = ["Arraiá de Itacoatiara", "1ª Feira Pet", "Arte & Vinho", "Os Três Porquinhos", "Dia Internacional da Yoga", "Sarau de Música & Poesia", "Defesa Pessoal para Mulheres", "Mix Broadway", "Cervejaria Piedade", "Forró Pé de Serra", "After Party Itacoatiara Pro"];

export const Program = () => (
  <section id="programacao" className="relative bg-sea px-5 py-28 text-cream md:px-10 md:py-36">
    <div className="mx-auto max-w-6xl">
      <Eyebrow n="04" className="text-sun">Programação</Eyebrow>
      <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display text-5xl leading-none md:text-8xl">Sexta, sábado<br /><span className="italic text-sun">e domingo</span></h2>
        <p className="max-w-sm text-cream/80">A agenda muda toda semana — confira o que rola no nosso Instagram. Espaço coberto: mesmo com chuva, o evento acontece.</p>
      </div>

      <div className="mt-16 divide-y divide-cream/25 border-y border-cream/25">
        {week.map((w, i) => (
          <motion.div
            key={w.day}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease }}
            className="group grid gap-4 py-8 transition-colors hover:bg-sea-deep/40 md:grid-cols-12 md:items-center md:px-4"
          >
            <h3 className="font-display text-5xl transition-transform duration-500 group-hover:translate-x-3 md:col-span-4 md:text-6xl">{w.day}</h3>
            <p className="flex items-center gap-2 font-round text-sm uppercase tracking-widest text-sun md:col-span-3"><Clock className="h-4 w-4" />{w.hours}</p>
            <ul className="space-y-1 text-cream/85 md:col-span-5">
              {w.items.map((it) => <li key={it} className="flex gap-2"><Sparkle className="mt-1.5 h-2.5 w-2.5 shrink-0 text-sun" />{it}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-16">
        <p className="font-round text-xs font-bold uppercase tracking-[0.3em] text-cream/60">Já passou por aqui</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span key={h} className="rounded-full border border-cream/40 px-4 py-2 text-sm transition hover:border-sun hover:bg-sun hover:text-ink">{h}</span>
          ))}
        </div>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cream py-1 pl-6 pr-1 font-semibold text-sea-deep">
          Ver agenda da semana
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra text-cream transition-transform group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" /></span>
        </a>
      </Reveal>
    </div>
  </section>
);
