import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "The Vision",
    description: "It all started with a bold vision to bridge research with real-world innovation.",
    date: "2018",
    color: "bg-blue-600",
  },
  {
    title: "The Foundation",
    description: "We established the Salla Center, laying down the foundation for innovation.",
    date: "2019",
    color: "bg-indigo-600",
  },
  {
    title: "The Seed",
    description: "First research projects launched, sparking curiosity and potential.",
    date: "2020",
    color: "bg-purple-600",
  },
  {
    title: "Real Impact",
    description: "Research was transformed into tools like the Sales Forecasting Engine.",
    date: "2020",
    color: "bg-amber-600",
  },
  {
    title: "AI Emerges",
    description: "We launched an AI assistant to amplify digital experiences.",
    date: "2021",
    color: "bg-green-600",
  },
  {
    title: "Accelerating Startups",
    description: "A startup incubator was introduced to scale research into companies.",
    date: "2021",
    color: "bg-rose-600",
  },
  {
    title: "Spinning Off",
    description: "Knowledgex was launched as our first major spinout.",
    date: "2022",
    color: "bg-teal-600",
  },
  {
    title: "KoFactor Begins",
    description: "Pre-accelerator KoFactor kicks off, igniting early-stage innovation.",
    date: "2022",
    color: "bg-red-600",
  },
  {
    title: "Products Released",
    description: "Innovation-backed tools reached the hands of change-makers.",
    date: "2023",
    color: "bg-yellow-600",
  },
  {
    title: "Science Hub",
    description: "A platform built to invest in research with sustainable models.",
    date: "2024",
    color: "bg-sky-600",
  },
  {
    title: "Global Vision",
    description: "Our impact expands beyond borders with SpinSight and KORE.",
    date: "2025",
    color: "bg-orange-600",
  },
];

export default function OurJourney() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 sm:px-12 md:px-20 lg:px-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        {i18n.language === "ar" ? "قصة رحلتنا" : "The Story of Our Journey"}
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-32 z-10 relative">
          {milestones.map((item, idx) => {
            const alignLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center justify-center w-full`}
              >
                {/* Connector Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
                  <div className={`w-8 h-8 rounded-full border-4 ${item.color} border-solid bg-white dark:bg-gray-900`}></div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center`}
                >
                  <div className="flex flex-col gap-2 items-center">
                    <span className={`text-sm font-bold ${item.color} text-white px-3 py-1 rounded-full`}>{item.date}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
