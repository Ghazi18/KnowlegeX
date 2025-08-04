import { useTranslation } from "react-i18next";

export default function Numbers() {
  const { t, i18n } = useTranslation();
  const items = t("numbers.items", { returnObjects: true });

  return (
    <section
      className="text-gray-600 body-font px-4 sm:px-10 md:px-16"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="py-20 mx-auto max-w-8xl">
        <div className="flex flex-wrap justify-between gap-0 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="w-1/2 sm:w-1/2 md:w-1/4 px-4 mb-8">
              <h2 className="title-font font-bold text-3xl sm:text-4xl text-[#EA8316]">
                {item.number}
              </h2>
              <p className="leading-relaxed font-bold text-black mt-4">
                {item.title}
              </p>
              <p className="leading-relaxed text-black text-sm mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
