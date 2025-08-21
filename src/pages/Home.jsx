import Banner from "../components/Banner";
import FadeInWrapper from "../components/FadeInWrapper";
import GradientSection from "../components/GradientSection";
import InvestmentPortfolio from "../components/InvestmentPortfolio";
import Misson from "../components/Mission";
import Numbers from "../components/Numbers";
import OurJourney from "../components/OurJourney";
import OurTracks from "../components/OurTracks";
import OurValue from "../components/OurValues";
import OurWhy from "../components/OurWhy";
import StrategicPartnerships from "../components/StrategicPartnerships";
import ThreeBoxesWithImages from "../components/ThreeBoxesWithImages";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const milestones = t("ourJourney.items", { returnObjects: true });

  return (
<main className="min-h-[100svh] max-w-[2000px] mx-auto text-gray-900 overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFF8F1 0%, white 30%, #FFF8F1 60%, white 100%)"
      }}
>
      <FadeInWrapper>
        <Banner />
      </FadeInWrapper>
      <FadeInWrapper delay={0.1}>
        <Misson />
      </FadeInWrapper>
      <FadeInWrapper delay={0.2}>
        <OurValue />
      </FadeInWrapper>
      
      <FadeInWrapper delay={0.3}>
        <OurWhy />
      </FadeInWrapper>
      <FadeInWrapper delay={0.4}>
        <GradientSection />
      </FadeInWrapper>
      <FadeInWrapper delay={0.5}>
        <Numbers />
      </FadeInWrapper>
      <FadeInWrapper delay={0.6}>
        <OurJourney milestones={milestones} />
      </FadeInWrapper>
      <FadeInWrapper delay={0.7}>
        <OurTracks />
      </FadeInWrapper>
      <FadeInWrapper delay={0.8}>
        <ThreeBoxesWithImages />
      </FadeInWrapper>
      <FadeInWrapper delay={0.9}>
        <InvestmentPortfolio />
      </FadeInWrapper>
      <FadeInWrapper delay={1.0}>
        <StrategicPartnerships />
      </FadeInWrapper>
    </main>
  );
}
