import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route index path="/" element={<Home />} />

            <Route path="/Impact">
              <Route index element={<Impact />} />
              <Route path="/Impact/:id" element={<ProjectPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
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
