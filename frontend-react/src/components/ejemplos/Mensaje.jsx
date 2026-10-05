import { useState } from "react";

function Mensaje() {
  const [mensaje, setMensaje] = useState("Hola, alumno");

  const cambiarMensaje = () => {
    setMensaje("¡Bienvenidos a Programación IV!");
  };

  return (
    <div>
      <h2>{mensaje}</h2>

      <button onClick={cambiarMensaje}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default Mensaje;