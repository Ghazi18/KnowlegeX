import { useTranslation } from "react-i18next";
import riyalSvg from "../assets/riyal.svg";

export default function OurWhy() {
   const { t, i18n, ready } = useTranslation();
  const isRTL = i18n.language === "ar";

  // بدون سكيلتون: لا نرندر أي شيء لين تجهز الترجمة
  if (!ready) return null;

  return (
    <section
      className="relative py-12 lg:py-20  overflow-hidden bg-gradient-to-r from-[#071C2F] to-[#165995]"
      id="why"
      dir={isRTL ? "ltr" : "rtl"} // ضبط اتجاه القسم بالكامل
    >
      <div
        className={`w-full  mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-72 px-4 sm:px-6 lg:px-8 relative z-10 ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <img src={riyalSvg} alt="Our Why" className="w-64 max-w-full" />
          <div className="bg-white  text-center rounded-xl p-6 shadow w-full">
            <h1 className="text-2xl font-bold text-gray-900 ">
              {t("ourWhy.title")}
            </h1>
            <h2 className="mt-2 text-xl font-semibold text-[#EA8316]">
              {t("ourWhy.subtitle")}
            </h2>
            <p className="mt-4 text-base text-gray-700 d leading-relaxed">
              {t("ourWhy.desc")}
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col justify-center w z-10">
          <img
            src={riyalSvg}
            alt="Our Why"
            className={`max-w-sm ${isRTL ? "ml-auto" : "mr-auto"}`}
          />
          <h2
            className={`text-4xl mt-6 font-semibold text-white  text-center  ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            {t("ourWhy.subtitle")}
          </h2>
        </div>
      </div>

      {/* White Side Card (Desktop Only) */}
      {/* White Side Card (Desktop Only) */}
<div
  className={`hidden md:block absolute top-10 ${
    isRTL
      ? "right-0 rounded-l-2xl text-right"
      : "left-0 rounded-r-2xl text-left"
  } h-4/5 
     w-full md:w-[500px] lg:w-[550px] xl:w-[700px]   // ← هنا البريك بوينت
     bg-white  p-10 shadow-lg z-0 flex flex-col justify-center`}
>
  <h1 className="text-3xl font-bold text-gray-900 ">
    {t("ourWhy.title")}
  </h1>
  <h2 className="mt-2 text-xl font-semibold text-[#EA8316]">
    {t("ourWhy.subtitle")}
  </h2>
  <p className="mt-4 text-base text-gray-700 d leading-relaxed">
    {t("ourWhy.desc")}
  </p>
</div>

    </section>
  );
}
