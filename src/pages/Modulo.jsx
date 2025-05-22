import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Modulo() {
  const { moduloId } = useParams();
  const [modulo, setModulo] = useState(null);

  useEffect(() => {
    fetch("/data/modulos.json")
      .then(res => res.json())
      .then(data => {
        const encontrado = data.modulos.find(m => m.id === moduloId);
        setModulo(encontrado);
      });
  }, [moduloId]);

  if (!modulo) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{modulo.nombre}</h1>
      <h2>🧪 Ejemplos</h2>
      <ul>
        {modulo.ejemplos.map(ej => (
          <li key={ej}>
            <Link to={`/editor/${moduloId}/ejemplo/${ej}`}>{ej}</Link>
          </li>
        ))}
      </ul>
      <h2>📋 Ejercicios</h2>
      <ul>
        {modulo.ejercicios.map(ej => (
          <li key={ej}>
            <Link to={`/editor/${moduloId}/ejercicio/${ej}`}>{ej}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
