
const ejemplo = {
  titulo: "Ejemplo 1: Hola Mundo",
  descripcion: "Crea un componente que muestre un saludo en un <h1> con el texto 'Hola, mundo desde React'.",
  codigo: `function HolaMundo() {
  return <h1>¡Hola, mundo desde React!</h1>;
}

<HolaMundo />`,
  validar: (code) =>
    /function\s+HolaMundo/.test(code) &&
    /<h1>.*Hola.*<\/h1>/.test(code)
};

export default ejemplo;
