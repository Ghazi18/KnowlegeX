import { useTranslation } from "react-i18next";

export default function JoinCommunityModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-lg p-6 relative"
      >
        {/* إغلاق */}
        <button
          onClick={onClose}
          className="absolute top-3 end-3 text-gray-600 hover:text-red-600 text-xl"
        >
          &times;
        </button>

        {/* العنوان */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {t("joinCommunity.title")}
        </h2>

        {/* الفورم */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t("joinCommunity.name")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#EA8316] bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder={t("joinCommunity.email")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#EA8316] bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            placeholder={t("joinCommunity.message")}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#EA8316] bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#EA8316] text-white py-2 rounded-md hover:bg-orange-500 transition"
          >
            {t("joinCommunity.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
