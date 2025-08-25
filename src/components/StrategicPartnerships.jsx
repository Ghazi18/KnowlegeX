import { useTranslation } from "react-i18next";
import kingFaisalUni from "../assets/kingFaisalUni.svg";
import sultanUni from "../assets/sultanUni.svg";
import indusrty from "../assets/indusrty.svg";

export default function StrategicPartnerships() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const logos = [
    { src: kingFaisalUni, alt: "King Faisal University" },
    { src: sultanUni, alt: "Prince Sultan University" },
    { src: indusrty, alt: "Ministry of Industry and Mineral Resources" },
    { src: indusrty, alt: "Ministry of Industry and Mineral Resources" },
    { src: sultanUni, alt: "Prince Sultan University" },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-10 md:px-16 dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        background:
          "linear-gradient(to top, #FFF8F1 0%, white 30%, #FFF8F1 60%, white 100%)",
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
        {t("partnerships.title")}
        {i18n.language !== "ar" && (
          <>
            :{" "}
            <span className="text-[#071C2F]">{t("partnerships.subtitle")}</span>
          </>
        )}
      </h2>

      {/* شريط سريع وسلس خصوصًا على الجوال */}
      <div
        className={`marquee-wrapper ${isRTL ? "rtl-marquee" : "ltr-marquee"}`}
      >
        <div className="marquee-track flex items-center">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="marquee-segment flex items-center">
              {logos.map((logo, idx) => {
                const eager = dup === 0 && idx < 3; // حمّل أول ثلاث شعارات بسرعة لتفادي التقطيع
                return (
                  <div key={`${dup}-${idx}`} className="logo-cell">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="logo-img /* dark:invert */"
                      decoding="async"
                      loading={eager ? "eager" : "lazy"}
                      fetchpriority={eager ? "high" : "low"}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* افتراضات الجوال */
        .marquee-wrapper {
          --marquee-gap: 1rem;
          --logo-h: 2.5rem;          /* ~40px */
          --speed: 16s;              /* أسرع على الجوال */
          width: 100%;
          overflow: hidden;
          position: relative;

          /* أداء أفضل بعزل التخطيط والرسم */
          contain: layout paint size style;
        }

        @media (min-width: 640px) {
          .marquee-wrapper {
            --marquee-gap: 1.5rem;
            --logo-h: 3.25rem;       /* ~52px */
            --speed: 22s;            /* أبطأ قليلًا على التابلت */
          }
        }
        @media (min-width: 1024px) {
          .marquee-wrapper {
            --marquee-gap: 3rem;
            --logo-h: 4.5rem;        /* ~72px */
            --speed: 28s;            /* أبطأ للراحة على الديسكتوب */
          }
        }

        .marquee-track {
          width: max-content;
          gap: var(--marquee-gap);

          /* استخدم GPU + hint للمحرّك */
          will-change: transform;
          animation: marquee-left var(--speed) linear infinite;
        }
        .rtl-marquee .marquee-track {
          animation-name: marquee-right;
        }

        .marquee-segment {
          gap: var(--marquee-gap);
        }

        .logo-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-inline: calc(var(--marquee-gap) / 2);
          flex-shrink: 0;
        }

        .logo-img {
          height: var(--logo-h);
          width: auto;
          object-fit: contain;
          pointer-events: none;       /* يمنع طبقات تفاعلية غير لازمة */
          image-rendering: -webkit-optimize-contrast;
        }

        /* حركة مستمرة */
        @keyframes marquee-left {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        @keyframes marquee-right {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(50%,0,0); }
        }

        /* تقليل الحركة عند الطلب */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
