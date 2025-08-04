import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-gray-100 lg:grid lg:h-4/5 lg:place-content-center dark:bg-gray-900 bg-cover px-4 sm:px-10 md:px-16"
      style={{ backgroundImage: "url('/src/assets/bgBanner.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-0" />
      <div className="relative z-10 mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white  mb-8">
            {t("banner.heading")}
          </h1>
          <p className="mt-4 text-base text-gray-200 sm:text-lg">
            {t("banner.desc")}
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-[#EA8316] bg-[#EA8316] px-5 py-3 font-medium text-white"
              href="#"
            >
              {t("banner.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
