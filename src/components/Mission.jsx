import { FaRocket, FaChartBar, FaUsers, FaCogs } from "react-icons/fa";

export default function Mission() {
  return (
    <section className="w-full px-4 sm:px-10 md:px-16 py-14 bg-gray-50 dark:bg-gray-900">
      {/* العنوان */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Our Mission 
      </h2>

      {/* الشبكة */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <FaRocket className="text-gray-600 text-3xl" />,
            title: "",
            desc: "Deploy your app quickly.\nNo complex setup required.",
            color: "border-[#071C2F]",
          },
          {
            icon: <FaChartBar className="text-gray-600 text-3xl" />,
            title: "",
            desc: "Gain deep insights.\nTrack performance easily.",
            color: "border-[#071C2F]",
          },
          {
            icon: <FaUsers className="text-gray-600 text-3xl" />,
            title: "",
            desc: "Organize your team.\nControl access levels.",
            color: "border-[#071C2F]",
          },
          {
            icon: <FaCogs className="text-gray-600 text-3xl" />,
            title: "",
            desc: "Make it yours.\nEasy to modify components.",
            color: "border-[#071C2F]",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-4"
          >
            {/* المربع العلوي */}
            <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-[#071C2F]  dark:bg-gray-800 z-10">
              {feature.icon}
            </div>

            {/* السهم ملاصق */}
            <div className="absolute top-24 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#071C2F] z-0" />

            {/* المستطيل السفلي */}
            <div
              className={`mt-4 w-full bg-white dark:bg-gray-800 rounded-md shadow border-t-4 ${feature.color} p-4 text-center min-h-[80px] flex flex-col justify-center`}
            >
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
