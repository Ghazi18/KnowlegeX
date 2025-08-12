import Marquee from "react-fast-marquee";
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
    { src: indusrty, alt: "Ministry of Industry and Mineral Resources" }
  ];

  return (
    <section
      className="py-16 px-4 bg-white dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
  {t("partnerships.title")}
  {i18n.language !== "ar" && (
    <>
      : <span className="text-[#071C2F]">{t("partnerships.subtitle")}</span>
    </>
  )}
</h2>

      <div className="overflow-hidden">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={false}
          className="flex items-center"
          direction={isRTL ? "right" : "left"}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center mx-24"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
