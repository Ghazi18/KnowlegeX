import FadeInWrapper from "../components/FadeInWrapper";
import ImpactBanner from "../components/impactComps/ImpactBanner";
import Kofactor from "../components/impactComps/Kofactor";
import Objectives from "../components/impactComps/Objectives";
import ProgressCircles from "../components/impactComps/ProgressCircles";
import ProjectCards from "../components/impactComps/ProjectCrads";

export default function Impact() {
  return (
    <main className="min-h-screen max-w-[2000px] mx-auto dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden ">
      <FadeInWrapper>
        <ImpactBanner />
      </FadeInWrapper>
      <FadeInWrapper delay={0.1}>
        <Kofactor />
      </FadeInWrapper>
      <FadeInWrapper delay={0.2}>
        <Objectives />
      </FadeInWrapper>
      <FadeInWrapper delay={0.3}>
        <ProgressCircles />
      </FadeInWrapper>
      <FadeInWrapper delay={0.4}>
        <ProjectCards />
      </FadeInWrapper>
    
    </main>
  );
}
