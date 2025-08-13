import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function GradientSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const desc = t("gradientSection.desc");
  const words = typeof desc === "string" ? desc.split(" ") : [];
  const hasTargetWord = words.length >= 2;

  return (
    <section
      className="w-full mt-24 py-16 bg-gradient-to-r from-[#071C2F] to-[#165995] text-white text-center px-4 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          {t("gradientSection.title")}
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed">
          {hasTargetWord ? (
            <>
              {words.map((w, i) => {
                // العربية: الكلمة الثانية، الإنجليزية: الكلمة الأولى
                const isTarget = isRTL ? i === 1 : i === 0;

                if (isTarget) {
                  return (
                    <span key={i} className="relative inline-block">
                      {w}
                      <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 pointer-events-none"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1.25, ease: "easeInOut" }}
                          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                          stroke="#FACC15"
                          strokeWidth="3"
                        />
                      </svg>
                      {" "}
                    </span>
                  );
                }

                return (
                  <span key={i}>
                    {w}
                    {i !== words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </>
          ) : (
            desc
          )}
        </p>
      </div>
    </section>
  );
}
