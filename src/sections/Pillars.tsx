import { motion } from "framer-motion";
import { IconArt, IconFood, IconMusic, IconZen } from "@/components/brand";
import { f, ease, Reveal, Eyebrow } from "./shared";

const pillars = [
  { icon: IconFood, title: "Gastronomia", text: "Um hub gastronômico com parceiros que se renovam: do café da manhã ao jantar.", img: "Db4HDXUiSnB_04.jpg", color: "bg-sun text-terra" },
  { icon: IconMusic, title: "Música", text: "MPB, samba, rock, forró pé de serra, bossa, DJ no pós-praia e bailes de dança.", img: "Da7g3OPFd5c_03.webp", color: "bg-sea text-cream" },
  { icon: IconArt, title: "Arte & Cultura", text: "A Galeria Itacoatiara, exposições de artistas locais, saraus, teatro e Arte & Vinho.", img: "Da7g3OPFd5c_02.webp", color: "bg-terra text-cream" },
  { icon: IconZen, title: "Bem-estar", text: "Domingo Zen: yoga ao ar livre, meditação, massagem e movimento com a natureza.", img: "DYUlmtMlT3f_08.jpg", color: "bg-leaf text-ink" },
];

export const Pillars = () => (
  <section id="pilares" className="bg-cream px-3 py-24 md:px-6 md:py-32">
    <div className="mx-auto mb-14 flex max-w-6xl flex-col justify-between gap-6 px-2 md:flex-row md:items-end">
      <div>
        <Eyebrow n="02" className="text-sea">Quatro pilares</Eyebrow>
        <h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">O que vive<br /><span className="italic text-terra">aqui dentro</span></h2>
      </div>
      <Reveal><p className="max-w-sm text-ink/70">Cada evento é pensado para encantar o público, fortalecer a economia local e valorizar quem faz.</p></Reveal>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.12, ease }}
          className="group relative h-[30rem] overflow-hidden rounded-[2rem]"
        >
          <img src={f(p.img)} alt={p.title} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className={`absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full ${p.color} transition-transform duration-700 group-hover:rotate-[360deg]`}>
            <p.icon className="h-9 w-9" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
            <span className="font-round text-xs tracking-[0.3em] text-cream/60">0{i + 1}</span>
            <h3 className="mt-1 font-display text-4xl">{p.title}</h3>
            <p className="mt-3 max-h-40 overflow-hidden text-sm text-cream/85 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">{p.text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
