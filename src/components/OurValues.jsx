import { useTranslation } from "react-i18next";

export default function OurValue() {
  const { t } = useTranslation();

  const items = [
    { title: t("values.0") },
    { title: t("values.1") },
    { title: t("values.2") },
    { title: t("values.3") },
  ];

  return (
    <section className="w-full px-4 sm:px-10 md:px-16 py-24  dark:bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        {t("ourValues")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-[200px] h-[250px] mx-auto rounded-[14px] overflow-hidden flex items-center justify-center shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff]"
          >
            {/* خلفية زجاجية */}
            <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] bg-white/95 backdrop-blur-2xl rounded-[10px] outline outline-2 outline-white z-20" />

            {/* البلوب البرتقالي */}
            <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#EA8316] opacity-100 blur-[12px] z-10 animate-blob" />

            {/* المحتوى */}
            <div className="relative z-30 text-center px-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
