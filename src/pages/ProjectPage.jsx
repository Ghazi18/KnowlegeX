import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeInWrapper from "../components/FadeInWrapper";
import Intro from "../components/projectPage/intro";
import OurJourney from "../components/OurJourney";
import FinalOutcome from "../components/projectPage/FinalOutcome";
import WorkTeam from "../components/projectPage/WorkTeam";

import rasidImg from "../assets/whatKF.png";
import maxImg from "../assets/whatKF.png";
import foreseenImg from "../assets/whatKF.png";
import { useEffect } from "react";



export default function ProjectPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  
  const milestones = t("ourJourney.items", { returnObjects: true });

  
 if (!Array.isArray(milestones)) {
  console.error("⚠️ البيانات غير متوفرة: ourJourney.items");
  return null; // أو عرض رسالة للمستخدم
}

console.log("🔍 milestones:", milestones);

  const projects = {
    1: {
      image: rasidImg,
      title: t(`projects.intro.${id}.title`),
      description: t(`projects.intro.${id}.description`),
    },
    2: {
      image: rasidImg,
      title: t(`projects.intro.${id}.title`),
      description: t(`projects.intro.${id}.description`),
    },
    3: {
      image: rasidImg,
      title: t(`projects.intro.${id}.title`),
      description: t(`projects.intro.${id}.description`),
    },
  };

  const project = projects[id];

  if (!project) return <div className="text-center py-20">المشروع غير موجود</div>;

  return (
    <main className="min-h-screen max-w-[2000px] mx-auto dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden ">
      <FadeInWrapper>
        <Intro {...project} />
      </FadeInWrapper>
      <FadeInWrapper delay={0.1}>
      <OurJourney milestones={milestones} />
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
