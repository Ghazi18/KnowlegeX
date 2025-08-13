import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative bg-gradient-to-r from-[#071C2F] to-[#165995] dark:bg-gray-900 px-4 sm:px-10 md:px-16 overflow-hidden"
      // style={{ backgroundImage: "url('/src/assets/bgBanner.png')" }}
    >
      {/* طبقة تغطية شفافة */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-0" />

      {/* المحتوى */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto min-h-[60vh] flex items-center justify-center py-12 sm:py-24 lg:py-32">
        <div className="text-center max-w-7xl px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            {t("banner.heading")}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
            {t("banner.desc")}
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="inline-block rounded border border-[#EA8316] bg-[#EA8316] px-6 py-3 font-medium text-white hover:bg-orange-400 transition"
            >
              {t("banner.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
