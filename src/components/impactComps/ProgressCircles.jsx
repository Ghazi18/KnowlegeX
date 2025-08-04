import { useTranslation } from "react-i18next";
import {
  FaRocket,
  FaTools,
  FaQuestionCircle,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function ProgressCircles() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const steps = [
    { key: "step1", icon: <FaRocket size={28} className="text-gray-700" /> },
    { key: "step2", icon: <FaTools size={28} className="text-gray-700" /> },
    { key: "step3", icon: <FaQuestionCircle size={28} className="text-gray-700" /> },
    { key: "step4", icon: <FaLaptopCode size={28} className="text-gray-700" /> },
    { key: "step5", icon: <FaChalkboardTeacher size={28} className="text-gray-700" /> },
  ];

  return (
    <section
      className="py-16 bg-white dark:bg-gray-900 px-4 sm:px-10 md:px-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-8xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#EA8316]">
          {t("timeline.title", "Journey Timeline")}
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0 relative">
          <div className="hidden sm:block absolute top-12 left-0 right-0 border-t border-dashed border-gray-400 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative z-10 flex flex-col items-center text-center gap-3 w-full sm:w-auto"
            >
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center relative">
                <div className={`absolute ${isRTL ? "-right-2" : "-left-2"} top-8 border-2 border-white bg-[#EA8316] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow`}>
                  {index + 1}
                </div>
                {step.icon}
              </div>

              <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white max-w-[120px] leading-snug">
                {t(`timeline.${step.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
