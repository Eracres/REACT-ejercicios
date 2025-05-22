// EditorPage.jsx
import { useParams } from "react-router-dom";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";

export default function EditorPage() {
  const { moduloId, tipo, archivo } = useParams();
  const [codigo, setCodigo] = useState("// Cargando código...");

  useEffect(() => {
    fetch(`/data/${moduloId}/${archivo}.js`)
      .then(res => res.text())
      .then(setCodigo);
  }, [moduloId, archivo]);

  return (
    <div>
      <h2>{archivo} ({tipo})</h2>
      <Sandpack
        template="react"
        files={{
          "/App.js": {
            code: codigo,
            active: true,
          },
        }}
        options={{
          showLineNumbers: true,
          showTabs: true,
          editorHeight: 500,
        }}
      />
    </div>
  );
}
