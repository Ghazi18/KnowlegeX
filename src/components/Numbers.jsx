import { useTranslation } from "react-i18next";

export default function Numbers() {
  const { t, i18n } = useTranslation();
  const items = t("numbers.items", { returnObjects: true });

  return (
    <section className="text-gray-600 body-font" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container px-4 sm:px-10 md:px-16 py-24 mx-auto">
        <div className="flex flex-wrap  text-center">
          {items.map((item, idx) => (
            <div key={idx} className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold sm:text-4xl text-3xl text-[#EA8316]">
                {item.number}
              </h2>
              <p className="leading-relaxed font-bold text-black mt-4">
                {item.title}
              </p>
              <p className="leading-relaxed text-black text-sm w-3/4 mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
