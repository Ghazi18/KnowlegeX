import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Page from "./components/layout/Page";
import Home from "./pages/Home";
import Impact from "./pages/Impact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Impact">
            <Route index element={<Impact />} />
            <Route path="/Impact/:id" element={<ProjectPage />} />
          </Route>
          

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
