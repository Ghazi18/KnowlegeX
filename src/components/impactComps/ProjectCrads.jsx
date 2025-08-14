import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import pj1 from "../../assets/whatKF.png";
import pj2 from "../../assets/max.jpg";
import pj3 from "../../assets/forseen.jpg";

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
      link: "/impact/2",
      image: pj2,
    },
    {
      id: 3,
      title: t("projects.foreseen.title"),
      description: t("projects.foreseen.description"),
      link: "/impact/3",
      image: pj3,
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* العنوان + زر عرض المزيد */}
      <div className="flex justify-between items-center max-w-8xl mx-auto mb-10 flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
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
            to={`/impact/${project.id}`}
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition min-h-[480px] md:min-h-[500px]"
          >
            <img
              alt={project.title}
              src={project.image}
              className="h-64 sm:h-72 w-full object-cover"
              loading="lazy"
            />

            {/* محتوى البطاقة + مساحة سفلية للزر */}
            <div className="p-4 sm:p-6 ">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-300">
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
