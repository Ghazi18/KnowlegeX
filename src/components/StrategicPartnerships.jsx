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
      className="py-16 px-4 sm:px-10 md:px-16 bg-white dark:bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
        {t("partnerships.title")}
        {i18n.language !== "ar" && (
          <>
            : <span className="text-[#071C2F]">{t("partnerships.subtitle")}</span>
          </>
        )}
      </h2>

      {/* شريط أخبار يعمل على الجوال والكمبيوتر */}
      <div className={`marquee-wrapper ${isRTL ? "rtl-marquee" : "ltr-marquee"}`}>
        <div className="marquee-track flex items-center">
          {/* نكرر المحتوى مرتين لعمل حلقة مستمرة */}
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="marquee-segment flex items-center">
              {logos.map((logo, idx) => (
                <div key={`${dup}-${idx}`} className="logo-cell">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img dark:invert mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CSS الخاص بالماركيه — سريع وخفيف ومتكيف مع المقاسات */}
      <style>{`
        /* متغيرات افتراضية (موبايل) */
        .marquee-wrapper {
          --marquee-gap: 1.25rem;       /* المسافة بين الشعارات */
          --logo-h: 2.75rem;            /* ارتفاع الشعارات للموبايل ~44px */
          --speed: 24s;                 /* سرعة أبطأ على الجوال */
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* تكبير بسيط على الشاشات الأكبر */
        @media (min-width: 640px) {
          .marquee-wrapper {
            --marquee-gap: 2rem;
            --logo-h: 3.5rem;           /* ~56px */
            --speed: 24s;
          }
        }
        @media (min-width: 1024px) {
          .marquee-wrapper {
            --marquee-gap: 4rem;
            --logo-h: 5rem;             /* ~80px */
            --speed: 28s;               /* أبطأ قليلاً لراحة النظر */
          }
        }

        .marquee-track {
          width: max-content;
          gap: var(--marquee-gap);
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
        }

        /* الحلقة المستمرة: نسحب بالضبط 50% لأننا مكررين المحتوى مرتين */
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        /* احترام تفضيل تقليل الحركة */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
