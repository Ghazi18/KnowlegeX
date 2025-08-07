import { useTranslation } from "react-i18next";

import startup from "../../assets/objectives/start-up-01.svg";
import tools from "../../assets/objectives/tools.svg";
import development from "../../assets/timeline/elements.svg";
import mentorship from "../../assets/timeline/quiz-02.svg";
import showcase from "../../assets/objectives/canvas.svg";


export default function ProgressCircles() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const steps = [
    { key: "step1", image: startup },
    { key: "step2", image: tools },
    { key: "step3", image: mentorship },
    { key: "step4", image: development },
    { key: "step5", image: showcase },
  ];

  return (
    <section
      className="py-16 bg-white dark:bg-gray-900 px-4 sm:px-10 md:px-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-8xl mx-auto">
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
              {/* الدائرة بالصورة */}
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center relative overflow-visible">
  {/* الدائرة الصغيرة البرتقالية */}
  <div
    className={`absolute z-50 ${
      isRTL ? "-right-2" : "-left-2"
    } top-8 border-2 border-white bg-[#EA8316] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg`}
  >
    {index + 1}
  </div>

  {/* صورة المرحلة */}
  <img
    src={step.image}
    alt={step.key}
    className="w-10 h-10 object-contain z-10"
  />
</div>


              <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white w-full leading-snug">
                {t(`timeline.${step.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
