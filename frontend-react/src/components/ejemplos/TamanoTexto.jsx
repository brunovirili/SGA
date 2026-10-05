import { useState } from "react";

function Tamano() {
  const [tamano, setTamano] = useState("24px");

  return (
    <div>
      <p style={{ fontSize: tamano }}>
        Bienvenidos a Programación IV
      </p>

      <button onClick={() => setTamano("10px")}>
        Pequeño
      </button>

      <button onClick={() => setTamano("20px")}>
        Mediano
      </button>

      <button onClick={() => setTamano("30px")}>
        Grande
      </button>
    </div>
  );
}

export default Tamano;
