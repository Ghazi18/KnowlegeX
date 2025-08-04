import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function FinalOutcome() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const boxes = [
    {
      title: t("finalOutcome.step1", "Ideation"),
      image: "/src/assets/step1.jpg",
    },
    {
      title: t("finalOutcome.step2", "Execution"),
      image: "/src/assets/step2.jpg",
    },
    {
      title: t("finalOutcome.step3", "Impact"),
      image: "/src/assets/step3.jpg",
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ← العنوان بمحاذاة ديناميكية حسب اللغة */}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-12 text-gray-800 dark:text-white ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("finalOutcome.title", "Final Outcome")}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 flex-wrap">
        {boxes.map((box, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* البطاقة */}
            <div className="relative w-full sm:w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={box.image}
                alt={box.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/60" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">
                  {box.title}
                </h3>
              </div>
            </div>

            {/* السهم بين البطاقات */}
            {index < boxes.length - 1 && (
              <div className="hidden sm:flex items-center justify-center">
                {isRTL ? (
                  <FaArrowLeft className="text-[#EA8316]" size={28} />
                ) : (
                  <FaArrowRight className="text-[#EA8316]" size={28} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
