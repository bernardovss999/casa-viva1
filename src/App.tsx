import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SettBanner } from "@/components/SettBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/PageParts";
import { Footer } from "@/sections/Footer";
import { AniversariosPage, CasaPage, GastronomiaPage, HomePage, NotFoundPage, ProgramacaoPage, VisitePage } from "@/pages";

const titles: Record<string, string> = {
  "/": "Casa Viva Itacoá — Itacoatiara, Niterói",
  "/a-casa": "A Casa — Casa Viva Itacoá",
  "/gastronomia": "Gastronomia — Casa Viva Itacoá",
  "/programacao": "Programação — Casa Viva Itacoá",
  "/aniversarios": "Aniversários — Casa Viva Itacoá",
  "/visite": "Visite — Casa Viva Itacoá",
};

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // "/a-casa/" (trailing slash, as static hosts serve folders) and "/home.html" map to their pages
    const path = location.pathname === "/home.html" ? "/" : location.pathname.replace(/\/+$/, "") || "/";
    document.title = titles[path] ?? "Página não encontrada — Casa Viva Itacoá";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-sand">
      <SettBanner />
      <motion.div style={{ scaleX: bar, top: "var(--sett-off, 0px)" }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-sun" />
      <SiteHeader />

        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-casa" element={<CasaPage />} />
            <Route path="/gastronomia" element={<GastronomiaPage />} />
            <Route path="/programacao" element={<ProgramacaoPage />} />
            <Route path="/aniversarios" element={<AniversariosPage />} />
            <Route path="/visite" element={<VisitePage />} />
            <Route path="/home.html" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <div className="pt-2 md:pt-3"><Footer /></div>
        </motion.div>

      <WhatsAppButton />
    </main>
  );
}
