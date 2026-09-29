import { useEffect, useRef } from "react";

/* Faixa "Prévia feita pela Sett". Rola junto com a página; o menu fixo desce/sobe acompanhando
   via a variável CSS --sett-off (ver SiteHeader e a barra de progresso em App). */
export const SettBanner = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const update = () => {
      const h = ref.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--sett-off", `${Math.max(0, h - window.scrollY)}px`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <p ref={ref} className="sett-faixa">
      Prévia feita pela{" "}
      <a href="https://www.sett.company/" target="_blank" rel="noopener">
        <img src="/sett-branco.png" alt="Sett" width={254} height={96} />
      </a>{" "}
      para <b>Casa Viva Itacoá</b> · não oficial
    </p>
  );
};
