import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import Modulo from "./pages/Modulo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Selecciona un módulo</p>} />
        <Route path="/modulo/:moduloId" element={<Modulo />} />
        <Route path="/editor/:moduloId/:tipo/:archivo" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}
