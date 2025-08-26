import { useTranslation } from "react-i18next";
import kfPng from "../../assets/whatKF.png";

export default function Kofactor() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 items-center px-4 sm:px-10 md:px-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* الصورة */}
      <img
        alt="Kofactor visual"
        src={kfPng}
        className={`h-full w-full object-cover 
          ${isRTL ? "sm:order-last " : "sm:order-first "} 
          sm:h-[calc(100%_-_2rem)] sm:self-end 
          sm:rounded-bl-[30px] sm:rounded-tl-[30px] sm:rounded-br-[30px] 
          md:h-[calc(100%_-_4rem)] 
          md:rounded-bl-[60px] md:rounded-tl-[60px] md:rounded-br-[60px]
          `}
        loading="lazy"
      />

      {/* النص */}
      <div className="p-6 lg:py-14 h-full">
        <div className="mx-auto max-w-7xl flex flex-col justify-between h-full sm:text-start text-center">
          {/* العنوان */}
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {t("kofactor.title", "Build with the KoFactor Edge")}
          </h2>

          {/* النص الأوسط */}
          <p className="text-gray-600 text-sm sm:text-2xl md:mt-4 leading-relaxed my-6 flex-grow">
            {t(
              "kofactor.description",
              "KoFactor empowers innovators through tailored programs, hands-on mentorship, and access to cutting-edge tools. Join a new era of innovation-driven growth."
            )}
          </p>

          {/* الزر */}
          <div className="mt-6 md:mt-8">
            <a
              href="#projects"
              className="inline-block rounded bg-[#EA8316] px-8 py-3 text-sm font-medium text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("kofactor.cta", "Get Started Today")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
