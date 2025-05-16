const ejercicios = {
    "1-ejemplo-1": {
      tipo: "ejemplo",
      titulo: "Ejemplo básico 1",
      descripcion: `
  Puedes crear HolaMundo directamente dentro del archivo App.js, o mejor aún, en su propio archivo para seguir buenas prácticas.
  
  Tenemos 2 maneras de hacerlo:
  
  🔹 Opción A – Dentro de App.js:
  
  \`\`\`jsx
  import React from 'react';
  
  function HolaMundo() {
    return <h1>¡Hola, mundo desde React!</h1>;
  }
  
  function App() {
    return (
      <div>
        <HolaMundo />
      </div>
    );
  }
  
  export default App;
  \`\`\`
  
  🔹 Opción B – En su propio archivo:
  
  // src/HolaMundo.js
  \`\`\`jsx
  import React from 'react';
  
  function HolaMundo() {
    return <h1>¡Hola, mundo desde React!</h1>;
  }
  
  export default HolaMundo;
  \`\`\`
  
  // src/App.js
  \`\`\`jsx
  import React from 'react';
  import HolaMundo from './HolaMundo';
  
  function App() {
    return (
      <div>
        <HolaMundo />
      </div>
    );
  }
  
  export default App;
  \`\`\`
  
  Esto sería un componente muy básico en React.
      `,
      codigo: `function HolaMundo() {
    return <h1>¡Hola, mundo desde React!</h1>;
  }
  
  <HolaMundo />`,
      validar: (code) =>
        /function\\s+HolaMundo/.test(code) &&
        /<h1>.*Hola.*<\/h1>/.test(code)
    }
  };
  