import { useTranslation } from "react-i18next";
import riyalSvg from "../assets/riyal.svg";

export default function OurWhy() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative bg-[#071C2F] py-12 lg:py-20 dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile View: صورة + مستطيل أبيض تحتها */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <img src={riyalSvg} alt="My Graphic" className="w-64 max-w-full" />
          <div className="bg-white dark:bg-gray-800 text-center rounded-xl p-6 shadow w-full">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {i18n.language === "ar" ? "لماذا نحن؟" : "Our why"}
            </h1>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>
          </div>
        </div>

        {/* Desktop View: الصورة والنص */}
        <div className="hidden md:flex flex-col justify-center z-10">
          <img src={riyalSvg} alt="My Graphic" className="mx-auto max-w-sm" />
          <p
            className={`text-3xl mt-4 font-bold text-white text-center ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            accusamus impedit minima ha iusto
          </p>
        </div>
      </div>

      {/* المستطيل الأبيض الجانبي (Desktop فقط) */}
      <div
        className={`hidden md:block absolute top-10 ${
          isRTL ? "left-0 rounded-r-2xl" : "right-0 rounded-l-2xl"
        } h-4/5 w-[40vw] bg-white dark:bg-gray-800 p-8 shadow-lg z-0 flex flex-col justify-center`}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {i18n.language === "ar" ? "لماذا نحن؟" : "Our why"}
        </h1>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
          Natus, provident accusamus impedit minima harum corporis iusto.
        </p>
      </div>
    </section>
  );
}
