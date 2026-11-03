import Alumnos from "./pages/Alumnos"
import {FAQ} from "./pages/FAQ"
import {Routes, Route} from "react-router-dom"
import LayoutPpal from "./layouts/LayoutPpal"
import Inicio from "./pages/Inicio"
import Docentes from "./pages/Docentes"
<<<<<<< HEAD
import Materias from "./pages/Materias"
=======
>>>>>>> origin/main


function App()
{

return (
   <Routes>
    <Route path="/" element={<LayoutPpal />}>
    <Route index element={<Inicio />} />
    <Route path="alumnos" element={<Alumnos />} />
    <Route path="docentes" element={<Docentes /> } />
<<<<<<< HEAD
    <Route path="materias" element={<Materias />} />
=======
>>>>>>> origin/main
    <Route path="ayuda" element={<FAQ />} />
    </Route>
  </Routes>
  )
}
export default App