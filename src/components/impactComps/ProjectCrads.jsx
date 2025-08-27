import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import pj1 from "../../assets/whatKF.png";
import pj2 from "../../assets/max.jpg";
import pj3 from "../../assets/forseen.png";
import amplifieP from "/aiednP.png";
import aiednP from "/amplifieP.jpg";
import uvera from "/uvera.png";


export default function ProjectCards() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const projectData = [
    {
      id: 1,
      title: t("projects.rasid.title"),
      description: t("projects.rasid.description"),
      link: "/impact/1",
      image: pj1,
    },
    {
      id: 2,
      title: t("projects.max.title"),
      description: t("projects.max.description"),
      url: "#",
      image: pj2,
    },
    {
      id: 3,
      title: t("projects.foreseen.title"),
      description: t("projects.foreseen.description"),
      link: "/impact/2",
      image: pj3,
    },
     {
      id: 4,
      title: t("projects.amplifai.title"),
      description: t("projects.amplifai.description"),
      url: "https://amplifaihealth.com",
      image: aiednP,
    },
     {
      id: 5,
      title: t("projects.aiDEN.title"),
      description: t("projects.aiDEN.description"),
      url: "https://aidenauto.com",
      image: amplifieP,
    },
    {
      id: 6,
      title: t("projects.uvera.title"),
      description: t("projects.uvera.description"),
      url: "https://www.uvera.co/",
      image: uvera,
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 "
      dir={isRTL ? "rtl" : "ltr"}
      id="projects"
    >
      {/* العنوان + زر عرض المزيد */}
      <div className="flex justify-between items-center max-w-8xl mx-auto mb-10 flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
          {t("projects.title")}
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-black shadow-md hover:bg-orange-400 hover:text-white transition px-5 py-2 rounded"
        >
          {t("projects.readMore")}
        </a>
      </div>

      {/* البطاقات */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto">
        {projectData.map((project) => (
          <Link
            key={project.id}
             to={project.url || `/impact/${project.id}`}
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-white  shadow hover:shadow-lg transition min-h-[480px] md:min-h-[500px]"
          >
            <img
              alt={project.title}
              src={project.image}
              className="h-64 sm:h-72 w-full object-cover"
              loading="lazy"
            />

            {/* محتوى البطاقة + مساحة سفلية للزر */}
            <div className="p-4 sm:p-6 ">
              <h3 className="text-lg font-medium text-gray-900 ">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 d">
                {project.description}
              </p>
            </div>

            {/* زر قراءة المزيد ثابت أسفل يسار */}
            <span className="group absolute bottom-4 left-4 inline-flex items-center gap-1 text-sm font-medium text-white bg-[#EA8316] px-3 py-2 rounded-md hover:bg-orange-400 transition">
              {t("projects.readMore")}
              <span aria-hidden="true" className="block">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
