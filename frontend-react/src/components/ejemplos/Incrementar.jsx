import { useState } from "react"

function Incrementar(){
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)

    function incremento(){
        setContador(contador + 1)
    }
    function decremento(){
        setContador(contador - 1)
    }

    return (
        <>
        <h1>Contador: {contador}</h1>
        <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
        <button onClick={incremento} style={{width:"50px", height:"40px", fontSize:"20px"}}>+</button> 
        <button onClick={decremento} style={{width:"50px", height:"40px", fontSize:"20px"}}>-</button>
        </div>
        <br />
        <button onClick={() => setMostrar(!mostrar)}>Mostrar</button>
        {mostrar && <p>Información</p>}
        </>
    )
}

export default Incrementar