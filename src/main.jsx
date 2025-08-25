import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";

(function () {
  // structuredClone بديل بسيط (لا يدعم الدوال أو الكائنات الدائرية)
  if (typeof window.structuredClone !== "function") {
    window.structuredClone = function (obj) {
      return JSON.parse(JSON.stringify(obj));
    };
  }

  // URL.canParse بديل
  if (!("canParse" in URL)) {
    URL.canParse = function (input, base) {
      try {
        new URL(input, base);
        return true;
      } catch (e) {
        return false;
      }
    };
  }
})();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
