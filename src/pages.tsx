import { PrismaHero } from "@/components/ui/prisma-hero";
import { Explore, PageHero } from "@/components/PageParts";
import { Manifesto } from "@/sections/Manifesto";
import { Statement } from "@/sections/Statement";
import { Pillars } from "@/sections/Pillars";
import { Gastronomy } from "@/sections/Gastronomy";
import { Marquee } from "@/sections/Marquee";
import { Program } from "@/sections/Program";
import { Birthdays } from "@/sections/Birthdays";
import { Numbers } from "@/sections/Numbers";
import { Visit } from "@/sections/Visit";

/* Rounded panel with a gap around it. overflow-clip (not hidden) keeps position: sticky working. */
const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-0">
    <div className="overflow-clip">{children}</div>
  </div>
);

export const HomePage = () => (
  <>
    <PrismaHero />
    <Panel><Statement /></Panel>
    <Panel><Explore /></Panel>
    <Panel><Marquee /></Panel>
  </>
);

export const CasaPage = () => (
  <>
    <PageHero n="01" title="A Casa" italic="de todos nós" img="Db4HDXUiSnB_07.jpg"
      text="Entre o mar e a montanha, um hub cultural, criativo e acolhedor na praia mais vibrante de Niterói." />
    <Panel><Manifesto /></Panel>
    <Panel><Statement /></Panel>
    <Panel><Pillars /></Panel>
    <Panel><Numbers /></Panel>
    <Panel><Explore exclude="/a-casa" title="Continue explorando" /></Panel>
  </>
);

export const GastronomiaPage = () => (
  <>
    <PageHero n="02" title="Gastronomia" italic="sem pressa" img="Db4HDXUiSnB_04.jpg"
      text="Um hub gastronômico com parceiros que se renovam toda semana — do café da manhã ao jantar." />
    <Panel><Gastronomy /></Panel>
    <Panel><Marquee /></Panel>
    <Panel><Explore exclude="/gastronomia" title="Continue explorando" /></Panel>
  </>
);

export const ProgramacaoPage = () => (
  <>
    <PageHero n="03" title="Programação" italic="da semana" img="Da7g3OPFd5c_03.webp"
      text="Música ao vivo, yoga, dança, arte, teatro e festas — sexta, sábado e domingo." />
    <Panel><Program /></Panel>
    <Panel><Explore exclude="/programacao" title="Continue explorando" /></Panel>
  </>
);

export const AniversariosPage = () => (
  <>
    <PageHero n="04" title="Aniversários" italic="& eventos" img="DbbNioXFfEp_01.webp"
      text="Seu aniversário merece uma casa inteira: música, gastronomia, drinks e a energia de Itacoá." />
    <Panel><Birthdays /></Panel>
    <Panel><Explore exclude="/aniversarios" title="Continue explorando" /></Panel>
  </>
);

export const VisitePage = () => (
  <>
    <PageHero n="05" title="Visite" italic="a Casa Viva" img="DcRFflGlaYF_03.jpg"
      text="Av. Mathias Sandri, 600 — na entrada da Praia de Itacoatiara, Niterói." />
    <div className="pt-2 md:pt-3"><Visit /></div>
    <Panel><Explore exclude="/visite" title="Continue explorando" /></Panel>
  </>
);

export const NotFoundPage = () => (
  <>
    <PageHero n="404" title="Página" italic="não encontrada" img="DX1h77IFYH6_04.jpg"
      text="Esse endereço não existe por aqui. Mas a casa continua de portas abertas — escolha um caminho abaixo." />
    <Panel><Explore title="Explore a casa" /></Panel>
  </>
);
