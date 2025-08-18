// components/FadeInWrapper.jsx
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    // بعض المتصفحات لا تدعم addEventListener لـ MediaQueryList
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return isTouch;
}

export default function FadeInWrapper({ children, delay = 0.1 }) {
  const reduce = useReducedMotion();
  const isTouch = useIsTouch();

  // حركات خفيفة فقط (opacity + translateY)
  const initial = useMemo(() => ({ opacity: 0, y: 8 }), []);
  const visible = useMemo(() => ({ opacity: 1, y: 0 }), []);

  return (
    <LazyMotion features={domAnimation}>
      {/* على الشاشات اللمسية أو لو المستخدم يفضّل تقليل الحركة:
          لا تستعمل whileInView (السبب الرئيسي للتجمّد).
          اعمل أنيميشن بسيط مرة واحدة عند التركيب. */}
      {reduce || isTouch ? (
        <m.div
          initial={initial}
          animate={visible}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          style={{ transform: "translateZ(0)" }}
        >
          {children}
        </m.div>
      ) : (
        <m.div
          initial={initial}
          whileInView={visible}
          viewport={{
            once: true,
            amount: 0.12,        // أقل حساسية = مراقبين أقل
            margin: "0px 0px -5% 0px", // تجنّب قيم سالبة كبيرة على iOS
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }}
          style={{ transform: "translateZ(0)" }}
        >
          {children}
        </m.div>
      )}
    </LazyMotion>
  );
}
