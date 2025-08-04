import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071C2F] text-white">
      <div className="max-w-7xl mx-auto ">
        {/* القسم الأول */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-[#071C2F] flex items-center justify-center text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Stay Connected</h4>
              <p className="text-sm text-gray-300">Subscribe to our newsletter for latest updates</p>
            </div>
          </div>
          <button className="bg-[#EA8316] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
            Let's get in touch
          </button>
        </div>

        {/* خط فاصل */}
        <hr className="border-gray-500 border-opacity-20" />

        {/* القسم الثاني */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
          <img src="/src/assets/lOGO.svg" alt="Logo" className="h-8" />

          <div className="flex gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <span>+966 555 555 555</span>
            </div>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="border-gray-500 border-opacity-20" />

        {/* القسم الثالث */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400 gap-4">
          <p>  Copyright © 2025 KnowledgeX. All rights reserved.</p>
          <div className="flex gap-4 text-white text-lg">
            <a href="#"><FaTwitter className="hover:text-[#EA8316]" /></a>
            <a href="#"><FaLinkedin className="hover:text-[#EA8316]" /></a>
            <a href="#"><FaInstagram className="hover:text-[#EA8316]" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
