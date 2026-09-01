const express = require("express")
const app = express()
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)

let alumnos = [
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

// Creo Middleware

app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()
})




app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})