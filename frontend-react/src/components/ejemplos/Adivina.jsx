import { useState } from "react";
let partidasGanadas = 0
let partidasPerdidas = 0
let partidasJugadas = 0

export function Adivina(){
    const [seleccion, setSeleccion] = useState("")
    const [resultado, setResultado] = useState("")
    

    function sortear(){
        const ganador = Math.floor(Math.random() * 10) + 1
        const elegido = Number(seleccion)
        if (seleccion === " "){
            setResultado("Ingrese un número.")
            return
        }
        if (elegido < 1 || elegido > 10){
            setResultado("Ingrese un número entre 1 y 10")
            return
        }
        if (elegido === ganador){
            setResultado("Felicidades, has elegido el número ganador")
            partidasGanadas += 1
            document.getElementById("1").style.color = "green";
        } else {
            setResultado(`Fallaste. El número era: ${ganador}.`)
            partidasPerdidas += 1
            document.getElementById("1").style.color = "red";
        }
        partidasJugadas += 1
    }
    return (
        <>
        <h2>Adiviná el número</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "15px"}}>
        <input type="number" value={seleccion} onChange={(e) => setSeleccion(e.target.value)} style={{width:"90px", height:"30px", fontSize:"15px"}}/>
        <button onClick={sortear} style={{width:"90px", height:"36px", fontSize:"15px"}}>Adivinar</button>
        </div>
        <p id="1">{resultado}</p>
        <p>Partidas ganadas: {partidasGanadas}</p>
        <p>Partidas perdidas: {partidasPerdidas}</p>
        <p>Partidas Jugadas: {partidasJugadas}</p>
        </>
    )
}

export default Adivina