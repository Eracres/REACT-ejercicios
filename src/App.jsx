// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import Modulo from "./pages/Modulo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/modulo/:moduloId" element={<Modulo />} />
        <Route path="/editor/:moduloId/:tipo/:archivo" element={<EditorPage />} />
        <Route path="/" element={<p>Selecciona un módulo</p>} />
      </Routes>
    </Router>
  );
}

export default App;
