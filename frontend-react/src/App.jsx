import Titulo from "./components/Titulo"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import TarjetaAlumno from "./components/TarjetaAlumnos"

function App() 
{
  return (
    <>
    <Navbar />
    <Titulo texto="Sistema de Gestión Académica" color="blue"/>
    <h2>Administración de alumnos</h2>
    <TarjetaAlumno nombre="Bruno Virili" carrera="Programación" correo ="bruno@mail.com"/>
    <TarjetaAlumno nombre="Bruno Virili" carrera="Programación" correo ="bruno@mail.com"/>
    <Footer />
    </>
  )
}

export default App