
import React, { useState, useEffect } from "react";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";
import ejercicios from "./ejercicios";

const scope = {};

function App() {
  const [data, setData] = useState(null);
  const [code, setCode] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const modulo = params.get("modulo");
    const tipo = params.get("tipo");
    const id = params.get("id");
    const key = `${modulo}-${tipo}-${id}`;
    const ejercicio = ejercicios[key];
    if (ejercicio) {
      setData(ejercicio);
      setCode(ejercicio.codigo);
    }
  }, []);

  const validateCode = () => {
    try {
      const resultado = data.validar(code);
      setIsCorrect(resultado);
    } catch (e) {
      setIsCorrect(false);
    }
  };

  if (!data) return <div className="p-6">Cargando ejercicio...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data.titulo}</h1>
      <p className="mb-4 whitespace-pre-line">{data.descripcion}</p>

      <LiveProvider code={code} scope={scope} noInline>
        <div className="mb-4">
          <LiveEditor
            onChange={(newCode) => setCode(newCode)}
            className="border rounded p-2 mb-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={validateCode}
          >
            Validar
          </button>
        </div>

        <h2 className="text-xl font-semibold">Vista previa:</h2>
        <div className="border p-4 mb-4 bg-gray-50">
          <LivePreview />
        </div>

        <LiveError className="text-red-500" />

        {isCorrect !== null && (
          <div
            className={"mt-4 p-4 rounded text-white " + (isCorrect ? "bg-green-500" : "bg-red-500")}
          >
            {isCorrect
              ? "✅ ¡Correcto! El componente es válido."
              : "❌ Hay un error. Asegúrate de definir HolaMundo correctamente con un <h1>."}
          </div>
        )}
      </LiveProvider>
    </div>
  );
}

export default App;
