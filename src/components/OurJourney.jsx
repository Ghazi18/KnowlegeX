import { useTranslation } from "react-i18next";
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import journeyImage from "/iSteps-02.jpg";

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
    <div className="flex relative pt-10 pb-20 sm:items-center w-full mx-auto">
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
  );
});

export default function OurJourney({
  milestones = [],
  customTitle,
  sideImage: sideImageProp,
  sideImageAlt: sideImageAltProp,
  sideImageWebp: sideImageWebpProp,
  sideImageAvif: sideImageAvifProp,
}) {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  // قراءة من الترجمة
  const journey = t("ourJourney", { returnObjects: true }) || {};
  const items =
    (Array.isArray(milestones) && milestones.length ? milestones : journey.items) || [];

  // الصور
  const fallbackTestImage = journeyImage;
  const sideImage = sideImageProp || journey.sideImage || fallbackTestImage;
  const sideImageAlt = sideImageAltProp || journey.sideImageAlt || "";

  const sideImageWebp = sideImageWebpProp || journey.sideImageWebp || null;
  const sideImageAvif = sideImageAvifProp || journey.sideImageAvif || null;

  // حالات التحكم بالأداء
  const [imgLoaded, setImgLoaded] = useState(false);
  const [allowHeavy, setAllowHeavy] = useState(false); // لتركيب العناصر الثقيلة
  const [revealAll, setRevealAll] = useState(false);   // لإظهار بقية عناصر التايملاين

  // نفعّل التركيب الثقيل عند ظهور القسم أو عند خمول المعالج
  const { ref: sectionRef, inView } = useInViewport<HTMLDivElement>("150px");

  useEffect(() => {
    if (inView) setAllowHeavy(true);
  }, [inView]);

  useEffect(() => {
    const id = ric(() => setAllowHeavy((v) => v || true));
    return () => {
      // @ts-ignore
      (window.cancelIdleCallback || window.clearTimeout)?.(id);
    };
  }, []);

  // إظهار عدد بسيط أولًا لتسريع Time To Interactive
  const INITIAL_COUNT = 3;
  const initialItems = useMemo(() => items.slice(0, INITIAL_COUNT), [items]);
  const restItems = useMemo(() => items.slice(INITIAL_COUNT), [items]);

  // بعد أول إطار هادئ، اكشف الباقي تدريجيًا بدون قفزة في الـ main thread
  useEffect(() => {
    if (!allowHeavy || restItems.length === 0) return;
    const id = ric(() => setRevealAll(true));
    return () => {
      // @ts-ignore
      (window.cancelIdleCallback || window.clearTimeout)?.(id);
    };
  }, [allowHeavy, restItems.length]);

  // أحجام الصورة للاستجابة
  const sizes = useMemo(() => "(min-width: 1024px) 50vw, 100vw", []);

  const onImgDone = useCallback(() => setImgLoaded(true), []);

  return (
    <section
      ref={sectionRef}
      dir={direction}
      id="journey"
      className={`body-font mb-10 ${isArabic ? "font-plex-arabic" : ""} relative py-20 px-4 sm:px-10 md:px-16 overflow-hidden`}
      // منع رسم ما هو خارج الشاشة (يحافظ على الشكل ويقلّل كلفة التخطيط/الطلاء)
      style={{
        contentVisibility: "auto" ,
        containIntrinsicSize: "1200px", // يمنع القفزات ويحتفظ بمكان القسم
      }}
    >
      {/* العنوان */}
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-black">
          {customTitle || journey.title || (isArabic ? "قصة رحلتنا" : "The Story of Our Journey")}
        </h1>
      </div>

      {/* عمودان: الشكل + الصورة */}
      <div
        className={`w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch
        lg:flex ${isArabic ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
      {/* عمود الصورة */}
<div
  className={`${isArabic ? "lg:order-1" : "lg:order-2"} relative rounded-2xl bg-gray-200 overflow-hidden w-full lg:w-1/2
  aspect-square lg:aspect-auto`}
>
  {/* Placeholder شيمر */}
  <div
    className={`absolute inset-0 ${imgLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300 pointer-events-none`}
    aria-hidden="true"
  >
    <div className="w-full h-full animate-pulse bg-gray-200" />
  </div>

  <picture>
    {sideImageAvif ? <source srcSet={sideImageAvif} type="image/avif" /> : null}
    {sideImageWebp ? <source srcSet={sideImageWebp} type="image/webp" /> : null}
    <img
      src={sideImage}
      alt={sideImageAlt}
      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 
        ${imgLoaded ? "opacity-100" : "opacity-0"} lg:min-h-[300px]`}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      sizes="(min-width: 1024px) 50vw, 100vw"
      onLoad={onImgDone}
      onError={onImgDone}
    />
  </picture>
</div>



        {/* عمود التايملاين (نفس الشكل) */}
        <div
          className={`${isArabic ? "lg:order-2" : "lg:order-1"} container mx-auto flex flex-col w-full lg:w-1/2`}
          // نفس الفكرة: لا ترسِم ما هو خارج الشاشة
          style={{
            contentVisibility: "auto" ,
            containIntrinsicSize: "800px",
          }}
        >
          {/* مجموعة أولى خفيفة جدًا */}
          {initialItems.map((item, index) => (
            <TimelineItem key={`initial-${index}`} item={item} isArabic={isArabic} t={t} />
          ))}

          {/* باقي العناصر — تُركَّب فقط بعد inView/idle */}
          {allowHeavy && (revealAll ? (
            restItems.map((item, index) => (
              <TimelineItem key={`rest-${index}`} item={item} isArabic={isArabic} t={t} />
            ))
          ) : (
            // Placeholder بسيط لنفس المسافات قبل الكشف
            restItems.map((_, i) => (
              <div key={`ph-${i}`} className="flex relative pt-10 pb-20 w-full mx-auto">
                <div className="h-full w-6 absolute inset-5 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200/40 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 h-8 w-24 rounded-full mt-10 bg-gray-200 animate-pulse" />
                <div className={`flex-grow flex items-start flex-col sm:flex-row ${
                  isArabic ? "md:pr-8 pr-6" : "md:pl-8 pl-6"
                }`}>
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-full animate-pulse" />
                  <div className={`flex-grow ${isArabic ? "sm:pr-6" : "sm:pl-6"} mt-6 sm:mt-0`}>
                    <div className="h-6 w-40 bg-gray-200 rounded mb-3 animate-pulse" />
                    <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}
