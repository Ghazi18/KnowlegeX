import { useTranslation } from "react-i18next";

export default function OurTracks() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const categories = [
    {
      key: "research",
      icon: "🏛️",
    },
    {
      key: "corporate",
      icon: "🏢",
    },
  ];

  const trackKeys = ["enablement", "collaboration", "advisory"];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-[#FFF8F1] dark:bg-gray-900 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {t("ourTracks.title")}
      </h2>

      <div className="flex flex-col sm:gap-16 max-w-8xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-4 items-center gap-8"
          >
            {/* البطاقة الرئيسية */}
            <div className="bg-[#071C2F] text-white rounded-lg shadow p-6 flex flex-col items-center border-l-4 border-0 border-[#EA8316] justify-center text-center h-48 w-full min-w-[200px] mt-16">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-center">
                {t(`ourTracks.${cat.key}.title`)}
              </div>
            </div>

            {/* المسارات */}
            <div className="md:col-span-3 relative flex flex-col items-center gap-6 w-full">
              {/* الدوائر العلوية مع الخط المتصل (لأجهزة سطح المكتب) */}
              <div className="hidden md:flex absolute -top-4 left-0 right-0 items-center justify-between px-4 z-10">
                {trackKeys.map((_, i) => (
                  <div key={i} className="relative flex-1 flex justify-center">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#EA8316] -z-10" />
                    <div className="w-14 h-14 rounded-full bg-[#071C2F] text-white flex items-center justify-center text-base font-bold shadow-md">
                      {`0${i + 1}`}
                    </div>
                  </div>
                ))}
              </div>

              {/* البطاقات */}
              <div className="flex flex-col md:flex-row justify-between gap-4 md:mt-16 w-full z-10  ">
                {trackKeys.map((track, i) => {
                  const trackTitle = t(`ourTracks.${cat.key}.${track}.title`);
                  const items = t(`ourTracks.${cat.key}.${track}.items`, {
                    returnObjects: true,
                  });

                  return (
                    <div
                      key={i}
                      className="bg-[#EA8316] text-white rounded-lg p-6 flex-1 min-w-[200px] h-48  "
                    >
                      <h3 className="font-bold text-lg mb-4 text-center ">
                        {trackTitle}
                      </h3>
                   
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
