import { useTranslation } from "react-i18next";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

const ric = (cb) => {
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(cb, { timeout: 1200 });
  }
  return window.setTimeout(cb, 200);
};

function useInViewport(rootMargin = "200px") {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}

const TimelineItem = React.memo(function TimelineItem({ item, isArabic, t }) {
  return (
    <div className="flex relative py-10 sm:py-12 md:py-16 sm:items-center w-full mx-auto">
      {/* عمود مركزي يحتضن الخط */}
      <div className="h-full w-6 absolute inset-5 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200/40 pointer-events-none"></div>
      </div>

      {/* شارة التاريخ */}
      <div
        style={{ background: "#EA8316" }}
        className="flex-shrink-0 h-8 px-4 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center text-white relative z-10 title-font font-medium text-sm whitespace-nowrap"
      >
        {item?.date || t("step")}
      </div>

      {/* المحتوى مع مراعاة RTL/LTR */}
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
            <img
              src={item.logo}
              alt="logo"
              className="w-16 h-16 object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : item?.icon ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d={item.icon}></path>
            </svg>
          ) : null}
        </div>

        {/* النصوص */}
        <div
          className={`flex-grow ${
            isArabic ? "sm:pr-6" : "sm:pl-6"
          } mt-6 sm:mt-0`}
        >
          <h2 className="font-medium title-font text-black mb-1 text-xl">
            {item?.titleKey ? t(item.titleKey) : item?.title}
          </h2>
          <p className="leading-relaxed text-gray-600">
            {item?.descriptionKey ? t(item.descriptionKey) : item?.description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default function OurJourney({ milestones = [], customTitle }) {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  const journey = t("ourJourney", { returnObjects: true }) || {};
  const items =
    (Array.isArray(milestones) && milestones.length
      ? milestones
      : journey.items) || [];

  const [allowHeavy, setAllowHeavy] = useState(false);
  const [revealAll, setRevealAll] = useState(false);
  const { ref: sectionRef, inView } = useInViewport("150px");

  useEffect(() => {
    if (inView) setAllowHeavy(true);
  }, [inView]);

  useEffect(() => {
    const id = ric(() => setAllowHeavy((v) => v || true));
    return () => {
      (window.cancelIdleCallback || window.clearTimeout)?.(id);
    };
  }, []);

  const INITIAL_COUNT = 3;
  const initialItems = useMemo(() => items.slice(0, INITIAL_COUNT), [items]);
  const restItems = useMemo(() => items.slice(INITIAL_COUNT), [items]);

  useEffect(() => {
    if (!allowHeavy || restItems.length === 0) return;
    const id = ric(() => setRevealAll(true));
    return () => {
      (window.cancelIdleCallback || window.clearTimeout)?.(id);
    };
  }, [allowHeavy, restItems.length]);

  return (
    <section
      ref={sectionRef}
      dir={direction}
      id="journey"
      className={`body-font mb-10 ${
        isArabic ? "font-plex-arabic" : ""
      } relative py-20 px-4 sm:px-10 md:px-16`}
    >
      {/* العنوان */}
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-black">
          {customTitle ||
            journey.title ||
            (isArabic ? "قصة رحلتنا" : "The Story of Our Journey")}
        </h1>
      </div>

      {/* التايملاين في المنتصف */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {initialItems.map((item, index) => (
          <TimelineItem
            key={`initial-${index}`}
            item={item}
            isArabic={isArabic}
            t={t}
          />
        ))}

        {allowHeavy &&
          (revealAll
            ? restItems.map((item, index) => (
                <TimelineItem
                  key={`rest-${index}`}
                  item={item}
                  isArabic={isArabic}
                  t={t}
                />
              ))
            : restItems.map((_, i) => (
                <div
                  key={`ph-${i}`}
                  className="flex relative pt-10 pb-20 w-full mx-auto"
                >
                  <div className="h-full w-6 absolute inset-5 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200/40 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 h-8 w-24 rounded-full mt-10 bg-gray-200 animate-pulse" />
                  <div
                    className={`flex-grow flex items-start flex-col sm:flex-row ${
                      isArabic ? "md:pr-8 pr-6" : "md:pl-8 pl-6"
                    }`}
                  >
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-full animate-pulse" />
                    <div
                      className={`flex-grow ${
                        isArabic ? "sm:pr-6" : "sm:pl-6"
                      } mt-6 sm:mt-0`}
                    >
                      <div className="h-6 w-40 bg-gray-200 rounded mb-3 animate-pulse" />
                      <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              )))}
      </div>
    </section>
  );
}
