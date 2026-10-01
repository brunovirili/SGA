import { useState } from "react";

function CambiarTitulo() {
    const [titulo, setTitulo] = useState("Inicio")

    return (
        <>
        <h2>{titulo}</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "15px"}}>
            <button onClick={() => setTitulo("Alumnos")} style={{width:"90px", height:"30px", fontSize:"15px"}}> Alumnos </button>
            <button onClick={() => setTitulo("Docentes")} style={{width:"90px", height:"30px", fontSize:"15px"}}> Docentes</button>
        </div>
        </>
    )
}

export default CambiarTitulo