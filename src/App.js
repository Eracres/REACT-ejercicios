
import React, { useState } from "react";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";

const scope = {};

const defaultCode = `
function HolaMundo() {
  return <h1>Hola desde React</h1>;
}

<HolaMundo />
`;

export default function App() {
  const [code, setCode] = useState(defaultCode);
  const [isCorrect, setIsCorrect] = useState(null);

  const validateCode = () => {
    try {
      const functionExists = /function\s+HolaMundo\s*\(/.test(code);
      const returnsHola = /<h1>.*Hola.*<\/h1>/.test(code);
      if (functionExists && returnsHola) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } catch (e) {
      setIsCorrect(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ejercicio 1: Hola Mundo</h1>
      <p className="mb-4">
        Escribe un componente llamado <code>HolaMundo</code> que devuelva un
        encabezado &lt;h1&gt; con el texto "Hola desde React".
      </p>

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
            className={\`mt-4 p-4 rounded text-white \${isCorrect ? "bg-green-500" : "bg-red-500"}\`}
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
