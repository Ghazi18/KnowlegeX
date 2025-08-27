import ImpactBanner from "../components/impactComps/ImpactBanner";
import ProjectCards from "../components/impactComps/ProjectCrads";

export default function Impact() {
  return (
    <main className="min-h-screen max-w-[2000px] mx-auto  text-gray-900  overflow-x-hidden ">
        <ImpactBanner />
      {/* <FadeInWrapper delay={0.1}>
        <Kofactor />
      </FadeInWrapper> */}
      {/* <FadeInWrapper delay={0.2}>
        <Objectives />
      </FadeInWrapper> */}
      {/* <FadeInWrapper delay={0.3}>
        <ProgressCircles />
      </FadeInWrapper> */}
        <ProjectCards />
    
    </main>
  );
}
