import React from "react";
import { useTranslation } from "react-i18next";

// نفس الصور
import Frame2 from "../assets/value1.jpg";
import Frame3 from "../assets/Frame3.jpg";
import Frame4 from "../assets/value2.jpg";

export default function OurValue() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // قراءة القيم
  const values = t("values", { returnObjects: true }) || [];
  const [
    v0 = "Originality",
    v1 = "Trust",
    v2 = "Learn",
    
  ] = Array.isArray(values) ? values : [];

  // بيانات المربعات (صورة أو نص)
  const blocks = [
    { type: "image", src: Frame2 },
    { type: "text", text: v0, color: "bg-orange-400", textColor: "text-black" },
    { type: "image", src: Frame3 },
    { type: "text", text: v1, color: "bg-gray-800", textColor: "text-white" },
    { type: "image", src: Frame4 },
    { type: "text", text: v2, color: "bg-orange-400", textColor: "text-black" },
  ];

  return (
    <section
      className="w-full px-4 sm:px-10 md:px-16 py-24 dark:bg-gray-900"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        {t("ourValues")}
      </h2>

      {/* شبكة المربعات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((block, i) =>
          block.type === "image" ? (
            <div key={i} className="w-full h-48 sm:h-56 lg:h-64">
              <img
                src={block.src}
                alt="value"
                className="w-full h-full object-cover rounded-2xl shadow"
              />
            </div>
          ) : (
            <div
              key={i}
              className={`${block.color} flex items-center justify-center w-full h-48 sm:h-56 lg:h-64 rounded-2xl shadow`}
            >
              <h3
                className={`text-center font-semibold text-xl sm:text-2xl ${block.textColor}`}
              >
                {block.text}
              </h3>
            </div>
          )
        )}
      </div>
    </section>
  );
}
