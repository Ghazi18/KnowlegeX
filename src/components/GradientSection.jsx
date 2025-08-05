import { useTranslation } from "react-i18next";

export default function GradientSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="w-full mt-24 py-16 bg-gradient-to-r from-[#071C2F] to-[#165995] text-white text-center px-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          {t("gradientSection.title")}
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          {t("gradientSection.desc")}
        </p>
      </div>
    </section>
  );
}
