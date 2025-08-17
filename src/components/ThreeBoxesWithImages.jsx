import kore from "../assets/KORE.png";
import scienceHub from "../assets/ScienceHub.png";
import spinsight from "../assets/Spinsight.png";
import { useTranslation } from "react-i18next";

export default function ThreeBoxesWithImages() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const images = [kore, spinsight, scienceHub];

  return (
    <section
      className="w-full py-14 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900 text-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* العنوان والوصف */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("focusAreas.title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("focusAreas.desc")}
        </p>
      </div>

      {/* المستطيلات بالصور */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white border border-[#EA8316] rounded-lg p-6 shadow-sm flex items-center justify-center w-full"
          >
            <img
              src={src}
              alt={`${t("focusAreas.title")} ${index + 1}`}
              className="h-20 w-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
