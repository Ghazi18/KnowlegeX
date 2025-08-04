import { useTranslation } from "react-i18next";

export default function Objectives() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="text-gray-800 body-font bg-transparent mt-10 "
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="bg-gray-100 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-10 md:px-16 ">
          <div className={`mb-10 ${isRTL ? "text-right" : "text-left"} w-full`}>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("objectives.title", "Our Key Objectives")}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-0 ">
            {[
              { value: "2.7K", label: "Downloads" },
              { value: "2.7K", label: "Clients" },
              { value: "2.7K", label: "Sessions" },
              { value: "1.3K", label: "Users" },
              { value: "74", label: "Files" },
              { value: "46", label: "Places" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4"
              >
                <div className="bg-white rounded-lg px-4 py-6 shadow-md h-full text-center">
                  <svg
                    className="w-10 h-10 mb-3 mx-auto text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {t(`objectives.${item.label.toLowerCase()}`, item.label)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
