import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clubes from "./Clubes";
import { VerEquipo } from "./VerEquipo";

function App() {
  return (
    <section>
      <Router>
      <header>
        Clubes
      </header>
          <Routes>
            <Route exact path="/" element={<Clubes/>}/>
            <Route exact path="/equipo/:id/ver" element={<VerEquipo/>}/>
            <Route exact path="/equipo/:id/editar" element={<div>editar</div>}/>
            <Route exact path="/equipo/:id/borrar" element={<div>borrar</div>}/>
          </Routes>
      </Router>
    </section>
  );
}

export default App;
