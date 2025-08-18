import { useTranslation } from "react-i18next";
import kingFaisalUni from "../assets/kingFaisalUni.svg";
import sultanUni from "../assets/sultanUni.svg";
import indusrty from "../assets/indusrty.svg";

export default function StrategicPartnerships() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const logos = [
    { src: kingFaisalUni, alt: "King Faisal University" },
    { src: sultanUni, alt: "Prince Sultan University" },
    { src: indusrty, alt: "Ministry of Industry and Mineral Resources" },
        { src: indusrty, alt: "Ministry of Industry and Mineral Resources" },
            { src: sultanUni, alt: "Prince Sultan University" },


  ];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 bg-white dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
        {t("partnerships.title")}
        {i18n.language !== "ar" && (
          <>
            :{" "}
            <span className="text-[#071C2F]">{t("partnerships.subtitle")}</span>
          </>
        )}
      </h2>

      {/* الجوال: Grid ثابتة */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-6 place-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain dark:invert mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>

      {/* تابلت/ديسكتوب: Marquee CSS */}
      <div className="hidden md:block overflow-hidden">
        <div
          className={`marquee-wrapper ${
            isRTL ? "rtl-marquee" : "ltr-marquee"
          }`}
        >
          <div className="marquee-track flex items-center gap-16">
            {/* تكرار المحتوى مرتين متتاليتين */}
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-16">
                {logos.map((logo, idx) => (
                  <div
                    key={`${dup}-${idx}`}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 lg:h-20 w-auto object-contain dark:invert mix-blend-multiply"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 20s linear infinite;
        }
        .rtl-marquee .marquee-track {
          animation: marquee-right 20s linear infinite;
        }

        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </section>
  );
}
