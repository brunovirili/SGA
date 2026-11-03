const Materia = require("../models/Materia") 

function validarDatos(body) {
    const { codigo, nombre, descripcion, cargaHoraria, estado } = body

    if (!codigo || !nombre || !cargaHoraria || !estado) {
        return "Todos los campos son obligatorios"
    }

    if (typeof codigo !== "string" || codigo.trim() === "") {
        return "El código debe ser un texto"
    }

    if (typeof nombre !== "string" || nombre.trim().length < 3) {
        return "El nombre debe tener al menos 3 caracteres"
    }

    if (descripcion !== undefined && descripcion !== "") {
        if (typeof descripcion !== "string" || descripcion.trim() === "") {
            return "La descripción no puede contener solo espacios"
        }
    }

    if (typeof cargaHoraria !== "number") {
        return "La carga horaria debe ser un número"
    }

    if (cargaHoraria % 1 !== 0 || cargaHoraria <= 0) {
    return "La carga horaria debe ser un número entero mayor que cero"
}

    if (estado !== "activa" && estado !== "inactiva") {
        return "El estado solo puede ser activa o inactiva"
    }

    return null
}

async function obtenerMaterias(req, res) { 
    try {
        const materias = await Materia.find()
        res.json(materias) 
    } catch (error) {
        console.error("Error al obtener materias: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
}

async function obtenerMateria(req, res) {
    try {
        const materia = await Materia.findOne({ 
            codigo: req.params.codigo.trim()
        }) 
        if (!materia) { 
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json(materia) 
    } catch (error) {
        console.error("Error al obtener materia: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
}

async function crearMateria(req, res) {
    try {
        const error = validarDatos(req.body)
        if (error) {
            return res.status(400).json({
                mensaje: error
            })
        }
        const { codigo, nombre, descripcion, cargaHoraria, estado } = req.body 

        const existe = await Materia.findOne({ 
            codigo: codigo.trim()
        })
        if (existe) { 
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        const nuevaMateria = await Materia.create({ 
            codigo,
            nombre,
            descripcion,
            cargaHoraria,
            estado
        })
        res.status(201).json(nuevaMateria) 
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        console.error("Error al crear materia: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
}

async function actualizarMateria(req, res) {
    try {
        const error = validarDatos(req.body)
        if (error) {
            return res.status(400).json({
                mensaje: error
            })
        }
        const { codigo, nombre, descripcion, cargaHoraria, estado } = req.body
        const codigoActual = req.params.codigo.trim()
        const codigoNuevo = codigo.trim()

        if (codigoNuevo !== codigoActual) {
            const existe = await Materia.findOne({
                codigo: codigoNuevo
            })
            if (existe) {
                return res.status(400).json({
                    mensaje: "El código ya existe"
                })
            }
        }
        const materia = await Materia.findOneAndUpdate( 
            { codigo: codigoActual }, 
            { codigo: codigoNuevo, nombre, descripcion, cargaHoraria, estado }, 
            { returnDocument: "after" } 
        )
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json(materia)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        console.error("Error al actualizar materia: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
}

async function eliminarMateria(req, res) {
    try {
        const materia = await Materia.findOneAndDelete( 
            { codigo: req.params.codigo.trim() } 
        )
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json({ mensaje: "Materia eliminada correctamente" })
    } catch (error) {
        console.error("Error al eliminar materia: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
}

module.exports = {
    obtenerMaterias,
    obtenerMateria,
    crearMateria,
    actualizarMateria,
    eliminarMateria
}