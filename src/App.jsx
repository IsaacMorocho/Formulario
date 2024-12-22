import React from 'react';
import './index.css';
import datosPersonales from './Componentes/datosPersonales';
import Estudios from './Componentes/Estudios';
import Herramientas from './Componentes/Herramientas';
import Deportes from './Componentes/Deportes';
import Formulario from './Componentes/Formulario';
function App() {
  return (
    <div style={{backgroundColor: '#7091c4',padding:'25px'}}>
      <h1>PROYECTO VITE + REACT</h1>
      <datosPersonales/>
      <Estudios/>
      <Herramientas/>
      <Deportes/>
      <Formulario/>

    </div>
  );
}

export default App
