import Navbar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Page({ children }) {
  useEffect(() => {
    // يتأكد أن الـ body ما فيه كلاس يقفل التمرير
    document.body.classList.remove("overflow-hidden", "fixed");
  }, []);
  return (
    <div className="flex flex-col min-h-[100svh] w-full overflow-x-clip">
  <Navbar/>
  <main className="flex-1 min-h-0 w-full overflow-visible">{children}</main>
  <Footer/>
</div>

  );
}
