import { MorphText } from "@/components/ui/morph-texts";

export const Statement = () => (
  <section className="bg-terra px-5 py-24 text-cream md:px-10 md:py-32">
    <div className="mx-auto max-w-6xl text-center">
      <p className="font-display text-[9vw] leading-[1.05] md:text-[5.5vw]">
        Viva a{" "}
        <MorphText
          fontFamily="inherit"
          fontSize="1em"
          interval={2600}
          textClassName="italic text-sun"
          words={["gastronomia", "música", "arte", "natureza", "celebração", "vida"]}
        />
      </p>
      <p className="mx-auto mt-8 max-w-xl font-round text-sm uppercase tracking-[0.3em] text-cream/70">
        Gastronomia + Arte + Música + Bem-estar
      </p>
    </div>
  </section>
);
