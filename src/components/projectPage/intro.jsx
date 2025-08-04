import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden px-4 sm:px-10 md:px-16"
    >
      {/* الخلفية الملونة 70% من الطول */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-[#071C2F] z-0" />

      <div className="relative z-10 max-w-8xl mx-auto ">
        {/* النص */}
        <div
          className={`text-white dark:text-gray-800 text-left ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t("intro.title", "Discover Our Vision")}
          </h2>

          <p className="text-white dark:text-gray-700 text-sm sm:text-base leading-relaxed w-full mb-8">
            {t(
              "intro.description",
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ligula nec 
              sapien sagittis tincidunt. Sed euismod nunc id ultrices varius. Quisque volutpat 
              erat eget lorem accumsan, et bibendum eros eleifend. Aenean laoreet ultrices est, 
              nec sagittis justo ullamcorper nec. Proin eu ex sed felis faucibus aliquet sit amet 
              nec tellus. Nullam finibus elit sed tellus ornare feugiat. Vivamus id quam vitae ex 
              vulputate rutrum. Phasellus luctus enim at justo commodo, a dignissim ligula rutrum. 
              Mauris et tristique nisi. Vestibulum id ipsum sit amet diam congue congue orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ligula nec 
              sapien sagittis tincidunt. Sed euismod nunc id ultrices varius. Quisque volutpat 
              erat eget lorem accumsan, et bibendum eros eleifend. Aenean laoreet ultrices est, 
              nec sagittis justo ullamcorper nec. Proin eu ex sed felis faucibus aliquet sit amet 
              nec tellus. Nullam finibus elit sed tellus ornare feugiat. Vivamus id quam vitae ex 
              vulputate rutrum. Phasellus luctus enim at justo commodo, a digniorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ligula nec 
              sapien sagittis tincidunt. Sed euismod nunc id ultrices varius. Quisque volutpat 
              erat eget lorem accumsan, et bibendum eros eleifend. Aenean laoreet ultrices est, 
              nec sagittis justo ullamcorper nec. Proin eu ex sed felis faucibus aliquet sit amet 
              nec tellus. Nullam finibus elit sed tellus ornare feugiat. Vivamus id quam vitae ex 
              vulputate rutrum. Phasellus luctus enim at justo commodo, a digni.`
            )}
          </p>
        </div>

        {/* الصورة */}
        <div className="w-full h-64 sm:h-80 md:h-96">
          <img
            src="/src/assets/whatKF.png"
            alt="Intro"
            className="w-full h-full object-cover shadow-lg rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
