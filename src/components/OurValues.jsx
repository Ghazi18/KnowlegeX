import originality from "../assets/Originality.png";
import trust from "../assets/Trust.png";
import learn from "../assets/Learn.png";
import connect from "../assets/Connect.png";
import { useTranslation } from "react-i18next";

export default function OurValue() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const items = [
    {
      number: "01",
      title: t("values.0"),
      image: originality,
    },
    {
      number: "02",
      title: t("values.1"),
      image: trust,
    },
    {
      number: "03",
      title: t("values.2"),
      image: learn,
    },
    {
      number: "04",
      title: t("values.3"),
      image: connect,
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-10 md:px-16 py-14 bg-gray-100 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"} // ضبط الاتجاه بالكامل
    >
      {/* العنوان */}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-10 ${
          isRTL ? "text-right" : "text-left"
        } text-gray-900 dark:text-white`}
      >
        {t("ourValues")}
      </h2>

      {/* المستطيلات */}
      <div className="space-y-6 max-w-8xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-36 rounded-lg overflow-hidden shadow-lg ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {/* صورة الخلفية */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* التدرج الأزرق */}
            <div
              className={`absolute inset-0 ${
                isRTL
                  ? "bg-gradient-to-l from-[#071C2F]/80 to-transparent"
                  : "bg-gradient-to-r from-[#071C2F]/80 to-transparent"
              } z-10`}
            />

            {/* المحتوى */}
            <div className="absolute inset-0 flex items-center px-6 z-20">
              <div
                className={`text-white flex flex-row gap-x-4 ${
                  isRTL ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <div className="text-xl font-bold">{item.number}</div>
                <div className="text-2xl font-semibold">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
