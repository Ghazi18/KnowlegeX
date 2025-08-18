import Navbar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Page({ children }) {
  useEffect(() => {
    // يتأكد أن الـ body ما فيه كلاس يقفل التمرير
    document.body.classList.remove("overflow-hidden", "fixed");
  }, []);
  return (
    <div
      className="
        flex flex-col
        min-h-[100svh]      
        overflow-x-clip     
        bg-white text-gray-900
        font-imb
        relative
      "
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          flex-1            /* بدل flex-grow: مساحة التمرير الرئيسية */
          min-h-0           /* مهم داخل flex لمنع قفل سكّرة داخلي */
          w-full
        "
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
