/* import Titulo from "./components/Titulo"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import TarjetaAlumno from "./components/TarjetaAlumnos" */
import Incrementar from "./components/ejemplos/Incrementar"
import CambiarTitulo from "./components/ejemplos/CambiarTitulo"
import Adivina from "./components/ejemplos/Adivina"

function App() 
{
  return (
    <>
    {/* <Navbar />
    <Titulo texto="Sistema de Gestión Académica" color="blue"/>
    <h2>Administración de alumnos</h2>
    <TarjetaAlumno nombre="Bruno Virili" carrera="Programación" correo ="bruno@mail.com"/>
    <TarjetaAlumno nombre="Bruno Virili" carrera="Programación" correo ="bruno@mail.com"/> */}
    <Incrementar />
    <CambiarTitulo />
    <Adivina />
    {/* <Footer /> */}
    </>
  )
}

export default App