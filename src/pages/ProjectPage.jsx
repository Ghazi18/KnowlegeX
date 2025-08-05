import FadeInWrapper from "../components/FadeInWrapper";
import Intro from "../components/projectPage/intro";
import OurJourney from "../components/OurJourney";
import FinalOutcome from "../components/projectPage/FinalOutcome";
import WorkTeam from "../components/projectPage/WorkTeam";

export default function ProjectPage() {
  return (
    <main className="min-h-screen max-w-[2000px] dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <FadeInWrapper>
        <Intro />
      </FadeInWrapper>
      <FadeInWrapper delay={0.1}>
        <OurJourney />
      </FadeInWrapper>
      <FadeInWrapper delay={0.2}>
        <FinalOutcome />
      </FadeInWrapper>
      <FadeInWrapper delay={0.2}>
        <WorkTeam />
      </FadeInWrapper>
    </main>
  );
}
