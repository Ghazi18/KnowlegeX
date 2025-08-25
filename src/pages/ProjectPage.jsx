import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeInWrapper from "../components/FadeInWrapper";
import Intro from "../components/projectPage/intro";
import OurJourney from "../components/OurJourney";
import FinalOutcome from "../components/projectPage/FinalOutcome";
import WorkTeam from "../components/projectPage/WorkTeam";

import rasidImg from "../assets/whatKF.png";
import forseen from "../assets/forseen.jpg";
import max from "../assets/max.jpg";
import aiednP from "/aiednP.png";
import amplifieP from "/amplifieP.jpg";
import uvera from "/aiednP.png";



import { useEffect } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ---- داتا الرحلة الخاصة بالمشروع فقط (بدون أي fallback) ----
  const projectJourney = t(`projects.journey.${id}`, { returnObjects: true }) || {};
  const milestones = Array.isArray(projectJourney.items) ? projectJourney.items : [];
  const customTitle = projectJourney.title || t(`projects.intro.${id}.title`);
  const sideImage =
    projectJourney.sideImage ||
    "https://idealog.co.nz/wp-content/uploads/2022/08/screen_shot_2018-12-06_at_5.09.02_pm.png";
  const sideImageAlt =
    projectJourney.sideImageAlt ||
    (i18n.language === "ar" ? "صورة الرحلة" : "Journey image");

  // ---- بقية بيانات المشروع كما هي ----
  const projects = {
    1: {
      image: rasidImg,
      title: t(`projects.intro.${id}.title`),
      description: t(`projects.intro.${id}.description`),
      link: t(`projects.intro.${id}.link`),
    },
    2: {
      image: max,
      title: t(`projects.intro.${id}.title`),
      link: t(`projects.intro.${id}.link`),
    },
    3: {
      image: forseen,
      title: t(`projects.intro.${id}.title`),
            description: t(`projects.intro.${id}.description`),
      link: t(`projects.intro.${id}.link`),
    },
    4: {
      image: aiednP,
      title: t(`projects.intro.${id}.title`),
      link: t(`projects.intro.${id}.link`),
    },
    5: {
      image: amplifieP,
      title: t(`projects.intro.${id}.title`),
      link: t(`projects.intro.${id}.link`),
    },
    6: {
      image: uvera,
      title: t(`projects.intro.${id}.title`),
      link: t(`projects.intro.${id}.link`),
    },
  };

  const project = projects[id];
  if (!project) return <div className="text-center py-20">المشروع غير موجود</div>;

  return (
    <main className="min-h-screen max-w-[2000px] mx-auto dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden ">
      <FadeInWrapper>
        <Intro {...project} />
      </FadeInWrapper>

      {/* عرض OurJourney فقط لو فيه بيانات Journey للمشروع */}
      {milestones.length > 0 && (
        <FadeInWrapper delay={0.1}>
          <OurJourney
            milestones={milestones}
            customTitle={customTitle}
            sideImage={sideImage}
            sideImageAlt={sideImageAlt}
          />
        </FadeInWrapper>
      )}

      <FadeInWrapper delay={0.2}>
        <FinalOutcome />
      </FadeInWrapper>

      {/* <FadeInWrapper delay={0.2}>
        <WorkTeam />
      </FadeInWrapper> */}
    </main>
  );
}
