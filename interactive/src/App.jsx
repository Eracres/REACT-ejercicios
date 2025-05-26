import { Sandpack } from "@codesandbox/sandpack-react";
import "./App.css";

const ejercicios = [
  {
    titulo: "Ejemplo 1: Tarjeta",
    descripcion: "Este componente muestra una estructura simple con título y párrafo.",
    codigo: `function Tarjeta() {
  return (
    <div>
      <h3>React es genial 😎</h3>
      <p>Este es un componente funcional</p>
    </div>
  );
}

export default function App() {
  return <Tarjeta />;
}`
  },
  {
    titulo: "Ejercicio 1: PerfilUsuario",
    descripcion: "Crea un componente PerfilUsuario con un título y un párrafo. Úsalo dentro de App.",
    codigo: `// Escribe aquí tu solución

export default function App() {
  return (
    <div>
      {/* Aquí debería ir tu componente */}
    </div>
  );
}`
  }
];

export default function App() {
  return (
    <div className="contenedor">
      <h1>React Interactivo</h1>
      {ejercicios.map((ej, idx) => (
        <div key={idx} className="ejercicio">
          <h2>{ej.titulo}</h2>
          <p>{ej.descripcion}</p>
          <Sandpack
            template="react"
            files={{ "/App.js": ej.codigo }}
            options={{
              showTabs: true,
              showLineNumbers: true,
              editorHeight: 400,
              resizablePanels: true
            }}
          />
        </div>
      ))}
    </div>
  );
}
