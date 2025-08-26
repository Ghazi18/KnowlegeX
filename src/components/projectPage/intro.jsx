import { useTranslation } from "react-i18next";

export default function Intro({ title, description, image,link }) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden px-4 sm:px-10 md:px-16 bg-[#FFF8F1] "
    >
      <div className="absolute top-0 left-0 w-full h-[70%] bg-[#071C2F] z-0" />

      <div className="relative z-10 max-w-8xl mx-auto">
        <div className={`text-white :t ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {title}
             <a href={link} target="_blank" className="text-white  text-3xl mx-2 w-full  whitespace-pre-line">
            🧷
          </a>
          </h2>

          <p className="text-white  text-sm sm:text-base leading-relaxed w-full mb-8 whitespace-pre-line">
            {description}

            
          </p>

          
        </div>

        <div className="w-full h-64 sm:h-80 md:h-96">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover shadow-lg rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
