import { FaRocket, FaChartBar, FaUsers, FaCogs } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const missionItems = [
    {
      icon: <FaRocket className="text-white text-2xl sm:text-3xl" />,
      title: "",
      desc: t("mission.items.0"),
      color: "border-[#071C2F]",
    },
    {
      icon: <FaChartBar className="text-white text-2xl sm:text-3xl" />,
      title: "",
      desc: t("mission.items.1"),
      color: "border-[#071C2F]",
    },
    {
      icon: <FaUsers className="text-white text-2xl sm:text-3xl" />,
      title: "",
      desc: t("mission.items.2"),
      color: "border-[#071C2F]",
    },
    {
      icon: <FaCogs className="text-white text-2xl sm:text-3xl" />,
      title: "",
      desc: t("mission.items.3"),
      color: "border-[#071C2F]",
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-10 md:px-16 py-24 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        background:
          "linear-gradient(to bottom, #FFF8F1 0%, white 30%, #FFF8F1 60%, white 100%)",
      }}
    >
      {/* العنوان */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        {t("ourMission")}
      </h2>

      {/* الشبكة */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {missionItems.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center h-full"
          >
            {/* المربع العلوي (الأيقونة) */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl bg-[#071C2F] dark:bg-gray-800">
              {feature.icon}
            </div>

            {/* السهم */}
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#071C2F] mt-2" />

            {/* البطاقة */}
            <div
              className={`mt-3 w-full max-w-[22rem] bg-white dark:bg-gray-800 rounded-md shadow border-t-4 ${feature.color} p-4 flex flex-col flex-grow`}
            >
              {feature.title && (
                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
              )}
              <p className="text-md font-semibold text-gray-600 dark:text-gray-300 whitespace-pre-line flex-grow flex items-center justify-center">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
