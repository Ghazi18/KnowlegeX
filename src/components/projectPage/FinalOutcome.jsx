import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
import img1 from "../../assets/outcome.png";

export default function FinalOutcome() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const boxes = [
    { title: t("finalOutcome.step1", "Ideation"), image: img1 },
    { title: t("finalOutcome.step2", "Execution"), image: img1 },
    { title: t("finalOutcome.step3", "Impact"), image: img1 },
  ];

  return (
 <section
  className="py-16 px-4 sm:px-10 md:px-16   overflow-hidden"
  dir={isRTL ? "rtl" : "ltr"}
>
  {/* العنوان */}
  <h2
    className={`text-3xl sm:text-4xl font-bold mb-12 text-gray-800  ${
      isRTL ? "text-right" : "text-left"
    }`}
  >
    {t("finalOutcome.title", "Final Outcome")}
  </h2>

  {/* الحاوية */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
    {boxes.map((box, index) => (
      <div key={index} className="flex flex-col lg:flex-row items-center gap-6 w-full">
        
        {/* البطاقة */}
        <div
          className="
            relative 
            w-[90%] md:w-[80%] lg:w-full   /* الديسكتوب بعرض الحاوية */
            h-[18rem] md:h-[22rem] lg:h-[26rem] 
            rounded-lg overflow-hidden shadow-lg
            mx-auto lg:mx-0
          "
        >
          <img
            src={box.image}
            alt={box.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-900/10" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4 leading-snug">
              {box.title}
            </h3>
          </div>
        </div>

        {/* الأسهم */}
        {index < boxes.length - 1 && (
          <>
            {/* سهم للجوال + تابلت */}
            <div className="flex lg:hidden items-center justify-center my-4">
              <FaArrowDown className="text-[#EA8316]" size={28} />
            </div>

            {/* سهم للديسكتوب */}
            <div className="hidden lg:flex items-center justify-center">
              {isRTL ? (
                <FaArrowLeft className="text-[#EA8316]" size={28} />
              ) : (
                <FaArrowRight className="text-[#EA8316]" size={28} />
              )}
            </div>
          </>
        )}
      </div>
    ))}
  </div>
</section>

  );
}
