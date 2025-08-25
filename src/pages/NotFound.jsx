import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-[#EA8316] mb-4">404</h1>
      <p className="text-xl mb-6">الصفحة غير موجودة</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-400 transition"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
