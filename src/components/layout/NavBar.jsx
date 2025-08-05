import { useTranslation } from "react-i18next";
import { useState } from "react";
import JoinCommunityModal from "../JoinCommunityModal";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-16">
          {/* Logo */}
          <a className="block text-teal-600" href="/">
            <img src="/src/assets/KXogo.svg" alt="Logo" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium">
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.about")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.careers")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.history")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.services")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.projects")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="#">
              {t("navbar.blog")}
            </a>
            <a className="text-black hover:text-gray-500/75" href="/Impact">
              Impact
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
                <img src="/src/assets/KXogo.svg" alt="Logo" className="h-10" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-600"
                >
                  <AiOutlineClose />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-base font-medium">
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.about")}
                </a>
                <hr className="opacity-30" />
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.careers")}
                </a>
                <hr className="opacity-30" />
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.history")}
                </a>
                <hr className="opacity-30" />
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.services")}
                </a>
                <hr className="opacity-30" />
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.projects")}
                </a>
                <hr className="opacity-30" />
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.blog")}
                </a>
                <hr className="opacity-30" />
              </nav>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="mt-auto bg-[#EA8316] text-white px-5 py-2.5 text-sm rounded-md"
              >
                {t("navbar.join")}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Join Community Modal */}
      <JoinCommunityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
