import { HashRouter, Routes, Route, Link } from "react-router-dom";

import StyledPage from "./pages/StyledPage";
import EmotionPage from "./pages/EmotionPage";
import LinariaPage from "./pages/LinariaPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2>Pilih Demo CSS-in-JS</h2>

              <Link to="/styled">
                <button>Styled Components</button>
              </Link>
              <br />
              <br />

              <Link to="/emotion">
                <button>Emotion</button>
              </Link>
              <br />
              <br />

              <Link to="/linaria">
                <button>Linaria</button>
              </Link>
            </div>
          }
        />

        <Route path="/styled" element={<StyledPage />} />
        <Route path="/emotion" element={<EmotionPage />} />
        <Route path="/linaria" element={<LinariaPage />} />
      </Routes>
    </HashRouter>
  );
}
