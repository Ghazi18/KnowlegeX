import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBookOpenReader } from "react-icons/fa6";


export default function OurTracks() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [openTrack, setOpenTrack] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // نحدد إذا العرض جوال أو لا
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [{ key: "research", icon: <FaBookOpenReader /> }];
  const trackKeys = ["enablement", "collaboration", "advisory"];

  return (
    <section
      id="services"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-10 md:px-16  overflow-hidden bg-[#FFF8F1"
      dir={isRTL ? "rtl" : "ltr"}
      
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center sm:mb-12 mb-6 text-gray-900 ">
        {t("ourTracks.title")}
      </h2>

      <div className="flex flex-col sm:gap-16 max-w-8xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-4 items-center gap-8"
          >
            {/* البطاقة الرئيسية */}
            <div className="bg-[#071C2F] text-white rounded-lg shadow p-6 flex flex-col items-center border-l-4 border-[#EA8316] justify-center text-center h-48 w-full min-w-[200px] mt-16">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-lg text-center">
                {t(`ourTracks.${cat.key}.title`)}
              </div>
            </div>

            {/* المسارات */}
            <div className="md:col-span-3 relative flex flex-col items-center gap-6 w-full">
              {/* الدوائر */}
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
              <div className="flex flex-col md:flex-row justify-between gap-4 md:mt-16 w-full z-10">
                {trackKeys.map((track, i) => {
                  const trackTitle = t(`ourTracks.${cat.key}.${track}.title`);
                  const desc = t(`ourTracks.${cat.key}.${track}.desc`, {
                    defaultValue: "",
                  });

                  return (
                    <div
                      key={i}
                      onClick={() =>
                        isMobile && setOpenTrack({ title: trackTitle, desc })
                      }
                      className="bg-[#EA8316] text-white rounded-lg p-6 flex-1 min-w-[200px] h-48 relative overflow-hidden group [perspective:1000px] "
                    >
                      {/* على الديسكتوب: flip بالهوفر */}
                      <div className="hidden md:block relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
                        {/* الوجه الأمامي */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden]">
                          <h3 className="font-bold text-lg mb-4 text-center">
                            {trackTitle}
                          </h3>
                        </div>
                        {/* الوجه الخلفي */}
                        <div className="absolute inset-0 flex items-center justify-center px-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                          <p className="leading-6 text-sm sm:text-base">
                            {desc}
                          </p>
                        </div>
                      </div>

                      {/* على الجوال: فقط العنوان */}
                      <div className="md:hidden flex items-center justify-center h-full">
                        <h3 className="font-bold text-lg text-center">
                          {trackTitle}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup يظهر للجوال فقط */}
      {openTrack && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 md:hidden">
          <div className="bg-white  rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setOpenTrack(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black "
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900  text-center">
              {openTrack.title}
            </h3>
            <p className="text-gray-700 d leading-6 text-sm sm:text-base whitespace-pre-line">
              {openTrack.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
