import React, { useState } from 'react';
const Formulario =()=> {
    //Para alamacenar los valores vacios por eso el set para luego cambiar su valor
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [mensaje, setMensaje] = useState('');

  const EnvioFinalizado=(e)=>{
    e.preventDefault();
    //Mostrar mensaje de agradecimiento
    setMensaje(`Gracias, ${nombre}, por registrar tus comentarios ¡Te contactaremos pronto!`);
    // Esto va a limpiar los campos del formularo cuando se envie el formulario con el boton Enviar Datos
    setNombre('');
    setCorreo('');
    setComentarios('');
  };
  return (
    <div>
      <h1>Formulario/h1>
      <form onSubmit={EnvioFinalizado4}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre: "
            required
          />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingrese su correo: "
            required
          />
        </div>
        <div>
          <label htmlFor="comentarios">Comentarios: </label>
          <textarea
            id="comentarios"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            placeholder="Añade un comentario: "
            required
          />
        </div>
        <button type="submit">Enviar Datos</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};
export default Formulario;

