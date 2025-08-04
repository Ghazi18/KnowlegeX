import { useTranslation } from "react-i18next";

const projectData = [
  {
    id: 1,
    title: "AI-Powered Forecasting",
    description:
      "A machine learning model to predict market trends using historical data and external signals.",
    image: "/src/assets/whatKF.png",
    link: "/Impact/1",
  },
  {
    id: 2,
    title: "GreenTech Dashboard",
    description:
      "Interactive platform to monitor and analyze environmental data in real-time.",
    image: "/src/assets/whatKF.png",
    link: "/Impact/1",
  },
  {
    id: 3,
    title: "Community Platform",
    description:
      "A hub to connect innovators and researchers in one collaborative ecosystem.",
    image: "/src/assets/whatKF.png",
    link: "/Impact/1",
  },
   
  
];

export default function ProjectCards() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* العنوان + زر عرض المزيد */}
      <div className="flex justify-between items-center max-w-8xl mx-auto mb-10 flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          {t("projects.title", "Our Projects")}
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-black shadow-md   hover:bg-orange-500 transition px-5 py-2 rounded"
        >
          {t("projects.viewMore", "View More")}
        </a>
      </div>

      {/* البطاقات */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto">
        {projectData.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
          >
            <img
              alt={project.title}
              src={project.image}
              className="h-56 w-full object-cover"
              loading="lazy"
            />

            <div className="p-4 sm:p-6">
              <a href={project.link}>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <a
                href={project.link}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-white bg-[#EA8316] p-2 rounded-md hover:bg-orange-500 transition"
              >
                {t("projects.readMore", "Find out more")}
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
