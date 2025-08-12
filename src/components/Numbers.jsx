import { useTranslation } from "react-i18next";

export default function Numbers() {
  const { t, i18n } = useTranslation();
  const items = t("numbers.items", { returnObjects: true }) || [];
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="text-gray-600 body-font px-4 sm:px-10 md:px-16 bg-[#071C2F]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="py-20 mx-auto max-w-8xl">
        {/* العنوان في المنتصف */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          أرقامنا
        </h2>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="kx-card">
              <div className="kx-box">
                {/* الرقم */}
                <span className="kx-title">{item.number}</span>

                {/* النصوص */}
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .kx-card {
          color: white;
          position: relative;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* دائرة متوهجة خلف الرقم بالضبط */
        .kx-card::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 6rem;
          height: 6rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -130%); /* أعلى قليلاً من منتصف البطاقة بحيث تكون خلف الرقم */
          background-color: rgba(234, 131, 22, 0.6);
          box-shadow: 
            0 0 25px rgba(234, 131, 22, 1),
            0 0 50px rgba(234, 131, 22, 0.9),
            0 0 80px rgba(234, 131, 22, 0.8);
          z-index: 0;
          pointer-events: none;
        }

        /* إزالة أي خط */
        .kx-card::after { content: none; }

        .kx-box {
          width: 11.875em;
          height: 15.875em;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.074);
          border: 1px solid rgba(255, 255, 255, 0.222);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          border-radius: 0.7rem;
          transition: all ease 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .kx-box:hover {
          box-shadow: 0px 0px 20px 1px #ffbb763f;
          border: 1px solid rgba(255, 255, 255, 0.454);
        }

        .kx-title {
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          line-height: 1;
          text-align: center;
        }

        .kx-box div strong {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-align: center;
        }

        .kx-box div p {
          margin: 0;
          font-size: 0.9em;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.95);
          text-align: center;
        }

        @media (min-width: 640px) {
          .kx-box { width: 12.5em; height: 16.5em; }
        }
        @media (min-width: 1024px) {
          .kx-box { width: 13.25em; height: 17.25em; }
        }
      `}</style>
    </section>
  );
}
