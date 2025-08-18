// components/FadeInWrapper.jsx
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export default function FadeInWrapper({ children, delay = 0.1 }) {
  const reduce = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.18,
          margin: "0px 0px -20% 0px", // يقلل الاستدعاءات وقت السحب
        }}
        transition={{ duration: reduce ? 0.2 : 0.4, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
