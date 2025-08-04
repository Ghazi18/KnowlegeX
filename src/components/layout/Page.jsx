import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen font-imb bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
