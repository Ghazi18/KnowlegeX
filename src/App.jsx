import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// ⚠️ أزلنا: import { AnimatePresence, motion } from "framer-motion";

import Page from "./components/layout/Page";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppInner() {
  const location = useLocation();

  return (
    <Page>
      {/* الأنيميشن معطّل: نعرض الراوتس مباشرة */}
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/impact/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
