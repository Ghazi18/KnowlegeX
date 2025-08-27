import { useTranslation } from "react-i18next";

import ob1 from "../../assets/objectives/Featuredicon.svg";
import ob2 from "../../assets/objectives/tools.svg";
import ob3 from "../../assets/objectives/canvas.svg";
import ob4 from "../../assets/objectives/circle-arrow-shrink-02.svg";
import ob5 from "../../assets/objectives/start-up-01.svg";

export default function Objectives() {
   const { t, i18n, ready } = useTranslation();
  const isRTL = i18n.language === "ar";

  // بدون سكيلتون: لا نرندر أي شيء لين تجهز الترجمة
  if (!ready) return null;

  const objectives = [
    { label: "Downloads", icon: ob1 },
    { label: "Clients", icon: ob2 },
    { label: "Sessions", icon: ob3 },
    { label: "Users", icon: ob4 },
    { label: "Files", icon: ob5 },
  ];

  return (
    <section
      className="text-gray-800 body-font bg-transparent mt-10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="bg-gray-100 py-12">
        <div className="w-full px-4 sm:px-10 md:px-16">
          <div className={`mb-10 ${isRTL ? "text-right" : "text-left"} w-full`}>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("objectives.title", "Our Key Objectives")}
            </h1>
          </div>

          <div className="flex flex-wrap justify-start">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4"
              >
                <div className="bg-white rounded-xl px-6 py-8 shadow-md h-full text-center flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-14 h-14 mb-4 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {t(`objectives.${item.label.toLowerCase()}`, item.label)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
