import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import bgBanner from "../../assets/heroKF.png";

function AnimatedNumber({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 16ms ~ 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function ImpactBanner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center  overflow-hidden"
      style={{
        backgroundImage: `url(${bgBanner})`,
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* تغطية شفافة */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* المحتوى */}
      <div className="relative z-10 w-full px-4 sm:px-10 md:px-16 py-12 max-w-8xl mx-auto">
        <div
          className={`max-w-2xl ${
            isRTL ? "text-right" : "text-left"
          } px-2 sm:px-0`}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-md leading-snug">
            {t("impactBanner.title")}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white leading-relaxed drop-shadow-sm">
            {t("impactBanner.description")}
          </p>
        </div>

        {/* الأرقام الإحصائية */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          {/* الاستثمار */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold">
              <AnimatedNumber target={1} duration={400} />M+
            </p>
            <p className="mt-2 text-sm">{t("impactBanner.stats.investments")}</p>
          </div>

          {/* TRL */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold">
              <AnimatedNumber target={80} duration={2000} />%
            </p>
            <p className="mt-2 text-sm">{t("impactBanner.stats.trl")}</p>
          </div>

          {/* BRL */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold">
              <AnimatedNumber target={150} duration={2000} />%
            </p>
            <p className="mt-2 text-sm">{t("impactBanner.stats.brl")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
