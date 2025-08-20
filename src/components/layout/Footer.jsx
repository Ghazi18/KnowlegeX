import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/logof.svg";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-[#071C2F] text-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full mx-auto px-4 sm:px-10 md:px-16">
        {/* القسم الأول */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-[#071C2F] flex items-center justify-center text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{t("footer.connect")}</h4>
              <p className="text-sm text-gray-300">{t("footer.subscribe")}</p>
            </div>
          </div>
          <a
            href="mailto:Info@knowledgex.sa"
            className="bg-[#EA8316] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition inline-block"
          >
            {t("footer.cta")}
          </a>
        </div> */}

        <hr className="border-gray-500 border-opacity-20" />

        {/* القسم الثاني */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
          <img src={logo} alt="Logo" className="h-8" />
          <div className="flex gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>knowledgex@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <span dir="ltr">+966 550859798</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 border-opacity-20" />

        {/* القسم الثالث */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400 gap-4">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4 text-white text-lg">
            <a href="#">
              <FaTwitter className="hover:text-[#EA8316]" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-[#EA8316]" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-[#EA8316]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
