import React from "react";
import { useTranslation } from "react-i18next";

// نفس الصور المستخدمة في ValueBlock
import Frame4 from "../assets/value2.png";
import Frame7 from "../assets/value3.png";
import Frame3 from "../assets/Frame3.png";
import Frame2 from "../assets/value1.png";

export default function OurValue() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // نقرأ القيم من المصفوفة values
  const values = t("values", { returnObjects: true }) || [];
  const [v0 = "Originality", v1 = "Trust", v2 = "Learn", v3 = "Connect"] =
    Array.isArray(values) ? values : [];

  return (
    <section
      className="w-full px-4 sm:px-10 md:px-16 py-24 dark:bg-gray-900"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* العنوان في المنتصف */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        {t("ourValues")}
      </h2>

      {/* نفس التنسيقات تمامًا مع تمركز الكتلة في منتصف الكومبونينت */}
      <div className="flex justify-center">
        <div
          className={`${
            isArabic ? "flex-col-reverse sm:flex-row-reverse" : "sm:flex-row"
          } flex flex-col sm:flex-row sm:mx-auto h-full`}
        >
          {/* 1st card section */}
          <div className="flex flex-row align-middle sm:flex-col">
            <div className="bg-orange-400 flex flex-col justify-center w-1/2 sm:w-full sm:h-1/2 items-center">
              <h3 className="text-center font-medium sm:my-12 text-black">
                {v0}
              </h3>
            </div>
            <img src={Frame2} className="w-1/2 sm:w-full sm:h-1/2" alt="value" />
          </div>
          {/* 2nd card section */}
          <div className="flex flex-row-reverse align-middle sm:flex-col-reverse">
            <div className="bg-gray-800 flex flex-col justify-center w-1/2 sm:w-full sm:h-1/2 items-center">
              <h3 className="text-center font-medium sm:my-12 text-white">
                {v1}
              </h3>
            </div>
            <img src={Frame3} className="w-1/2 sm:w-full sm:h-1/2" alt="value" />
          </div>
          {/* 3rd card section */}
          <div className="flex flex-row align-middle sm:flex-col">
            <div className="bg-orange-400 flex flex-col justify-center w-1/2 sm:w-full sm:h-1/2 items-center">
              <h3 className="text-center font-medium sm:my-12 text-black">
                {v2}
              </h3>
            </div>
            <img src={Frame4} className="w-1/2 sm:w-full sm:h-1/2" alt="value" />
          </div>
          {/* 4th card section */}
          <div className="flex flex-row-reverse align-middle sm:flex-col-reverse">
            <div className="bg-gray-800 w-1/2 flex flex-col justify-center sm:h-1/2 sm:w-full items-center">
              <h3 className="text-center font-medium sm:my-12 text-white">
                {v3}
              </h3>
            </div>
            <img src={Frame7} className="w-1/2 sm:h-1/2 sm:w-full" alt="value" />
          </div>
        </div>
      </div>
    </section>
  );
}
