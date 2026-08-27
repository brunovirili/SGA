const express = require("express")
const app = express()

const alumnos = [
    {
        id: 1,
        nombre: "Ana",
        carrera: "Programación"
    },
    {
        id: 2,
        nombre: "José",
        carrera: "Sistemas"
    },
    {
        id: 3,
        nombre: "Carlos",
        carrera: "Base de datos"
    }
]

app.get("/alumnos", (req, res) => {
    res.json(alumnos)
})

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})