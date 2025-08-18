import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/KXogo.svg";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <header className="bg-white shadow">
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="mx-auto max-w-[2000px]  flex h-16  items-center justify-between px-4 sm:px-6 lg:px-16 overflow-x-hidden"
        >
          {/* Logo */}
          <a className="block text-teal-600" href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium">
            <a className="text-black hover:text-gray-500/75" href="/">
              {t("navbar.home")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#why">
              {t("navbar.why")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#journey">
              {t("navbar.journey")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#programs">
              {t("navbar.programs")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#products">
              {t("navbar.products")}
            </a>

            <a className="text-black hover:text-gray-500/75" href="/Impact">
              {t("navbar.impact")}
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="text-sm text-black">
              {t("navbar.lang")}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-[#EA8316] text-white px-5 py-2.5 text-sm rounded-md cursor-pointer"
            >
              {t("navbar.join")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-2xl text-gray-700"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start md:hidden">
            <div className="w-3/4 sm:w-1/2 bg-white h-full p-6 flex flex-col gap-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <img src="/KXogo.svg" alt="Logo" className="h-10" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-600"
                >
                  <AiOutlineClose />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-base font-medium">
                <a href="/" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.home")}
                </a>
                <hr className="opacity-30" />
                <a href="#why" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.why")}
                </a>
                <hr className="opacity-30" />
                <a href="#journey" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.journey")}
                </a>
                <hr className="opacity-30" />
                <a href="#programs" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.programs")}
                </a>
                <hr className="opacity-30" />
                <a href="#products" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.products")}
                </a>
                <hr className="opacity-30" />
                <a href="/Impact" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.impact")}
                </a>
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

      {/* Join Community Modal */}
    </>
  );
}
