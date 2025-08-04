import { useTranslation } from "react-i18next";

export default function ImpactBanner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center mb-4"
      style={{
        backgroundImage: "url('src/assets/heroKF.png')",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* تغطية شفافة */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* المحتوى */}
      <div className="relative z-10 w-full px-4 sm:px-10 md:px-16 py-12 max-w-8xl mx-auto">
        <div
          className={`max-w-2xl ${isRTL ? "text-right" : "text-left"} px-2 sm:px-0`}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-md leading-snug">
            {t("impactBanner.title", "Innovate with Purpose")}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white leading-relaxed drop-shadow-sm">
            {t(
              "impactBanner.description",
              "We empower innovation through collaboration, research, and actionable strategy to create real-world impact."
            )}
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block rounded bg-[#EA8316] px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-orange-500 transition"
            >
              {t("impactBanner.cta", "Get Started")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
