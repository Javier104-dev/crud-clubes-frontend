import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Clubes from "./Clubes";
import { VerClub } from "./VerClub";
import { AgregarClub } from "./AgregarClub";
import { EditarClub } from "./EditarClub";
import "./App.css"
import "./style.css"

const App = ({estilo}) => {
  return (
    <section className="container">
      <Router>
        <header className="cubles__titulo">
          <NavLink className="cubles__titulo__texto" to="/">Clubes Crud con React</NavLink>
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
