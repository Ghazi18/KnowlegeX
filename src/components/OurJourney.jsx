import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


export default function OurJourney({ milestones, customTitle }) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
<section
id="journey"
  className="relative py-20 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#071C2F] overflow-hidden"
  // style={{
  //   background: "#000000",
  //   "--gap": "5em",
  //   "--line": "1px",
  //   "--color": "rgba(255, 255, 255, 0.2)",
  //   backgroundImage: `
  //     linear-gradient(
  //       -90deg,
  //       transparent calc(var(--gap) - var(--line)),
  //       var(--color) calc(var(--gap) - var(--line) + 1px),
  //       var(--color) var(--gap)
  //     ),
  //     linear-gradient(
  //       0deg,
  //       transparent calc(var(--gap) - var(--line)),
  //       var(--color) calc(var(--gap) - var(--line) + 1px),
  //       var(--color) var(--gap)
  //     )
  //   `,
  //   backgroundSize: "var(--gap) var(--gap)",
  // }}
>

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white ">
        {customTitle || (i18n.language === "ar" ? "قصة رحلتنا" : "The Story of Our Journey")}
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-32 z-10 relative">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center w-full"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
                <div className={`w-8 h-8 rounded-full border-4 ${item.color} border-solid bg-white dark:bg-gray-900`} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex flex-col gap-2 items-center">
                  <span className={`text-sm font-bold ${item.color} text-white px-3 py-1 rounded-full`}>
                    {item.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="logo"
                      className="w-16 h-16 mt-4 object-contain"
                    />
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
