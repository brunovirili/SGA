import { ListaMaterias } from "../components/ListaMaterias"
import { useState } from "react"
import { Alert } from "@mui/material"
import FormularioMateria from "../components/FormularioMateria"

export default function Materias() {
const [actualizar, setActualizar] = useState(0)
const [materiaEditar, setMateriaEditar] = useState(null)
const [mensaje, setMensaje] = useState("")

function materiaCreada(texto) {
  setActualizar(valor => valor + 1)
  setMateriaEditar(null)
  setMensaje(texto)
  setTimeout(() => {
    setMensaje("")
  }, 3000)
}

function seleccionarMateria(materia) {
  setMateriaEditar(materia)
}

return (
   <>
   {mensaje && (
     <Alert severity="success" role="status" sx={{ mb: 3 }}>
       {mensaje}
     </Alert>
   )}
   <FormularioMateria key={materiaEditar?.codigo ?? "nuevo"}
   onMateriaCreada={materiaCreada}
   materiaEditar={materiaEditar}
   onCancelar={() => setMateriaEditar(null)}
   />
   <ListaMaterias 
   actualizar={actualizar} 
   onMateriaCreada={materiaCreada}
   onEditarMateria={seleccionarMateria} 
   /> 
  </>
  )
}