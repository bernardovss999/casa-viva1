import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { AtSign, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Emblem } from "@/components/brand";
import { INSTAGRAM, WHATSAPP } from "@/sections/shared";
import { WhatsAppIcon } from "@/components/PageParts";

const MAPS = "https://www.google.com/maps/search/?api=1&query=Avenida+Mathias+Sandri+600+Itacoatiara+Niteroi";

export const pages = [
  { to: "/a-casa", label: "A Casa" },
  { to: "/gastronomia", label: "Gastronomia" },
  { to: "/programacao", label: "Programação" },
  { to: "/aniversarios", label: "Aniversários" },
  { to: "/visite", label: "Visite" },
];

/* Fixed header that follows the scroll: transparent over the page top,
   then condenses into a solid pill once the user scrolls. */
export const SiteHeader = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 60));
  // lock page scroll behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 md:px-5 ${
          solid && !open ? "max-w-6xl bg-terra/95 shadow-xl ring-1 ring-cream/15 backdrop-blur-md" : "max-w-none bg-transparent"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-cream" aria-label="Casa Viva Itacoá — início">
          <Emblem className={`transition-all duration-500 ${solid ? "h-10 w-10" : "h-12 w-12 md:h-14 md:w-14"}`} />
          <span className="hidden font-round text-sm font-bold leading-tight tracking-[0.25em] sm:block">
            CASA VIVA<br /><span className="text-[0.7em] tracking-[0.5em] opacity-80">ITACOÁ</span>
          </span>
        </Link>

        <nav className={`hidden rounded-full px-2 py-1.5 lg:block ${solid ? "" : "border border-cream/50"}`}>
          <ul className="flex items-center gap-1">
            {pages.map((p) => (
              <li key={p.to}>
                <NavLink
                  to={p.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "bg-cream text-terra" : "text-cream/85 hover:bg-cream/15 hover:text-cream"
                    }`
                  }
                >
                  {p.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="hidden rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-terra transition hover:bg-sun md:block">
            Reservar
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-terra lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-terra px-6 pb-8 pt-28 text-cream lg:hidden"
            style={{ paddingBottom: "calc(6.5rem + env(safe-area-inset-bottom))" }}
          >
            <div className="pointer-events-none absolute -bottom-24 -right-24 text-terra-deep/60"><Emblem className="h-96 w-96" strokeWidth={1.4} /></div>
            <nav className="relative flex flex-col">
              <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => `border-b border-cream/15 py-4 font-display text-4xl ${isActive ? "italic text-sun" : ""}`}>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="block">Início</motion.span>
              </NavLink>
              {pages.map((p, i) => (
                <NavLink key={p.to} to={p.to} onClick={() => setOpen(false)}
                  className={({ isActive }) => `flex items-baseline justify-between border-b border-cream/15 py-4 font-display text-4xl ${isActive ? "italic text-sun" : ""}`}>
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }}>{p.label}</motion.span>
                  <span className="font-round text-xs font-bold not-italic text-cream/50">0{i + 1}</span>
                </NavLink>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="relative mt-auto grid grid-cols-2 gap-3 pt-10 text-sm font-semibold">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="col-span-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-white"><WhatsAppIcon className="h-5 w-5" />Reservar pelo WhatsApp</a>
              <a href="tel:+5521991776108" className="flex items-center justify-center gap-2 rounded-full border border-cream/40 py-3.5"><Phone className="h-4 w-4" />Ligar</a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-cream/40 py-3.5"><MapPin className="h-4 w-4" />Como chegar</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="col-span-2 flex items-center justify-center gap-2 rounded-full border border-cream/40 py-3.5"><AtSign className="h-4 w-4" />@casavivaitacoa</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
