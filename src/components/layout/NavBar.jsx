import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/KXogo.svg";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRTL = i18n.language === "ar";

  const toggleLang = () => {
    const newLang = isRTL ? "en" : "ar";
    i18n.changeLanguage(newLang);
    // لا تغيّر document.dir هنا؛ صار مضبوط في DirProvider
  };

  

  return (
    <>
      <header className="bg-white shadow">
        <div
          className={`
            mx-auto max-w-[2000px] h-16 px-4 sm:px-6 lg:px-16 overflow-x-hidden
            flex items-center justify-between
            ${isRTL ? "flex-row-reverse" : "flex-row"}
          `}
        >
          {/* Logo */}
          <a className="block" href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav
            className={`
              hidden md:flex items-center gap-12 text-sm font-medium
              ${isRTL ? "flex-row-reverse" : "flex-row"}
            `}
          >
            <a className="text-black hover:text-gray-500/75" href="/">{t("navbar.home")}</a>
            <a className="text-black hover:text-gray-500/75" href="#why">{t("navbar.why")}</a>
            <a className="text-black hover:text-gray-500/75" href="#journey">{t("navbar.journey")}</a>
            <a className="text-black hover:text-gray-500/75" href="#programs">{t("navbar.programs")}</a>
            <a className="text-black hover:text-gray-500/75" href="#products">{t("navbar.products")}</a>
            <a className="text-black hover:text-gray-500/75" href="/Impact">{t("navbar.impact")}</a>
          </nav>

          {/* Buttons */}
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
            <button onClick={toggleLang} className="text-sm text-black">
              {t("navbar.lang")}
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-[#EA8316] text-white px-5 py-2.5 text-sm rounded-md"
            >
              {t("navbar.join")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-2xl text-gray-700"
              aria-label="Open menu"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
            onClick={() => setIsMenuOpen(false)} // إغلاق بالضغط على الخلفية
          >
            <div
              className={`
                absolute top-0 h-full w-3/4 sm:w-1/2 bg-white p-6 shadow-lg
                flex flex-col gap-6
                ${isRTL ? "right-0 rounded-l-xl" : "left-0 rounded-r-xl"}
              `}
              onClick={(e) => e.stopPropagation()} // لا يغلق عند الضغط داخل اللوحة
            >
              <div className={`flex items-center mb-4 ${isRTL ? "flex-row-reverse" : "flex-row"} justify-between`}>
                <img src="/KXogo.svg" alt="Logo" className="h-10" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-600"
                  aria-label="Close menu"
                >
                  <AiOutlineClose />
                </button>
              </div>

              <nav className={`flex flex-col gap-4 text-base font-medium ${isRTL ? "text-right" : "text-left"}`}>
                <a href="/" onClick={() => setIsMenuOpen(false)}>{t("navbar.home")}</a>
                <hr className="opacity-30" />
                <a href="#why" onClick={() => setIsMenuOpen(false)}>{t("navbar.why")}</a>
                <hr className="opacity-30" />
                <a href="#journey" onClick={() => setIsMenuOpen(false)}>{t("navbar.journey")}</a>
                <hr className="opacity-30" />
                <a href="#programs" onClick={() => setIsMenuOpen(false)}>{t("navbar.programs")}</a>
                <hr className="opacity-30" />
                <a href="#products" onClick={() => setIsMenuOpen(false)}>{t("navbar.products")}</a>
                <hr className="opacity-30" />
                <a href="/Impact" onClick={() => setIsMenuOpen(false)}>{t("navbar.impact")}</a>
                <hr className="opacity-30" />
              </nav>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="mt-auto bg-[#EA8316] hover:bg-orange-400 transition text-white px-5 py-2.5 text-sm rounded-md"
              >
                {t("navbar.join")}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
