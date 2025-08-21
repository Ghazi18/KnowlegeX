import { useTranslation } from "react-i18next";
import amplifaiHealth from "../assets/AmplifaiHealth.png";
import aIden from "../assets/AIden.svg";


export default function InvestmentPortfolio() {
   const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
  
  return (
    <section
     style={{
        background: "linear-gradient(to bottom, #FFF8F1 0%, white 30%, #FFF8F1 60%, white 100%)"
      }}
       className="py-16 px-4 sm:px-10 md:px-16  dark:bg-gray-900 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
        {t("InvestmentPortfolio.title")}
        <br />
        <span className="bg-[#071C2F] text-white px-3  rounded-md ml-2 text-xl sm:text-2xl ">
          {t("InvestmentPortfolio.subtitle")}
        </span>
      </h2>

      {/* الخط مع المعينتين */}
      <div className="relative mt-6 mb-12 max-w-7xl mx-auto">
        <div className="h-1 bg-[#071C2F] w-full relative">
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#071C2F] rotate-45"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#071C2F] rotate-45"></div>
        </div>
      </div>

      {/* البطاقات */}
     <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full mx-auto ">
        <div className="bg-[#FDEAD9] border-b-4 border-[#EA8316] rounded-md shadow-md flex items-center justify-center px-10 py-8 w-full ">
          <img
            src={amplifaiHealth}
            alt="Amplifai Health"
            className="h-24 w-auto mr-6"
          />
          <div className="text-[#071C2F] font-bold text-3xl leading-tight">
            Amplifai <br /> Health
          </div>
        </div>

        <div className="bg-[#FDEAD9] border-b-4 border-[#EA8316] rounded-md shadow-md flex items-center justify-center px-10 py-8 w-full ">
          <img
            src={aIden}
            alt="AiDEN"
            className="h-24 w-auto mr-6"
          />
          <div className="text-[#071C2F] font-bold text-3xl leading-tight">
            AiDEN
          </div>
        </div>
      </div>
    </section>
  );
}
