import { Sparkle } from "@/components/brand";
import { f } from "./shared";

const marqueeImgs = ["DX1h77IFYH6_02.jpg", "Db4HDXUiSnB_02.jpg", "DbbNioXFfEp_01.webp", "DX1h77IFYH6_04.jpg", "DbqVeBHFclT_05.webp", "DcRFflGlaYF_03.jpg", "Db4HDXUiSnB_06.jpg", "DX1h77IFYH6_05.jpg"];
export const Marquee = () => (
  <section className="overflow-hidden bg-cream py-20">
    <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
      {[...marqueeImgs, ...marqueeImgs].map((m, i) => (
        <img key={i} src={f(m)} alt="Momentos na Casa Viva" loading="lazy"
          className={`h-64 w-52 shrink-0 rounded-[1.5rem] object-cover md:h-80 md:w-64 ${i % 2 ? "mt-10" : ""}`} />
      ))}
    </div>
    <div className="mt-14 flex w-max animate-marquee gap-10 font-display text-6xl italic text-terra/90 [animation-direction:reverse] md:text-8xl">
      {Array.from({ length: 2 }).map((_, k) => (
        <span key={k} className="flex items-center gap-10 whitespace-nowrap">
          Chega, entra, fica <Sparkle className="h-10 w-10 text-sun" /> vive essa experiência
          <Sparkle className="h-10 w-10 text-sea" /> <span className="outline-text">Itacoá</span> <Sparkle className="h-10 w-10 text-leaf" />
        </span>
      ))}
    </div>
  </section>
);
