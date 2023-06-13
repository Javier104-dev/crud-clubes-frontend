import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clubes from "./Clubes";
import { VerClub } from "./VerClub";
import { AgregarClub } from "./AgregarClub";
import { EditarClub } from "./EditarClub";

function App() {
  return (
    <section>
      <Router>
      <header>
        Clubes
      </header>
          <Routes>
            <Route exact path="/" element={<Clubes/>}/>
            <Route exact path="/equipo/agregar" element={<AgregarClub/>}/>
            <Route exact path="/equipo/:id/ver" element={<VerClub/>}/>
            <Route exact path="/equipo/:id/editar" element={<EditarClub/>}/>
          </Routes>
      </Router>
    </section>
  );
}

export default App;
