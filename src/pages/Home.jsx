import Banner from "../components/Banner";
import GradientSection from "../components/GradientSection";
// import InvestmentPortfolio from "../components/InvestmentPortfolio";
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
  const milestones = t("ourJourney.items", {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <main className="min-h-screen max-w-[2000px] mx-auto text-gray-900 overflow-x-hidden bg-[#FFF8F1]">
      <Banner />
      <Misson />
      <OurValue />
      <OurWhy />
      <GradientSection />
      <Numbers />
      <OurJourney milestones={Array.isArray(milestones) ? milestones : []} />
      <OurTracks />
      <ThreeBoxesWithImages />
      {/* <InvestmentPortfolio /> */}
      <StrategicPartnerships />
    </main>
  );
}
