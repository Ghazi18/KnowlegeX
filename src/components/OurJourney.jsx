import { useTranslation } from "react-i18next";

// نفس تنسيق Steps تمامًا، لكن متوافق مع وضعك الحالي:
// - مصدر البيانات: milestones (بدلاً من steps)
// - ألوان داكنة وخلفية #071C2F ونص أبيض
// - الدائرة الرمادية تحتوي صورة أصغر (logo)
// - الشارة تعرض التاريخ أو t("step") بدل item.id
// - يدعم RTL/LTR ويستخدم نفس الهيكل/الكلاسات من Steps

export default function OurJourney({ milestones = [], customTitle }) {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  return (
    <section
      dir={direction}
      id="journey"
      className={`body-font mb-10  ${isArabic ? "font-plex-arabic" : ""} relative py-20 px-6 sm:px-12 md:px-20 lg:px-32  overflow-hidden`}
    >
      {/* العنوان والوصف بنفس تنسيق Steps لكن بألوان مناسبة للخلفية الداكنة */}
      <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-black ">
        {customTitle || (i18n.language === "ar" ? "قصة رحلتنا" : "The Story of Our Journey")}
          </h1>
          {/* <p className="lg:w-2/3 max-w-xl mx-auto leading-relaxed text-base text-gray-200 px-2">
            {t("steps_apply_description")}
          </p> */}
      </div>

      {/* الجسم بنفس هيكل Steps */}
      <div className="container px-5 mx-auto flex flex-col">
        {milestones.map((item, index) => (
            <div key={index} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              {/* عمود مركزي يحتضن الخط */}
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200/40 pointer-events-none"></div>
              </div>

              {/* شارة التاريخ بدل رقم الخطوة (مع نفس فكرة العنصر في Steps) */}
              <div
                style={{ background: "#EA8316" }}
                className="flex-shrink-0 h-8 px-4 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center text-white relative z-10 title-font font-medium text-sm whitespace-nowrap"
              >
                {item?.date || t("step")}
              </div>

              {/* صف المحتوى بنفس محاذاة Steps مع مراعاة RTL */}
              <div
                className={`flex-grow flex sm:items-center items-start flex-col sm:flex-row ${
                  isArabic ? "md:pr-8 pr-6" : "md:pl-8 pl-6"
                }`}
              >
                {/* الدائرة الرمادية مع صورة أصغر بداخلها */}
                <div
                  className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-full inline-flex items-center justify-center overflow-hidden"
                  style={{ color: "#801800" }}
                >
                  {item?.logo ? (
                    <img src={item.logo} alt="logo" className="w-16 h-16 object-contain" />
                  ) : (
                    // احتياطيًا لو مافي أيقونة/صورة
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d={item?.icon || "M12 5v14M5 12h14"}></path>
                    </svg>
                  )}
                </div>

                {/* النصوص */}
                <div className={`flex-grow ${isArabic ? "sm:pr-6" : "sm:pl-6"} mt-6 sm:mt-0`}>
                  <h2 className="font-medium title-font text-black mb-1 text-xl">
                    {item?.titleKey ? t(item.titleKey) : item?.title}
                  </h2>
                  <p className="leading-relaxed text-gray-600">
                    {item?.descriptionKey ? t(item.descriptionKey) : item?.description}
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
